/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          'white': '#FFFFFE',
          'light-grey': '#EFF0F3',
          'light-grey-2' : '#E4E5E9',
          'grey': '#C0C0C0',
          'dark-grey': '#9A9494',
          'black': '#2B2C34',
          'blue': '#6246EA'
        },
        fontFamily: {
            'sans': ['Plus Jakarta Sans', 'sans-serif'],
        },
    },
  },
  plugins: [],
}
