<<<<<<< HEAD
# Personal Portfolio — Information Technology Student

A complete, responsive portfolio website built with **React 19 + Vite**, featuring a pastel purple design system, light/dark themes, a categorised skills grid, certificate lightbox, scroll-spy navigation, and an EmailJS-powered contact form.

All content is placeholder data and can be replaced without touching the layout.

---

## Features

- **Modern pastel purple theme** with a matching dark mode
- Theme persistence via `localStorage` + system preference on first visit
- Sticky floating navbar with scroll-spy active links
- Mobile hamburger drawer with Escape-to-close and scroll lock
- Smooth scrolling and reduced-motion support
- One-second page-load animation with the visitor's saved theme
- Hero, About, Skills, Education, Projects, Certificates, Contact and Footer sections
- Categorised skills grid with brand icons
- Responsive project cards with hover image zoom and technology badges
- Certificate grid with an accessible modal/lightbox preview
- EmailJS contact form with validation, loading, success and error states
- Floating "back to top" button and footer back-to-top
- Semantic HTML, alt text, labelled form fields, keyboard focus styles and a skip link

---

## Tech stack

| Purpose | Library |
| --- | --- |
| UI framework | React.js (JavaScript) |
| Build tool | Vite |
| Styling | CSS3 (custom properties, Grid, Flexbox) |
| Icons | `lucide-react`, `react-icons` |
| Contact form | `@emailjs/browser` |
| Fonts | Poppins + Inter (Google Fonts) |

---

## Getting started

> Requires **Node.js 20.19+** (or 22.12+) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually **http://localhost:5173**).

### Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

---

## Project structure

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── certificates/          # Certificate preview images
│   │   └── images/                # Profile + project preview images
│   ├── components/
│   │   ├── CertificateModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageLoader.jsx          # 1-second welcome animation
│   │   ├── Reveal.jsx              # Scroll reveal wrapper
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── SocialLinks.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   ├── certificates.js
│   │   ├── education.js
│   │   ├── projects.js
│   │   ├── site.js                # ← personal info lives here
│   │   └── skills.js
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useTheme.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   └── Contact.jsx
│   ├── services/
│   │   └── emailService.js
│   ├── styles/
│   │   ├── themes.css             # Colour tokens for both themes
│   │   └── global.css             # Reset, typography, shared UI
│   ├── App.jsx
│   └── main.jsx
├── .env.example
└── index.html
```

Each component/section has a neighbouring CSS file so styles stay easy to find.

---

## 1. Replace your personal information

Open **`src/data/site.js`** and update:

```js
export const site = {
  name: 'Your Name',
  initials: 'YN',
  role: 'Information Technology Student',
  intro: '...',
  about: ['...', '...', '...'],
  quote: '...',
  location: 'Manila, Philippines',
  email: 'yourname@email.com',
  phone: '+63 912 345 6789',
  availability: 'Open to internships',
  socials: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    facebook: 'https://facebook.com/yourusername',
  },
  stats: [...],
}
```

This file also controls the navbar/footer links (`navLinks`) and the social icons used across the whole site. Replace **all placeholder URLs** before deploying.

Update the page `<title>`, meta description and Open Graph tags in **`index.html`**.

---

## 2. Replace images

Placeholders are local SVGs so the project works offline.

| What | File | Where it is used |
| --- | --- | --- |
| Profile picture | `src/assets/images/profile-placeholder.svg` | Hero |
| Project thumbnails | `src/assets/images/project-*.svg` | Projects section |
| Certificate previews | `src/assets/certificates/*.svg` | Certificates section |

To use your own screenshots:

1. Add your image to the relevant folder (e.g. `src/assets/images/my-photo.jpg`).
2. Update the import path at the top of `src/data/projects.js` or `src/data/certificates.js`, or replace the existing file while keeping the same name.
3. Keep images reasonably compressed (roughly 1600px wide is plenty).
4. Update the `imageAlt` text so it describes the new image.

The profile image is displayed in the hero, so a portrait-oriented photo (roughly 4:5 or 5:6) works best.

---

## 3. Edit skills

Open **`src/data/skills.js`**.

- Add/remove skills inside each category.
- Brand icons come from `react-icons`. Import a different icon from `react-icons/si`, `react-icons/fa6`, or `react-icons/vsc` and assign it to `icon`.
- Category names and ordering live in the same file.

Icons in the grid are intentionally monochrome purple so they match the theme.

---

## 4. Edit education, projects and certificates

- **Education** — `src/data/education.js`: school, program, period, status, description and highlights.
- **Projects** — `src/data/projects.js`: title, year, status, description, image, technologies, `github`, `demo` and `featured`. If the array is empty, a friendly empty state is shown automatically.
- **Certificates** — `src/data/certificates.js`: title, organisation, date, credential ID, description, image and optional `credentialUrl`. Leave `credentialUrl` empty to hide the "Verify credential" button.

---

## 5. Configure EmailJS

The contact form uses **[EmailJS](https://www.emailjs.com/)** and requires your own account.

1. Create a free EmailJS account.
2. **Add a service** (e.g. Gmail) in *Email Services* and copy its **Service ID**.
3. **Create an email template** in *Email Templates*. Use these variables in the template content:

   ```text
   New message from {{from_name}} ({{from_email}})

   Subject: {{subject}}

   {{message}}
   ```

   Set the template's **Reply-To** field to `{{reply_to}}` and the **To** field to your email address. Copy the **Template ID**.
4. Open *Account → General* and copy your **Public Key**.
5. Copy the example environment file and add your credentials:

   ```bash
   # macOS / Linux
   cp .env.example .env.local

   # Windows PowerShell
   Copy-Item .env.example .env.local
   ```

   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
   ```

6. **Restart the dev server.** Vite only reads env files at startup.

```bash
npm run dev
```

### How to know it is configured

- If the keys are missing or still contain `your_service_id`-style placeholders, the contact form shows a "Demo mode" note and will not attempt to send.
- Once configured, the note disappears. Submit the form to test; you should see a success message and the fields reset.
- To check what EmailJS received, open the *EmailJS → History* dashboard.

### Security notes

- Vite exposes only variables prefixed with `VITE_` to client code. This is expected here: the EmailJS **public key** is designed for browser use.
- Never put private API keys or passwords in frontend env variables.
- In the EmailJS dashboard, restrict allowed origins to your deployed domain.
- `.env.local` is ignored by git. Commit only `.env.example`.

---

## 6. Theme customisation

All colours live in **`src/styles/themes.css`** as CSS custom properties.

- Light theme tokens: `:root`
- Dark theme tokens: `[data-theme='dark']`
- Change the four brand purples (`--purple-100` … `--purple-400`) and the semantic surface/text tokens to re-skin the whole site.

Theme behaviour:

- On first visit, `prefers-color-scheme` decides the initial theme (set by an inline script in `index.html` to avoid a flash).
- Clicking the toggle saves the choice under the `portfolio-theme` key in `localStorage`.
- `useTheme` (`src/hooks/useTheme.js`) handles persistence and the smooth colour transition.

### Page-load animation

The one-second welcome animation is in **`src/components/PageLoader.jsx`**. Adjust `HOLD_MS` to change how long it stays on screen before fading out.

---

## 7. Navigation

Navigation links are defined in `src/data/site.js`. Each `id` must match a section id in the page:

`home`, `about`, `skills`, `education`, `projects`, `certificates`, `contact`.

If you rename a section id, update both the section JSX (`<section id="...">`) and the nav item.

---

## 8. Deployment

The project has no client-side routing, so it deploys as a static site.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Add the three `VITE_EMAILJS_*` variables under *Site settings → Environment variables*.

### Vercel

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Add the EmailJS environment variables in the project settings.

### GitHub Pages

- Set `base: '/<repository-name>/'` in `vite.config.js`.
- Run `npm run build` and publish the `dist` folder with your preferred Pages workflow.

---

## Accessibility & performance notes

- Sections use semantic landmarks and one `h1`.
- All images have descriptive `alt` text; decorative elements are hidden from assistive tech.
- Navbar, modal and form controls have accessible labels.
- Focus is trapped inside the certificate modal and returned to the trigger when closed.
- `prefers-reduced-motion` disables reveal animations, smooth scrolling, decorative motion and the page-load animation.
- Fonts are loaded from Google Fonts with `display=swap`.

---

## Useful commands

```bash
npm install        # install dependencies
npm run dev        # start the Vite dev server
npm run build      # production build
npm run preview    # preview the production build
npm run lint       # run ESLint
```

---

## Before you deploy — checklist

- [ ] Replace name, roles, bio, email, phone and location in `src/data/site.js`
- [ ] Replace GitHub / LinkedIn / Facebook links
- [ ] Replace profile, project and certificate images
- [ ] Replace project GitHub/demo links
- [ ] Replace education and certificate details
- [ ] Add EmailJS keys to the deployment environment
- [ ] Update `index.html` title, description and Open Graph tags
- [ ] Run `npm run build` and check the site on mobile + desktop

---

© 2026 Your Name. Template content is placeholder only — replace it with your own before publishing.
=======
# portfolio
>>>>>>> refs/rewritten/main
