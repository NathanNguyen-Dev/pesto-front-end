import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/pesto-mascot.png" alt="Pesto mascot" width={40} height={40} />
              <span className="text-xl font-bold">Pesto</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Connecting early startup founders with talented professionals since 2023.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Platform</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-gray-500 hover:text-pesto-700">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-500 hover:text-pesto-700">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-500 hover:text-pesto-700">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-pesto-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-500 hover:text-pesto-700">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-500 hover:text-pesto-700">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-pesto-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-pesto-700">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-pesto-700">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© 2023 Pesto. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-xs text-gray-500 hover:text-pesto-700">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-pesto-700">
              Privacy
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-pesto-700">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
