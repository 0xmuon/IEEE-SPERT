import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function SponsorshipsPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center px-4 md:px-6">
          {/* Topmost Heading */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8">
            Industry Sponsorships
          </h1>
          {/* Flex Container for Image and Text */}
          <div className="flex flex-col md:flex-row w-full">
            {/* Left Side: Image */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://i.ibb.co/7tQmMpdM/Screenshot-2025-03-13-123052.png"
                alt="Sponsorship Image"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Right Side: Text and Buttons */}
            <div className="md:w-1/2 flex flex-col items-start">
              {/* Card for Download Brochure */}
              <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-md w-full">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    Download Sponsorship Brochure
                  </p>
                  <Link href="/path/to/sponsorship-brochure.pdf" passHref>
                    <Button className="bg-primary text-white">Open PDF</Button>
                  </Link>
                </div>
              </div>
              {/* Card for Interested in Sponsorship */}
              <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-md w-full">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    Interested in Sponsorship: Please fill the form
                  </p>
                  <Link href="/path/to/sponsorship-form" passHref>
                    <Button className="bg-primary text-white">Open Form</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

