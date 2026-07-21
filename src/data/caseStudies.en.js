// English version of the case studies.
// Keep slugs, order and image paths identical to caseStudies.ru.js —
// only the copy differs.

const caseStudies = [
  // ───────────────────────── qMed AI ─────────────────────────
  {
    slug: 'qmed-ai',
    title: 'qMed AI — UX/UI design for a medical AI platform',
    company: 'qMed AI',
    year: '2025',
    role: 'UX/UI Designer, Graphic Designer',
    tags: ['MedTech', 'AI', 'Web', 'Mobile'],
    coverImage: '/case-images/qmed/cover.png',
    summary:
      'Designing interfaces and visual materials for an AI healthcare service — work at the intersection of product and graphic design.',
    heroSubtitle:
      'Designing interfaces and visual materials for an AI service in healthcare. The role sat right at the intersection of product design and graphic design.',
    images: {
      cover: ['/case-images/qmed/image-cover.png'],
    },
    facts: [
      { label: 'Company', value: 'qMed AI' },
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
          'qMed AI is a digital platform for managing chronic non-communicable diseases.',
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
            src: '/case-images/qmed/image-nof-ticket.png',
            label: 'Notifications and tickets (desktop)',
            size: '1400×1000',
            caption:
              'The main goal was to eliminate incomplete requests and make the process clear even for patients with no experience of similar services.',
          },
          {
            src: '/case-images/qmed/image-com.png',
            label: 'Competitions section (desktop)',
            size: '1400×1000',
            caption:
              'I designed the Competitions section for the admin panel and the mobile app: easy competition creation, audience settings, a mobile preview, and error handling for publishing and image uploads. The interface supports RU/KZ, filtering by diagnosis and medical institution, and publication statistics.',
          },
          {
            src: '/case-images/qmed/image-sd.png',
            label: 'DM / CHF module (mobile)',
            size: '900×1600',
            tall: true,
            caption:
              'Patient observation chart, survey block and the Morisky-Green adherence score.',
          },
          {
            src: '/case-images/qmed/image-color.png',
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
            src: '/case-images/qmed/image-bro.png',
            label: 'qMed AI brochure',
            size: '1000×1400',
            caption:
              'A printed flyer explaining what the app does, with QR codes linking to Google Play and the App Store.',
          },
          {
            src: '/case-images/qmed/image-pat.png',
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
        title: 'Takeaways',
        type: 'conclusion',
        paragraphs: [
          'Working on qMed AI gave me hands-on experience designing interfaces for a medical AI product, building landing pages and preparing marketing materials in one coherent visual style.',
          'The project let me work in two directions at once — product UX/UI and graphic design — which helped me understand the link between user experience and brand communication much more deeply.',
        ],
      },
    ],
  },

  // ───────────────────────── ProDengi — Credit rating ─────────────────────────
  {
    slug: 'prodengi-credit-rating',
    title: 'Redesign of the Credit History section at Prodengi.kz',
    company: 'ProDengi.kz',
    year: '2025',
    role: 'UX/UI Designer',
    tags: ['FinTech', 'Web', 'Mobile', 'Redesign'],
    coverImage: '/case-images/prodengi/Cover.png',
    summary:
      'Reworking one of the key sections of the ProDengi.kz financial service: clearer structure, less cognitive load, a single FAQ.',
    heroSubtitle:
      'Reworking one of the key sections of the ProDengi.kz financial service to make the information clearer, improve the page structure and reduce the cognitive load on users.',
    images: {
      cover: ['/case-images/prodengi/image-cover.png'],
    },
    facts: [
      { label: 'Company', value: 'ProDengi.kz' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Project type', value: 'FinTech' },
      { label: 'Platform', value: 'Web' },
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
        imageSrc: '/case-images/prodengi/image-old.png',
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
            src: '/case-images/prodengi/new design.png',
            label: 'Top block of the page',
            size: '1400×1000',
            caption: 'Refreshed visual style, decorative illustration removed.',
          },
          {
            src: '/case-images/prodengi/image-block.png',
            label: 'Information cards',
            size: '1400×1000',
            caption:
              '“Credit rating”, “Credit report” and “Financial consultation” — three self-contained, easy-to-read blocks.',
          },
          {
            src: '/case-images/prodengi/image-faq.png',
            label: 'FAQ section',
            size: '1400×1000',
            caption:
              'A single “Popular questions” section built on an existing product component.',
          },
          {
            src: '/case-images/prodengi/image-redesign.png',
            label: 'Service request block',
            size: '1400×1000',
            caption: 'A reworked flow for ordering the service.',
          },
        ],
      },
      {
        title: 'Before / After',
        type: 'compare',
        beforeSrc: '/case-images/prodengi/image-old-design.png',
        afterSrc: '/case-images/prodengi/image-new-design.png',
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
        title: 'Takeaways',
        type: 'conclusion',
        paragraphs: [
          'After the redesign the section became more modern, clearer and better structured. Users get quick access to the key information about their credit rating and credit history, while the single “Popular questions” section made the page shorter and searching for answers noticeably easier.',
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
    coverImage: '/case-images/coursiv/cover.jpg',
    summary:
      'A redesign of the Coursiv selling page to grow purchase conversion — through a clear offer, trust and better information structure.',
    heroSubtitle:
      'Coursiv is an online learning platform. The selling page is the first screen of the funnel a user sees before subscribing or buying a course. The task: work out why conversion was dropping and propose a solution.',
    images: {
      cover: ['/case-images/coursiv/cover-wide.jpg'],
    },
    facts: [
      { label: 'Company', value: 'Coursiv (Zimran Team)' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Industry', value: 'EdTech' },
      { label: 'Tools', value: 'Figma, Maze' },
      { label: 'Goal', value: 'Higher conversion, lower bounce rate' },
    ],
    customSections: [
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
        title: 'User interviews — CJM',
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
        imageSrc: '/case-images/coursiv/benchmark.jpg',
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
            src: '/case-images/coursiv/prototype-mockup.png',
            label:
              'Next I assembled a mockup from competitor sites that informed the new selling page',
            size: '700×900',
          },
          {
            src: '/case-images/coursiv/final-selling-page.jpg',
            label: 'Final selling page redesign — Coursiv',
            size: '1000×1300',
            tall: true,
          },
        ],
      },
      {
        title: 'Outcome and takeaways',
        type: 'conclusion',
        paragraphs: [
          'Validation: an A/B test of the new version against the old one, plus a usability test with 5–8 users focused on how clearly the offer reads.',
          'The expected effect is higher conversion thanks to faster comprehension of the value. The next step is personalising the offer by traffic segment.',
        ],
      },
    ],
  },
]

export default caseStudies
