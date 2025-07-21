/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{css,scss}',
    './src/**/*.module.css',
    './components/**/*.module.css',
    './app/**/*.module.css',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'onyx': '#353839',
        'darkgrey': '#1a1a1a',
        'grey': '#f1f5f9',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '54': ['54px', { lineHeight: '1.1' }],
        '42': ['42px', { lineHeight: '1.1' }],
        '24': ['24px', { lineHeight: '1.3' }],
        '20': ['20px', { lineHeight: '1.4' }],
        '16': ['16px', { lineHeight: '1.5' }],
      },
      spacing: {
        '25': '6.25rem',
        '35': '8.75rem',
      },
      maxWidth: {
        '700': '43.75rem',
        '520': '32.5rem',
        '480': '30rem',
        '420': '26.25rem',
        '360': '22.5rem',
      },
      borderRadius: {
        '25': '1.5625rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 