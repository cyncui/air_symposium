export const Footer = () => {
  return (
    <footer className="py-32 bg-stone-100 text-background">
      <div className="px-7.5 mx-auto grid grid-cols-4 lg:grid-cols-6 gap-8">
        <div className="max-sm:col-span-full sm:col-span-2">
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
        <div className="flex gap-2 col-span-full sm:col-span-2 row-end-auto text-xs">
          <div className="size-8 rounded-full bg-foreground flex-none" />
          <div>
            <p>
              This symposium is an initiative of{" "}
              <a
                href="https://asianindigenousrelations.ca"
                target="_blank"
                className="font-bold"
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
