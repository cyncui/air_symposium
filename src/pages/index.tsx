import Image from "next/image";
import { LandingHero } from "@/components/Landing/LandingHero";
import { LandingVenue } from "@/components/Landing/LandingVenue";
import { LandingSchedule } from "@/components/Landing/LandingSchedule";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";
import { OrnamentSM } from "@/components/Ornament/OrnamentSM";
import { OrnamentMD } from "@/components/Ornament/OrnamentMD";
import { OrnamentWhale } from "@/components/Ornament/OrnamentWhale";
import { OrnamentLG } from "@/components/Ornament/OrnamentLG";
import { OrnamentLG2 } from "@/components/Ornament/OrnamentLG2";

export default function Home() {
  return (
    <main>
      <LandingHero />
      <section className="py-24 flex flex-col gap-24">
        <div className="px-7.5 mx-auto my-auto">
          <h2 className="text-center air-heading-2 relative">
            The Past, Present, and Future
            <span className="leading-0 h-0 relative block">
              <span className="absolute left-1/2 top-0 -translate-1/2 air-ornament text-theme-dark font-bold">
                of
              </span>
            </span>
            Braided Solidarities
          </h2>
        </div>
        <OrnamentLG className="w-60 mx-auto" />
        <OrnamentWhale className="w-100 mx-auto max-w-full" />
        <OrnamentLG2 className="w-80 mx-auto" />
      </section>
      <section>
        <div className="subsection mx-auto">
          {[
            {
              date: "September 19",
              dateTime: "2025-09-19",
              venue: "Japanese Hall",
              address: "487 Alexander St.",
              mapUrl: "https://maps.app.goo.gl/BkF5qg8ByqPDvUFA9",
              time: "9AM to 6PM",
              image: "/images/japanese-hall.png",
            },
            {
              date: "September 20 & 21",
              dateTime: "2025-09-19",
              venue: "Russian Hall",
              address: "600 Campbell Ave.",
              mapUrl: "https://maps.app.goo.gl/pRJhjMN7QXshPRZG6",
              time: "9AM to 6PM",
              image: "/images/russian-hall.png",
            },
          ].map((location, idx) => (
            <Fragment key={idx}>
              <LandingVenue {...location} />
              {idx < 1 && (
                <div className="col-span-full">
                  <OrnamentSM className="mx-auto my-12 w-30" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </section>
      <div className="col-span-full">
        <OrnamentMD className="mx-auto my-12 w-60" />
      </div>
      <section>
        <LandingSchedule />
      </section>
    </main>
  );
}
