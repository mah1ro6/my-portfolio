module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
    //   'header': ['Helvetica', 'Arial', 'sans-serif'],
    //   // 'header': ['Economica', 'sans-serif'],
      'body': ['Helvetica', '游ゴシック', 'Yu Gothic', 'YuGothic', 'HiraKakuProN-W3', 'メイリオ', 'Meiryo', 'sans-serif'],
      'top': ['Lato', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
};
