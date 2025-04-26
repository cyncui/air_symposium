import "@/styles/globals.css";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { Pinyon_Script } from "next/font/google";
import type { AppProps } from "next/app";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon-script",
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${notoSans.variable} ${notoSerif.variable} ${pinyonScript.variable} min-h-screen font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
