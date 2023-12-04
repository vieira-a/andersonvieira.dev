import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          primary: '#212121',
          secondary: '#e2e2e2'
        },
        purple: {
          primary: '#6a5e80',
          light: '#caafff',
          secondary: '#f7f7f7'
        }
      }
    },
  },
  plugins: [],
}
export default config
