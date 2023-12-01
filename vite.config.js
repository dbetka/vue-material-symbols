import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import fs from 'fs'

export default defineConfig({
  plugins: [
    vuePlugin(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: [ 'src/components/**/*.vue' ],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: [ 'vite.config.ts' ]
    }),
    {
      closeBundle () {
        const file = fs.readFileSync('./node_modules/material-symbols/index.css', 'utf8')
        const newFile = file.replace(/url\("\.\/material-symbols/g, 'url("material-symbols/material-symbols')
        fs.writeFileSync('./dist/index.css', newFile, 'utf8')
      }
    }
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'src/index.ts',
      name: 'myLibraryVueTs',
      formats: [ 'es', 'cjs' ],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: path.resolve(__dirname, 'src/index.ts')
      },
      external: [ 'vue' ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') return 'index.css'
          return assetInfo.name
        },
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
