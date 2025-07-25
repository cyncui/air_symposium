export const sponsorList = [
  {
    name: "Simon Fraser University David Lam Centre",
  },
  {
    name: "UBC Hampton Matching Program",
  },
  {
    name: "UBC CMS",
  },
  {
    name: "SFU Global Asia",
  },
  {
    name: "SFU Faculty of Arts and Social Sciences",
  },
  {
    name: "SFU Gender and Sexuality Studies",
  },
  {
    name: "SFU Indigenous Studies",
  },
  {
    name: "SFU Sociology and Anthropology",
  },
  {
    name: "SFU Geography",
  },
  {
    name: "UBC Asian Studies",
  },
  {
    name: "UBC History",
  },
];

export default function Sponsors() {
  return (
    <main>
      <section className="py-24 h-lvh">
        <div className="px-7.5 mx-auto">
          <h2 className="text-center air-heading-2">Sponsors</h2>

          <div className="flex flex-col gap-4">
            {sponsorList.map((sponsor) => (
              <div key={sponsor.name}>
                <h3 className="text-xl font-normal">{sponsor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
