[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![Deploy static content to Pages](https://github.com/LRNZ09/lrnz09.github.io/actions/workflows/static.yml/badge.svg)](https://github.com/LRNZ09/lrnz09.github.io/actions/workflows/static.yml)

---

# 🐬 Welcome

*Where retro meets futuristic — an immersive passage into vaporwave aesthetics.*

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

## Overview

This project, designed as a hybrid portfolio and experimental canvas, blends vintage aesthetics with modern web practices to craft a digital narrative that conveys my unique story.

## Features

### 🌴 Digital Showcase

Navigate through an immersive environment and connect with my broader online presence through integrated social channels that offer deeper insights into my professional and creative journey.

### 📼 Retro-Future Synthesis

Each element is designed to highlight my technical and artistic capabilities and represents my ongoing exploration of how nostalgia and innovation can coexist in cyber realms.

### ✨ Enter the Dreamscape

Curious visitors may explore the website and uncover playful easter eggs hidden throughout the experience, rewarding those who venture beyond the obvious.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [Preact](https://preactjs.com/)
- [Vite](https://vitejs.dev/)
- [React95](https://github.com/React95/React95)
- [Biome](http://biomejs.dev)

## Installation

Follow these steps to get the project running locally:

1. **Clone the repository:**

   ```bash
   gh repo clone LRNZ09/lrnz09.github.io
   cd lrnz09.github.io
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will launch the site locally with hot-reloading enabled.

## Development

The project is organized as follows:

```
my-portfolio/
├── public/               # Static assets (images, fonts, etc.)
├── src/
│   ├── components/       # Reusable components
│   ├── app.tsx           # Main application
│   └── index.tsx         # Project entrypoint
├── vite.config.ts         # Vite configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## Deployment

The project is deployed using GitHub Actions, which automatically build and publish the static site using GitHub Pages. The workflow file is located at `.github/workflows/static.yml`.
Every push to the `main` branch will trigger the deployment process.
For more details, refer to the [Vite documentation](https://vite.dev/guide/static-deploy.html#github-pages).

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
