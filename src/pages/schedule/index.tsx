import { MobileSchedule } from "@/components/MobileSchedule/MobileSchedule";
import { OrnamentWhale } from "@/components/Ornament/OrnamentWhale";

export default function Home() {
  return (
    <main>
      <section className="py-24 bg-stone-500">
        <div className="px-7.5 mx-auto">
          <h2 className="text-center air-heading-2">
            The Past, Present, and Future of Braided Solidarities
          </h2>
          <OrnamentWhale />
          <MobileSchedule />
        </div>
      </section>
    </main>
  );
}
