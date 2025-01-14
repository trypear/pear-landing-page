import { BUNNY_CDN_HOST } from "@/utils/constants";

export const videoData = [
  {
    id: 1,
    title: "Talk to your codebase directly",
    description:
      "Ask questions or generate code with the context of your @codebase for more accurate results.",
    videoUrl: `${BUNNY_CDN_HOST}/pearai-chat-welcome.mp4`,
    duration: 8500,
  },
  {
    id: 2,
    title: "No more tedious changes",
    description:
      "Inline code changes in your files with diffs. Here, PearAI Chat (powered by Continue*) adds print statements to help with debugging.",
    videoUrl: `${BUNNY_CDN_HOST}/pearai-cmd+i.mp4`,
    duration: 12500,
  },
  {
    id: 3,
    title: "Make features, refactors, or bug fixes directly.",
    description:
      "PearAI Creator (powered by aider*) finds where the changes need to be made, and implements them automatically.",
    videoUrl: `${BUNNY_CDN_HOST}/pearai-creator-welcome.mp4`,
    duration: 10500,
  },
  {
    id: 4,
    title: "Always have up-to-date information",
    description:
      "PearAI Search (Powered by Perplexity*) uses web data to provide you up-to-date info, going beyond traditional AI's knowledge cutoff limitations.",
    videoUrl: `${BUNNY_CDN_HOST}/pearai-search.mp4`,
    duration: 6500,
  },
];
