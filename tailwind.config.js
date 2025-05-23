module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        ring: "hsl(var(--color-ring) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)",
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        background: "hsl(var(--color-background) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}
