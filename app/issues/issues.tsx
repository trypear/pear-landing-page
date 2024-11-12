import React from "react";

type Severity = "low" | "medium" | "high" | "critical";

export type IssueEntry = {
  date: string;
  title: string;
  description: React.ReactNode;
  repositoryId: string;
  issueLink: string;
  severity: Severity;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const issues: IssueEntry[] = [
  {
    date: "2024-11-10",
    title: "Remote SSH not working",
    description: (
      <>
        <p>Currently PearAI does not support remote SSH.</p>
        <p>Impact:</p>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            As of now, you can&apos;t use remote SSH to connect to your server.
          </li>
        </ul>
      </>
    ),
    repositoryId: "pearai-app",
    issueLink: "https://trypear.ai/issues",
    severity: "high",
  },
];

export default issues;
