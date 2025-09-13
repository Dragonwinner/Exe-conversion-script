# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# MyTyping - Comprehensive Typing Master Desktop App

MyTyping is a desktop application built using Electron and React. It provides a user-friendly interface to enhance typing skills. This guide explains how to set up, develop, and package the application into an executable file.

---

## Features
- Desktop application powered by Electron.
- Frontend built with React and styled using CSS.
- Development and build process managed by Vite.
- Easily package the app into a `.exe` file using `electron-builder`.

---

## Prerequisites
- Node.js (v16 or higher)
- npm (Node Package Manager)
- Git (optional, for version control)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-typing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Preview the app in Electron:
   ```bash
   npm run electron
   ```

---

## Build the App

1. Build the React app:
   ```bash
   npm run build
   ```

   This generates the production-ready files in the `dist/` directory.

---

## Package the App into `.exe`

1. Install `electron-builder` globally (if not already installed):
   ```bash
   npm install -g electron-builder
   ```

2. Package the app:
   ```bash
   npm run dist
   ```

   The `.exe` file will be generated in the `dist/` directory under the `win-unpacked` folder.

---

## Creating a GitHub Repository

To create a GitHub repository and push your project, follow these steps:

1. **Initialize a Git repository locally**:
   ```bash
   git init
   ```

2. **Add all files to the repository**:
   ```bash
   git add .
   ```

3. **Commit the changes**:
   ```bash
   git commit -m "Initial commit"
   ```

4. **Create a new repository on GitHub**:
   Use the GitHub CLI (if installed) to create a repository:
   ```bash
   gh repo create <repository-name> --public --source=. --push
   ```
   Replace `<repository-name>` with your desired repository name.

   If you don't have the GitHub CLI, create the repository manually on GitHub and copy the repository URL.

5. **Add the remote origin**:
   ```bash
   git remote add origin https://github.com/<username>/<repository-name>.git
   ```
   Replace `<username>` with your GitHub username and `<repository-name>` with the repository name.

6. **Push the changes to GitHub**:
   ```bash
   git push -u origin main
   ```

---

## Project Structure

```
my-typing/
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Styles for the app
│   └── assets/          # Static assets (e.g., images)
├── public/              # Public assets
├── main.cjs             # Electron main process
├── preload.cjs          # Preload script for Electron
├── vite.config.js       # Vite configuration
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the React app for production.
- `npm run electron`: Run the app in Electron.
- `npm run dist`: Package the app into an executable file.

---

## Dependencies

- `react`: Frontend library.
- `react-dom`: React DOM renderer.
- `electron`: Framework for building desktop apps.
- `vite`: Build tool for modern web projects.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
