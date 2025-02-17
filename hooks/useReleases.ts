import { useState, useEffect } from "react";
import { Releases } from "@/types/releaseTypes";
import { getAllReleases } from "@/utils/release";

export function useReleases() {
  const [releases, setReleases] = useState<Releases>({
    windows: { version: "", releaseDate: "" },
    mac: { version: "", releaseDate: "" },
    linux: { version: "", releaseDate: "" },
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchReleases = async () => {
      try {
        const data = await getAllReleases();
        if (mounted && data) {
          setReleases(data);
        }
      } catch (error) {
        console.error("Error fetching releases:", error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchReleases();
    return () => {
      mounted = false;
    };
  }, []);

  return { releases, isLoading };
}
