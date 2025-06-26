import Image from "next/image";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className="bg-stone-100 text-background py-7.5 px-7.5">
      <div className="mb-6">
        <a
          className="block text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl mb-6"
          href="mailto:hello@asianindigenousrelations.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello@asianindigenous
          <wbr />
          relations.ca{" "}
          <span className="inline-flex">
            <div className="size-4 bg-background" />
          </span>
        </a>

        <hr className="border-t border-[#FA4A23]" />
      </div>
      <div className=" mx-auto grid gap-8 lg:grid-cols-3 mb-12 grid-col-1">
        {/* Column 1 */}
        <div>
          <p className="mb-4">
            The symposium is a project by Asian-Indigenous Relations, a
            collective based in so-called &ldquo;vancouver&rdquo;. It is
            supported in part by funding from the Social Sciences and Humanities
            Research Council. For a full list of funding organizations, please
            visit this page.
          </p>
          <p className="mb-4">
            This site was created by{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/marcangelocastro/"
            >
              Marc Castro
            </a>
            ,{" "}
            <a className="underline" href="https://cynth.cafe">
              Cynthia Cui
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/jeffrey-su-550736223/"
            >
              Jeffrey Su
            </a>
            ,{" "}
            <a className="underline" href="https://xiaolanyaya.framer.website/">
              Yaya Zheng
            </a>
            , and{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/nathan-lew/"
            >
              Nathan Lew
            </a>
            . It is set in ZT Formom, Geist, and Sloop, and built with Next.JS
            and Tailwind CSS.
          </p>
        </div>
        {/* Column 2 */}
        <div>
          <p className="mb-4">
            We acknowledge that the team behind and affiliates of AIR are
            residing on stolen land of the səl̓ilw̓ətaʔɬ (Tsleil-Waututh),
            Sḵwx̱wú7mesh Úxwumixw (Squamish), xʷməθkʷəy̓əm (Musqueam) and
            kʷikʷəƛ̓əm (Kwikwetlem) Nations. We make it a mission to continue to
            fight for the decolonization and restitution of these colonial
            places, both offline and online. Land back!
          </p>
          <p>
            <a href="https://asianindigenousrelations.ca" className="underline">
              asianindigenousrelations.ca
            </a>
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <a href="https://asianindigenousrelations.ca" target="_blank">
          <Logo />
        </a>
        <span className="font-serif text-2xl opacity-50">
          ALL RIGHTS RESERVED, ASIAN-INDIGENOUS RELATIONS COLLECTIVE 2025
        </span>
      </div>
    </footer>
  );
};
