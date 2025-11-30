/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    purple: '#7C3AED',
                    dark: '#2E2E2E',
                    'purple-light': '#A78BFA', // Light mode purple equivalent for dark mode text
                }
            }
        },
    },
    plugins: [],
}
