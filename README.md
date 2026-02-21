# Blockchain React App

A React application with light and dark theme support.

## Project Structure

```
src/
├── assets/
├── components/
│   ├── layout/
│   └── common/
├── pages/
├── styles/
│   ├── themes/
│   │   ├── light.css
│   │   └── dark.css
│   ├── variables.css
│   └── global.css
├── context/
│   └── ThemeContext.jsx
├── App.jsx
└── main.jsx
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Theme Usage

The app includes a ThemeContext that manages light and dark themes. Use the `useTheme` hook in your components:

```jsx
import { useTheme } from './context/ThemeContext';

const { theme, toggleTheme, setTheme } = useTheme();
```

The theme preference is saved in localStorage and persists across sessions.

