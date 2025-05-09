import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

export default function AuthorBio({ author }) {
  return (
    <div className="my-12 rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Avatar className="h-16 w-16">
          <AvatarImage src={author.avatar || "https://placehold.co/100x100"} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-medium">{author.name}</h3>
            <p className="text-sm text-muted-foreground">{author.role}</p>
          </div>
          <p className="text-sm">{author.bio}</p>
          <Button variant="outline" size="sm">
            View all posts
          </Button>
        </div>
      </div>
    </div>
  )
}
