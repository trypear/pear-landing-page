export type CancellationFeedback = {
  reasons: string[];
  comment: string;
};

export const cancellationReasons = [
  "Too expensive",
  "Not using it enough",
  "Missing features",
  "Found a better alternative",
  "Technical issues",
  "Other",
] as const;
