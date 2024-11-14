/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'companyRed': '#C43737',
        'companyWhite': '#ffffff',
        'companyOrange': '#ffae71',
        'companyLightRed': '#fbefef',
        'companyLightGrey': '#f5f5f5',
        'companyDarkGrey': '#272727',
        'companyGrey': '#5c5c5c',
      },
      
      fontFamily: {
        "Nunito": ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

