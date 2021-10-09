module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // backgroundImage: theme => {(
      //   'home-background': "url('./public/img/000011.JPG')",
      // )}
    },
    fontFamily: {
      //   'header': ['Helvetica', 'Arial', 'sans-serif'],
      //   // 'header': ['Economica', 'sans-serif'],
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
