# 🎮 NextGen GamersHub

> A modern full-stack web application built with Next.js, Express, Prisma, and PostgreSQL.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Railway](https://img.shields.io/badge/Deployed%20on-Railway-0B0D0E?style=flat-square&logo=railway)](https://railway.app/)

[🚀 Live Demo](https://nextgen-gamershub.vercel.app/) · [🐛 Report Bug](https://github.com/smbmunna/nextgen-gamershub/issues) · [✨ Request Feature](https://github.com/smbmunna/nextgen-gamershub/issues)

---

## 🌟 Key Features

* **⚡ Server-Driven UI:** Next.js Server Components and Server Actions for fast data fetching and mutations.
* **🛡️ Type-Safe Database ORM:** Prisma ORM connected to PostgreSQL for robust schema management.
* **🔒 API Validation & Security:** Express backend featuring Zod schema validation and robust error handling.
* **🎨 Modern UI Design:** Tailwind CSS components with stateful toast feedback for user actions.

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** Next.js (App Router, Server Actions)
* **Styling:** Tailwind CSS
* **Language:** TypeScript

### Backend
* **Runtime:** Node.js & Express.js
* **Database & ORM:** PostgreSQL & Prisma ORM
* **Deployment:** Hosted on **Railway**

---

## 📂 Project Structure

```text
└── src/
    ├── utils/
    │   └── index.ts
    ├── services/
    │   ├── getData.ts
    │   └── getGenreName.ts
    ├── hooks/
    │   └── useGenres.ts
    ├── data/
    │   └── genres.ts
    ├── components/
    │   ├── ClearFilter.tsx
    │   ├── FilteredBy.tsx
    │   ├── GameCard.tsx
    │   ├── GameCardSkeleton.tsx
    │   ├── GameGrid.tsx
    │   ├── GameGridSkeleton.tsx
    │   ├── GenreList.tsx
    │   ├── Navbar.tsx
    │   ├── Platform.tsx
    │   ├── PlatformIconList.tsx
    │   ├── PlatformList.tsx
    │   ├── Searchbox.tsx
    │   ├── Sidebar.tsx
    │   ├── ToastProvider.tsx
    │   ├── Toggle.tsx
    │   └── container/
    │       ├── CreateGameContainer.tsx
    │       ├── CreateGenreContainer.tsx
    │       ├── CreatePlatformContainer.tsx
    │       └── index.ts
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── actions/
    │   │   └── auth.ts
    │   ├── platform/
    │   │   └── create/
    │   │       └── page.tsx
    │   ├── genre/
    │   │   └── create/
    │   │       └── page.tsx
    │   ├── game/
    │   │   └── create/
    │   │       ├── action.ts
    │   │       ├── page.tsx
    │   │       └── SamplePage.tsx
    │   └── auth/
    │       ├── register/
    │       │   └── page.tsx
    │       └── login/
    │           └── page.tsx
    └── lib/
        └── schemas/
            ├── auth.ts
            └── game.ts
