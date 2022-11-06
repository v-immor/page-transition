import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import cp from 'vite-plugin-cp'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@v-immor/page-transition',
      fileName: (mode) => (mode === 'es' ? 'index.js' : `index.${mode}.js`),
    },
    outDir: 'lib',
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-transition-group'],
      output: {
        globals: {
          react: 'react',
          'react-transition-group': 'react-transition-group',
        },
      },
    },
  },

  plugins: [
    dts({ copyDtsFiles: false }),
    cp({
      targets: [
        {
          src: resolve(__dirname, 'src/animation.css'),
          dest: './lib',
        },
      ],
    } as any),
  ],
})
