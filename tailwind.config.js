/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    extend: {
      boxShadow: {
        'kolge': '0px 10px 20px 0px rgba(54, 187, 144, 0.28)',
      },
      backgroundColor: {
        'tund': '#020710',
      },
      backgroundImage: {
        'linear': 'linear-gradient(180deg, #020710 0%, #02071000 100%)',
        'ucuncu':'url("https://toka.duckthemes.com/wp-content/uploads/2022/03/bottom-bg-crypto-card.png")',
        'ikinci': 'url("https://toka.duckthemes.com/wp-content/uploads/2022/03/effw6.png")',
      }

    },
  },
  plugins: [],
}

