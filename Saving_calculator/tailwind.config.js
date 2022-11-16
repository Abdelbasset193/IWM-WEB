/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["./index.html" , "./node_modules/flowbite/**/*.js"
  content: ['index.html','./src/**/*.html', './node_modules/flowbite/**/*.js'],



  theme: {
    extend: {},
    colors:{
      'primary' :'#F5F5F7',
      'secondary': '#34C648',
      'title': '#7C8899',
      'byad': '#FFF',
      'ktba': '#000',
      'limouni':'#F6A828'
    },
    margin:{
     'sm' : '8px',
     'md': '16px',
      'lg': '24px',
      'xl': '48px',
    },
    padding:{
      'sm' : '8px',
      'md': '16px',
      'lg': '24px',
       'xl': '48px',
     }
  },
  plugins: [
    require('flowbite/plugin')

  ],
}
