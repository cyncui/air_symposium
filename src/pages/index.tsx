import Image from "next/image";
import { LandingHero } from "@/components/Landing/LandingHero";
import { LandingVenue } from "@/components/Landing/LandingVenue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";
import { OrnamentSM } from "@/components/Ornament/Ornament";

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
          {[
            {
              date: "September 19",
              dateTime: "2025-09-19",
              venue: "Japanese Hall",
              address: "487 Alexander St.",
              mapUrl: "https://maps.app.goo.gl/BkF5qg8ByqPDvUFA9",
              time: "9AM to 6PM",
            },
            {
              date: "September 20 & 21",
              dateTime: "2025-09-19",
              venue: "Russian Hall",
              address: "600 Campbell Ave.",
              mapUrl: "https://maps.app.goo.gl/pRJhjMN7QXshPRZG6",
              time: "9AM to 6PM",
            },
          ].map((location, idx) => (
            <Fragment key={idx}>
              <LandingVenue {...location} />
              {idx < 1 && (
                <div className="col-span-full">
                  <OrnamentSM className="mx-auto my-12" />
                </div>
              )}
            </Fragment>
          ))}
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
