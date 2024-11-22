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

    return new Set(domainArray.map((d) => d.toLowerCase()));
  } catch (error) {
    console.error("Error fetching disposable domains:", error);
    return null;
  }
};

export const isDisposableEmail = async (email: string) => {
  // Extract domain from email
  const emailDomain = email.split("@")[1]?.toLowerCase();

  if (!emailDomain) {
    return false;
  }

  // Try remote domains first
  const remoteDomains = await fetchDisposableDomains();
  if (remoteDomains) {
    const result = remoteDomains.has(emailDomain);
    return result;
  }

  const localDomains = new Set(
    Object.keys(disposableEmailDomains as Record<string, boolean>).map((d) =>
      d.toLowerCase(),
    ),
  );

  const result = localDomains.has(emailDomain);
  return result;
};
