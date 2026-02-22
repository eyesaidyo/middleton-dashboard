import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'figtree': ['var(--font-figtree)', 'sans-serif'],
        'nunito-sans': ['var(--font-nunito-sans)', 'sans-serif'],
      },
    },
    colors: {
      ...colors,
      'middleton-neon': '#E2F358',
      'middleton-green': '#1F434C',
      'middleton-denim': '#EFEDE9',
      'middleton-pink': '#F7D3D3',
      'middleton-sun': '#FEECCF',
      'middleton-neutral': '#DAD9D9',
    }
  },
}

export default config
