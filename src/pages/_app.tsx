import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Pinyon_Script } from "next/font/google";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { GridOverlay } from "@/components/ui/grid-overlay";

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon-script",
  subsets: ["latin"],
  weight: "400",
});

const formom = localFont({
  src: [
    {
      path: "../styles/fonts/ZT_Formom.woff2",

      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../styles/fonts/ZT_Formom_Italic.woff2",
    //   weight: "400",
    //   style: "italic",
    // },
  ],
  variable: "--font-formom",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${GeistSans.variable} ${pinyonScript.variable} ${formom.variable} min-h-screen font-sans`}
    >
      <GridOverlay />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
