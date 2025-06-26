import { MobileSchedule } from "@/components/MobileSchedule/MobileSchedule";

export default function Home() {
  return (
    <main>
      <section className="py-24 bg-stone-500">
        <div className="px-7.5 mx-auto">
          <h2 className="text-center font-serif">
            The Past, Present, and Future of Braided Solidarities
          </h2>
          <MobileSchedule />
        </div>
      </section>
    </main>
  );
}
