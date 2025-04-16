"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/pesto-mascot.png" alt="Pesto mascot" width={40} height={40} />
          <span className="text-xl font-bold">Pesto</span>
        </Link>

        <nav className="hidden md:flex ml-auto items-center gap-6">
          <Link href="/features" className="text-sm font-medium transition-colors hover:text-pesto-700">
            Features
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-pesto-700">
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 ml-6">
          <Button variant="outline" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button className="bg-pesto-700 hover:bg-pesto-800" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        <button className="ml-auto md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col py-4 px-4 sm:px-6">
            <Link
              href="/features"
              className="py-3 text-sm font-medium transition-colors hover:text-pesto-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/blog"
              className="py-3 text-sm font-medium transition-colors hover:text-pesto-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
              <Button variant="outline" asChild className="w-full">
                <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button className="w-full bg-pesto-700 hover:bg-pesto-800" asChild>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
