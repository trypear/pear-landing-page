"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import placeholderImage from "@/public/images/claude-3.5-sonnet.png";
import slugify from "slugify";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarIcon,
  UserIcon,
  ArrowLeft,
  ThumbsUp,
  MessageSquare,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { blogPosts } from "@/lib/blogData";

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const post = blogPosts.find((p) => p.slug === params.slug);

  useEffect(() => {
    setLikes(Math.floor(Math.random() * 100));
    setComments(["Great article!", "Very informative, thanks for sharing."]);
  }, []);

  if (!post) {
    notFound();
  }

  const handleLike = () => setLikes(likes + 1);
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-4xl px-4 py-20"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <Link href="/blogs" passHref>
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="mb-4 text-4xl font-bold">
              {post.title}
            </CardTitle>
            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <UserIcon className="mr-2 h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div>{post.readingTime}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative mb-8 h-96 w-full overflow-hidden rounded-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 flex items-center space-x-4"
      >
        <Avatar>
          <AvatarImage src={post.authorAvatar} alt={post.author} />
          <AvatarFallback>
            {post.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{post.author}</p>
          <p className="text-sm text-muted-foreground">Author</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 flex items-center space-x-4"
      >
        <Button onClick={handleLike} variant="outline">
          <ThumbsUp className="mr-2 h-4 w-4" />
          Like ({likes})
        </Button>
        <Button variant="outline">
          <MessageSquare className="mr-2 h-4 w-4" />
          Comment ({comments.length})
        </Button>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-12"
      >
        <h3 className="mb-6 text-2xl font-semibold">Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="mb-4 rounded-lg bg-gray-50 p-4 shadow">
            <p>{comment}</p>
          </div>
        ))}
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="mb-4"
        />
        <Button onClick={handleCommentSubmit}>Submit Comment</Button>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;
