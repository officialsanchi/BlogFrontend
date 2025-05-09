"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function CommentSection() {
  const [comment, setComment] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Jane Cooper",
      avatar: "https://placehold.co/40x40",
      date: "May 3, 2025",
      content:
        "This article provides great insights into the future of web development. I'm particularly excited about the advancements in AI-driven development tools.",
    },
    {
      id: 2,
      author: "Robert Johnson",
      avatar: "https://placehold.co/40x40",
      date: "May 3, 2025",
      content:
        "WebAssembly is definitely going to be a game-changer. I've been experimenting with it recently and the performance improvements are substantial.",
    },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const newComment = {
        id: comments.length + 1,
        author: "Current User",
        avatar: "https://placehold.co/40x40",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        content: comment,
      }

      setComments([...comments, newComment])
      setComment("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="mt-12 space-y-8">
      <h3 className="text-2xl font-bold tracking-tight">Comments</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit" disabled={isLoading || !comment.trim()}>
          {isLoading ? "Submitting..." : "Submit Comment"}
        </Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={comment.avatar || "https://placehold.co/40x40"} alt={comment.author} />
                <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{comment.author}</p>
                <p className="text-xs text-muted-foreground">{comment.date}</p>
              </div>
            </div>
            <p className="text-sm">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
