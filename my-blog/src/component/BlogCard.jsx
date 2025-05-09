import { Link } from "react-router-dom"
import { Badge } from "./ui/badge"
import { Calendar } from "lucide-react"

export default function BlogCard({ title, excerpt, author, date, category, imageUrl, slug }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <Link to={`/blog/${slug}`} className="overflow-hidden block">
        <img
          src={imageUrl || "https://placehold.co/600x400"}
          alt={title}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
        <div className="space-y-3">
          <Badge variant="outline" className="w-fit">
            {category}
          </Badge>
          <Link to={`/blog/${slug}`} className="group">
            <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">{title}</h3>
          </Link>
          <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <span>{author}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
