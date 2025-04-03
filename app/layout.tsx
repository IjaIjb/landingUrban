import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import Navbar from "./shared/components/navbar/navbar";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const creatoDisplay = localfont({
  src: [
    {
      path: "./assets/fonts/CreatoDisplay-Bold.otf",
      weight: "700",
      style: "extrabold",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Bold.otf",
      weight: "700",
      style: "bold",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Regular.otf",
      weight: "100",
      style: "normal",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Medium.otf",
      weight: "400",
      style: "medium",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Regular.otf",
      weight: "300",
      style: "semi-bold",
    },

    {
      path: "./assets/fonts/CreatoDisplay-Thin.otf",
      weight: "100",
      style: "light",
    },
  ],
  variable: "--font-creato-display",
});

export const metadata: Metadata = {
  title: "Urban",
  description: "Urban",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/creato-display"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={creatoDisplay.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
