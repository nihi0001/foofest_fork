/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'Hotpink': '#D500C0',
      'Lightpink': '#FF68E4',
      'White': '#FFF',
      'Navyblue': '#29029F',
      'Darkblue': '#020067',
    },

    extend: {
      fontFamily:{
        'pText':['var(--outfit)', 'sans-serif'],
      },
      fontWeight:{
        'pText': 400,
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
