/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101010',
        heading: '#F2F2F2',
        info: '#f2f2f2cc',
        sub_title: '#f2f2f299',
      },
      backgroundImage: {
        // Example gradient background
        primary_Bg: 'linear-gradient(190deg, #252525, #101010)',
      },
      fontFamily: {
        neuemontreal: [
          '"Neue Montreal"',
          'sans-serif', // Fallback
        ],
      },
    },
  },
  plugins: [],
};
