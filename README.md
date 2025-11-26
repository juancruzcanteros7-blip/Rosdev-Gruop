# ROSDEV Group - Official Website

> Modern, responsive landing page for ROSDEV Group built with React, TypeScript, Vite, and Tailwind CSS v4.

![ROSDEV Group](https://img.shields.io/badge/ROSDEV-Group-6D28D9?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 About

ROSDEV Group is a cutting-edge software development company specializing in innovative digital solutions, web applications, and digital transformation services. This repository contains the source code for our official website.

## 📸 Screenshots

*Coming soon - Screenshots will be added after deployment*

## ✨ Features

- 🎨 **Modern Design**: Premium UI with smooth animations and gradients
- 🌐 **Bilingual**: Full English/Spanish support with i18n
- ♿ **Accessible**: WCAG AA compliant with semantic HTML
- 📱 **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast**: Built with Vite for lightning-fast performance
- 🔍 **SEO Optimized**: Complete meta tags, structured data, and sitemap
- 🎭 **Interactive**: Smooth scroll, hover effects, and scroll-to-top button

## 🛠️ Tech Stack

- **Framework**: [React 19.2](https://react.dev/)
- **Language**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6.4](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **UI Components**: [Headless UI](https://headlessui.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rosdev-group/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173/`

## 🎯 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (output: `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run format` | Format code with Prettier |

## 📁 Project Structure

```
rosdev-group/
├── public/               # Static assets
│   ├── favicon.svg      # Site favicon
│   ├── robots.txt       # SEO robots file
│   └── sitemap.xml      # SEO sitemap
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── StructuredData.tsx
│   ├── context/         # React Context providers
│   │   └── LanguageContext.tsx
│   ├── data/            # Static data and translations
│   │   └── translations.ts
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   └── Contact.tsx
│   ├── assets/          # Images and icons
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.mts      # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_APP_NAME=ROSDEV Group
VITE_APP_URL=https://rosdevgroup.com
```

### Tailwind CSS

The project uses Tailwind CSS v4. Configuration is in `@layer` directives in `src/index.css`.

### ESLint & Prettier

- ESLint config: `eslint.config.js`
- Prettier config: `.prettierrc`

## 🌍 Internationalization (i18n)

The site supports English and Spanish. Translations are managed in `src/data/translations.ts`.

To add a new language:
1. Add translations to `translations.ts`
2. Update `LanguageContext.tsx` to include the new language

## 🎨 Customization

### Colors

Brand colors are defined in `src/index.css`:

```css
:root {
    --color-brand-purple: #7C3AED;
    --color-brand-dark: #2E2E2E;
}
```

### Fonts

Using Inter font family from Google Fonts (preloaded in `index.html`).

## 📄 License

© 2025 ROSDEV Group. All rights reserved.

## 🤝 Contributing

This is a private repository. For internal team members, please follow our development workflow:

1. Create a feature branch from `test`
2. Make your changes
3. Submit a pull request to `test`
4. After review, merge to `main` for production

## 📞 Contact

- Website: [rosdevgroup.com](https://rosdevgroup.com)
- Email: contact@rosdevgroup.com
- LinkedIn: [@rosdev-group](https://linkedin.com/company/rosdev-group)

---

Built with ❤️ by the ROSDEV Group team
