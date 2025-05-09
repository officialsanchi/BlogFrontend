"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset submission state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      {isSubmitted ? (
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-medium">Thank you for subscribing!</h3>
          <p className="text-sm text-muted-foreground">You've been added to our newsletter list.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest articles and resources sent straight to your inbox.
            </p>
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      )}
    </div>
  )
}
