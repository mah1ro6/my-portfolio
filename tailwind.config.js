module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '864px' },
      sm: { max: '414px' },
    },
    extend: {},
    fontFamily: {
      body: [
        'Helvetica',
        '游ゴシック',
        'Yu Gothic',
        'YuGothic',
        'HiraKakuProN-W3',
        'メイリオ',
        'Meiryo',
        'sans-serif',
      ],
      top: ['Lato', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  corePlugins: {
    // preflight: false,
  },
};
