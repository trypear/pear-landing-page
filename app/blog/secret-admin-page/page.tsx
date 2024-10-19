'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MoreHorizontal, Loader2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Blog {
  id: number
  title: string
  url: string
  excerpt: string
  date: string
  author: string
  tag: string | null
  content: string
  readingtime: number
  status: string
}

export default function BlogApproval() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/approve-blog')
      if (!response.ok) {
        throw new Error('Failed to fetch blogs')
      }
      const data = await response.json()
      setBlogs(data)
    } catch (err) {
      setError('Failed to load blogs. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleApprove = async (blogId: number) => {
    try {
      const response = await fetch('/api/approve-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: blogId }),
      })

      if (!response.ok) {
        throw new Error('Failed to approve blog')
      }

      // Update the local state to reflect the change

    } catch (err) {
      setError('Failed to approve blog.')
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <Card className="w-full mt-20">
      <CardHeader>
        <CardTitle>Approve Blogs</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Excerpt</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Reading Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.url}</TableCell>
                <TableCell>{blog.excerpt}</TableCell>
                <TableCell>{blog.date}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>{blog.tag || 'N/A'}</TableCell>
                <TableCell>{blog.content.substring(0, 50)}...</TableCell>
                <TableCell>{blog.readingtime} min</TableCell>
                <TableCell>{blog.status}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleApprove(blog.id)}>
                        Approve
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}