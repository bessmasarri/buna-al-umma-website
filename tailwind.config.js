/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // الثيم الجديد
        'primary': '#6e1313',   // الأحمر العنابي
        'secondary': '#c79a56', // الذهبي / البرونزي
        'neutral': '#fcf3e6',   // الكريمي الفاتح
        'accent1': '#3d7c8c',   // الأزرق البترولي
        'accent2': '#f76f1c',   // البرتقالي
      },
      fontFamily: {
        // الخطوط التي اتفقنا عليها
        'amiri': ['Amiri', 'serif'],
        'cairo': ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        // تحديث تأثير التوهج ليطابق الألوان الجديدة
        'glow-primary': '0 0 15px 5px rgba(110, 19, 19, 0.4)',  // توهج عنابي
        'glow-secondary': '0 0 15px 5px rgba(199, 154, 86, 0.5)', // توهج ذهبي
      }
    },
  },
  plugins: [],
}