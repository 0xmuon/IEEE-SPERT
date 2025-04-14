import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function CallForPapersPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-center">
            Call for Papers
          </h1>

          <div className="flex flex-wrap justify-between">
            {/* Technical Tracks Section */}
            <div className="w-full md:w-1/2 lg:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">Technical Tracks</h2>
              <ul className="list-disc pl-5">
                <li>Track 1: Power converters for Integration of Renewable Energy into the grid, its control and management</li>
                <li>Track 2: Energy Management and Storage Technologies</li>
                <li>Track 3: Charging Systems and Infrastructure for Electrical Transportation</li>
                <li>Track 4: Power Converters and Drive Systems for Electric Vehicles</li>
                <li>Track 5: Control & Automation</li>
                <li>Track 6: Grid resiliency and flexibility</li>
                <li>Track 7: AI, Big data and Cybersecurity for power, energy and transportation</li>
                <li>Track 8: Electricity market and regulatory framework</li>
              </ul>
            </div>

            {/* Important Dates Section */}
            <div className="w-full md:w-1/2 lg:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
              <ul className="list-disc pl-5">
                <li>First Call for papers: 31 March 2025</li>
                <li>Last date for submission: 31 July 2025</li>
                <li>Notification of Acceptance: 31 Aug 2025</li>
                <li>Camera Ready Paper Submission: 30 Sept 2025</li>
                <li>Registration Starts: 30 Sept 2025</li>
              </ul>
            </div>
          </div>

          {/* Authors Guidelines Section */}
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-2">Authors Guidelines</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Authors are requested to submit their full original research paper in <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">IEEE format</a>. Regular and Special session papers are limited to six pages of A4 or letter format. Authors must adhere to the IEEE Conference paper format mentioned in the submission guidelines.
            </p>
          </div>

          {/* Registration Link Section */}
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-2">Paper Submission Link</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Submission link will be provided soon.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

