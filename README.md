# react-quick-start

This project is a React application setup with React, React-router v7, Tailwind v4, ESLint(latest), Prettier, and Husky for linting, code formatting, and pre-commit hooks.

## Features

- **React**: Latest version of React for building user interfaces.
- **Vite**: A fast build tool for development and production.
- **React Router Dom**: latest version of React router dom.
- **TailwindCSS**: latest version of tailwind CSS (v4).
- **ESLint**: Linting to enforce code quality standards.
- **Prettier**: Automated code formatting.
- **Husky**: Git hooks to ensure code quality checks are applied before commits.
- **Lint-Staged**: Runs linters on pre-committed files to optimize linting performance.

## Setup

Clone the repository to your local machine.

```bash
git clone https://github.com/akashpradhan-dev/react-quick-start.git
```

2. Install dependencies
   Install the project dependencies using npm or yarn.

```bash
npm install
# or
yarn install
```

3. Start the development server
   Start the development server using Vite.

```bash
npm run dev
# or
yarn dev
```

4. Check for format: Checks for any code formatting issues using Prettier.

```bash
npm run format
# or
yarn format
```

5. format:fix: Automatically formats the code using Prettier.

```bash
npm run format:fix
# or
yarn format:fix
```

6. lint: Checks for any linting issues using ESLint.

```bash
npm run lint
# or
yarn lint
```

7. lint:fix: Automatically fixes linting issues using ESLint.

```bash
npm run lint:fix
# or
yarn lint:fix
```

8. husky: To check the husky working or not.

```bash
npx lint-staged
# or
yarn lint-staged
```

### Eslint Rules

if you want to add or remove any rules from eslint then you can do it from eslint.config.js file.

- To ignore any file or folder from eslint then you can add it in ignor array in eslint.config.js file.

```base
 { ignores: ['dist', 'dist/**', 'eslint.config.js', 'your path name'] },
```

- for any query or issue you can contact me on linkedin click here(https://www.linkedin.com/in/akash-pradhan/)
