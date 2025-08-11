walton-web-hosting/
├── app/                           # ✅ INCLUDE - Main application directory
│   ├── layout.js                  # Root layout with navigation
│   ├── page.js                    # Home page component
│   ├── globals.css                # Global styles
│   ├── about/                     # About page
│   │   └── page.js
│   ├── contact/                   # Contact page
│   │   └── page.js
│   ├── api/                       # API routes
│   │   └── contact/
│   │       └── route.js          # Mailgun email handler
│   └── components/                # Reusable components
│       ├── Navigation.js
│       ├── Footer.js
│       ├── Logo.js
│       ├── ServiceCard.js
│       └── ParticleBackground.js
│
├── public/                        # ✅ INCLUDE - Static assets
│   ├── favicon.ico               # Your favicon
│   └── logo.png                  # Your logo file (if using image)
│
├── package.json                   # ✅ INCLUDE - Dependencies & scripts
├── package-lock.json              # ✅ INCLUDE - Lock file for npm
├── next.config.js                 # ✅ INCLUDE - Next.js configuration
├── .env.example                   # ✅ INCLUDE - Example environment variables
├── .gitignore                     # ✅ INCLUDE - Git ignore rules
├── README.md                      # ✅ INCLUDE - Project documentation
└── Dockerfile                     # ✅ INCLUDE (Optional) - For Docker deployment
