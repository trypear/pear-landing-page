import { cn, constructMetadata, normalizeDate } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "@/lib/blog/postData";
import Footer from "@/components/footer";

export const generateStaticParams = async () =>
  posts.map((post) => ({ slug: post.url.split("/").pop() }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = posts.find((post) => post.url.endsWith(params.slug));

  if (!post) notFound();

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: post.url,
    ogImage: post.thumbnail,
  });
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = posts.find((post) => post.url.endsWith(params.slug));

  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-2xl px-4 py-8 pt-24 sm:px-6 sm:pt-32 md:max-w-3xl lg:max-w-4xl">
        <div className="mb-8 text-center">
          <time
            dateTime={post.date}
            className="text-xs text-gray-600 sm:text-sm md:text-base"
          >
            {format(parseISO(normalizeDate(post.date)), "LLLL d, yyyy")}
          </time>
          {post.readingTime && (
            <span className="ml-2 text-xs text-gray-600 sm:text-sm md:text-base">
              · {post.readingTime} read
            </span>
          )}
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          {post.author && (
            <div className="mt-4 flex items-center justify-center">
              <span className="text-sm text-gray-700 sm:text-base md:text-lg">
                By {post.author}
              </span>
            </div>
          )}
          <div className="relative mx-auto mt-8 aspect-video w-full max-w-2xl rounded-md bg-gray-300">
            <Image
              fill
              src={post.thumbnail || ""}
              alt={post.title || "Add a Title"}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-200 px-2 py-1 text-xs sm:text-sm md:text-base"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div
          className={cn(
            "prose prose-base dark:prose-invert sm:prose-lg md:prose-xl",
            "prose-a:text-primary-700 hover:prose-a:text-primary-800 dark:prose-a:text-primary-600 dark:hover:prose-a:text-primary-700",
            "prose-blockquote:not-italic",
            "prose-th:border prose-th:border-slate-300 prose-th:bg-slate-200/70 prose-th:px-2 prose-th:py-1 prose-td:border prose-td:border-slate-300 prose-td:px-2 prose-td:py-1 dark:prose-th:border-slate-700 dark:prose-th:bg-slate-900 dark:prose-td:border-slate-700 sm:prose-th:px-3 sm:prose-th:py-2 sm:prose-td:px-3 sm:prose-td:py-2",
            "prose-hr:border-slate-300 dark:prose-hr:border-slate-700",
            "prose-img:rounded-md",
          )}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.thumbnail,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
          }),
        }}
      />
    </>
  );
};

export default PostLayout;
