import React from "react";

type Severity = "low" | "medium" | "high" | "critical";

export type IssueEntry = {
  date: string;
  title: string;
  description: React.ReactNode;
  repositoryId: string;
  issueLink: string;
  severity?: Severity;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const issues: IssueEntry[] = [
  {
    date: "",
    title: "Remote SSH not supported",
    description: (
      <>
        <p>
          Currently PearAI does not support remote SSH. We plan on supporting
          this in the near future.
        </p>
      </>
    ),
    repositoryId: "pearai-app",
    issueLink: "",
  },
  {
    date: "",
    title: "Liveshare not supported",
    description: (
      <>
        <p>
          Currently PearAI does not support Liveshare extension. We plan on
          supporting this in the near future.
        </p>
      </>
    ),
    repositoryId: "pearai-app",
    issueLink: "",
  },
];

export default issues;
