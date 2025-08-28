"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState("main");
  const [selectedDate, setSelectedDate] = useState("SEP 19");
  const [selectedTime, setSelectedTime] = useState("9:00");
  const [visibleTimeIndex, setVisibleTimeIndex] = useState(0);
  const timeContainerRef = useRef<HTMLDivElement>(null);

  const dates = ["SEP 19", "SEP 20", "SEP 21"];

  const scheduleContent = {
    "SEP 19": {
      "9:00": {
        activity: "Opening Ceremony",
      },
      "10:00": {
        activity:
          "What’s Up with Indigenous Sovereignty and Asian-Indigenous Relations?",
      },
      "11:30": {
        activity: "Walking Tour",
        workshops: [
          "Conflict Resolution: Having Difficult Conversations",
          "What's Up with Reconciliation and Multiculturalism?",
        ],
      },
      "1:00": {
        activity: "Lunch and Bingo",
      },
      "2:30": {
        workshops: [
          "Cross-cultural Elder Story Sharing Circle",
          "How to Educate One Another with Care",
        ],
      },
      "4:00": {
        activity: "Walking Tour",
        workshops: [
          "Cross-cultural Street Survival Skills & Harm Reduction",
          "Accountability and Solidarity: Addressing Security Guard Harms",
        ],
      },
      "5:30": {
        activity: "Solidarity Song Learning",
      },
      "6:30": {
        activity: "Closing Ceremony",
      },
    },
    "SEP 20": {
      "9:00": {
        activity: "Opening Ceremony",
      },
      "9:30": {
        activity:
          "Our Futures Are First, Felt: Feelings, Embodiment, and Asian-Indigenous Dreaming",
      },
      "11:00": {
        activity: "Tense and Tender: Genealogies of Asian-Indigenous Relations",
      },
      "12:30": {
        activity: "Lunch",
      },
      "2:00": {
        activity: "Housing, Land & Climate Justice",
      },
      "3:30": {
        activity: "Indigeneities in Asia, Translocal Solidarities",
      },
      "5:30": {
        activity:
          "Indigenous-Asian Relationship Building: A Conversation Between Dorothy Cucw-la7 Christian and Kirsten Emiko McAllister",
      },
      "7:00": {
        activity: "Closing Ceremony",
      },
    },
    "SEP 21": {
      "11:00": {
        activity: "Brunch",
      },
      "12:30": {
        activity: "Elder Council",
      },
      "2:30": {
        workshops: [
          "Zine Making",
          "Screen printing for shirts",
          "Button Making",
        ],
      },
      "5:00": {
        activity: "After Hours Relationship Building",
      },
    },
  };

  const allDayEventsContent = {
    "SEP 19": {
      events: [
        {
          title: "Multilingual Resource Glossary and Cookbook",
          description: "Public and collaborative projects",
          location: "",
        },
        {
          title: "Harm Reduction Table",
          description: "Free supplies, information, and practical tools.",
          location: "Main Hall",
        },
        {
          title: "Medicine Table Station",
          description:
            "Medicinal bundles and cards that share some common ingredients and their usage.",
          location: "Main Hall",
        },
      ],
    },
  };
  
  // Generate times dynamically from scheduleContent for the selected date
  const getTimesForDate = (date: string) => {
    const dateContent = scheduleContent[date as keyof typeof scheduleContent];
    if (!dateContent) return [];
    
    // Convert times to minutes for proper chronological sorting (12-hour format)
    const sortedTimes = Object.keys(dateContent).sort((a, b) => {
      const timeA = a.includes(":") ? a : a + ":00";
      const timeB = b.includes(":") ? b : b + ":00";
      
      const [hoursA, minutesA] = timeA.split(":").map(Number);
      const [hoursB, minutesB] = timeB.split(":").map(Number);
      
      // Convert to 24-hour format for proper sorting
      // Times like "1:00", "2:30" are interpreted as PM (13:00, 14:30)
      const adjustedHoursA = hoursA < 9 ? hoursA + 12 : hoursA;
      const adjustedHoursB = hoursB < 9 ? hoursB + 12 : hoursB;
      
      const totalMinutesA = adjustedHoursA * 60 + minutesA;
      const totalMinutesB = adjustedHoursB * 60 + minutesB;
      
      return totalMinutesA - totalMinutesB;
    });
    
    return sortedTimes;
  };
  
  const times = getTimesForDate(selectedDate);

  const { scrollY } = useScroll();
  const parallaxY1 = useTransform(scrollY, [0, 300], [0, -50]);
  const parallaxY2 = useTransform(scrollY, [0, 300], [0, -30]);
  const parallaxY3 = useTransform(scrollY, [0, 300], [0, -70]);

  useEffect(() => {
    let scrollAccumulator = 0;
    const scrollThreshold = 100; // Higher number = slower scrolling
    
    const handleGlobalWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Accumulate scroll delta
      scrollAccumulator += e.deltaY;
      
      // Only change time when threshold is reached
      if (Math.abs(scrollAccumulator) >= scrollThreshold) {
        const currentIndex = times.indexOf(selectedTime);
        const delta = scrollAccumulator > 0 ? 1 : -1;
        const newIndex = Math.max(
          0,
          Math.min(times.length - 1, currentIndex + delta)
        );
        setSelectedTime(times[newIndex]);

        const newVisibleIndex = Math.max(
          0,
          Math.min(times.length - 3, newIndex - 1)
        );
        setVisibleTimeIndex(newVisibleIndex);
        
        // Reset accumulator
        scrollAccumulator = 0;
      }
    };

    window.addEventListener("wheel", handleGlobalWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleGlobalWheel);
  }, [selectedTime, times]);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    // Get the first available time for the selected date
    const availableTimes = getTimesForDate(date);
    const firstTime = availableTimes[0] || "";
    setSelectedTime(firstTime);
    setVisibleTimeIndex(0);
  };

    const visibleTimes = times.slice(visibleTimeIndex, visibleTimeIndex + 3);

  // Type guard to check if content has schedule properties
  const isScheduleContent = (content: any): content is { activity?: string; workshops?: string[] } => {
    return content && (content.activity !== undefined || content.workshops !== undefined);
  };

  const currentContent =
    activeTab === "main"
      ? scheduleContent[selectedDate as keyof typeof scheduleContent]?.[selectedTime as keyof (typeof scheduleContent)[keyof typeof scheduleContent]] ||
        scheduleContent[selectedDate as keyof typeof scheduleContent]?.[getTimesForDate(selectedDate)[0] as keyof (typeof scheduleContent)[keyof typeof scheduleContent]] ||
        { activity: "No content available" }
      : allDayEventsContent[selectedDate as keyof typeof allDayEventsContent] || allDayEventsContent["SEP 19"];

  return (
    <div className="min-h-screen mt-30 relative overflow-hidden max-sm:w-full px-7.5 mx-auto w-10/12 flex">
      <div className="relative z-10 p-4 md:p-6 lg:p-8 w-full">
        <div className="flex gap-6 mb-6 md:gap-8 md:mb-8 lg:gap-10 lg:mb-10">
          <button
            onClick={() => setActiveTab("main")}
            className={`text-lg font-normal transition-opacity md:text-xl lg:text-2xl ${
              activeTab === "main" ? "opacity-100" : "opacity-70"
            }`}
          >
            Main Schedule
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`text-lg font-normal transition-opacity md:text-xl lg:text-2xl ${
              activeTab === "events" ? "opacity-100" : "opacity-70"
            }`}
          >
            All-Day Events
          </button>
        </div>

        <div className="lg:flex lg:gap-16">
          {/* Left Column - Times */}
          <div className="lg:w-2/5">
            <motion.div
              ref={timeContainerRef}
              className="space-y-4 mb-8 cursor-ns-resize select-none md:space-y-6 md:mb-10 lg:space-y-8 lg:mb-12"
              style={{ y: parallaxY3 }}
            >
              {visibleTimes.map((time, index) => {
                return (
                  <div key={`${time}-${index}`} className="flex items-center">
                    <button
                      onClick={() => handleDateChange(dates[index])}
                      className={`text-4xl max-sm:text-2xl font-medium w-32 max-sm:w-24 text-left transition-opacity ${
                        selectedDate === dates[index]
                          ? "opacity-100"
                          : "opacity-70"
                      }`}
                    >
                      {dates[index]}
                    </button>
                    <div
                      className={`w-px h-10 mx-6 transition-opacity md:h-12 md:mx-8 lg:h-14 lg:mx-10 xl:h-16 xl:mx-12 ${
                        selectedTime === time
                          ? "bg-white opacity-100"
                          : "bg-white opacity-40"
                      }`}
                    ></div>
                    <div className="flex-1">
                      {activeTab === "main" && (
                        <motion.button
                          onClick={() => setSelectedTime(time)}
                          className={`text-4xl max-sm:text-2xl font-medium transition-opacity text-left ${
                            selectedTime === time ? "opacity-100" : "opacity-70"
                          }`}
                          animate={{
                            scale: selectedTime === time ? 1.05 : 1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          style={{
                            y: 0,
                          }}
                        >
                          {time}
                        </motion.button>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-3/5">
            <motion.div
              className="space-y-6 md:space-y-8 lg:space-y-10 mt-10 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={`${activeTab}-${selectedDate}-${selectedTime}`}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "main" ? (
                <>
                  {activeTab === "main" && isScheduleContent(currentContent) && currentContent.activity && (
                    <div>
                      <div className="text-base font-light opacity-80 mb-1 md:text-base lg:text-lg">
                        Activity
                      </div>
                      <h2 className="text-3xl font-serif">
                        {currentContent.activity}
                      </h2>
                    </div>
                  )}

                  {activeTab === "main" && isScheduleContent(currentContent) && 
                    currentContent.workshops &&
                    currentContent.workshops.length > 0 && (
                      <div className="mt-6">
                        <div className="text-base font-light opacity-80 mb-3 md:text-base lg:text-lg">
                          Workshops
                        </div>
                        {currentContent.workshops.map(
                          (workshop: string, index: number) => (
                            <div key={index} className="mb-4 last:mb-0">
                              <h3 className="text-3xl font-serif leading-relaxed">
                                {workshop}
                              </h3>
                            </div>
                          )
                        )}
                      </div>
                    )}
                </>
              ) : (
                <>
                  {currentContent.events.map((event: any, index: number) => (
                    <div key={index} className="md:pl-6 lg:pl-8">
                      <h3 className="text-3xl font-serif mb-1 ">
                        {event.title}
                      </h3>
                      <p className="text-base opacity-80 mb-1 ">
                        {event.description}
                      </p>
                      <div className="text-base opacity-60">
                        {event.location}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
