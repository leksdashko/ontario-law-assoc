/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    colors: {
      transparent: 'transparent',
      body: '#F5F5F5',
			base: '#6E6E6E',
			dark: '#181817',
			pink: '#FA207A',
			'pink-light': '#ff72ad',
      'white': '#ffffff',
      'purple': '#341197',
    },
		fontSize: {
      sm: ['18px', '22px'],
      base: ['22px', '24px'],
			'base-lg': ['23px', '26px'],
			md: ['30px', '44px'],
			'base-md': ['36px', '30px'],
			lg: ['56px', '70px'],
			'7xl': ['82px','72px']
    },
		maxWidth: {
      '8xl': '1350px',
    }
  },
  plugins: [
		
  ],
}