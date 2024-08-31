import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
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
        className="prose dark:prose-invert dark:prose-pre:bg-slate-800"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default PostLayout;
