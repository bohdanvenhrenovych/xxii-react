import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig(({ command }) => {
  const shouldIncludeDevtools = command === 'serve'

  return {
    plugins: [
      ...(shouldIncludeDevtools ? [devtools()] : []),
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
      viteReact(),
    ],
  }
})

export default config
