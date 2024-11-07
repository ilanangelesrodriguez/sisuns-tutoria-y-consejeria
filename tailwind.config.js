import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'solid-92B7AD': '#92B7AD', // define tu color personalizado aquí
        'solid-C7D4D8': '#C7D4D8', // define tu color personalizado aquí
        'solid-ABBFC6': '#ABBFC6', // define tu color personalizado aquí
        'solid-41B3A4': '#41B3A4', // define tu color personalizado aquí
        'wo-41B3A4': 'rgb(65,179,164, 0.40)',
        'solid-50AB91': '#50AB91', // define tu color personalizado aquí
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
 plugins: [nextui()],
}