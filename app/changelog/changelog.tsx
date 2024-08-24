import React from "react";

type ChangelogEntry = {
  date: string;
  title: string;
  description: React.ReactNode;
  version: string;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const updates: ChangelogEntry[] = [
  {
    date: "2 August 2024",
    title: "🌟 Claude Sonnet Model, UI/UX improvements",
    version: "v0.0.2",
    description: (
      <ul className="text-gray-60 list-disc space-y-1 ps-6 text-sm">
        <li>New AI Model - Claude 3.5 Sonnet</li>
        <li>Shortcuts Bar</li>
        <li>GPT Autocompletions</li>
        <li>UI/UX improvements</li>
        <li>Bug fixes, including some extensions not working</li>
      </ul>
    ),
    screenshot: {
      src: "/images/shortcutBar- v.0.0.2.png",
      alt: "Screenshot of Claude Sonnet Model and UI improvements",
      width: 300,
      height: 300,
    },
  },
  {
    date: "15 July 2024",
    title: "🚀 Initial Launch",
    version: "v0.0.1",
    description: (
      <ul className="text-gray-60 list-disc space-y-1 ps-6 text-sm">
        <li>VSCode Fork - Feel right at home</li>
        <li>Chat with AI models who have full code context</li>
        <li>Tag your files @filename</li>
      </ul>
    ),
    screenshot: {
      src: "/images/includeFile - v.0.0.2.png",
      alt: "Screenshot of initial launch features",
      width: 300,
      height: 300,
    },
  },
];

export default updates;
