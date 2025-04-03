import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // creatoDisplay: ["var(--font-creato-display)"],
      creato: ["Creato Display", "sans-serif"],
    },

    extend: {
      colors: {
        "custom-yellow": "#BAA333",
        "urban-green": "#036E03",
        "urban-black": "#1A1A1A",
        "urban-lightGreen": "#6CC56C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        herobg1: "url('/assets/herobg1.svg')",
        heroAbout: "url('/assets/heroAbout.svg')",
        heroFleet: "url('/assets/heroFleet.svg')",
        heroPark: "url('/assets/heroPark.svg')",
        uFleethand: "url('/assets/ufleethand.png')",
        uParkImghand: "url('/assets/uparkImg.svg')",
        agencyHero: "url('/assets/agencyHero.svg')",
        agencyVision: "url('/assets/agency-vision.svg')",
        tvclubHero: "url('/assets/travelersclub-hero.svg')",
        cardSectionBg: "url('/assets/card-section-bg.png')",
        hotelhero: "url('/assets/hotel-hero.svg')",
        bookingdetailsbg: "url('/assets/bookingdetailsbg.png')",
        cityhero: "url('/assets/cityhero.svg')",
        footerBg: "url('/assets/footerBg.svg')",
        policyBg: "url('/assets/policyhero.svg')",
        newcardHeroBg: "url('/assets/cardheronew.svg')",
        faqBg: "url('/assets/faqbg.svg')",
        merchantBg: "url('/assets/merchanthero.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
