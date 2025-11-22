/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                glow: {
                    white: '#F9FAFB', // Soft white
                    beige: '#F3E5D8', // Caramel beige
                    orange: '#FFB347', // Golden-hour orange
                    dark: '#1A1A1A', // Soft dark for contrast
                    gold: '#FFD700', // Gold for accents
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                'glow-orange': '0 0 20px rgba(255, 179, 71, 0.5)',
                'glow-gold': '0 0 25px rgba(255, 215, 0, 0.3)',
                'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
