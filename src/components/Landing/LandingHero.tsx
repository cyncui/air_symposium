import Image from "next/image";

export const LandingHero = () => {
  return (
    <section className="min-h-[30rem] h-[80svh] max-h-[50rem] w-full flex flex-col justify-center items-center bg-background">
      <div className="px-7.5 mx-auto my-auto">
        <div className="relative">
          <h1 className="text-heading-1 font-serif text-center text-foreground relative">
            Asian-Indigenous Symposium
          </h1>
          <Image
            src="/svgs/knot_top.svg"
            alt="Top SVG"
            width={200}
            height={200}
            className="absolute -top-0 -translate-y-full left-1/2 -translate-x-1/2"
          />
          <Image
            src="/svgs/knot_bottom.svg"
            alt="Bottom SVG"
            width={200}
            height={140}
            className="absolute -bottom-0 translate-y-full left-1/2 -translate-x-1/2"
          />
        </div>

        {/* <div className="absolute left-1/2 top-[calc(50%-1rem)] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src="/../../../svgs/knot_top.svg"
            alt="Mobile SVG"
            width={200}
            height={200}
            // className=" max-sm:hidden mx-auto"
          />
          <Image
            src="/../../..\svgs\landingFlowerMobile204x414.svg"
            alt="Desktop SVG"
            width={200}
            height={400}
            className="sm:hidden mx-auto"
          />
        </div> */}
      </div>
    </section>
  );
};
