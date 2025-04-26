export const Footer = () => {
  return (
    <footer className="py-32 px-4">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div className="max-sm:col-span-full sm:col-span-2 xl:col-span-1">
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
        <div className="max-sm:col-span-full">
          <h3>Contact</h3>
          <ul>
            <li>
              <a>asianindigenousrelations.ca</a>
            </li>
          </ul>
        </div>
        <a className="flex gap-2 col-span-full font-serif text-sm">
          <div className="size-4 rounded-full bg-foreground flex-none my-0.5" />
          2025 Asian-Indigenous Relations. All rights reserved.
        </a>
      </div>
    </footer>
  );
};
