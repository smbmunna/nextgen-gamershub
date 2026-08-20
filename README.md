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

```
##🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

## Prerequisites
Ensure you have the following installed locally:
* NNode.js (v18.x or higher)
* npm or pnpm
* A running PostgreSQL database instance (e.g., local PostgreSQL or NeonDB)

## 🔑 Environment Variables
## 1. Backend (/server/.env)
Create a .env file in the server directory:
```js
PORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?sslmode=require"
```
## 2. Frontend (/client/.env.local)
Create a .env.local file in the client directory:
```js
NEXT_PUBLIC_BASE_URL="http://localhost:5000"
```

## 📦 Local Installation & Setup
### 1. Clone the repository
```js
git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
cd your-repo
```
### 2.Backend Setup
```js
# Navigate to backend directory
cd server

# Install dependencies
npm install

# Generate Prisma client & sync schema with your PostgreSQL database
npx prisma generate
npx prisma db push

# Start the development server
npm run dev
```

The Express backend will be running on http://localhost:5000.

### 3.Frontend Setup
Open a new terminal window and run:
```js
# Navigate to frontend directory
cd client

# Install dependencies
npm install

# Start the Next.js development server
npm run dev
```
The Next.js app will be running on http://localhost:3000.

## 🔗 Main API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/games` | Fetch all game listings |
| `POST` | `/api/games` | Create a new game entry |
| `GET` | `/api/genres` | Fetch all available genres |
| `GET` | `/api/platforms` | Fetch all available gaming platforms |

## ☁️ Deployment
* **Backend (Railway):**
1. Link the repository to Railway.app.

2. Add the DATABASE_URL variable in the Railway service Variables tab.

3. Ensure the package.json build command includes prisma generate ("build": "prisma generate").
* **Frontend (Vercel):**
1. Import the project repository into Vercel.

2. Set NEXT_PUBLIC_BASE_URL to your production Railway backend URL (including https://).