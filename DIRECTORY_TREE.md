# IEEE-SPERT Codebase Directory Tree

```
IEEE-SPERT/
│
├── app/
│   ├── about/
│   │   ├── about-us/
│   │   │   └── page.tsx
│   │   └── organizing-committee/
│   │       └── page.tsx
│   │
│   ├── authors/
│   │   ├── call-for-papers/
│   │   │   └── page.tsx
│   │   └── submission-and-registration/
│   │       └── page.tsx
│   │
│   ├── Camera-Ready-Paper-Submission/
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── NeonIsometricMaze.tsx
│   │   └── VisitorCounter.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── program/
│   │   ├── call-for-special-session/
│   │   │   └── page.tsx
│   │   ├── keynote-speaker/
│   │   │   └── page.tsx
│   │   └── tutorial-speaker/
│   │       └── page.tsx
│   │
│   ├── qr-code/
│   │   └── route.ts
│   │
│   ├── registration/
│   │   └── page.tsx
│   │
│   ├── sponsorships/
│   │   └── page.tsx
│   │
│   ├── students-and-yps/
│   │   └── page.tsx
│   │
│   ├── travel/
│   │   ├── food/
│   │   │   └── page.tsx
│   │   ├── hotel-booking/
│   │   │   └── page.tsx
│   │   ├── location/
│   │   │   └── page.tsx
│   │   ├── tour/
│   │   │   └── page.tsx
│   │   └── visa-information/
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   ├── tooltip.tsx
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── BackgroundVideo.tsx
│   ├── image-gallery.tsx
│   ├── sliding-announcements.tsx
│   └── theme-provider.tsx
│
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/
│   └── utils.ts
│
├── public/
│   ├── images/
│   │   ├── 1.png
│   │   ├── 2.png
│   │   ├── 3.png
│   │   ├── 4.png
│   │   ├── 5.png
│   │   ├── 6_GH.png
│   │   ├── 6.png
│   │   ├── 7.png
│   │   ├── 8.png
│   │   ├── 9.png
│   │   ├── GBSolar.png
│   │   ├── Ginger.png
│   │   ├── Marriott.jpeg
│   │   ├── REM.png
│   │   ├── RESS.jpg
│   │   ├── Video.mp4
│   │   └── WhatsappQR.png
│   │
│   ├── templates/
│   │   └── SPERT 2025 - Special Session Proposal Template.docx
│   │
│   ├── favicon.ico
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   └── placeholder.svg
│
├── styles/
│   └── globals.css
│
├── node_modules/          (dependencies - not shown in detail)
│
├── components.json
├── favicon.ico
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── qr-code.jpg
├── qr-code.pdf
├── resource.md
├── Spert-final-logo.jpg
├── tailwind.config.js
└── tsconfig.json
```

## Directory Structure Summary

### Main Directories:

1. **app/** - Next.js App Router directory containing:
   - Route pages (about, authors, contact, program, registration, etc.)
   - App-specific components (Footer, Navbar, VisitorCounter, etc.)
   - Layout and global styles

2. **components/** - Reusable React components:
   - **ui/** - shadcn/ui component library (50+ UI components)
   - Custom components (BackgroundVideo, image-gallery, theme-provider, etc.)

3. **hooks/** - Custom React hooks (use-mobile, use-toast)

4. **lib/** - Utility functions (utils.ts)

5. **public/** - Static assets:
   - **images/** - Image files (logos, photos, videos)
   - **templates/** - Document templates

6. **styles/** - Global CSS styles

### Configuration Files:
- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - shadcn/ui configuration
- `package.json` - Node.js dependencies

### Root Files:
- `resource.md` - Documentation/resource file
- `qr-code.jpg`, `qr-code.pdf` - QR code assets
- `Spert-final-logo.jpg` - Conference logo

