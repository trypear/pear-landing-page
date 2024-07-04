"use client";

import React, { useState, useEffect } from "react";
import { MoonStar, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark");
    const isDarkMode = JSON.parse(savedMode!);
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("dark", JSON.stringify(newMode));
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="flex h-8 w-8 items-center justify-center text-secondary-600 duration-200 hover:text-secondary-400 dark:text-gray-400 dark:hover:text-white-300">
      <label className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-gray-300 duration-200 hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-gray-800">
        <input
          className="hidden"
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        {darkMode ? (
          <Sun
            strokeWidth={1}
            className="flex h-5 w-5 items-center justify-center"
          />
        ) : (
          <MoonStar
            strokeWidth={1}
            className="flex h-5 w-5 items-center justify-center"
          />
        )}
      </label>
    </div>
    </>
  );
}
