import { Link } from "react-router-dom"
import { Badge } from "./ui/badge"
import { Calendar } from "lucide-react"

export default function FeaturedPost({ title, excerpt, author, date, category, imageUrl, slug }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <Link to={`/blog/${slug}`} className="overflow-hidden rounded-lg">
        <img
          src={imageUrl || "https://placehold.co/800x600"}
          alt={title}
          className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="flex flex-col justify-center space-y-4">
        <Badge variant="outline" className="w-fit">
          {category}
        </Badge>
        <div className="space-y-2">
          <Link to={`/blog/${slug}`} className="group">
            <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
              {title}
            </h3>
          </Link>
          <p className="text-muted-foreground">{excerpt}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{author}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
