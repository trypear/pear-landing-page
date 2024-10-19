import disposableEmailDomains from "@/data/disposable-email-domains.json";

const fetchDisposableDomains = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/disposable/disposable-email-domains/master/domains_strict.txt",
    );
    if (!res.ok) {
      throw new Error(
        `Failed to fetch disposable email domains: ${res.statusText}`,
      );
    }

    const data = await res.text();
    // Convert the raw text into a Set for fast lookups
    const domainSet = new Set(data.trim().split("\n").filter(Boolean));

    return domainSet;
  } catch (error) {
    console.error("Error fetching disposable domains:", error);
    return null;
  }
};

export const isDisposableEmail = async (email: string) => {
  const domains = await fetchDisposableDomains();

  // Extract domain from email
  const emailDomain = email.split("@")[1];

  if (!emailDomain) return false;

  if (domains) return domains.has(emailDomain);

  // Fall back to local JSON
  return (disposableEmailDomains as Record<string, boolean>)[emailDomain];
};
