"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

export default function Countdown() {
  const { theme } = useTheme();

  const [millisecondsLeft, setMillisecondsLeft] = useState<number>(0);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);
  const [currentMinutes, setCurrentMinutes] = useState<number>(0);
  const [currentHours, setCurrentHours] = useState<number>(0);
  const [currentDays, setCurrentDays] = useState<number>(0);
  const [hasLaunched, setHasLaunched] = useState(false);

  const secondsElementRef = useRef<HTMLDivElement>(null);
  const minutesElementRef = useRef<HTMLDivElement>(null);
  const hoursElementRef = useRef<HTMLDivElement>(null);
  const daysElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const launchDate = new Date("2024-08-30T16:00:00Z"); // 12 PM EST in UTC (16:00 UTC)

    const calculateTimeRemaining = () => {
      const currentTime = new Date();
      const difference = launchDate.getTime() - currentTime.getTime();
      setHasLaunched(currentTime >= launchDate);
      return difference > 0 ? difference : 0;
    };

    const updateCountdown = () => {
      setMillisecondsLeft(calculateTimeRemaining());
    };

    setMillisecondsLeft(calculateTimeRemaining());

    const timerInterval = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    const remainingDays =
      Math.floor(millisecondsLeft / (1000 * 60 * 60 * 24)) || 0;
    const remainingHours =
      Math.floor(
        (millisecondsLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ) || 0;
    const remainingMinutes =
      Math.floor((millisecondsLeft % (1000 * 60 * 60)) / (1000 * 60)) || 0;
    const remainingSeconds =
      Math.floor((millisecondsLeft % (1000 * 60)) / 1000) || 0;

    const triggerSwipeAnimation = (
      elementRef: React.RefObject<HTMLDivElement>,
      previousValue: number,
      newValue: number,
    ) => {
      if (elementRef.current && previousValue !== newValue) {
        const textElement = elementRef.current.querySelector(".animate-text");
        if (textElement) {
          textElement.classList.remove("animate-swipe");
          void elementRef.current.offsetWidth;
          textElement.classList.add("animate-swipe");
        }
      }
    };

    setTimeout(() => {
      setCurrentSeconds(remainingSeconds);
      setCurrentMinutes(remainingMinutes);
      setCurrentHours(remainingHours);
      setCurrentDays(remainingDays);
    }, 200);

    triggerSwipeAnimation(secondsElementRef, currentSeconds, remainingSeconds);
    triggerSwipeAnimation(minutesElementRef, currentMinutes, remainingMinutes);
    triggerSwipeAnimation(hoursElementRef, currentHours, remainingHours);
    triggerSwipeAnimation(daysElementRef, currentDays, remainingDays);
  }, [millisecondsLeft]);

  return (
    <div
      className="mt-4 text-center sm:mt-8"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="flex justify-center space-x-2 sm:space-x-4">
        <div className="flex flex-col items-center">
          <div
            ref={daysElementRef}
            className="countdown-item h-16 w-16 border-secondary-800 text-lg text-primary-700 dark:border-white-main sm:h-20 sm:w-20 sm:text-xl md:h-24 md:w-24 md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="animate-text">{currentDays}</div>
          </div>
          <div className="countdown-label mt-2 text-xs text-gray-500 sm:text-sm md:text-base">
            Days
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            ref={hoursElementRef}
            className="countdown-item h-16 w-16 border-secondary-800 text-lg text-primary-700 dark:border-white-main sm:h-20 sm:w-20 sm:text-xl md:h-24 md:w-24 md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="animate-text">{currentHours}</div>
          </div>
          <div className="countdown-label mt-2 text-xs text-gray-500 sm:text-sm md:text-base">
            Hours
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            ref={minutesElementRef}
            className="countdown-item h-16 w-16 border-secondary-800 text-lg text-primary-700 dark:border-white-main sm:h-20 sm:w-20 sm:text-xl md:h-24 md:w-24 md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="animate-text">{currentMinutes}</div>
          </div>
          <div className="countdown-label mt-2 text-xs text-gray-500 sm:text-sm md:text-base">
            Minutes
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            ref={secondsElementRef}
            className="countdown-item h-16 w-16 border-secondary-800 text-lg text-primary-700 dark:border-white-main sm:h-20 sm:w-20 sm:text-xl md:h-24 md:w-24 md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="animate-text">{currentSeconds}</div>
          </div>
          <div className="countdown-label mt-2 text-xs text-gray-500 sm:text-sm md:text-base">
            Seconds
          </div>
        </div>
      </div>
      <div
        className="mt-4 text-sm text-gray-600 dark:text-gray-400"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        {hasLaunched ? "Launched!" : "Until launch..."}
      </div>

      <style jsx>{`
        .rounded-xl {
          border-radius: 1rem;
        }

        .countdown-item {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          border-width: 1px;
          border-style: solid;
          font-weight: bold;
        }

        .countdown-label {
          font-size: 1rem;
        }

        @keyframes swipe {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          49% {
            transform: translateY(35%);
            opacity: 0;
          }
          50% {
            transform: translateY(-35%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-swipe {
          animation: swipe 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
