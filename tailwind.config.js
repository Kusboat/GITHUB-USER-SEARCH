/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primaryBlue' : '#0079FF',
        'gray-50' : '#F6F8FF',
        'gray-100' : '#697C9A',
        'gray-200' : '#4B6A9B',
        'gray-300' : '#2B3442',
        'gray-500' : '#1E2A47',
        'primaryBlack' : '#141D2F'
      }
    },
    typography:{
      h1 :'26px',
      h2 :'22px' ,
      h3 :'16px',
      h4 :'13px'
    },
    fontFamily:{
      spaceMono:['"Space Mono"'],
    }
  },
  plugins: [],
}

