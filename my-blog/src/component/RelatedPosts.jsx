import { Link } from "react-router-dom"
import { Badge } from "./ui/badge"

export default function RelatedPosts() {
  const relatedPosts = [
    {
      title: "The Rise of AI in Web Development",
      excerpt: "How artificial intelligence is changing the way we build websites and applications.",
      category: "Technology",
      imageUrl: "https://placehold.co/600x400",
      slug: "ai-in-web-development",
    },
    {
      title: "Understanding WebAssembly: A Beginner's Guide",
      excerpt: "Learn the basics of WebAssembly and how it's revolutionizing web performance.",
      category: "Development",
      imageUrl: "https://placehold.co/600x400",
      slug: "webassembly-guide",
    },
    {
      title: "Edge Computing: The Next Frontier",
      excerpt: "Explore how edge computing is reshaping the web and enabling new possibilities.",
      category: "Technology",
      imageUrl: "https://placehold.co/600x400",
      slug: "edge-computing",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {relatedPosts.map((post) => (
        <article key={post.slug} className="group overflow-hidden rounded-lg border bg-background shadow-sm">
          <Link to={`/blog/${post.slug}`} className="overflow-hidden block">
            <img
              src={post.imageUrl || "https://placehold.co/600x400"}
              alt={post.title}
              className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <div className="p-4">
            <Badge variant="outline" className="mb-2">
              {post.category}
            </Badge>
            <Link to={`/blog/${post.slug}`}>
              <h3 className="mb-2 text-lg font-semibold tracking-tight group-hover:text-primary">{post.title}</h3>
            </Link>
            <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
