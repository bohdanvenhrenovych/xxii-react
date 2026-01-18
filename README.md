# XXII Chat Frontend

A terminal-style chat application built with Vite, React 19, and TypeScript. Features a local-first architecture with offline support using IndexedDB.

## Features

- 🖥️ Terminal-inspired UI with monospace fonts and minimalist design
- 💬 Real-time chat with message threading
- 📰 Feed system for posts and updates
- 📁 File attachments and folder organization
- 🔍 Full-text search across messages, posts, and files
- ⌨️ Keyboard-first navigation
- 💾 Local-first architecture with offline support
- 🔄 Optimistic updates with background sync

## Tech Stack

- **Build Tool**: Vite 7+
- **Framework**: React 19
- **Language**: TypeScript 5.7+
- **Router**: React Router v7
- **State Management**: TanStack Query
- **UI**: Tailwind CSS 4
- **Storage**: IndexedDB (via idb)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/    # Reusable React components
├── routes/        # Route components
├── lib/           # Utilities and helpers
├── styles/        # Global styles and CSS
├── router.tsx     # React Router configuration
└── main.tsx       # Application entry point
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code

## Learn More

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [TanStack Query](https://tanstack.com/query)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
