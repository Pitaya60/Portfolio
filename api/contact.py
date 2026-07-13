"""
Vercel Python Serverless Function.
Доступна по адресу /api/contact после деплоя.
Пример вызова с фронтенда:

fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
})

Это опциональная часть — сайт полностью статический и работает без неё.
Добавьте сюда отправку письма (например, через Resend/SendGrid API)
или запись в базу данных, когда понадобится реальная форма.
"""

import json
from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            raw = self.rfile.read(length) if length else b"{}"
            data = json.loads(raw or b"{}")

            name = (data.get("name") or "").strip()
            email = (data.get("email") or "").strip()
            message = (data.get("message") or "").strip()

            if not name or not email or not message:
                self._send(400, {"ok": False, "error": "Заполните все поля"})
                return

            # TODO: здесь отправка письма / запись в БД / вебхук в Telegram
            # Сейчас просто подтверждаем приём.
            self._send(200, {"ok": True})

        except Exception as e:
            self._send(500, {"ok": False, "error": str(e)})

    def _send(self, status, payload):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode("utf-8"))
