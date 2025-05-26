import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    pnpm: true,
    vue: {
      overrides: {
        'vue/no-deprecated-slot-attribute': 'off',
      },
    },
  },

)
