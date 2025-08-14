import { Logo } from "../Logo/Logo";
import Arrow from "@/assets/icons/icon_arrow-top-right.svg";

export const Footer = () => {
  return (
    <footer className="bg-stone-100 text-background py-7.5">
      <div className="px-7.5 max-w-[2160px] mx-auto">
        <div className="mb-6">
          <a
            className="inline-block items-center-safe text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl mb-6 group hover:text-theme-dark hover:fill-theme-dark focus:text-theme-dark focus:fill-theme-dark fill-background not-focus:transition-colors font-medium"
            href="mailto:hello@asianindigenousrelations.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@asianindigenous
            <wbr />
            relations.ca{" "}
            <Arrow className="inline-flex size-[1em] -translate-x-1/5 fill-inherit" />
          </a>
          <hr className="border-t border-[#FA4A23]" />
        </div>
        <div className=" mx-auto grid gap-8 lg:grid-cols-3 mb-12 grid-col-1 text-body">
          {/* Column 1 */}
          <div>
            <p className="mb-4">
              The symposium is a project by Asian-Indigenous Relations, a
              collective based in &ldquo;vancouver&rdquo;. It is supported in
              part by funding from the Social Sciences and Humanities Research
              Council.
            </p>
            <p className="mb-4">
              This site was created by{" "}
              <a
                className="underline link"
                href="https://www.linkedin.com/in/marcangelocastro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marc Castro
              </a>
              ,{" "}
              <a
                className="underline link"
                href="https://cynth.cafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cynthia Cui
              </a>
              ,{" "}
              <a
                className="underline link"
                href="https://www.linkedin.com/in/jeffrey-su-550736223/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeffrey Su
              </a>
              , and{" "}
              <a
                className="underline link"
                href="https://xiaolanyaya.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yaya Zheng
              </a>
              .
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <p className="mb-4">
              We acknowledge that the team behind and affiliates of AIR are
              residing on stolen land of the səl̓ilw̓ətaʔɬ (Tsleil-Waututh),
              Sḵwx̱wú7mesh Úxwumixw (Squamish), xʷməθkʷəy̓əm (Musqueam) and
              kʷikʷəƛ̓əm (Kwikwetlem) Nations. We make it a mission to continue
              to fight for the decolonization and restitution of these colonial
              places, both offline and online. Land back!
            </p>
            <p>
              <a
                href="https://asianindigenousrelations.ca"
                className="underline link"
                target="_blank"
                rel="noopener noreferrer"
              >
                asianindigenousrelations.ca
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-2 max-sm:flex-row max-sm:items-center">
          <a
            href="https://asianindigenousrelations.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Logo />
          </a>
          <span className="font-serif text-2xl opacity-50 max-sm:text-base">
            ALL RIGHTS RESERVED, ASIAN-INDIGENOUS RELATIONS COLLECTIVE 2025
          </span>
        </div>
      </div>
    </footer>
  );
};
