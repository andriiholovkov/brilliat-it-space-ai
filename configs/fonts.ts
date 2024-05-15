import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const clashGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/ClashGrotesk-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/ClashGrotesk-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/ClashGrotesk-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
});
