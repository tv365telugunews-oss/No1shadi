import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Redirect any accidental imports of `react-router` to `react-router-dom`
      'react-router': path.resolve(__dirname, './node_modules/react-router-dom'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  optimizeDeps: {
    include: ['react-router-dom'],
  },

  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
})

