import Link from "next/link";
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
    date: "30 August 2024",
    title: "🎉 PearAI v1.0.0 - The Cupertino v1 Launch",
    version: "v1.0.0 🚀",
    description: (
      <>
        <p className="mb-4 text-lg font-semibold text-primary-700">
          Welcome to the future of AI-assisted development
        </p>
        <ul className="list-disc space-y-2 ps-6 text-sm">
          <li className="font-medium text-primary-600">🎓 Onboarding revamp</li>
          <li className="font-medium text-primary-600">
            🛠 Fixed "Continue generating" feature
          </li>
          <li className="font-medium text-primary-600">
            🔄 Model Choice on PearAI Server
          </li>
          <li className="font-medium text-primary-600">
            ⌨️ Improved shortcuts
          </li>
          <li className="font-medium text-primary-600">
            🆘 Improved help window
          </li>
          <li className="font-medium text-primary-600">
            🔓 Enabled free trials
          </li>
          <li className="font-medium text-primary-600">
            🌐 Server improvements, added prompt caching
          </li>
          <li className="font-medium text-primary-600">
            🚀 Launched to public!
          </li>
        </ul>
      </>
    ),
    screenshot: {
      src: "/images/changelogs/CupertinoV1 - v1.0.0.png",
      alt: "PearAI v1.0.0 Dashboard",
      width: 461,
      height: 243,
    },
  },
  {
    date: "19 August 2024",
    title: "🚧 Model switch feature & Bug Fixes",
    version: "v0.0.3",
    description: (
      <ul className="text-gray-60 list-disc space-y-1 ps-6 text-sm">
        <li>
          <Link
            href="https://github.com/trypear/pearai-submodule/pull/137"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Huge refactor
          </Link>{" "}
          & Performance improvements
        </li>
        <li>Added Mistral AI support</li>
        <li>Easy model switching</li>
        <li>Settings page revamp</li>
        <li>Added FAQ Page</li>
        <li>CMD+I context + options improved</li>
        <li>@codebase searching enhanced</li>
        <li>PearAI token refresh bug fixed</li>
        <li>Onboarding flow revamp</li>
      </ul>
    ),
    screenshot: {
      src: "/images/changelogs/modelSwitch- v0.0.3.png",
      alt: "Screenshot of performance enhancements",
      width: 461,
      height: 243,
    },
  },
  {
    date: "2 August 2024",
    title: "🌟 Claude Sonnet Model, UI/UX improvements",
    version: "v0.0.2",
    description: (
      <ul className="text-gray-60 list-disc space-y-1 ps-6 text-sm">
        <li>New AI Model - Claude 3.5 Sonnet</li>
        <li>Shortcuts Bar</li>
        <li>UI/UX improvements</li>
        <li>Bug fixes, including some extensions not working</li>
      </ul>
    ),
    screenshot: {
      src: "/images/changelogs/shortcutBar- v0.0.2.png",
      alt: "Screenshot of Claude Sonnet Model and UI improvements",
      width: 461,
      height: 243,
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
      src: "/images/changelogs/includeFile - v0.0.1.png",
      alt: "Screenshot of initial launch features",
      width: 461,
      height: 243,
    },
  },
];

export default updates;
