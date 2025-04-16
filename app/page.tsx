import Image from "next/image"
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
                  <Button className="w-full bg-pesto-700 hover:bg-pesto-800 text-white py-6 text-lg">
                    Find Matches
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Pesto?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We make it easy to find the perfect match between founders and talent.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white shadow-sm">
                <div className="p-3 rounded-full bg-pesto-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-pesto-700"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Curated Connections</h3>
                <p className="text-gray-500 text-center">
                  We match founders with professionals based on skills, values, and vision.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white shadow-sm">
                <div className="p-3 rounded-full bg-amber-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-amber-600"
                  >
                    <path d="M12 2v4" />
                    <path d="m6.41 6.41 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="m6.41 17.59 2.83-2.83" />
                    <path d="M12 18v4" />
                    <path d="m17.59 17.59-2.83-2.83" />
                    <path d="M22 12h-4" />
                    <path d="m17.59 6.41-2.83 2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Early Access</h3>
                <p className="text-gray-500 text-center">
                  Get connected to startups before they hit the mainstream job market.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-white shadow-sm">
                <div className="p-3 rounded-full bg-pesto-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-pesto-700"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Vetted Opportunities</h3>
                <p className="text-gray-500 text-center">
                  All startups and professionals are carefully vetted for quality and fit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Hear from founders and professionals who found their perfect match through Pesto.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border p-6 rounded-lg bg-white shadow-sm">
                <p className="italic text-gray-600 mb-4">
                  "Pesto helped me find a technical co-founder who shared my vision. We've now raised our seed round and
                  are growing rapidly."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="ml-4">
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Founder, TechStart</p>
                  </div>
                </div>
              </div>
              <div className="border p-6 rounded-lg bg-white shadow-sm">
                <p className="italic text-gray-600 mb-4">
                  "I was looking to join an early-stage startup where I could make an impact. Through Pesto, I found a
                  role that perfectly matched my skills and aspirations."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="ml-4">
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-gray-500">Lead Developer, InnovateCo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-12 bg-pesto-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Connect?</h2>
              <p className="max-w-[700px] md:text-xl">Join Pesto today and start building the future together.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button className="bg-white text-pesto-700 hover:bg-gray-100">Sign Up Now</Button>
                <Button variant="outline" className="text-white border-white hover:bg-pesto-800">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
