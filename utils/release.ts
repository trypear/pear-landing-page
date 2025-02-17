import { ReleaseInfo, ReleaseResponse, Releases } from "@/types/releaseTypes";
import { Octokit } from "@octokit/rest";
import { toast } from "sonner";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

type ReleaseEndpoint = "getLatestRelease" | "getReleaseByTag";

async function fetchRelease(
  method: ReleaseEndpoint,
  params: { owner: string; repo: string; tag?: string },
): Promise<ReleaseInfo> {
  try {
    let response;
    if (method === "getLatestRelease") {
      response = await octokit.rest.repos.getLatestRelease({
        owner: params.owner,
        repo: params.repo,
      });
    } else {
      response = await octokit.rest.repos.getReleaseByTag({
        owner: params.owner,
        repo: params.repo,
        tag: params.tag!,
      });
    }

    const { tag_name, published_at } = response.data as ReleaseResponse;

    return {
      version: tag_name,
      releaseDate: new Date(published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
  } catch (error) {
    console.error(`Error fetching ${method}:`, error);
    toast.error("Failed to fetch release. Please try again later.");
    return { version: "", releaseDate: "" };
  }
}

export async function getAllReleases(): Promise<Releases> {
  try {
    const [windowsAndM1Release, linuxRelease] = await Promise.all([
      fetchRelease("getLatestRelease", {
        owner: "trypear",
        repo: "pearai-master",
      }),
      fetchRelease("getReleaseByTag", {
        owner: "trypear",
        repo: "pearai-app",
        tag: "v1.8.0-Linux",
      }),
    ]);

    return {
      windows: windowsAndM1Release,
      mac: windowsAndM1Release,
      linux: linuxRelease,
    };
  } catch (error) {
    console.error("Error fetching all releases:", error);
    return {
      windows: { version: "", releaseDate: "" },
      mac: { version: "", releaseDate: "" },
      linux: { version: "", releaseDate: "" },
    };
  }
}
