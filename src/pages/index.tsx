import Image from "next/image";
import { LandingHero } from "@/components/LandingHero/LandingHero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <LandingHero />
      <section className="py-24 ">
        <div className="px-7.5 mx-auto">
          <h2 className="text-center font-serif text-heading-2 relative">
            The Past, Present, and Future
            <span className="leading-0 h-0 relative block">
              <span className="absolute left-1/2 top-0 -translate-1/2 font-script text-ornament text-theme-dark font-bold">
                of
              </span>
            </span>
            Braided Solidarities
          </h2>
        </div>
      </section>
      <section className="py-24">
        <div className="section__hz mx-auto">
          <article className="mb-12 col-span-full md:col-span-5 md:col-start-2 grid grid-cols-subgrid">
            <span className="inline-block font-script text-ornament text-theme-dark font-bold mb-2 col-span-2">
              <time dateTime="2025-09-19">September 19</time>
            </span>
            <div className="aspect-square md:aspect-video border border-foreground col-span-full" />
            <h2 className="font-serif text-heading-2 col-span-2 -col-end-1 text-right">
              Japanese Hall
            </h2>
            <div className="-col-end-1">
              <address>
                <a
                  href="https://maps.app.goo.gl/BkF5qg8ByqPDvUFA9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-italic"
                >
                  487 Alexander St.
                </a>
              </address>
              <time dateTime="2025-09-19">9AM to 6PM</time>
            </div>
          </article>
          <article className="mb-12 col-span-full md:col-span-5 md:col-start-2 grid grid-cols-subgrid">
            <span className="inline-block font-script text-ornament text-theme-dark font-bold mb-2 col-span-2">
              <time dateTime="2025-09-19">September 20 &amp; 21</time>
            </span>
            <div className="aspect-square md:aspect-video border border-foreground col-span-full" />
            <h2 className="font-serif text-heading-2 col-span-3 lg:col-span-2 -col-end-1 lg:-col-end-1 text-right">
              Russian Hall
            </h2>
            <div className="col-span-3 md:col-span-2 -col-end-1 md:-col-end-1">
              <address>
                <a
                  href="https://maps.app.goo.gl/pRJhjMN7QXshPRZG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-italic"
                >
                  600 Campbell Ave.
                </a>
              </address>
              <time dateTime="2025-09-19">9AM to 6PM</time>
            </div>
          </article>
        </div>
      </section>
      <section className="py-24">
        <div className="px-7.5 mx-auto">
          <h2 className="text-center font-serif text-3xl">Schedule</h2>
          {/* <Carousel>
            <CarouselContent>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
        </div>
      </section>
    </main>
  );
}
