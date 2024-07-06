"use client";

import React, { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex h-8 w-8 items-center justify-center text-secondary-600 duration-200 hover:text-secondary-400 dark:text-gray-400 dark:hover:text-white-300">
      <label className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-gray-200 duration-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
        <input
          className="hidden"
          type="checkbox"
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          checked={theme === "dark"}
        />
        {theme === "light" ? (
          <Sun strokeWidth={1} className="h-5 w-5" />
        ) : (
          <MoonStar strokeWidth={1} className="h-5 w-5" />
        )}
      </label>
    </div>
  );
}
