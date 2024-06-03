/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}", // Important: Include Storybook files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
