const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#3B81F6",
      white: '#ffffff',
      blue: '#172554',
      gray: '#f5f5f5',
      red: '#f56565',

      text: {
        DEFAULT: "#1F2937",
        light: "#6C7281",
      },
      light: {
        DEFAULT: "#FAFBFC",
        lighter: "#F3F4F6",
      },
    },
    extend: {},
  },
  plugins: [],
}
