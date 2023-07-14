/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "app-text": "var(--foreground)",
      },
      backgroundColor: {
        "app-body": "var(--background-body)",
        "app-paper": "var(--background-paper)",
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
