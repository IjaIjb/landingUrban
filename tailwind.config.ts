import type { Config } from "tailwindcss";

const config: Config = {
    // darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	fontFamily: {
  		creato: [
  			'Creato Display',
  			'sans-serif'
  		]
  	},
  	extend: {
  		colors: {
  			'custom-yellow': '#BAA333',
  			'urban-green': '#036E03',
  			'urban-black': '#1A1A1A',
  			'urban-lightGreen': '#6CC56C',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: '#036E03',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  	backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
    merchantBg: "url('/assets/merchanthero.svg')"
},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
