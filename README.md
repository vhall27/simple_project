# Track 1 App - Vite + React + TypeScript + Tailwind CSS + Convex

This project completes the Track 1 core review requirements:
- user types into an input
- clicks a button
- data is saved to a database
- saved data is displayed on the page
- data persists after refresh

## 1. GitHub setup

Create a new GitHub repository, then clone it locally:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

## 2. Create the Vite React app

This project is already structured as a Vite + React + TypeScript app.
If you want to recreate it manually from scratch, the official Vite docs recommend:

```bash
npm create vite@latest track-1-app -- --template react-ts
cd track-1-app
npm install
npm run dev
```

Vite currently requires a modern Node version, so make sure Node is up to date before installing dependencies. citeturn771518search0turn771518search6

## 3. Install Tailwind CSS v3

The project is configured for Tailwind CSS v3, matching your assignment prompt. The Tailwind v3 Vite guide uses `tailwindcss`, `postcss`, and `autoprefixer`, then adds Tailwind directives to the app stylesheet. citeturn771518search1turn771518search13

If rebuilding manually:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

## 4. Important `.gitignore`

This repo includes:

```gitignore
node_modules
.env
.env.local
.env.*.local
dist
.vite
.convex
```

## 5. Set up Convex

Install Convex and start the dev environment:

```bash
npm install convex
npx convex dev
```

The Convex React quickstart for Vite uses a generated deployment URL stored in an environment variable and a React provider wrapping the app. citeturn771518search2turn771518search5turn771518search15

When you run `npx convex dev`, Convex should:
- create the generated files inside `convex/_generated`
- provide a deployment URL
- help set `VITE_CONVEX_URL`

Create a file named `.env.local` in the root of the project and add:

```env
VITE_CONVEX_URL=your_convex_deployment_url_here
```

Then keep `npx convex dev` running in a separate terminal while developing.

## 6. Project structure

```text
track-1-app/
├── convex/
│   ├── quotes.ts
│   └── schema.ts
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 7. Run the app

In one terminal:

```bash
npm install
npx convex dev
```

In another terminal:

```bash
npm run dev
```

## 8. What to test

Make sure all of these work:
- input accepts text
- button submits text
- quote appears on the page
- refreshing the page keeps the quote there

## 9. Push to GitHub

Once it works:

```bash
git add .
git commit -m "Initial full stack feature"
git branch -M main
git push origin main
```

## Notes

- `src/App.tsx` contains the form and display logic.
- `convex/schema.ts` defines the `quotes` table.
- `convex/quotes.ts` defines the mutation and query.
- `src/main.tsx` wraps the app in `ConvexProvider`.

## Official references

- Vite Getting Started: citeturn771518search0
- Tailwind CSS v3 with Vite: citeturn771518search1turn771518search13
- Convex React quickstart: citeturn771518search2turn771518search5
