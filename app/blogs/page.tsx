// app/blogs/page.tsx
import BlogPostCard from "@/app/blogs/BlogPostCard";
import { blogPosts } from "@/lib/blogData";

const BlogPage = () => {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const [latestPost, ...otherPosts] = sortedPosts;

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Dev Blogs
        </h1>

        {/* Latest Post */}
        <div className="mb-16">
          <BlogPostCard
            post={latestPost}
            size="large"
            className="w-full shadow-lg"
            isLatest={true}
          />
        </div>

        {/* Other Posts */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              size="medium"
              className="shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
