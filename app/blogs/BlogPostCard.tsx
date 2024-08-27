// app/blogs/BlogPostCard.tsx
"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string | StaticImageData;
}

interface BlogPostCardProps {
  post: BlogPost;
  className?: string;
  size?: 'medium' | 'large';
  isLatest?: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, className = "", size = 'medium', isLatest = false }) => {
  const isLarge = size === 'large';

  return (
    <Link href={`/blogs/${post.slug}`} className={className}>
      <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
      {isLatest && (
          <div className="absolute left-4 top-4 z-10">
            <span className="inline-flex items-center rounded-full bg-white/80 px-2 py-1 text-md font-medium text-gray-800 backdrop-blur-sm">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              Latest
            </span>
          </div>
        )}
        <CardContent className="p-0">
          <div className={`relative ${isLarge ? 'aspect-[21/9]' : 'aspect-[16/9]'}`}>
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h2 className={`font-bold text-gray-800 ${isLarge ? 'text-xl' : 'text-md'}`}>
              {post.title}
            </h2>
            <p className={`mt-2 text-gray-600 ${isLarge ? 'text-md' : 'text-sm'}`}>
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <Badge variant="secondary" className="text-xs font-normal">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </Badge>
              <span className="text-sm text-gray-500">{post.author}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
