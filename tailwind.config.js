/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                redhat: ['"Red Hat Display"', 'sans-serif'],
                sourcecode: ['"Source Code Pro"', 'monospace'],
            },
            fontWeight: {
                900: '900',
                400: '400',
            },
        },
    },
    plugins: [],
}
