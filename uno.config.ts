import { defineConfig, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.css/, /\.html/],
    },
  },
  presets: [
    presetUno({
      variablePrefix: 'editor-',
    }),
  ],
  transformers: [transformerDirectives()],
})
