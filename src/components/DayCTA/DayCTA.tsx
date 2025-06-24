'use client';

import { useState } from 'react';

type sponsorItems = {
  text: string;
  link?: string;
  title?: string;
  subtext?: string;
  img?: string;
};

const ctaContent = {
  day1: {
    title: 'Day 1: Arrival & Orientation',
    text: 'Participants arrive, check-in, and attend a welcome session to get familiar with the event schedule.',
    image: '/images/day1.jpg', 
  },
  day2: {
    title: 'Day 2: Workshops & Activities',
    text: 'A full day of interactive workshops, group activities, and guest speaker presentations.',
    image: '/images/day2.jpg',
  },
  day3: {
    title: 'Day 3: Final Showcase',
    text: 'Teams present their projects, followed by awards and a closing ceremony.',
    image: '/images/day3.jpg',
  },
};

export const DayCTA = ({}) => {
  const [selectedDay, setSelectedDay] = useState('day1');

  const { title, text, image } = ctaContent[selectedDay];

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(ctaContent).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              selectedDay === day
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {day.replace('day', 'Day ')}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{text}</p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
