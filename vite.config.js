import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

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
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [ 'src/index.ts', 'src/metadata.ts' ],
      name: 'myLibraryVueTs',
      formats: [ 'es' ],
      fileName: (format, entryName) => entryName.includes('metadata') ? 'metadata.js' : 'index.js',
    },
    rollupOptions: {
      // make sure to externalize deps that should not be bundled
      // into your library
      input: {
        main: path.resolve(__dirname, 'src/index.ts'),
        metadata: path.resolve(__dirname, 'src/metadata.ts')
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
      '@root': __dirname,
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
