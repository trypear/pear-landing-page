import { Suspense } from "react";
import { getTweet } from "react-tweet/api";
import { type TweetProps, TweetSkeleton } from "react-tweet";
import { MyTweet } from "./ui/my-tweet";

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        }
      })
    : undefined;

  if (!tweet) {
    return "";
  }

  return <MyTweet tweet={tweet} components={components} />;
};

export const Tweet = ({
  fallback = <TweetSkeleton />,
  ...props
}: TweetProps) => (
  <Suspense fallback={fallback}>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <TweetContent {...props} />
  </Suspense>
);
