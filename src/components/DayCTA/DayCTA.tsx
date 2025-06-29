import { useState } from 'react';

type DayKey = 'day1' | 'day2' | 'day3'; 

const ctaContent: Record<DayKey, {
  text: string;
  image: string;
}> = {
  day1: {
    text: 'This day centres the learnings and knowledge of Indigenous and Asian communities: community organizers, activists, scholars, and members come together to share resources and skills rooted in lived experiences and grassroots organizing with academics learning and reflecting. Workshops and dialogue circles explore how we can care for each other in our movements, build power together, and pass knowledge between generations. These spaces are committed to mutual learning and solidarity, recognizing that organizing is a form of knowledge.',
    image: '/images/day1_vector.png',
  },
  day2: {
    text: 'The first day of the conference will consist of various community-led sessions, where organizers will educate attendees on the struggles and experiences of Asian-Indigenous coalition building.',
    image: '/images/day2_vector.png',
  },
  day3: {
    text: 'The first day of the conference will consist of various community-led sessions, where organizers will educate attendees on the struggles and experiences of Asian-Indigenous coalition building.',
    image: '/images/day3_vector.png',
  },
};
export const DayCTA = () => {
   const [selectedDay, setSelectedDay] = useState<DayKey>('day1');

  const { text, image } = ctaContent[selectedDay];
  return (
    <div className="md:w-full md:max-w-[100vw] mx-auto flex flex-col-reverse lg:flex-row justify-center items-center m-10 ">
      <div className="flex gap-4 mb-6 flex-col max-w-[100vw] md:max-w-[50vw] pt-[10vh] sm:justify-center">
        <div className='flex flex-row text-nowrap justify-between md:justify-start'>
        {(Object.keys(ctaContent) as DayKey[]).map((day) => (
          <h2
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`font-serif text-ornament cursor-pointer transition-colors duration-200 mr-[6vw] text-nowrap${
              selectedDay === day
                ? 'text-theme-light'
                : 'text-[#F89C80] hover:text-gray-600'
            }`}
          >
            {day.replace('day', 'Day ')}
          </h2>
        ))}
        </div>
        <div className="w-full lg:w-[40vw] lg:mr-[10vw]">
          <p>{text}</p>
          <a href='' ><p className='font-script text-ornament text-theme-light mt-[15vh]'>Learn more </p></a>
        </div>
      </div>
    
        <div className="max-w-[50vw] flex items-center justify-center md:justify-start ">
          <img
            src={image}
            className="object-cover"
          />
        </div>
      </div>

  );
}