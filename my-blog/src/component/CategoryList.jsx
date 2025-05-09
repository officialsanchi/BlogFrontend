import { Link } from "react-router-dom"
import { Badge } from "./ui/badge"

export default function CategoryList() {
  const categories = [
    { name: "Technology", count: 24, slug: "technology" },
    { name: "Design", count: 18, slug: "design" },
    { name: "Development", count: 32, slug: "development" },
    { name: "JavaScript", count: 27, slug: "javascript" },
    { name: "React", count: 21, slug: "react" },
    { name: "CSS", count: 15, slug: "css" },
    { name: "TypeScript", count: 19, slug: "typescript" },
    { name: "Accessibility", count: 8, slug: "accessibility" },
    { name: "Tutorials", count: 23, slug: "tutorials" },
    { name: "Resources", count: 12, slug: "resources" },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <Link key={category.slug} to={`/categories/${category.slug}`}>
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            {category.name} <span className="ml-1 text-muted-foreground">({category.count})</span>
          </Badge>
        </Link>
      ))}
    </div>
  )
}
