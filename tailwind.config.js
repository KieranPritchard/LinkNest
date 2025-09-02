/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                primary: "rgb(var(--background) / <alpha-value>)",
                secondary: "rgb(var(--background-secondary) / <alpha-value>)",
                text: "rgb(var(--base-text)) / <alpha-value>)",
                accent: "rgb(var(--main-accent)) / <alpha-value>)",
                border: "rgb(var(--border)) / <alpha-value>)",
                hover: "rgb(var(--hover-highlight)) / <alpha-value>)",
            },
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
