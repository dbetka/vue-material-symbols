import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import fs from 'fs'

export default defineConfig({
  root: 'demo',
  plugins: [
    vuePlugin(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'public',
          sourceMap: false,
          declaration: false,
          declarationMap: false,
        },
      },
      exclude: [ 'vite.config.ts' ]
    }),
  ],
  build: {
    emptyOutDir: true,
    outDir: 'public',
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
})
