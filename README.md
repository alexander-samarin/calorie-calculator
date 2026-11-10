# Calorie Calculator

A fast, multilingual calorie and macros calculator built with SolidStart. Calculate your daily calorie needs based on BMR (Basal Metabolic Rate) and TDEE (Total Daily Energy Expenditure) using the Mifflin-St Jeor formula.

**Live:** [caloriecalc.cc](https://caloriecalc.cc)

## Features

- **BMR & TDEE Calculation** — Accurate basal metabolism and daily energy expenditure
- **Macros Breakdown** — Proteins, fats, and carbohydrates based on your goals
- **Activity Levels** — From sedentary to 2 workouts per day
- **Goal Settings** — Weight loss, maintenance, or bulk options
- **9 Languages** — RU, EN, UK, BE, PL, DE, FR, ES, IT
- **Theme Switching** — Light, dark, and system themes
- **Data Persistence** — Settings saved in localStorage
- **PWA Ready** — Installable as a progressive web app

## Tech Stack

- [SolidJS](https://www.solidjs.com/) / [SolidStart](https://start.solidjs.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [DaisyUI v5](https://daisyui.com/)
- [Vinxi](https://vinxi.vercel.app/)
- TypeScript

## Getting Started

### Prerequisites

- Node.js >= 22

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Checks

```bash
npm run typecheck   # TypeScript
npm test            # unit tests (Vitest)
```

## Deployment

The app is automatically deployed to GitHub Pages via GitHub Actions on push to `main` branch. Type check and unit tests run first; if either fails, nothing is deployed.

## License

Made with ❤️ for Telegram channel [Zhirno ne budet 🥦](https://t.me/zhirno_ne_budet)
