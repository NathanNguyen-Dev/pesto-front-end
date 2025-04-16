import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover how Pesto helps connect founders and talent.
              </p>
            </div>

            <div className="grid gap-10 mt-12 md:mt-16">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Smart Matching Algorithm</h2>
                  <p className="text-gray-500">
                    Our proprietary algorithm matches founders and professionals based on skills, experience, values,
                    and goals to ensure the perfect fit.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
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
                        className="h-5 w-5 text-pesto-700 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Skill-based matching</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-5 w-5 text-pesto-700 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Values alignment</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-5 w-5 text-pesto-700 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Personality compatibility</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6 h-[300px] flex items-center justify-center">
                  <p className="text-gray-400">Algorithm visualization</p>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-lg bg-gray-100 p-6 h-[300px] flex items-center justify-center">
                  <p className="text-gray-400">Profile dashboard</p>
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <h2 className="text-2xl font-bold">Comprehensive Profiles</h2>
                  <p className="text-gray-500">
                    Create detailed profiles that showcase your skills, experience, and what you're looking for in your
                    next opportunity or team member.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
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
                        className="h-5 w-5 text-pesto-700 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Skill verification</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-5 w-5 text-pesto-700 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Portfolio integration</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-5 w-5 text-pesto-700 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Video introductions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Secure Messaging</h2>
                  <p className="text-gray-500">
                    Connect directly with potential matches through our secure messaging platform.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
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
                        className="h-5 w-5 text-pesto-700 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>End-to-end encryption</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-5 w-5 text-pesto-700 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>File sharing</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-5 w-5 text-pesto-700 mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Video meetings</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6 h-[300px] flex items-center justify-center">
                  <p className="text-gray-400">Messaging interface</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <Button className="bg-pesto-700 hover:bg-pesto-800" asChild>
                <Link href="/signup">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
