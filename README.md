# React Project Setup with React, React router, Tailwind, Husky, ESLint, Prettier, and Lint-staged

```bash
npx react-easy-setup
```

This is a custom React(vite) project setup that integrates **Husky** for Git hooks, **ESLint** for code linting, **Prettier** for code formatting, and **Lint-staged** for efficient linting and formatting on staged files only. This setup ensures high code quality and prevents poor-quality code from being committed to your repository.

## Features

- **React Project Setup**: Quickly set up a React(Vite) project with either JavaScript or TypeScript.
- **Husky**: Automatically runs Git hooks (e.g., `pre-commit`) to ensure code quality before committing.
- **ESLint**: Enforces coding standards and catches potential errors in your JavaScript or TypeScript code.
- **Prettier**: Formats the code automatically to maintain consistent style.
- **Lint-staged**: Only runs linting and formatting on staged files to optimize your workflow.
- **Pre-commit Hook**: Automatically runs linting and formatting tasks before committing code.

## Features

&nbsp; &nbsp; ✓ Language - [ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)<br>
&nbsp; &nbsp; ✓ Styling - [Tailwind](http://sass-lang.com/)<br>
&nbsp; &nbsp; ✓ React Router v7 - [React Router](https://reactrouter.com/start/library/installation)<br>
&nbsp; &nbsp; ✓ Eslint - [Eslint](https://eslint.org/)<br>
&nbsp; &nbsp; ✓ Husky - [Husky](https://typicode.github.io/husky/)<br>

## Application Structure

```bash
├── dist/
├── src/
│   ├── assets/
│   ├── components/
│   ├── page/
│   ├── router/
│   └── index.html
│   └── index.css
└──package.json
```

## Prerequisites

Ensure you have the following tools installed on your system:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Git**: [Download Git](https://git-scm.com/)

## Quick Start (Automatic Setup via `npx`)

To set up the project automatically with all necessary configurations, run the following command:

```bash
npx react-easy-setup
```

### Manual setup

```base
git clone https://github.com/akashpradhan-dev/react-quick-start
```

## Commands

- Automatically fixes ESLint issues in your code

```bash
npm run lint:fix
```

- Check lint issues

```bash
npm run lint
```

- Automatically fixes Prettier formatting issues in your code.

```bash
npm run format:fix
```

- Check format

```bash
npm run format
```

## Change configuration ESLint: add or disable rule in eslint.config.js file in the root of your project:

```bash
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
      'react/no-unknown-property': 'off',
      //Add new rule here
    },
```
