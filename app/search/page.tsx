import { SearchForm } from "@/components/search-form"

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Perfect Match</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Search for founders, co-founders, or talent that matches your needs and vision.
              </p>

              <SearchForm className="mt-8" />

              <div className="w-full max-w-4xl mt-12">
                <h2 className="text-2xl font-bold mb-6 text-left">Popular Searches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Technical Co-Founder</h3>
                    <p className="text-sm text-gray-500">Full-stack developers with startup experience</p>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Marketing Expert</h3>
                    <p className="text-sm text-gray-500">Growth specialists for early-stage startups</p>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">AI/ML Engineer</h3>
                    <p className="text-sm text-gray-500">Machine learning specialists for product development</p>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">UX/UI Designer</h3>
                    <p className="text-sm text-gray-500">Product designers with user-centered approach</p>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Sales Lead</h3>
                    <p className="text-sm text-gray-500">B2B sales experts to drive revenue growth</p>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium">Fintech Founder</h3>
                    <p className="text-sm text-gray-500">Entrepreneurs with financial technology experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
