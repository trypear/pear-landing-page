"use client";

import React, { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!!localTheme || !systemTheme) return;
    setTheme(systemTheme as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemTheme]);

  if (!mounted) return null;

  return (
    <div className="flex h-9 w-9 items-center justify-center duration-200">
      <label className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-gray-600/50 duration-200 hover:bg-gray-400/20">
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
