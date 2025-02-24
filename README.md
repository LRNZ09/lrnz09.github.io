[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

## Getting Started

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
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

- [Astro](https://astro.build)
- [TypeScript](https://www.typescriptlang.org)
- [Preact](https://preactjs.com/)
- [React95](https://github.com/React95/React95)
- [Biome](http://biomejs.dev)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `http://localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment

The project is deployed using GitHub Actions, which automatically build and publish the static site using GitHub Pages. The workflow file is located at `.github/workflows/deploy.yml`.
Every push to the `main` branch will trigger the deployment process.
For more details, refer to the [Astro documentation](https://docs.astro.build/en/guides/deploy/github/).

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
