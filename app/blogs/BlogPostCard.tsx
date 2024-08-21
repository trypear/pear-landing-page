"use client";

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import slugify from 'slugify';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string | StaticImageData;
}

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>{post.author}</span>
        </div>
      </CardContent>
        <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-start p-0 hover:bg-transparent">
                <Link href={`/blogs/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                    Read More →
                </Link>
            </Button>
        </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
