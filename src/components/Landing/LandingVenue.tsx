import Image from "next/image";

export const LandingVenue = ({
  date,
  dateTime,
  venue,
  address,
  mapUrl,
  time,
  image,
}: {
  date: string;
  dateTime: string;
  venue: string;
  address: string;
  mapUrl: string;
  time: string;
  image: string;
}) => {
  return (
    <article className="col-span-full md:col-span-5 md:col-start-2 grid grid-cols-subgrid space-y-1 lg:space-y-2">
      <span className="inline-block font-script text-ornament text-theme-dark font-bold mb-2 col-span-full">
        <time dateTime={dateTime}>{date}</time>
      </span>
      <div className="aspect-video min-h-[320px] w-full col-span-full relative">
        <Image src={image} alt={venue} fill className="object-cover" priority />
      </div>
      <h2 className="font-serif text-heading-2 col-span-4 sm:col-span-3 lg:col-span-2 -col-end-1 sm:-col-end-1 lg:-col-end-1">
        {venue}
      </h2>
      <div className="col-span-4 sm:col-span-3 lg:col-span-2 -col-end-1 sm:-col-end-1 lg:-col-end-1">
        <address>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic"
          >
            {address}
          </a>
        </address>
        <time dateTime={dateTime}>{time}</time>
      </div>
    </article>
  );
};
