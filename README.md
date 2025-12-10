# 🚀 Transportech-Imalzy

A modern web application built with Next.js, TypeScript, and Zustand for state management. This project is a character explorer, likely integrating with an external API (like The Rick and Morty API, based on the structure) to display character and episode information.

### ⏱️ Task Time Breakdown

| Task Category | Estimated Time Spent |
| :--- | :--- |
| **Project Setup & Configuration** | [10 min] |
| *(Includes Next.js initialization, TypeScript, ESLint, Tailwind CSS setup, and basic file structure.) *  | |
| **UI Component Development** | [2 hours] |
| *(Includes building `CharacterCard`, `Hero`, `Header`, `ThemeToggle`, etc.)* | |
| **State Management Implementation** | [30 min] |
| *(Includes setting up `character.store.ts` using Zustand.)* | |
| **API Integration & Services** | [30 min] |
| *(Includes creating API routes in `app/api` and service functions in `character.api.ts`.)* | |
| **Testing & Debugging** | [2 hours] |
| *(Time spent troubleshooting issues and verifying functionality.)* | |
| **Total Time** | **[5 hours 10 min]** |

---

## 🌟 Features

* **Next.js App Router:** Utilizes the latest routing conventions for a robust structure.
* **TypeScript:** Ensures type safety across the entire codebase.
* **Zustand:** A fast and scalable state management solution (used for `theme.store` and `character.store`).
* **API Routes:** Custom backend endpoints for character data fetching and serving.
* **Theming:** Includes a theme-toggle feature, likely using Tailwind CSS.
* **Modular Structure:** Logic is organized into `app`, `features`, `layouts`, and `shared` directories.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (v16.0.7)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **State Management:** [Zustand](https://zustand-bear.github.io/zustand/) (v5.0.9)
* **HTTP Client:** [Axios](https://axios-http.com/)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/next-starter-template)

<!-- dash-content-start -->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's deployed on Cloudflare Workers as a [static website](https://developers.cloudflare.com/workers/static-assets/).

This template uses [OpenNext](https://opennext.js.org/) via the [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare), which works by taking the Next.js build output and transforming it, so that it can run in Cloudflare Workers.

<!-- dash-content-end -->

Outside of this repo, you can start a new project with this template using [C3](https://developers.cloudflare.com/pages/get-started/c3/) (the `create-cloudflare` CLI):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/next-starter-template
```

A live public deployment of this template is available at [https://next-starter-template.templates.workers.dev](https://next-starter-template.templates.workers.dev)

## Getting Started

First, run:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Create .env file:

```bash 
NEXT_PUBLIC_API_URL=https://rickandmortyapi.com/api 
```

Then run the development server (using the package manager of your choice):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploying To Production

| Command                           | Action                                       |
| :-------------------------------- | :------------------------------------------- |
| `npm run build`                   | Build your production site                   |
| `npm run preview`                 | Preview your build locally, before deploying |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare    |
| `npm wrangler tail`               | View real-time logs for all Workers          |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
