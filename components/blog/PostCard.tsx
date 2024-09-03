import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  url: string;
}

const PostCard = ({ title, date, excerpt, thumbnail, url }: PostCardProps) => (
  <Link
    href={url}
    className="mb-8 block rounded-lg p-3 hover:bg-neutral-200 dark:hover:bg-slate-800"
  >
    <div className="relative mb-6 aspect-video w-full rounded-md bg-gray-300">
      <Image
        fill
        src={thumbnail}
        alt={title}
        className="h-full w-full rounded-md"
      />
    </div>

    <time
      dateTime={date}
      className="block text-xs tracking-[0.01rem] text-gray-600 dark:text-gray-600"
    >
      {format(parseISO(date), "LLLL d, yyyy")}
    </time>
    <h2 className="mb-2 mt-1.5 text-xl font-semibold">{title}</h2>
    <p className="line-clamp-3 text-sm text-gray-700 dark:text-gray-600">
      {excerpt}
    </p>
  </Link>
);

export default PostCard;
