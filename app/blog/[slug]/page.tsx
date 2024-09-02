import { cn, constructMetadata } from "@/lib/utils";
import { allAuthors, allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    canonical: post.url,
    ogImage: post.thumbnail,
  });
};

const AVATAR_SIZE = 44;

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  const author = allAuthors.find(({ github }) => github === post.author);

  return (
    <article className="mx-auto max-w-prose px-4 py-8 pt-32 sm:px-6">
      <div className="mb-8">
        <h1 className="mb-4 mt-4 text-4xl font-bold">{post.title}</h1>
        <div className="mt-4 flex items-start justify-between text-sm">
          {author && (
            <Link href={`https://github.com/${author.github}`}>
              <div className="flex items-center gap-2">
                <Image
                  height={AVATAR_SIZE}
                  width={AVATAR_SIZE}
                  src={`https://github.com/${author.github}.png?s=${AVATAR_SIZE}`}
                  alt={author.name}
                  className="h-11 w-11 rounded-full bg-gray-200"
                />
                <div>
                  <h6 className="font-semibold">{author.name}</h6>
                  <span className="text-gray-600">@{author.github}</span>
                </div>
              </div>
            </Link>
          )}

          <div className="text-end text-gray-600">
            <time dateTime={post.date} className="mb-0.5 block text-sm">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <span>{post.readingTime}</span>
          </div>
        </div>
        <div className="relative mt-6 aspect-video w-full rounded-md bg-gray-300">
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
