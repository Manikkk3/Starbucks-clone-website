/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md:'768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      color: {
        powderblue: 'rgb(176, 224, 230)',
        seagreen: 'rgb(46, 139, 87)',
        gainsboro : 'rgb(220, 220, 220)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        lightBlack: 'hsl(0, 0, 0.31)',
        lightRed: '#dc2626',
      },
    },
  },
  plugins: [],
}
