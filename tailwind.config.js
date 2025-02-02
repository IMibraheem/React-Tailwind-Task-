/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize :{
        '18':'18px',
        'heading40': '40px',
      },
      fontWeight :{
        '400' : 400,
      },
      textColor :{
        'HeadingClr': '#212529',
        'ParaClr': '#424649',
      },
    },
   
  },
  plugins: [],
}

