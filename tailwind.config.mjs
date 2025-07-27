// Cấu hình Tailwind v4 (Mới - Dùng cái này)
/** @type {import('tailwindcss').Config} */
export default {
  // Đừng quên thêm thuộc tính 'content' nhé!
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Không còn "extend", viết trực tiếp vào đây
    colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
    },
    fontFamily:{
        // Đây là font mặc định, sử dụng biến từ Outfit
        sans: ['var(--font-outfit)', 'sans-serif'],
        // Đây là font Ovo, sử dụng biến từ Ovo
        Ovo: ['var(--font-ovo)', 'serif'],
    }
  },
  plugins: [],
}