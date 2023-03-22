/** @type {import('tailwindcss').Config} */
module.exports = {
    experimental: {
        optimizeUniversalDefaults: true
    },
    content: [
        './src/**/**/**/*.{js, ts, jsx, tsx, html}',
        './pages/**/**/**/*.{js, ts, jsx, tsx, html}'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
