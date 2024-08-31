import PostCard from "@/components/blog/PostCard";
import { constructMetadata } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Blog",
  description:
    "Discover insightful articles and the latest updates on PearAI. Stay informed, inspired, and ahead with expert tips, trends, and guides.",
  canonical: "/blog",
});

export default function Blog() {
  // Sort the array of posts by date in descending order (newest first)
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-32 sm:px-6">
      <h1 className="mb-10 text-center text-4xl font-semibold">Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
