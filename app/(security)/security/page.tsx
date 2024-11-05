import { OpenSourceSecurity } from "@/app/(security)/components/OpenSourceSecurity";
import { PageHeader } from "@/app/(security)/components/PageHeader";
import { PrivacyProtection } from "@/app/(security)/components/PrivacyProtection";
import { SecurityApproach } from "@/app/(security)/components/SecurityApproach";
import { SecurityCommitment } from "@/app/(security)/components/SecurityCommitment";
import { SecurityRoadmap } from "@/app/(security)/components/SecurityRoadmap";
import { TableOfContents } from "@/app/(security)/components/TableOfContents";
import { VulnerabilityReporting } from "@/app/(security)/components/VulnerabilityReporting";

export default function SecurityPage() {
  const tableOfContents = [
    { id: "security-commitment", title: "Security Commitment" },
    { id: "security-approach", title: "Security Approach" },
    { id: "privacy", title: "Privacy & Data Protection" },
    { id: "roadmap", title: "Security Roadmap" },
    { id: "report", title: "Report a Vulnerability" },
  ];

  return (
    <div className="container mx-auto mt-24 max-w-5xl py-12">
      <div className="relative flex gap-12">
        <TableOfContents items={tableOfContents} />

        <div className="max-w-3xl flex-1">
          <PageHeader />

          <div className="space-y-16">
            <SecurityCommitment />
            <SecurityApproach />
            <OpenSourceSecurity />
            <PrivacyProtection />
            <SecurityRoadmap />
            <VulnerabilityReporting />
          </div>
        </div>
      </div>
    </div>
  );
}
