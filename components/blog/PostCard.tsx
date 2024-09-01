import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const PostCard = (post: Post) => (
  <Link
    href={post.url}
    className="mb-8 block rounded-lg p-3 hover:bg-neutral-200 dark:hover:bg-slate-800"
  >
    <div className="relative mb-6 aspect-video w-full rounded-md bg-gray-300">
      <Image
        fill
        src={post.thumbnail}
        alt={post.title}
        className="h-full w-full rounded-md"
      />
    </div>

    <time
      dateTime={post.date}
      className="block text-xs tracking-[0.01rem] text-gray-600 dark:text-gray-600"
    >
      {format(parseISO(post.date), "LLLL d, yyyy")}
    </time>
    <h2 className="mb-2 mt-1.5 text-xl font-semibold">{post.title}</h2>
    <p className="line-clamp-3 text-sm text-gray-700 dark:text-gray-600">
      {post.excerpt}
    </p>
  </Link>
);

export default PostCard;
