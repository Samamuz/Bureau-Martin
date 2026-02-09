<div align="center">

# 🏗️ Bureau Martin — Architecture

**Site vitrine d'un bureau d'architecture suisse axé sur la durabilité, la sobriété et l'intégration paysagère.**

[Voir le site](https://bureau-martin.ch/) · [Signaler un bug](https://github.com/bureau-martin/website/issues) · [Proposer une amélioration](https://github.com/bureau-martin/website/issues)

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/Licence-Tous_droits_réservés-red)

</div>

---

## Sommaire

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Scripts disponibles](#scripts-disponibles)
- [Architecture du projet](#architecture-du-projet)
- [Composants](#composants)
- [Personnalisation](#personnalisation)
- [Performance](#performance)
- [Accessibilité](#accessibilité)
- [Déploiement](#déploiement)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## Aperçu

Bureau Martin est le site portfolio d'un bureau d'architecture basé à Lausanne, Suisse. Il présente la philosophie du bureau, ses projets, ses prestations et permet aux visiteurs de prendre contact directement via un formulaire intégré.

Le site est conçu dans un esprit de sobriété visuelle qui reflète les valeurs architecturales du bureau : fonctionnalité, durabilité et précision.

---

## Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| **Hero avec parallaxe** | Section d'accueil immersive avec effet de parallaxe fluide au scroll |
| **Navigation adaptative** | Navbar fixe transparente sur fond héro, opaque au scroll, menu hamburger mobile animé |
| **Portfolio projets** | Grille de projets avec hover interactions et gestion gracieuse des erreurs d'images |
| **Formulaire de contact** | Formulaire complet avec validation, états de chargement et confirmation |
| **Carte interactive** | Intégration OpenStreetMap avec effet grayscale/couleur au survol |
| **Modales légales** | Mentions légales et politique de confidentialité accessibles via le footer |
| **Scroll fluide** | Navigation intra-page avec offset dynamique pour le header fixe |
| **Design responsive** | Adapté mobile, tablette et desktop |
| **SEO optimisé** | Balises Open Graph, Twitter Cards, meta descriptions |

---

## Stack technique

| Technologie | Version | Rôle |
|---|---|---|
| [React](https://react.dev/) | 19.2 | Bibliothèque UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.8 | Typage statique |
| [Vite](https://vite.dev/) | 6.2 | Bundler & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x (CDN) | Framework CSS utilitaire |
| [Lucide React](https://lucide.dev/) | 0.563 | Icônes SVG |
| [Inter](https://rsms.me/inter/) | Variable | Typographie (Google Fonts) |

---

## Prérequis

- **Node.js** >= 18.x ([Télécharger](https://nodejs.org/))
- **npm** >= 9.x (inclus avec Node.js)

---

## Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/bureau-martin/website.git
cd bureau-martin

# 2. Installer les dépendances
npm install

# 3. (Optionnel) Configurer les variables d'environnement
#    Créer un fichier .env.local à la racine si nécessaire
cp .env.example .env.local

# 4. Lancer le serveur de développement
npm run dev
```

Le site sera disponible sur **http://localhost:5173**.

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement Vite (port 5173) |
| `npm run build` | Compile le projet pour la production dans `dist/` |
| `npm run preview` | Prévisualise le build de production localement |

---

## Architecture du projet

```
bureau-martin/
├── components/           # Composants React
│   ├── About.tsx         # Section « À propos »
│   ├── Contact.tsx       # Formulaire de contact + carte
│   ├── Footer.tsx        # Pied de page + modales légales
│   ├── Hero.tsx          # Section héro avec parallaxe
│   ├── Method.tsx        # Méthodologie en 4 étapes
│   ├── Navbar.tsx        # Navigation responsive
│   ├── Projects.tsx      # Grille de projets
│   ├── Section.tsx       # Composant wrapper réutilisable
│   ├── Services.tsx      # Prestations et domaines
│   ├── SplashScreen.tsx  # (Archivé — non utilisé)
│   ├── Sustainability.tsx# Engagement durabilité
│   ├── Team.tsx          # Présentation de l'équipe
│   └── Vision.tsx        # Valeurs et vision
├── App.tsx               # Composant racine de l'application
├── index.tsx             # Point d'entrée React
├── index.html            # Template HTML (SEO, fonts, Tailwind)
├── index.css             # Styles globaux
├── types.ts              # Interfaces TypeScript partagées
├── vite.config.ts        # Configuration Vite
├── tsconfig.json         # Configuration TypeScript
├── package.json          # Dépendances et scripts
└── metadata.json         # Métadonnées du projet
```

---

## Composants

L'application suit une architecture **component-based** simple et lisible :

### `Section` — Composant wrapper

Composant réutilisable encapsulant la mise en page de chaque section (padding, container, titre avec barre latérale, fond alternant blanc/gris).

### `Navbar` — Navigation intelligente

- Transparente en haut de page avec texte blanc
- Fond blanc avec blur au scroll
- Menu mobile avec animations CSS séquentielles
- Scroll fluide vers les ancres avec compensation du header fixe

### `Hero` — Section d'accueil

- Effet parallaxe performant via `requestAnimationFrame`
- Image de fond avec overlay
- Optimisation LCP avec `loading="eager"`

### `Projects` — Portfolio

- Cartes de projets avec hover scale + flèche animée
- Fallback gracieux si une image ne charge pas (icône `ImageOff`)
- Données typées via l'interface `Project`

### `Contact` — Formulaire & carte

- Machine à états : `idle` → `submitting` → `success`
- Carte OpenStreetMap intégrée avec filtre grayscale interactif
- Validation HTML5 native

### `Footer` — Pied de page

- Modales accessibles (fermeture Escape, overlay cliquable)
- Mentions légales et politique de données

---

## Personnalisation

### Couleurs

Le thème de couleurs utilise la palette `neutral` de Tailwind avec une extension personnalisée :

```js
// index.html — Configuration Tailwind
tailwind.config = {
  theme: {
    extend: {
      colors: {
        neutral: {
          850: '#1f1f1f',
        }
      }
    }
  }
}
```

### Typographie

La police **Inter** est chargée via Google Fonts avec les graisses 300 (light), 400 (regular), 500 (medium) et 600 (semibold).

### Contenu

Les données des projets, services et étapes méthodologiques sont définies directement dans leurs composants respectifs. Pour les modifier, éditez :

- `components/Projects.tsx` — Liste des projets
- `components/Services.tsx` — Prestations et domaines d'intervention
- `components/Method.tsx` — Étapes de la méthode de travail
- `components/Contact.tsx` — Coordonnées et informations de contact

---

## Performance

Le site intègre plusieurs optimisations de performance :

- **Parallaxe optimisée** — Utilisation de `requestAnimationFrame` avec throttling pour le scroll
- **`will-change: transform`** — Hint GPU pour les animations de parallaxe
- **`transform: translate3d`** — Activation de l'accélération matérielle
- **Lazy loading** — Images du portfolio chargées en `loading="lazy"`
- **LCP optimisé** — Image hero en `loading="eager"` pour le Largest Contentful Paint
- **Tailwind CDN** — Pas de build CSS, chargement instantané en développement
- **Vite** — HMR instantané et tree-shaking en production

---

## Accessibilité

- Attributs `aria-label` sur les boutons et liens interactifs
- `aria-modal` et `role="dialog"` sur les modales
- Navigation au clavier (fermeture des modales via `Escape`)
- Contraste suffisant entre texte et arrière-plan
- Texte de sélection personnalisé (fond noir, texte blanc)
- Attributs `alt` descriptifs sur les images
- HTML sémantique (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)

---

## Déploiement

### Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `dist/`. Ce dossier peut être déployé sur n'importe quel hébergeur de fichiers statiques.

### Plateformes recommandées

| Plateforme | Commande / Configuration |
|---|---|
| [Vercel](https://vercel.com/) | Framework preset: Vite — déploiement automatique |
| [Netlify](https://www.netlify.com/) | Build: `npm run build` · Publish: `dist` |
| [Cloudflare Pages](https://pages.cloudflare.com/) | Build: `npm run build` · Output: `dist` |
| [GitHub Pages](https://pages.github.com/) | Via GitHub Actions avec build Vite |

### Variables d'environnement

| Variable | Description | Obligatoire |
|---|---|---|
| `GEMINI_API_KEY` | Clé API Gemini (si fonctionnalités IA activées) | Non |

Les variables d'environnement doivent être définies dans un fichier `.env.local` à la racine du projet (non versionné).

---

## Contribuer

1. **Forker** le dépôt
2. **Créer** une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`)
3. **Commiter** vos changements (`git commit -m "feat: ajout de ma fonctionnalité"`)
4. **Pousser** la branche (`git push origin feature/ma-fonctionnalite`)
5. **Ouvrir** une Pull Request

> Merci de suivre les [Conventional Commits](https://www.conventionalcommits.org/) pour les messages de commit.

---

## Licence

Ce projet est la propriété de **Bureau Martin**. Tous droits réservés.

L'ensemble du code source et du contenu relève de la législation suisse et internationale sur le droit d'auteur et la propriété intellectuelle.

---

<div align="center">

**Bureau Martin** · Rue du Lac 12, 1000 Lausanne · [info@bureau-martin.ch](mailto:info@bureau-martin.ch) · +41 21 000 00 00

</div>
