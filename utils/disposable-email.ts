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
    const domainArray = data.trim().split("\n").filter(Boolean);

    return domainArray;
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

  if (domains) {
    // Create a regex pattern that matches any domain in the list
    const domainPattern = new RegExp(
      domains
        .map((d) => d.replace(/\./g, "\\.").replace(/\*/g, ".*"))
        .join("|"),
      "i",
    );
    return domainPattern.test(emailDomain);
  }

  // Fall back to local JSON
  const localDomains = Object.keys(
    disposableEmailDomains as Record<string, boolean>,
  );
  const localDomainPattern = new RegExp(
    localDomains
      .map((d) => d.replace(/\./g, "\\.").replace(/\*/g, ".*"))
      .join("|"),
    "i",
  );
  return localDomainPattern.test(emailDomain);
};
