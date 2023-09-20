/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-picture-one": "url('/img/hero-one.jpg')",
        "hero-picture-tablet": "url('/img/hero-tablet.jpg')",
        "hero-picture-desktop": "url('/img/hero-desktop.jpg')",
        "gallery-background": "url('/img/gallery-forest-bg-m.jpg')",
        "contact-bg-m": "url('/img/contact-bg-m.jpg')",
        "contact-bg-tablet": "url('/img/contact-bg-tablet.jpg')",
        "contact-bg-desktop": "url('/img/contact-bg-desktop.jpg')",
        "about-bg-mobile":
          "linear-gradient(#020F0880,#020F0880), url('/img/about-bg-mobile.jpg')",
        "about-bg-tablet":
          "linear-gradient(#020F0880,#020F0880), url('/img/about-bg-tablet.jpg')",
        "about-bg-desktop":
          "linear-gradient(#020F0880,#020F0880), url('/img/about-bg-desktop.jpg')",
        "chooseus-bg-mobile":
          "linear-gradient(#020F08BF,#020F08BF), linear-gradient(180deg, #001826BF 0%, rgba(0, 37, 49, 0.00) 30%, rgba(0, 37, 49, 0.00) 70%, #001826BF 100%), url('/img/chooseus-bg-mobile.jpg')",
        "chooseus-bg-tablet":
          "linear-gradient(#020F08BF,#020F08BF), linear-gradient(180deg, #001826BF 0%, rgba(0, 37, 49, 0.00) 34%, rgba(0, 37, 49, 0.00) 66%, #001826BF 100%), url('/img/chooseus-bg-tablet.jpg')",
        "chooseus-bg-desktop":
          "linear-gradient(#020F08BF,#020F08BF), url('/img/chooseus-bg-desktop.jpg')",
        "red-close": "url('/img/close.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        karantina: ["Karantina", "cursive"],
      },
      keyframes: { panorama: { "0, 100%": { left: 0 }, "50%": { right: 0 } } },
    },
  },
  plugins: [],
};
