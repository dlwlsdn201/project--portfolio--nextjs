/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
    // './pages/*.{tsx,jsx}',
    // './**/*.{html,js,jsx,ts,tsx}'
  ],
  // mode: 'jit',
  // purge: [],
  // darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['sans-serif'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
    screens: {
      // min-width
      mobile: '320px',
      tablet: '768px',
      laptop: '1200px',
      desktop: '1536px',
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
};
