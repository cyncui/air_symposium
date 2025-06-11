import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const MobileSchedule = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-span-full mx-auto border-t border-b border-white-300 md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center justify-between w-full py-3"
      >
        <h1 className="text-heading-1 font-serif text-center">
          Opening Ceremony
        </h1>
        <ChevronDown
          className={`h-10 w-10 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <section className="mt-2 px-4 text-sm max-h-64 overflow-y-auto space-y-2">
          <h2>
            Teach-In: Stories, Lessons, and Reflections of past and present
            solidarity
          </h2>
          <h2>Participants: Community members</h2>
          <p>
            In this teach-in, we will occupy four corners of the auditorium
            space with organizers and community members from four specific
            vintage points of Asian-Indigenous coalition building: 1)
            Chinese-Indigenous solidarity work in the DTES; 2) Filipinx migrant
            worker struggle aligning with Indigenous struggle; 3) South Asian
            Anti-deportation work on Unceded Indigenous Land; and 4) Fighting
            for land back and anti-extractivism as settler of colour. Organizers
            and community members in each section will share their strategies,
            histories, reflections, and lessons in their efforts to build Asian
            Indigenous solidarity in their particular areas of struggle and
            movements. Participants will be asked to reflect on their own
            positionalities and their own community organizing efforts to think
            of potential ways to build an actionable plan to intersect with
            Indigenous struggles.
          </p>
        </section>
      )}
    </div>
  );
};
