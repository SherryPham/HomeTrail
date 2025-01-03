/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik-Regular', 'san-serif'],
        "rubik-bold":["Rubik-Bold", "san-serif"],
        "rubik-extrabold":["Rubik-ExtraBold", "san-serif"],
        "rubik-medium":["Rubik-Medium", "san-serif"],
        "rubik-semibold":["Rubik-SemiBold", "san-serif"],
        "rubik-light":["Rubik-Light", "san-serif"],
      },
      colors: {
        // "primary": "#FF6A00",
        // "secondary": "#FFA400",
        // "tertiary": "#FFD700",
        // "dark": "#1A1A1A",
        // "light": "#F5F5F5",
        // "white": "#FFFFFF",
        // "black": "#000000",
        "primary": {
          100: '#0061FF0A',
          200: '#0061FF1A',
          300: '#0061FF',
        },
        accent: {
          100: '#FBFBFD',
        },
        black: {
          DEFAULT: '#000000',
          100: '#8C8E98',
          200: '#666876',
          300: '#191d31',
        },
        danger: '#F75555',
      }
    },
  },
  plugins: [],
}