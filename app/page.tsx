import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, User, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-10 text-center">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/pesto-mascot.png"
                  alt="Pesto mascot"
                  width={80}
                  height={80}
                  className="animate-bounce"
                />
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
                  Connect<span className="text-pesto-700">.</span> Your<span className="text-sage-600">.</span> Future
                  <span className="text-pesto-700">.</span>
                </h1>
              </div>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Pesto connects early startup founders with talented professionals looking to make an impact.
              </p>

              {/* Updated search component */}
              <div className="w-full max-w-4xl rounded-lg border bg-white shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 border-b">
                  <div className="flex items-center px-4 py-3 border-r">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <Input
                      placeholder="Location (e.g. San Francisco, CA)"
                      className="border-0 focus-visible:ring-0 p-0 text-base"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center flex-1">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <Input
                        placeholder="Role, skills, or expertise"
                        className="border-0 focus-visible:ring-0 p-0 text-base"
                      />
                    </div>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <textarea
                      placeholder="Describe your perfect match..."
                      className="w-full h-24 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pesto-500 resize-none text-base"
                    ></textarea>
                  </div>
                  <div className="text-sm text-gray-500 mb-4 italic">
                    Try: "I'm looking for a technical co-founder with experience in AI and machine learning"
                  </div>
                  <Link href="/find-matches/results" className="w-full block">
                    <Button className="w-full bg-pesto-700 hover:bg-pesto-800 text-white py-6 text-lg">
                      Find Matches
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
