# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js

  # Techcorp - Dashboard (React + TypeScript + Vite)

  Ceci est le front-end de l'application "Techcorp" — un tableau de bord construit avec React, TypeScript, Vite et TailwindCSS.

  ## Résumé

  Application SPA pour afficher des statistiques et gérer des outils. Le projet utilise Vite pour le dev/build, TypeScript pour le typage, TailwindCSS pour le style, et ESLint pour la qualité de code.

  ## Stack technique

  - Frontend: React 19 + TypeScript
  - Bundler: Vite
  - Styles: TailwindCSS + PostCSS
  - Linting: ESLint
  - Dépendances utilitaires: Headless UI, lucide-react
  - Dev: TypeScript, Vite plugin React

  ## Prérequis

  - Node.js (version récente)
  - npm ou yarn

  ## Installation

  1. Cloner le dépôt
  2. Installer les dépendances

  ```bash
  npm install
  # ou
  # yarn
  ```

  ## Scripts disponibles

  Les scripts définis dans `package.json` :

  - `npm run dev` — démarre le serveur de développement Vite
  - `npm run build` — compile TypeScript (`tsc -b`) puis construit l'app avec Vite
  - `npm run preview` — prévisualise la build locale (`vite preview`)
  - `npm run lint` — lance ESLint

  ## Structure du projet

  Arborescence principale (fichiers et dossiers importants) :

  - `index.html` — point d'entrée HTML
  - `vite.config.ts` — configuration Vite
  - `tsconfig.*.json` — configurations TypeScript
  - `tailwind.config.js`, `postcss.config.js` — configuration Tailwind/PostCSS
  - `src/` — code source principal
    - `main.tsx` — point d'entrée React
    - `App.tsx` — container principal
    - `index.css`, `App.css` — styles globaux
    - `assets/` — images/icônes
    - `components/` — composants réutilisables
      - `Navbar.tsx` — barre de navigation
      - `StatCard.tsx` — carte de statistique
      - `ToolsTable.tsx` — tableau d'outils
    - `hooks/` — hooks personnalisés
      - `useTools.ts` — logique liée aux outils
    - `pages/` — vues/pages de l'application
      - `Analytics.tsx`, `Dashboard.tsx`, `Settings.tsx`, `Tools.tsx`
    - `services/` — appels API et services
      - `tools.service.ts` — service pour récupérer/mettre à jour les outils
    - `utils/` — fonctions utilitaires

  ## API / mock

  Le projet contient `json-server` en dépendance — il peut servir de mock API rapide pendant le développement si besoin.

  ## Développement

  Lancer le serveur de développement :

  ```bash
  npm run dev
  ```

  Ouvrir `http://localhost:5173` (ou le port indiqué) pour voir l'application.

  ## Build & Preview

  ```bash
  npm run build
  npm run preview
  ```

  ## Styles

  TailwindCSS est configuré via `tailwind.config.js` et `postcss.config.js`. Les styles globaux sont dans `src/index.css` et `src/App.css`.

  ## Points importants du code

  - `src/components` : composants UI réutilisables (Navbar, StatCard, ToolsTable).
  - `src/pages` : vues principales du tableau de bord (Analytics, Dashboard, Settings, Tools).
  - `src/hooks/useTools.ts` : hook pour récupération/gestion des outils, utilisé par la page `Tools` et `ToolsTable`.
  - `src/services/tools.service.ts` : centralise les appels réseau liés aux outils.

  ## Tests

  Pas de tests automatisés fournis dans ce template. Tests qui seront effectués avec `vitest` par la suite.

 ## Améliorations possibles
 Ajout de filtres et pagination
 Modal pour ajouter un outil
 Vrai Dark mode
 Ajout de tests unitaires