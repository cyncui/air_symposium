import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section>
          <h1>Asian-Indigenous Symposium</h1>
        </section>
        <section>
          <p>
            The symposium will be held at the Japanese Hall (September 19) and
            Russian Hall (September 20 & 21) in so-called Vancouver, BC, which
            is located on the traditional and unceded territories of the
            Musqueam, Squamish, and Tsleil-Waututh Nations (MST). Hosting the
            symposium in this location directly engages with extant histories of
            Asian and Indigenous relation-making that have taken shape on
            unceded MST territories over the last two centuries.
          </p>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-black" />
          All rights reserved, Asian-Indigenous Relations 2025
        </a>
      </footer>
    </div>
  );
}
