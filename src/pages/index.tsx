import Image from "next/image";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <section className="h-[80svh] w-full flex flex-col justify-center items-center bg-theme">
          <div className="container px-4 mx-auto">
            <h1 className="text-5xl font-serif sm:text-center">
              Asian-Indigenous Symposium
            </h1>
          </div>
        </section>
        <section className="py-24 bg-stone-500">
          <div className="container px-4 mx-auto">
            <h2 className="text-center font-serif">
              The Past, Present, and Future of Braided Solidarities
            </h2>
          </div>
        </section>
        <section className="py-24 bg-stone-100">
          <div className="container px-4 mx-auto">
            <article className="mb-12">
              <span className="inline-block font-serif text-sm mb-2">
                <time dateTime="2025-09-19">Friday, Sept 19</time>
              </span>
              <h2 className="text-6xl mb-4 font-script">Japanese Hall</h2>
              <p>
                The symposium will be held at the Japanese Hall (September 19)
                and Russian Hall (September 20 & 21) in so-called Vancouver, BC,
                which is located on the traditional and unceded territories of
                the Musqueam, Squamish, and Tsleil-Waututh Nations (MST).
                Hosting the symposium in this location directly engages with
                extant histories of Asian and Indigenous relation-making that
                have taken shape on unceded MST territories over the last two
                centuries.
              </p>
            </article>
            <article className="mb-12">
              <span className="inline-block font-serif text-sm mb-2">
                <time dateTime="2025-09-20">Saturday, Sept 20</time> to{" "}
                <time dateTime="2025-09-21">Sunday, Sept 21</time>
              </span>
              <h2 className="text-6xl mb-4 font-script">Russian Hall</h2>
              <p>
                The symposium will be held at the Japanese Hall (September 19)
                and Russian Hall (September 20 & 21) in so-called Vancouver, BC,
                which is located on the traditional and unceded territories of
                the Musqueam, Squamish, and Tsleil-Waututh Nations (MST).
                Hosting the symposium in this location directly engages with
                extant histories of Asian and Indigenous relation-making that
                have taken shape on unceded MST territories over the last two
                centuries.
              </p>
            </article>
          </div>
        </section>
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <h2 className="text-center font-serif">Schedule</h2>
            <article className="mb-12">
              <span className="inline-block font-serif text-sm mb-2">
                <time dateTime="2025-09-19">Friday, Sept 19</time>
              </span>
              <h2 className="text-6xl mb-4 font-script">Japanese Hall</h2>
              <p>
                The symposium will be held at the Japanese Hall (September 19)
                and Russian Hall (September 20 & 21) in so-called Vancouver, BC,
                which is located on the traditional and unceded territories of
                the Musqueam, Squamish, and Tsleil-Waututh Nations (MST).
                Hosting the symposium in this location directly engages with
                extant histories of Asian and Indigenous relation-making that
                have taken shape on unceded MST territories over the last two
                centuries.
              </p>
            </article>
            <article className="mb-12">
              <span className="inline-block font-serif text-sm mb-2">
                <time dateTime="2025-09-20">Saturday, Sept 20</time> to{" "}
                <time dateTime="2025-09-21">Sunday, Sept 21</time>
              </span>
              <h2 className="text-6xl mb-4 font-script">Russian Hall</h2>
              <p>
                The symposium will be held at the Japanese Hall (September 19)
                and Russian Hall (September 20 & 21) in so-called Vancouver, BC,
                which is located on the traditional and unceded territories of
                the Musqueam, Squamish, and Tsleil-Waututh Nations (MST).
                Hosting the symposium in this location directly engages with
                extant histories of Asian and Indigenous relation-making that
                have taken shape on unceded MST territories over the last two
                centuries.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
