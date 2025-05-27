import Image from 'next/image';

export const LandingHero = () => {
  return (
    <section className="h-[80svh] w-full flex flex-col justify-center items-center bg-theme">
      <div className="container px-4 mx-auto my-auto relative">
        <h1 className="text-4xl font-serif max-sm:text-center md: text-center">
          Asian-Indigenous Symposium
        </h1>
        <div className='absolute left-1/2 top-[calc(50%-1rem)] transform -translate-x-1/2 -translate-y-1/2'>
        <Image
            src="/../../..\svgs\landingFlowerDesktop307x577.svg"
            alt="Mobile SVG"
            width={307}
            height={577}
            className=" max-sm:hidden mx-auto"
          />
          <Image
            src="/../../..\svgs\landingFlowerMobile204x414.svg"
            alt="Desktop SVG"
            width={200}
            height={400}
            className=" md:hidden mx-auto "
          />
          
        </div>
      </div>
      
    </section>
  );
};


