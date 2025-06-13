import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className="py-32 bg-stone-100 text-background">
      <div className="px-7.5 mx-auto grid grid-cols-7 *:col-span-full *:sm:col-start-1 *:sm:col-span-3 *:lg:col-span-2 *:lg:col-start-1">
        <div className="">
          <p className="mb-4">
            We acknowledge that affiliates and the team behind of AIR are
            residing on stolen land of the səl̓ilw̓ətaʔɬ (Tsleil-Waututh),
            Sḵwx̱wú7mesh Úxwumixw (Squamish), xʷməθkʷəy̓əm (Musqueam) and
            kʷikʷəƛ̓əm (Kwikwetlem) Nations.
          </p>
          <p className="mb-4">
            We make it a mission to continue to fight for the decolonization and
            restitution of these colonial places, both offline and online. Land
            back!
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <a href="https://asianindigenousrelations.ca" target="_blank">
            <Logo />
          </a>
          <div>
            <p>
              This symposium is an initiative of{" "}
              <a
                href="https://asianindigenousrelations.ca"
                target="_blank"
                className="font-bold underline"
              >
                Asian-Indigenous Relations
              </a>
              &mdash;a research group based in so-called Vancouver.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
