# D Rose Compliance (Capacitor + Vite + React)

Minimal, under-100-files starter that builds to `dist/` and works with Capacitor 6.

## Quickstart
```bash
npm install
npm run dev
npm run build
npx cap sync
npx cap open ios   # or: npx cap open android
```

## Files included
- `package.json` (scripts & deps)
- `vite.config.ts` (outputs to `dist`)
- `tsconfig.json`
- `capacitor.config.json` (JSON to avoid TS requirement)
- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `.gitignore`
- `README.md`

## Notes
- Native `ios/` and `android/` folders are intentionally **not** included; Capacitor generates them.
- If deploying to Vercel, set **Build Command**: `npm run build` and **Output Directory**: `dist`. If your repo root isn't this folder, set the project's **Root Directory** accordingly.
