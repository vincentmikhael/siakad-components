/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,css}'
        // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            animation: {
                'slide-in': 'slide-in 0.3s ease-in-out forwards',
                'slide-out': 'slide-out 0.3s ease-in-out forwards',
                'fade-in': 'fade-in 0.3s ease-in-out forwards',
                'fade-out': 'fade-out 0.3s ease-in-out forwards',
            },
            keyframes: {
                'slide-in': {
                    '0%': {transform: 'translateX(100%)', opacity: 0},
                    '100%': {transform: 'translateX(0)', opacity: 1},
                },
                'slide-out': {
                    '0%': {transform: 'translateX(0)', opacity: 1},
                    '100%': {transform: 'translateX(100%)', opacity: 0},
                },
                'fade-in': {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1},
                },
                'fade-out': {
                    '0%': {opacity: 1},
                    '100%': {opacity: 0},
                },
            },
            colors: {
                fade: '#F5F5F5',
                primary: {
                    10: "#E6F3FA",
                    20: "#CDE8F5",
                    30: "#B4DCF0",
                    40: "#9BD1EB",
                    50: "#82C5E6",
                    60: "#69BAE1",
                    70: "#50AEDC",
                    80: "#37A3D7",
                    90: "#1E97D2",
                    100: "#068CCD",
                    110: "#017CB7",
                },
                info: {
                    10: "#D4DFFF",
                    20: "#BECFFF",
                    30: "#A8BFFF",
                    40: "#93B0FF",
                    50: "#7DA0FF",
                    60: "#6790FF",
                    70: "#5180FF",
                    80: "#3C70FF",
                    90: "#2660FF",
                    100: "#2256E6",
                },
                success: {
                    10: "#F2FFF6",
                    20: "#BCEACA",
                    30: "#A5E2BA",
                    40: "#90DDA8",
                    50: "#7CD697",
                    60: "#69D085",
                    70: "#58C874",
                    80: "#4BC264",
                    90: "#42BC54",
                    100: "#349644",
                },
                warning: {
                    10: "#FDE8DA",
                    20: "#FCDEC6",
                    30: "#FBD3B5",
                    40: "#FAC7A1",
                    50: "#FABE8E",
                    60: "#F9B27D",
                    70: "#F8A76A",
                    80: "#F89D58",
                    90: "#FF8D41",
                    100: "#CC7135",
                },
                danger: {
                    10: "#FDECEB",
                    20: "#FAC7C6",
                    30: "#FAC7C6",
                    40: "#F8A3A1",
                    50: "#F7928D",
                    60: "#F6807B",
                    70: "#F57068",
                    80: "#FF5457",
                    90: "#FF4144",
                    100: "#CC3436",
                },
                gray: {
                    10: "#FFFFFF",
                    20: "#EAECF0",
                    30: "#D0D5DD",
                    40: "#98A2B3",
                    50: "#667085",
                    60: "#475467",
                    70: "#344054",
                    80: "#182230",
                    90: "#101828",
                    100: "#0C111D",
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                sans: ['Urbanist'],
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
};
