/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./**/*.liquid'],
  theme: {
    extend: {
      boxShadow: {
        up: '0 -4px 6px rgba(0, 0, 0, 0.1)', // カスタム上向きの影
      },
    },
  },
  plugins: [],
};
