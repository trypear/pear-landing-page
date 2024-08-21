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

const blogPosts = [
  {
    title: "Implementing Claude 3.5 into PearAI's Ecosystem",
    slug: slugify("Implementing Claude 3.5 into PearAI's Ecosystem", {
      lower: true,
    }),
    content: `
        <article class="space-y-6">
          <p class="text-xl font-semibold text-gray-700 leading-relaxed">
            The integration of Claude 3.5 into PearAI's ecosystem marks a significant milestone in our journey towards more advanced and capable AI systems. This latest iteration of Claude brings unprecedented improvements in natural language understanding, multi-modal processing, and task completion.
          </p>
          
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Key Differences from Previous LLMs</h2>
            <p class="mb-3">
              Unlike its predecessors, Claude 3.5 showcases remarkable advancements in several areas:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>
                <span class="font-semibold">Enhanced Contextual Understanding:</span> Claude 3.5 demonstrates a deeper grasp of context, allowing for more nuanced and accurate responses in complex conversations.
              </li>
              <li>
                <span class="font-semibold">Improved Multi-modal Capabilities:</span> The model can now process and generate content across various modalities, including text, images, and structured data.
              </li>
              <li>
                <span class="font-semibold">Increased Ethical Awareness:</span> Claude 3.5 has been trained with a stronger emphasis on ethical considerations, reducing biases and improving safety in AI interactions.
              </li>
            </ul>
          </section>
  
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Implementation Challenges</h2>
            <p class="mb-3">
              Integrating Claude 3.5 into PearAI's ecosystem presented several challenges:
            </p>
            <ol class="list-decimal pl-6 space-y-2">
              <li>Adapting our existing infrastructure to handle the increased computational requirements of Claude 3.5.</li>
              <li>Ensuring seamless integration with our current suite of AI tools and services.</li>
              <li>Retraining our development team to leverage the new capabilities effectively.</li>
            </ol>
          </section>
  
          <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Future Implications</h2>
            <p class="mb-3">
              The successful implementation of Claude 3.5 opens up exciting possibilities for PearAI. We anticipate significant improvements in our natural language processing services, chatbot interactions, and content generation capabilities. Moreover, this integration paves the way for more advanced AI-driven solutions in fields such as healthcare, finance, and education.
            </p>
          </section>
  
          <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700">
            As we continue to explore the full potential of Claude 3.5, we remain committed to responsible AI development and look forward to sharing more insights and breakthroughs with our community.
          </blockquote>
  
          <section>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Next Steps</h3>
            <p class="mb-3">
              Our team is already working on:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Developing new applications that leverage Claude 3.5's advanced capabilities</li>
              <li>Conducting extensive testing to ensure robustness and reliability</li>
              <li>Collaborating with partners to explore industry-specific use cases</li>
            </ul>
          </section>
  
          <p class="text-lg font-semibold text-gray-700">
            Stay tuned for more updates as we continue to push the boundaries of what's possible with AI!
          </p>
        </article>
      `,
    date: "2024-08-20",
    author: "Conor Quinlan",
    authorAvatar: "/path/to/author-avatar.jpg",
    image: placeholderImage as StaticImageData,
    readingTime: "5 min read",
    tags: ["AI", "Machine Learning", "Claude 3.5", "PearAI"],
  },
  // Add more blog posts here
];

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
