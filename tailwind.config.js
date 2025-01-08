/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

    theme: {
      extend: {
        backgroundImage: {
          'dots': `
            linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            var(--dot-color)
          `,
        },
      },
    },
    plugins: [],
 
}

