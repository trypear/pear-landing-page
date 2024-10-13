"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export default function SubmitBlog() {
  const [blogData, setBlogData] = useState({
    title: "",
    url: "",
    excerpt: "",
    date: "",
    author: "",
    readingTime: "",
    thumbnail: "",
    tags: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Make the API call to submit the blog
      const response = await fetch("/api/submit-blog", {
        method: "POST",
        body: JSON.stringify(blogData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Response:", data);

      // Reset form or show success message
    } catch (error) {
      console.error("Error submitting blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mx-auto mt-24 w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-2xl">Submit Your Blog</CardTitle>
        <CardDescription>
          Fill in the details to submit your blog post.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Blog Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="blog title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              name="url"
              placeholder="/blog/your-blog-title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              placeholder="excerpt"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Publication Date</Label>
            <Input
              id="date"
              name="date"
              placeholder="yyyy-mm-dd"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              name="author"
              placeholder="author name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="readingTime">Reading Time</Label>
            <Input
              id="readingTime"
              placeholder="i.e 5 minutes"
              name="readingTime"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input id="tags" name="tags" onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content (Markdown)</Label>
            <Textarea
              id="content"
              name="content"
              onChange={handleChange}
              required
              className="min-h-[200px]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Blog"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
