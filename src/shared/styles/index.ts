import { createStitches } from '@stitches/react'

export const { styled, css, config, globalCss } = createStitches({
  theme: {
    colors: {
      light: '#ffffff',
      dark: '#1a1a1a',
      bgColor: '#242424',
    },

    fonts: {
      inter: 'Inter, sans-serif',
    },

    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
})
