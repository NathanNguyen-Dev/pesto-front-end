import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pesto Blog</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Insights, tips, and stories from the startup ecosystem.
              </p>
            </div>

            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Blog Post 1 */}
              <div className="group flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <div className="h-full w-full bg-gray-200"></div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block rounded-full bg-pesto-100 px-3 py-1 text-xs font-medium text-pesto-800">
                        Startup Tips
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-pesto-700">
                        <Link href="/blog/finding-your-co-founder">
                          Finding Your Perfect Co-Founder: A Comprehensive Guide
                        </Link>
                      </h3>
                    </div>
                    <p className="text-gray-500">
                      Learn how to identify, approach, and evaluate potential co-founders for your startup venture.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">Alex Johnson</p>
                      <p className="text-xs text-gray-500">April 12, 2023 · 8 min read</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="group flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <div className="h-full w-full bg-gray-200"></div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-800">
                        Career Growth
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-pesto-700">
                        <Link href="/blog/joining-early-startup">
                          Why Joining an Early-Stage Startup Could Accelerate Your Career
                        </Link>
                      </h3>
                    </div>
                    <p className="text-gray-500">
                      Discover the benefits and challenges of working at an early-stage startup and how it can
                      fast-track your professional growth.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">Maya Patel</p>
                      <p className="text-xs text-gray-500">March 28, 2023 · 6 min read</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="group flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <div className="h-full w-full bg-gray-200"></div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block rounded-full bg-pesto-100 px-3 py-1 text-xs font-medium text-pesto-800">
                        Funding
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-pesto-700">
                        <Link href="/blog/pre-seed-funding">
                          Navigating Pre-Seed Funding: What Every Founder Should Know
                        </Link>
                      </h3>
                    </div>
                    <p className="text-gray-500">
                      A comprehensive guide to securing pre-seed funding for your startup, including tips from
                      successful founders.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">David Kim</p>
                      <p className="text-xs text-gray-500">February 15, 2023 · 10 min read</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post 4 */}
              <div className="group flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <div className="h-full w-full bg-gray-200"></div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-800">
                        Remote Work
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-pesto-700">
                        <Link href="/blog/remote-startup-teams">Building Effective Remote Startup Teams</Link>
                      </h3>
                    </div>
                    <p className="text-gray-500">
                      Learn how to build, manage, and nurture a remote startup team that's productive, engaged, and
                      aligned with your vision.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">Sarah Chen</p>
                      <p className="text-xs text-gray-500">January 30, 2023 · 7 min read</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post 5 */}
              <div className="group flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <div className="h-full w-full bg-gray-200"></div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block rounded-full bg-pesto-100 px-3 py-1 text-xs font-medium text-pesto-800">
                        Product Development
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-pesto-700">
                        <Link href="/blog/mvp-development">From Idea to MVP: A Step-by-Step Guide</Link>
                      </h3>
                    </div>
                    <p className="text-gray-500">
                      A practical guide to developing a Minimum Viable Product that validates your idea and attracts
                      early users.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">Michael Rodriguez</p>
                      <p className="text-xs text-gray-500">January 18, 2023 · 9 min read</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post 6 */}
              <div className="group flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <div className="h-full w-full bg-gray-200"></div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-800">
                        Networking
                      </span>
                      <h3 className="text-xl font-bold group-hover:text-pesto-700">
                        <Link href="/blog/startup-networking">
                          The Art of Startup Networking: Building Relationships That Matter
                        </Link>
                      </h3>
                    </div>
                    <p className="text-gray-500">
                      Discover effective strategies for networking in the startup ecosystem and building meaningful
                      professional relationships.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="text-sm font-medium">Emma Wilson</p>
                      <p className="text-xs text-gray-500">December 5, 2022 · 5 min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
