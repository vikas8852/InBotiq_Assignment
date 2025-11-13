# InBotiq_Assignment

A full-stack web application featuring secure role-based authentication, allowing Users and Admins to sign up, log in, and access customized dashboards tailored to their roles.

## 🌐 Live Preview

The project is live and accessible here:  
🔗 **[Visit Deployed App →](https://in-botiq-assignment.vercel.app/)**

Experience the full-stack role-based authentication system in action.


## Table of Contents
- [Project overview](#project-overview)
- [Tech stack](#tech-stack)
- [Repository structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Environment variables](#environment-variables)
- [Linting & formatting](#linting--formatting)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project overview

This repository was created as an assignment for InBotiq. It is primarily written in TypeScript (~95% of code) with small amounts of CSS and JavaScript. Replace or expand the sections below with project-specific details (purpose, features, architecture) as needed.

## Tech stack
## Backend
- Node.js with Express
- TypeScript
- PostgreSQL with Prisma ORM
- JWT for authentication
- bcrypt for password hashing
- CORS enabled
## Frontend
- Next.js 16 with App Router
- TypeScript
- TailwindCSS for styling
- React hooks for state management
- Language composition (approximate):
- TypeScript: 95.5%
- CSS: 2.9%
- JavaScript: 1.6%


## Prerequisites
- Node.js (recommend v16 or later)
- npm, yarn, or pnpm

## Getting started
1. Clone the repository

   git clone https://github.com/vikas8852/InBotiq_Assignment.git
   cd InBotiq_Assignment

2. Install dependencies

   npm install
   # or
   yarn
   # or
   pnpm install

3. Start the development server (if applicable)

   npm run dev

4. Build for production

   npm run build

5. Run the production build (if applicable)

   npm start

## Available scripts
Adjust these to match the scripts in package.json. Common scripts:

- npm run dev        # start development server / watch mode
- npm run build      # build production assets
- npm start          # run the built app
- npm test           # run test suite
- npm run lint       # run linter
- npm run format     # format code with Prettier

To see exact scripts available, open package.json.

## Environment variables
 - the project uses environment variables, create a .env file in the project root and add keys there. Example:

- REACT_APP_API_URL=https://api.example.com
- PORT=3000

- Do not commit secrets or credentials. Add .env to .gitignore.

Follow the repository's coding style and TypeScript configuration.

## Deployment
## Backend Deployment (Render/Railway)
- Render
- Create account at render.com
- Create new Web Service
- Connect your GitHub repository
- Configure:
- Build Command: cd backend && npm install && npm run build && npx prisma generate
- Start Command: cd backend && npm start
   Add environment variables from .env.example
- Deploy
- Railway
- Create account at railway.app
- Create new project from GitHub repo
- Configure:
- Root Directory: backend
- Build Command: npm install && npm run build && npx prisma generate
- Start Command: npm start
- Add environment variables
- Deploy
## Frontend Deployment (Vercel/Netlify)
- Vercel (Recommended)
- Create account at vercel.com
- Import project from GitHub
- Configure:
- Framework Preset: Next.js
- Root Directory: frontend
- Add environment variable:
- NEXT_PUBLIC_API_URL: Your deployed backend URL
- Deploy
- Netlify
- Create account at netlify.com
- Import project from GitHub
- Configure:
- Base directory: frontend
- Build command: npm run build
- Publish directory: .next
- Add environment variable:
- NEXT_PUBLIC_API_URL: Your deployed backend URL
- Deploy
Typical flow:
1. Build the app: npm run build
2. Deploy the contents of the build output folder or connect the GitHub repo to the hosting provider.

## Contributing
Contributions are welcome. Suggested workflow:
1. Fork the repository
2. Create a feature branch: git checkout -b feature/my-feature
3. Commit your changes with clear messages
4. Push the branch and open a pull request

Please include tests for new features and follow existing code style rules.

## License
This project is provided under the MIT License. See the LICENSE file for details.

MIT © 2025 vikas8852

## Contact
- GitHub: https://github.com/vikas8852
