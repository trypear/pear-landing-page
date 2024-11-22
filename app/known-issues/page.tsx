import React from "react";
import issues from "./issues";
import repositories from "./repositories";
import { IssueList } from "./issuesList";
import Link from "next/link";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";

type IssueEntry = (typeof issues)[number];
type Repository = (typeof repositories)[number];

export const metadata: Metadata = constructMetadata({
  title: "Issues",
  description: "This page lists all current known issues and their status.",
  canonical: "/known-issues",
});

const CurrentKnownIssues: React.FC = () => {
  const repositoryMap = repositories.reduce<Record<string, Repository>>(
    (acc, repo) => {
      acc[repo.id] = repo;
      return acc;
    },
    {},
  );

  const issuesByRepositoryId = issues.reduce<Record<string, IssueEntry[]>>(
    (acc, issue) => {
      const repoId = issue.repositoryId;
      if (!acc[repoId]) {
        acc[repoId] = [];
      }
      acc[repoId].push(issue);
      return acc;
    },
    {},
  );

  return (
    <div className="mx-auto mb-32 mt-36 min-h-screen w-full max-w-3xl overflow-hidden px-10">
      <h1 className="mb-12 text-center text-4xl font-extrabold text-primary-700">
        Current Known Issues
      </h1>
      <main>
        {Object.entries(issuesByRepositoryId).map(
          ([repoId, repoIssues], index) => {
            const repo = repositoryMap[repoId];
            const issuesHref = `${repo.href}/issues`;

            return (
              <section key={repoId} className="mb-16">
                {/* Separator */}
                {index > 0 && <hr className="mb-8 border-gray-300" />}
                {/* Repository Name as a Link */}
                <h2 className="mb-4 text-2xl font-bold">
                  <Link href={repo.href} className="hover:underline">
                    {repo.name}
                  </Link>
                </h2>
                {/* Link to Repository Issues Page */}
                <div className="mb-6">
                  <Link
                    href={issuesHref}
                    className="text-primary-600 hover:underline"
                  >
                    View All Issues
                  </Link>
                </div>
                {/* List of Issues */}
                <div className="flex flex-col items-center space-y-8">
                  {repoIssues.map((issue, index) => (
                    <IssueList key={index} {...issue} />
                  ))}
                </div>
              </section>
            );
          },
        )}
      </main>
    </div>
  );
};

export default CurrentKnownIssues;
