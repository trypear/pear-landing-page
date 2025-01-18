import type { Tweet } from "react-tweet/api";
import {
  type TwitterComponents,
  TweetContainer,
  TweetHeader,
  TweetInReplyTo,
  TweetBody,
  TweetMedia,
  TweetInfo,
  TweetActions,
  QuotedTweet,
  enrichTweet,
} from "react-tweet";
import Image from "next/image";

export const components: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
};

type Props = {
  tweet: Tweet;
  components?: TwitterComponents;
};

export const MyTweet = ({ tweet: t, components }: Props) => {
  const tweet = enrichTweet(t);
  return (
    <TweetContainer>
      <TweetHeader tweet={tweet} components={components} />

      {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}

      <div className="flex flex-col md:flex-row">
        <div className="mb-4 pr-4 md:w-11/12">
          <TweetBody tweet={tweet} />
        </div>

        <div className="custom-tweet-container -mt-2 md:w-1/12">
          {tweet.mediaDetails?.length ? (
            <TweetMedia tweet={tweet} components={components} />
          ) : null}
        </div>
      </div>

      {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}

      <TweetInfo tweet={tweet} />
      <TweetActions tweet={tweet} />
    </TweetContainer>
  );
};
