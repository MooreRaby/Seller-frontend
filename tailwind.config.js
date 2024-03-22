/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': 'var(--body)',
        'body-text': 'var(--text)',
        'widget': 'var(--widget)',
        'header': 'var(--header)',
        'border': 'var(--border)',
        'input-border': 'var(--input-border)',
        'input-bg': 'var(--input-bg)',
        'highlight': 'var(--highlight)',
        'highlight-inverse': 'var(--highlight-inverse)',
        'accent': 'var(--accent)',
        'red': 'var(--red)',
        'green': 'var(--green)',
        'green-darker': '#02A189',
        'orange': 'var(--orange)',
        'yellow': 'var(--yellow)',
        'gray': 'var(--gray)',
        'gray-red': 'var(--text-dark)',
      },
      fontFamily: {
        'body': 'var(--body-font)',
        'heading': 'var(--heading-font)',
      },
      screens: {
        '2xs': '375px',
        'xs': '414px',
        '3xl': '1366px',
        '4xl': '1920px',
        '5xl': '2048px',
      },
      transitionDuration: {
        'DEFAULT': '300ms',
      },
      borderColor: {
        'DEFAULT': 'var(--border)',
      },
      boxShadow: {
        'DEFAULT': 'var(--shadow)',
        'banner': '0 2px 13px rgba(0, 54, 139, 0.44)',
        'switch': 'inset 0 1px 3px rgba(170, 170, 183, 0.57)',
        'switch-dark': 'inset 0 1px 3px rgba(2, 2, 6, 0.57)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}