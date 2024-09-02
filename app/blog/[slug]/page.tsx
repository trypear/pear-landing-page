import { cn, constructMetadata } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: post.url,
    ogImage: post.thumbnail,
  });
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-prose px-4 py-8 pt-32 sm:px-6">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
        <div className="relative mt-8 aspect-video w-full rounded-md bg-gray-300">
          <Image
            fill
            src={post.thumbnail}
            alt={post.title}
            className="h-full w-full rounded-md"
          />
        </div>
      </div>
      <div
        className={cn(
          "prose prose-lg dark:prose-invert",
          "prose-a:text-primary-700 hover:prose-a:text-primary-800 dark:prose-a:text-primary-600 dark:hover:prose-a:text-primary-700",
          "prose-blockquote:not-italic",
          "prose-th:border prose-th:border-slate-300 prose-th:bg-slate-200/70 prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-slate-300 prose-td:px-3 prose-td:py-2 dark:prose-th:border-slate-700 dark:prose-th:bg-slate-900 dark:prose-td:border-slate-700",
          "prose-hr:border-slate-300 dark:prose-hr:border-slate-700",
        )}
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default PostLayout;
