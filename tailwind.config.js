/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                IBMPlexLoop: ["IBM Plex Sans Thai Looped", "sans-serif"],
                IBMPlex: ["IBM Plex Sans Thai", "serif"],
                B612Mono: ["B612 Mono", "mono"],
                Signika: ["Signika", "serif"],
            },
            colors: {
                vbg: "#cec3a6",
                vlg: "#DCD5C0",
                tdk: "#3d4132"
            }
        },
    },
    plugins: [],
}