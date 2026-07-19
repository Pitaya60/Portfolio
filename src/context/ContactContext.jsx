import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const ContactContext = createContext(null)

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openContact = useCallback(() => setIsOpen(true), [])
  const closeContact = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, openContact, closeContact }),
    [isOpen, openContact, closeContact]
  )

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}

export function useContact() {
  const ctx = useContext(ContactContext)
  if (!ctx) throw new Error('useContact должен использоваться внутри ContactProvider')
  return ctx
}
