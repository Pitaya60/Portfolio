// English version of the case studies.
// Keep slugs, order and image paths identical to caseStudies.ru.js —
// only the copy differs.

const caseStudies = [
  // ───────────────────────── almaPLUS — Test task ─────────────────────────
  {
    slug: 'almaplus-superapp-test',
    title: 'almaPLUS — Redesigning the "My Contracts" section of a SuperApp',
    company: 'almaPLUS (Alma Telecom)',
    year: '2026',
    role: 'UX/UI Designer',
    tags: ['SuperApp', 'Telecom', 'Mobile', 'Test task'],
    coverImage: '/case-images/almaplus/cover.webp',
    summary:
      'Test task: redesigning the almaPLUS personal account — from auditing the old design and user reviews to a design system and the "My contracts/connections" screen.',
    heroSubtitle:
      'A test task for almaPLUS (Alma Telecom): full cycle — auditing the current mobile app and website, collecting patterns from Kazakhstan\'s leading super-apps, building a design system from scratch, and redesigning key screens of the personal account — menu, profile, and "My contracts/connections".',
    images: {
      cover: ['/case-images/almaplus/cover.webp'],
    },
    facts: [
      { label: 'Status', value: 'Test task — not shipped to production' },
      { label: 'Company', value: 'almaPLUS (Alma Telecom)' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Industry', value: 'Telecom / SuperApp' },
      { label: 'Platform', value: 'Mobile' },
      { label: 'Tools', value: 'Figma, ChatGPT (3D illustrations)' },
    ],
    customSections: [
      {
        type: 'note',
        text: 'A test task for almaPLUS (Alma Telecom). Never shipped to production — below is the full process, from auditing the current app to finished screens and reasoning behind each decision.',
      },
      {
        title: 'About the project',
        type: 'text',
        paragraphs: [
          'almaPLUS is the mobile app and personal account of Alma, a telecom operator, where subscribers manage internet, TV, SIM cards and almaHOME services.',
          'The task: study the current website and app design, find weak spots, collect patterns from successful super-apps, and propose an updated design for the menu, profile, and "My contracts/connections" section — with full reasoning behind every decision.',
        ],
      },
      {
        title: 'The old design — what was wrong',
        type: 'twoColumn',
        items: [
          {
            title: 'Audit findings',
            list: [
              'Header: profile and notifications placement was unclear, name and phone number took up too much space.',
              'News: stories had potential, but the visual style looked dated and out of sync with a modern interface.',
              'Banners: large promo banners overloaded the screen and distracted from core services and the plan.',
            ],
          },
          {
            title: 'Signals from users',
            list: [
              'App store reviews complained about broken functionality and slow support.',
              'No channel list in plans and no equipment rental cost shown before connecting.',
              'The support chatbot didn\'t address real issues, only sent template replies.',
            ],
          },
        ],
      },
      {
        type: 'imageText',
        imageSrc: '/case-images/almaplus/old-design.webp',
        imageLabel: 'Old design: header, news and promo banners',
        imageSize: '925×970',
        paragraphs: [
          'I compared the website design and brand guidelines with the current mobile app. The "Guest" header with a phone number ate up a lot of space, and large online-cinema and connection banners competed with the service grid for attention.',
        ],
      },
      {
        title: 'Comments from users',
        type: 'imageText',
        imageSrc: '/case-images/almaplus/comments.webp',
        imageLabel: 'App store reviews for almaPLUS',
        imageSize: '1025×700',
        paragraphs: [
          'While downloading the app, I read through user reviews — negative comments clearly showed the system\'s problems: confusing plans, a non-functional chatbot, and slow support.',
        ],
      },
      {
        title: 'SuperApp benchmarking',
        type: 'imageText',
        imageSrc: '/case-images/almaplus/benchmark.webp',
        imageLabel: 'Patterns from Kaspi, Halyk, Freedom SuperApp, eGov mobile',
        imageSize: '1600×656',
        paragraphs: [
          'I collected user-friendly patterns from Kazakhstan\'s super-apps — Kaspi, Halyk, Freedom, eGov mobile: a unified service grid, a compact card/profile block up top, a promo block no taller than one screen, and quick access to "My documents".',
        ],
      },
      {
        title: 'UserFlow before the design system',
        type: 'imageText',
        imageSrc: '/case-images/almaplus/userflow.webp',
        imageLabel: 'UserFlow: entry → contract list → detail card → payment history',
        imageSize: '1400×750',
        paragraphs: [
          'Before assembling screens into a design system, I mapped the UserFlow for "My contracts": entry point from the menu, transition to the contract list, the contract card with tabs, and payment history — including loading, empty, and error states.',
        ],
      },
      {
        title: 'Design system from scratch',
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Colors and typography',
            text: 'Built the color palette and typography per the brand book: Druk Wide Cyr for headlines, PT Root UI for body text and buttons.',
          },
          {
            title: 'Icons and plus-graphics',
            text: 'Added missing icons on top of Material Symbols and created almaPLUS\'s signature "plus-graphics" for service cards.',
          },
        ],
      },
      {
        type: 'screens',
        items: [
          { src: '/case-images/almaplus/design-system-colors.webp', label: 'Typography and color palette', size: '1600×656', caption: 'Headlines set in Druk Wide Cyr, body text and buttons in PT Root UI. Cyan (Alma Plus) and Blue as accent colors.' },
          { src: '/case-images/almaplus/icons.webp', label: 'Icons: Material Symbols + plus-graphics', size: '1600×530', caption: 'A base Material Symbols set extended with custom service icons in the brand style.' },
          { src: '/case-images/almaplus/logo-components.webp', label: 'Logo and component library', size: '1600×670', caption: 'Logo variants on different backgrounds and base components — buttons, fields, chips, checkboxes — for assembling screens.' },
        ],
      },
      {
        title: 'Menu redesign',
        type: 'text',
        paragraphs: [
          'I built a menu that\'s easier to scan and feels more energetic: removed the cluttered header with the phone number, laid services out in a single 4×2 grid, and added a dynamic promo block instead of a static banner.',
        ],
      },
      {
        type: 'screens',
        items: [
          { src: '/case-images/almaplus/menu-variants.webp', label: 'Home menu screen variants', size: '1600×793', caption: 'Three promo-block variants under the service grid: "Max internet", Face ID setup, "Best sellers" — testing which works best with the new structure.' },
        ],
      },
      {
        title: 'What became clearer in the menu',
        type: 'checklist',
        items: [
          'The user understands where they are faster.',
          'News became clearer as separate content, not part of the header.',
          'Services got a clear structure — a single grid of Internet / AlmaTV / Cable TV / Satellite TV / SIM cards / almaHOME / Plans / B2B.',
          'Visual clutter from ads was removed.',
          'Cognitive load on the home screen was reduced.',
        ],
      },
      {
        title: 'Before / After',
        type: 'compare',
        beforeSrc: '/case-images/almaplus/before-menu.webp',
        afterSrc: '/case-images/almaplus/after-menu.webp',
        changes: [
          'The "Guest + phone number" header was replaced with a compact profile and a notification bell.',
          'The news carousel was moved off the home screen into a separate section.',
          'The service grid became uniform, without a color-based visual hierarchy.',
          'Online-cinema promo banners were replaced with an active-plan card and "Best sellers".',
        ],
      },
      {
        title: 'Reasoning — "My contracts" screen',
        type: 'cards',
        columns: 2,
        items: [
          { title: 'Doesn\'t understand what they\'re paying for', text: 'The current web view shows the amount and period, but no breakdown: what\'s included in the plan, the cost of each service, and equipment rental.' },
          { title: 'Unclear why a payment failed', text: 'Payment history and errors aren\'t shown next to the contract — subscribers have to call support to find out why.' },
          { title: 'Changing a plan requires a call', text: 'No self-serve way to compare plans and see the exact cost of switching before confirming.' },
          { title: 'No access to documents', text: 'Acts and invoices for businesses/accounting are currently only available by contacting support.' },
          { title: 'Multiple contracts get confused', text: 'With several addresses/connections, there\'s no quick way to see which contract is active and which is suspended.' },
          { title: 'Payment is manual and irregular', text: 'The subscriber manually triggers payment every month, even though a more convenient alternative — autopay — exists.' },
        ],
      },
      {
        title: 'Why this structure',
        type: 'checklist',
        items: [
          'List → Contract card — general to specific: first all contracts and their status, then a specific one. This matches the model where a subscriber may have several connection addresses.',
          '"Plan / Channels / History" tabs instead of three screens — preserve context and reduce back-and-forth navigation.',
          'Changing a plan is a step-by-step sheet (plan → dates/payment), not a separate screen — it never loses the context of the original contract.',
          'Payment method and autopay live inside the plan context, not in general "Settings" — a direct continuation of "how much and how do I pay".',
          'Error and empty states are never dead ends — each one offers "Retry" or a way to reach "Support".',
        ],
      },
      {
        title: 'Where the solution departs from the current UI',
        type: 'table',
        columns: ['Now', 'Proposed — what it improves'],
        items: [
          {
            note: 'Payment period is a row of 6 buttons with amounts and no clear next step.',
            reason: 'Step-by-step plan change with a pre-calculated switch cost: fewer choices at once, and it\'s clear what will happen before confirming.',
          },
          {
            note: 'Payment method isn\'t shown anywhere explicitly.',
            reason: 'A list of saved cards plus autopay as a separate entity — transparency and trust, reducing the risk of churn to third-party banking apps.',
          },
          {
            note: 'No dedicated error state for failed data loading.',
            reason: 'Explicit error states for the contract, history and documents with "Retry" — the user never hits a dead end or calls support by default.',
          },
          {
            note: 'Documents aren\'t available in the personal account.',
            reason: 'A dedicated "Documents & invoices" screen with acts and invoices — reduces support load for routine requests.',
          },
          {
            note: 'Multiple contracts aren\'t visually distinguished by status.',
            reason: 'Explicit "Active / Suspended" status badges on the list card — finds the right contract faster when there are several connections.',
          },
        ],
      },
      {
        title: '"My contracts" screen',
        type: 'screens',
        items: [
          { src: '/case-images/almaplus/contract-tariff.webp', label: 'Contract card — "Plan" tab', size: '480×980', tall: true, caption: 'Plan composition, rented equipment and the total — a breakdown instead of a single figure.' },
          { src: '/case-images/almaplus/contract-history.webp', label: 'Contract card — "History" tab', size: '465×980', tall: true, caption: 'Monthly payment history and a quick link to "Documents & invoices".' },
          { src: '/case-images/almaplus/change-tariff-1.webp', label: 'Change plan — step 1: choose', size: '410×1050', tall: true, caption: 'The list of available plans opens as a sheet over the contract card, so context isn\'t lost.' },
          { src: '/case-images/almaplus/change-tariff-2.webp', label: 'Change plan — step 2: confirm', size: '410×1050', tall: true, caption: 'Clearly shows which plan the subscriber is switching from and to, the total, and the effective date.' },
          { src: '/case-images/almaplus/change-tariff-3.webp', label: 'Change plan — success', size: '410×1050', tall: true, caption: 'Confirmation with the newly active plan card, no navigation to a separate screen.' },
          { src: '/case-images/almaplus/documents.webp', label: '"My documents"', size: '430×740', tall: true, caption: 'Contract, completed-work acts and invoices — downloadable individually or as an archive.' },
        ],
      },
      {
        title: 'Profile instead of menu',
        type: 'imageText',
        imageSrc: '/case-images/almaplus/profile-settings.webp',
        imageLabel: 'Profile: personal data, settings, support',
        imageSize: '390×950',
        paragraphs: [
          'Instead of a "Menu" tab in the bottom navigation, I placed the profile — expanded settings so there\'s one less screen to navigate to, added a contact button for convenience, and surfaced "My requests", "My documents" and "My contracts/connections" at the top level.',
        ],
      },
      {
        title: 'Support',
        type: 'imageText',
        imageSrc: '/case-images/almaplus/support.webp',
        imageLabel: 'Support "Contacts" screen',
        imageSize: '350×650',
        paragraphs: [
          'Users complained about issues reaching support chat — I added a choice of contact method: online chat with an estimated response time, or calling an operator with working hours shown.',
        ],
      },
      {
        title: '3D illustrations via ChatGPT',
        type: 'imageText',
        imageSrc: '/case-images/almaplus/icons-3d.webp',
        imageLabel: 'A set of 3D illustrations in the brand palette',
        imageSize: '1560×590',
        paragraphs: [
          'I used ChatGPT to create dynamic 3D illustrations in the brand colors — a support agent, bonuses, documents, unboxing, and the almaPLUS logo. Illustrations like these bring empty and error states to life instead of plain text.',
        ],
      },
      {
        title: 'Outcome',
        type: 'conclusion',
        paragraphs: [
          'Over the course of this test task I went through the full cycle: auditing the current product and user reviews → market benchmarking → UserFlow → a design system built from scratch → redesigning the menu, profile, and "My contracts/connections" section → reasoning behind every decision relative to the current UI.',
          'The key result: the "My contracts" screen stopped being just a display for the amount due — the subscriber now sees a plan breakdown, payment history, can switch plans in two steps on their own, and download documents without calling support.',
          'Every decision is documented in a separate "Reasoning" file with an explicit "Now → Proposed → Why it\'s better" comparison — making it easier for a reviewer to evaluate not just the outcome, but the thinking behind it.',
        ],
      },
    ],
  },

  // ───────────────────────── qMed AI ─────────────────────────
  {
    slug: 'qmed-ai',
    title: 'qMed AI — UX/UI design for a medical AI platform',
    company: 'qMed AI',
    year: '2026',
    role: 'UX/UI Designer, Graphic Designer',
    tags: ['MedTech', 'AI', 'Web', 'Mobile'],
    coverImage: '/case-images/qmed/cover.webp',
    summary:
      'Designing interfaces and visual materials for an AI healthcare service — work at the intersection of product and graphic design.',
    heroSubtitle:
      'Designing interfaces and visual materials for an AI service in healthcare. The role sat right at the intersection of product design and graphic design.',
    images: {
      cover: ['/case-images/qmed/image-cover.webp'],
    },
    facts: [
      { label: 'Company', value: 'qBots — the company behind qMed AI' },
      { label: 'Role', value: 'UX/UI Designer, Graphic Designer' },
      { label: 'Industry', value: 'MedTech / AI' },
      { label: 'Platform', value: 'Web / Mobile' },
      { label: 'Tools', value: 'Figma, Canva, Claude, ChatGPT, Photopea, Photoshop' },
    ],
    customSections: [
      {
        title: 'About the project',
        type: 'text',
        paragraphs: [
          'qMed AI is a product built by qBots — a digital platform for managing chronic non-communicable diseases.',
        ],
      },
      {
        title: 'My role',
        type: 'twoColumn',
        items: [
          {
            title: 'UX/UI design — main focus',
            list: [
              'UX design for both mobile and desktop interfaces',
              'Improving navigation and information structure',
              'Building and maintaining the design system from scratch',
              'Preparing handoff-ready mockups for developers',
            ],
          },
          {
            title: 'Graphic design — secondary track',
            list: [
              'Advertising banners',
              'Creatives for competitions',
              'Assets for marketing campaigns',
              'Presentation materials for incubators',
            ],
          },
        ],
      },
      {
        title: 'Project scope',
        type: 'checklist',
        items: [
          'User notification module',
          'Patient support tickets and requests',
          'Competitions section: main flow and error handling',
          'Competition announcements and menu refinements',
          'Personal dashboards for nurses and district nurses',
          'Care module for patients with diabetes mellitus (DM)',
          'Care module for patients with chronic heart failure (CHF)',
          'Treatment adherence assessment based on the Morisky-Green scale',
          'Patient survey and condition assessment block',
          'Patient observation chart',
          'Printed marketing materials: business cards, brochures, announcements',
        ],
      },
      {
        title: 'UX decisions',
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Simplified navigation',
            text: 'Users can now find the sections and key information they need far more easily.',
          },
          {
            title: 'Structured information',
            text: 'Large blocks of text were broken into logical sections with a clear hierarchy.',
          },
          {
            title: 'Responsiveness',
            text: 'Interfaces were designed so that every screen renders correctly on mobile devices.',
          },
          {
            title: 'One visual language',
            text: 'Product screens and marketing materials were brought into a single consistent style.',
          },
        ],
      },
      {
        title: 'Interfaces',
        type: 'screens',
        items: [
          {
            src: '/case-images/qmed/image-nof-ticket.webp',
            label: 'Notifications and tickets (desktop)',
            size: '1400×1000',
            caption:
              'The main goal was to eliminate incomplete requests and make the process clear even for patients with no experience of similar services.',
          },
          {
            src: '/case-images/qmed/image-com.webp',
            label: 'Competitions section (desktop)',
            size: '1400×1000',
            caption:
              'I designed the Competitions section for the admin panel and the mobile app: easy competition creation, audience settings, a mobile preview, and error handling for publishing and image uploads. The interface supports RU/KZ, filtering by diagnosis and medical institution, and publication statistics.',
          },
          {
            src: '/case-images/qmed/image-sd.webp',
            label: 'DM / CHF module (mobile)',
            size: '900×1600',
            tall: true,
            caption:
              'Patient observation chart, survey block and the Morisky-Green adherence score.',
          },
          {
            src: '/case-images/qmed/image-color.webp',
            label: 'Colour palette',
            size: '1400×1000',
            caption: 'Core colours of the product.',
          },
        ],
      },
      {
        title: 'Graphic design',
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Print',
            text: 'Brochures and business cards with QR codes for Google Play and the App Store — printed materials promoting the app to patients and medical staff.',
          },
          {
            title: 'Announcements',
            text: 'A series of informational announcements for patients — offline communication in the same visual language as the app.',
          },
          { title: 'Ads', text: 'Advertising banners and assets for marketing campaigns.' },
          { title: 'Social', text: 'Creatives and posts for social media.' },
        ],
      },
      {
        type: 'screens',
        items: [
          {
            src: '/case-images/qmed/image-bro.webp',
            label: 'qMed AI brochure',
            size: '1000×1400',
            caption:
              'A printed flyer explaining what the app does, with QR codes linking to Google Play and the App Store.',
          },
          {
            src: '/case-images/qmed/image-pat.webp',
            label: 'Announcements for patients',
            size: '900×1600',
            caption: 'A series of printed announcements consistent with the app style.',
          },
        ],
      },
      {
        title: 'My contribution',
        type: 'checklist',
        items: [
          'UX/UI design',
          'Wireframes and prototypes',
          'UI design of screens',
          'Landing page structure',
          'Responsive versions',
          'Design system maintenance',
          'Marketing banners',
          'Visual assets for social media',
          'Day-to-day work with developers',
        ],
      },
      {
        title: 'Outcome',
        type: 'conclusion',
        paragraphs: [
          'The admin panel got a standalone "Contests" section: the team publishes and targets contests by clinic, diagnosis and language (RU/KZ) without involving developers.',
          'Mobile modules for patients with diabetes and CHF, plus the desktop nurse cabinets, covered the core monitoring flow — from the questionnaire and the Morisky-Green scale to the patient record — in one consistent visual language. The UI Kit built along the way (palette, component states, card patterns) is now the base new screens are assembled from.',
        ],
      },
    ],
  },

  // ───────────────────────── ProDengi — Credit rating ─────────────────────────
  {
    slug: 'prodengi-credit-rating',
    title: 'Redesign of the Credit Rating section at Prodengi.kz',
    company: 'ProDengi.kz',
    year: '2025',
    role: 'UX/UI Designer',
    tags: ['FinTech', 'Web', 'Mobile', 'Redesign'],
    coverImage: '/case-images/prodengi/Cover.webp',
    summary:
      'Reworking one of the key sections of the ProDengi.kz financial service: clearer structure, less cognitive load, a single FAQ.',
    heroSubtitle:
      'Reworking one of the key sections of the ProDengi.kz financial service to make the information clearer, improve the page structure and reduce the cognitive load on users.',
    images: {
      cover: ['/case-images/prodengi/image-cover.webp'],
    },
    facts: [
      { label: 'Company', value: 'ProDengi.kz' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Project type', value: 'FinTech' },
      { label: 'Platform', value: 'Web / Mobile' },
      { label: 'Tools', value: 'Figma' },
      { label: 'Team', value: 'Product Manager + Frontend Developer + UX/UI Designer' },
    ],
    customSections: [
      {
        title: 'About the project',
        type: 'text',
        fullWidth: true,
        paragraphs: [
          'The service lets users obtain their credit rating and full credit history.',
          'The section holds a large amount of information, explains the difference between a credit rating and a credit history, and lets users order the corresponding services.',
          'My task was to make this section more modern, clearer and easier to use.',
        ],
      },
      {
        type: 'combo',
        columns: [
          {
            title: 'The task',
            type: 'checklist',
            items: [
              'Refresh the visual style of the page',
              'Remove the outdated illustration block',
              'Rework the information blocks',
              'Add a new FAQ section',
              'Keep the product style consistent',
              'Make the page more compact and understandable',
            ],
          },
          {
            title: 'What was wrong',
            type: 'checklist',
            items: [
              'A decorative illustration took up valuable screen space',
              'Information was split across several disconnected blocks',
              'The difference between rating and history was hard to grasp',
              'Answers to common questions were scattered around the page',
            ],
          },
        ],
      },
      {
        type: 'imageText',
        imageSrc: '/case-images/prodengi/image-old.webp',
        imageLabel: 'The section before the redesign',
        imageSize: '1000×1200',
        paragraphs: [
          'This is how the section looked before the redesign: a decorative illustration occupied a large part of the screen, and information about the rating and the history was spread across several disconnected blocks.',
        ],
      },
      {
        title: 'Reworking the information blocks',
        type: 'text',
        paragraphs: [
          'The decorative illustration was replaced with three self-contained information cards. Each one explains what the service is and guides the user to the relevant action.',
        ],
      },
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: 'Credit rating',
            text: 'A numeric score reflecting the user’s creditworthiness. The card explains what it is and offers to generate the report.',
          },
          {
            title: 'Credit report',
            text: 'A detailed report on the user’s loans and payments. The card explains how it differs from the rating and offers to order it.',
          },
          {
            title: 'Financial consultation',
            text: 'A personal consultation on managing finances and improving the user’s solvency.',
          },
        ],
      },
      {
        title: 'Adding the FAQ',
        type: 'text',
        paragraphs: [
          'Instead of three separate sections with scattered questions, I built a single “Popular questions” block. It reuses the existing FAQ component from the “Fraud” section — this kept the experience consistent and sped up development.',
        ],
      },
      {
        type: 'checklist',
        items: [
          'Users find answers faster',
          'The page became more compact',
          'Duplicated blocks disappeared',
          'A familiar product component is reused',
        ],
      },
      {
        title: 'UX decisions',
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'New page structure',
            text: 'The information now follows a sequence: service description → information cards → getting the service → popular questions.',
          },
          {
            title: 'Replacing the illustration',
            text: 'The decorative illustration carried no value. Three self-contained information blocks took its place and communicate the essentials much faster.',
          },
          {
            title: 'FAQ',
            text: 'Users find answers faster, the page is shorter, and a component users already know is reused.',
          },
          {
            title: 'Better readability',
            text: 'Larger spacing, a clearer visual hierarchy, fewer walls of text and grouped information.',
          },
        ],
      },
      {
        title: 'Final design',
        type: 'screens',
        items: [
          {
            src: '/case-images/prodengi/new-design.webp',
            label: 'Top block of the page',
            size: '1400×1000',
            caption: 'Refreshed visual style, decorative illustration removed.',
          },
          {
            src: '/case-images/prodengi/image-block.webp',
            label: 'Information cards',
            size: '1400×1000',
            caption:
              '“Credit rating”, “Credit report” and “Financial consultation” — three self-contained, easy-to-read blocks.',
          },
          {
            src: '/case-images/prodengi/image-faq.webp',
            label: 'FAQ section',
            size: '1400×1000',
            caption:
              'A single “Popular questions” section built on an existing product component.',
          },
          {
            src: '/case-images/prodengi/image-redesign.webp',
            label: 'Service request block',
            size: '1400×1000',
            caption: 'A reworked flow for ordering the service.',
          },
        ],
      },
      {
        title: 'Before / After',
        type: 'compare',
        beforeSrc: '/case-images/prodengi/image-old-design.webp',
        afterSrc: '/case-images/prodengi/image-new-design.webp',
        changes: [
          'Decorative illustration removed',
          'Informative cards introduced',
          'FAQ added',
          'Page structure improved',
          'Cognitive load reduced',
          'Product design system preserved',
        ],
      },
      {
        title: 'Outcome',
        type: 'conclusion',
        paragraphs: [
          'After the redesign the section became more modern, clearer and better structured. Users get quick access to the key information about their credit rating and credit history, while the single “Popular questions” section made the page shorter and searching for answers noticeably easier.',
          'Exact numbers for this section are under NDA. The metric the team was watching was fewer support tickets about credit history, and more clicks into the report request flow.',
          'All changes were made while preserving the existing visual language and components of the ProDengi.kz product.',
        ],
      },
    ],
  },

  // ───────────────────────── Coursiv — Selling page redesign ─────────────────────────
  {
    slug: 'coursiv-selling-page',
    title: 'Coursiv selling page redesign',
    company: 'Coursiv (Zimran Team)',
    year: '2025',
    role: 'UX/UI Designer',
    tags: ['EdTech', 'Landing', 'Conversion'],
    coverImage: '/case-images/coursiv/cover.webp',
    summary:
      'A redesign of the Coursiv selling page to grow purchase conversion — through a clear offer, trust and better information structure.',
    heroSubtitle:
      'Coursiv is an online learning platform. The selling page is the first screen of the funnel a user sees before subscribing or buying a course. The task: work out why conversion was dropping and propose a solution.',
    images: {
      cover: ['/case-images/coursiv/cover-wide.webp'],
    },
    facts: [
      { label: 'Status', value: 'Concept / test assignment — never shipped to production' },
      { label: 'Company', value: 'Coursiv (Zimran Team)' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Industry', value: 'EdTech' },
      { label: 'Tools', value: 'Figma, Maze' },
      { label: 'Goal', value: 'Higher conversion, lower bounce rate' },
    ],
    customSections: [
      {
        type: 'note',
        text: 'Concept / test assignment for Coursiv (Zimran Team). Never shipped to production — below is the process and the solution I would propose.',
      },
      {
        title: 'About the project',
        type: 'text',
        paragraphs: [
          'Coursiv is an online learning platform. The selling page is the first screen of the funnel a user sees before subscribing or buying a course.',
          'Hypothesis: the drop in conversion comes from an unclear offer and a weak CTA on the first screen.',
        ],
      },
      {
        title: 'The problem',
        type: 'twoColumn',
        items: [
          {
            title: 'Business',
            list: [
              'The conversion drop is linked to an unclear offer and a weak CTA on the first screen.',
            ],
          },
          {
            title: 'User',
            list: [
              'The value of the course is not clear within the first few seconds.',
              'Plans are hard to compare and it is unclear what the price includes.',
            ],
          },
        ],
      },
      {
        title: 'Research',
        type: 'checklist',
        items: [
          'Competitor analysis: Skillshare, Coursera and similar EdTech landing pages.',
          'Heuristic review of the current page against UX principles.',
          'Interviews with 5 users about what puts them off on pages like this.',
        ],
      },
      {
        title: 'Product analysis',
        type: 'table',
        columns: ['What I noticed', 'Why it is a problem'],
        items: [
          {
            note: 'Spell out which skills the user will gain in 4 weeks, based on their quiz answers.',
            reason: 'People want to know the outcome, not just spend four weeks.',
          },
          {
            note: 'Add a meaningful course description next to the pricing. Make the discount visually obvious. Rewrite the button copy.',
            reason:
              'There is no sense of what you are paying for — only a price. The button and the timer read as pressure.',
          },
          {
            note: 'The promise that the quiz takes “1 minute” does not hold up.',
            reason: 'Users feel misled when a thoughtful pass takes 2+ minutes.',
          },
          {
            note: 'Critical overload: 23 questions in a row.',
            reason: 'Emotional fatigue and the urge to abandon the quiz before the end.',
          },
          {
            note: 'The “aha moment” does not explain which skills I will actually build.',
            reason: '“Four weeks of a course for what exactly?” — there is no sense of an outcome.',
          },
          {
            note: 'Inconsistent user numbers (600k → 100k → 600k).',
            reason: 'It destroys trust in the platform — it looks like a lie.',
          },
        ],
      },
      {
        type: 'note',
        text: 'The map below is a composite journey built from interviews with 5 respondents — not a verbatim transcript of a single interview.',
      },
      {
        title: 'CJM — user journey',
        type: 'cjm',
        columns: [
          {
            step: 'Found a Reel on Instagram',
            result: 'Get interested in the idea of “becoming an AI specialist”',
            barrier: '—',
            emotion: '🙂',
            quote: 'Sounds cool, but… is this actually real?',
            context: 'Instagram feed',
            driver: 'Wants to change their life, try something new',
            improvement: 'Add real reviews, tone down the hype',
          },
          {
            step: 'Clicked through to the site',
            result: 'Confirm this is serious and safe',
            barrier: 'Few specifics, no face behind the brand',
            emotion: '🤔',
            quote: 'I want to know who is behind this',
            context: 'Browser',
            driver: 'Attracted by the words “personal plan”',
            improvement: 'A clear statement of who we are, what the user gets, and trust signals',
          },
          {
            step: 'Started the quiz',
            result: 'Complete the quiz',
            barrier: '—',
            emotion: '😀',
            quote: 'Oh, I will get through this quickly',
            context: '—',
            driver: 'Pleasant design',
            improvement: '—',
          },
          {
            step: 'Continues the quiz',
            result: 'Find a matching course or profession',
            barrier: 'Too many questions, unsure it fits into “1 minute”',
            emotion: '😢',
            quote: 'Wow, so many questions — why so many?',
            context: 'Quiz page',
            driver: 'Curiosity, wanting to reach the result',
            improvement:
              'Add a screen saying “This takes 1–2 min and will help find your best path” plus a progress bar',
          },
          {
            step: 'Sees the “aha moment” — 600k → 100k → 600k',
            result: 'Be reassured the platform is popular',
            barrier: 'Mismatched numbers undermine trust',
            emotion: '🤔',
            quote: 'Hold on… how many people are actually there?',
            context: 'Quiz, result',
            driver: 'Wants to be part of a large community',
            improvement: 'Use one honest number and keep it consistent',
          },
          {
            step: 'Another “aha moment”, again unexplained',
            result: 'Feel they are on the right track',
            barrier: 'Fatigue from constant promises',
            emotion: '😫',
            quote: 'How much longer is this going to go on…',
            context: 'Quiz, result',
            driver: 'Still hoping there is real value at the end',
            improvement: 'Reduce the number of “aha moments”',
          },
          {
            step: 'List of AI tools',
            result: 'Learn which tools they will use',
            barrier: 'Does not recognise most of the names, gets intimidated',
            emotion: '😫',
            quote: 'Am I stupid? I only know ChatGPT',
            context: 'Quiz, result',
            driver: 'Wants to feel capable of handling it',
            improvement: 'Add short descriptions, hints and an “I am a beginner” option',
          },
          {
            step: 'Sees the professions they could grow into',
            result: 'Feel inspired',
            barrier: 'This block actually works well',
            emotion: '😊',
            quote: 'Oh, this is exactly right for me!',
            context: 'Quiz, result',
            driver: 'Wants to dream and see a goal',
            improvement: 'Strengthen this block: make it visually louder and more emotional',
          },
          {
            step: 'Sees a habit-change offer with no explanation',
            result: 'Verify the claims are credible',
            barrier: 'Yet another jump in numbers and wording throws them off',
            emotion: '🤔',
            quote: 'First 100, then 600…',
            context: 'Before the email form',
            driver: 'Wants to understand where the platform stands',
            improvement:
              'Explain: “A new habit will help you build the skill into your daily routine” and use a softer CTA',
          },
          {
            step: 'Enters their email',
            result: 'Finish this stage and receive the plan',
            barrier: 'General fatigue, a sense of wasted time',
            emotion: '😫',
            quote: 'I am already tired and there is still no plan',
            context: 'Email form',
            driver: 'Having come this far, wants to see the value',
            improvement: 'Shorten the path to the plan',
          },
          {
            step: 'Lands on the selling page',
            result: 'See their personal plan and understand what they are paying for',
            barrier: 'Hard to judge how well the course fits them',
            emotion: '😠',
            quote: 'Will they charge me straight away? For what?',
            context: 'Selling page after the email step',
            driver: 'Having got this far, wants to give the course a chance',
            improvement: 'Show how the quiz connects to the plan',
          },
          {
            step: 'Starts the 3-day trial',
            result: 'Starts the 3-day trial',
            barrier: '—',
            emotion: '😐',
            quote: 'I have been through all this already. Where are the terms?',
            context: 'Checkout screen',
            driver: 'Willing to try it risk-free',
            improvement: 'A clear offer, a short FAQ and control over payments',
          },
          {
            step: 'Lands on recommendations full of ads',
            result: 'Get guidance on the course',
            barrier: 'Instead of help they get more ads — it feels pushy',
            emotion: '😢',
            quote: 'I wanted to understand the course and got thrown a subscription',
            context: 'Personal account',
            driver: 'Wants to see usefulness right away',
            improvement:
              'Remove the ads, deliver a useful first experience, add a “tip for today” card',
          },
        ],
      },
      {
        title: 'User problem',
        type: 'pills',
        items: [
          'The quiz is overloaded',
          'The numbers do not add up',
          'The interface applies pressure',
          'The quiz result is not tied to the course',
          'No sense of progress',
          'Manipulative patterns are used',
          'Unclear what I am buying',
        ],
      },
      {
        title: 'Competitor benchmarking',
        type: 'imageText',
        imageSrc: '/case-images/coursiv/benchmark.webp',
        imageLabel: 'Screenshot: comparison of competitor landing pages',
        imageSize: '900×600',
        paragraphs: [
          'I collected the landing pages of competing educational platforms and online course services.',
          'I analysed how they structure content, use social proof and calls to action, and build their visual hierarchy.',
          'Based on those insights I put together the structure for the new selling page.',
        ],
      },
      {
        type: 'note',
        text: 'Hypothesis: a first screen with a sharp offer and one obvious CTA will lift conversion into the purchase step.',
      },
      {
        title: 'Solution',
        type: 'checklist',
        items: [
          'Reworked hero block: a concrete benefit instead of vague claims.',
          'One primary CTA instead of several competing ones.',
          'Social proof (reviews, numbers) moved closer to the purchase decision.',
          'A transparent pricing structure that is easy to compare.',
        ],
      },
      {
        title: 'Prototype and final screen',
        type: 'screens',
        items: [
          {
            src: '/case-images/coursiv/prototype-mockup.webp',
            label:
              'Next I assembled a mockup from competitor sites that informed the new selling page',
            size: '700×900',
          },
          {
            src: '/case-images/coursiv/final-selling-page.webp',
            label: 'Final selling page redesign — Coursiv',
            size: '1000×1300',
            tall: true,
          },
        ],
      },
      {
        title: 'How I would validate this',
        type: 'conclusion',
        paragraphs: [
          'Usability test with 5–8 users: does the offer on the first screen read clearly within 3 seconds, can participants tell the plans apart without help.',
          'A/B test of the new version against the old one across the page\u2019s organic traffic, primary metric — visit-to-checkout conversion, secondary — first-screen bounce rate. I\u2019d treat a 10–15% lift as the minimum meaningful signal; anything smaller is indistinguishable from noise at typical landing-page traffic volumes.',
          'Next step — personalising the offer by traffic segment (ad source, quiz answers).',
        ],
      },
    ],
  },
]

export default caseStudies
