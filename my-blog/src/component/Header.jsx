"use client"

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { ModeToggle } from "./ModeToggle"
import { Search, Menu, X } from "lucide-react"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 pt-16">
                <Link to="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link to="/blog" className="text-lg font-medium">
                  Blog
                </Link>
                <Link to="/categories/all" className="text-lg font-medium">
                  Categories
                </Link>
                <Link to="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link to="/contact" className="text-lg font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">ModernBlog</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium">
            Home
          </Link>
          <Link to="/blog" className="text-sm font-medium">
            Blog
          </Link>
          <Link to="/categories/all" className="text-sm font-medium">
            Categories
          </Link>
          <Link to="/about" className="text-sm font-medium">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {showSearch ? (
            <div className="flex items-center">
              <Input type="search" placeholder="Search articles..." className="w-[200px] md:w-[300px]" />
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
