# 🚀 SoftSell – Resell Your Unused Software Licenses

**SoftSell** is a modern, responsive landing page built using **Next.js 14 App Router**, **Tailwind CSS**, **Framer Motion**, and **ShadCN UI**. It provides a seamless interface for users to check the value of unused software licenses and encourages them to resell through a clear call-to-action.

---

## 🧰 Tech Stack

| Tech                 | Purpose                                      |
|----------------------|----------------------------------------------|
| **Next.js 14**       | React framework with App Router (SSR/SSG)    |
| **Tailwind CSS**     | Utility-first CSS framework                  |
| **Framer Motion**    | Declarative animations and transitions       |
| **ShadCN UI**        | Beautiful, accessible UI components          |
| **next-themes**      | Theme toggling with support for system mode  |
| **TypeScript**       | Type safety for improved DX                  |

---

## 🎨 Features

- ✅ **Fully Responsive** – Works perfectly on all devices
- 🌓 **Light / Dark / System Theme** via `next-themes`
- 🎞️ **Animations** with `Framer Motion` (fade-ins, transitions, etc.)
- 🧩 **Reusable Components** with clean architecture
- 🧠 **Optimized with App Router** for performance & routing
- 🌐 **Vercel Ready** – One-click deploy

---

## 📁 Folder Structure



/app
└── animations
├── FloatingBoxes.tsx // Floating boxesanimation
├── lottieanimation.json // Lottie file
└── assets
├── avatar image
├── logo
├── components
│ ├── Header.tsx # Navbar with theme toggle
│ ├── Footer.tsx
│ ├── Hero.tsx
│ ├── Contactus.tsx
│ ├── Softbot.tsx
│ ├── Testimonials.tsx
│ ├── Whyychooseus.tsx
│ ├── Howitworks.tsx
│ ├── ModeToggle.tsx # Theme dropdown (Light/Dark/System)
│ └── ThemeProvider.tsx # Wrapper using next-themes
├── layout.tsx # App layout wrapper
└── page.tsx # Home page using all sections
/styles
└── globals.css // Tailwind base styles

---

## 🎞️ Framer Motion Animations

Framer Motion is used to animate various components for smooth UI transitions:

- Fade-in on scroll for content sections
- Hover animations on buttons
- Slide and scale transitions for interactivity
