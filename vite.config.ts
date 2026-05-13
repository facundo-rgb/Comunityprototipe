import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Figma Make asset URLs → local placeholder (repo has no bundled Figma assets). */
function figmaAssetPlaceholderPlugin(): Plugin {
  const prefix = '\0figma-asset:'
  const placeholder = '/placeholders/photo.svg'
  return {
    name: 'figma-asset-placeholder',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) return prefix + id
    },
    load(id) {
      if (id.startsWith(prefix)) {
        return `export default ${JSON.stringify(placeholder)}`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlaceholderPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
