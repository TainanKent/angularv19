/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      colors: {
        primary: "rgba(var(--c-brand), <alpha-value>)",
        secondary: "rgba(var(--c-brand-next), <alpha-value>)",
        tertiary: "rgba(var(--c-brand-third), <alpha-value>)",
        light: "rgba(var(--c-brand-light), <alpha-value>)",
        dark: "rgba(var(--c-brand-dark), <alpha-value>)",
        danger: "rgba(var(--c-brand-danger), <alpha-value>)",
        // 暗亮色系相關
        text: {
          normal: "rgba(var(--c-text), <alpha-value>)",
          inverse: "rgba(var(--c-text-inverse), <alpha-value>)",
        },
        container: {
          normal: "rgba(var(--c-bg), <alpha-value>)",
          inverse: "rgba(var(--c-bg-inverse), <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
}

