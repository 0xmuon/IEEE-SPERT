import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function CallForSpecialSessionPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
            Call for Special Session
          </h1>

          {/* Download Template Button */}
          <div className="mb-12">
            <Button asChild>
              <Link 
                href="/templates/SPERT 2025 - Special Session Proposal Template.docx"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                SPERT 2025 - Special Session Proposal Template
              </Link>
            </Button>
          </div>

          {/* Proposal Content Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Dates: 22 Dec to 24 Dec 2025 | Venue: Sardar Vallabhbhai National Institute of Technology, Surat</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>We are pleased to invite proposals for Special Sessions to be included in IEEE International Conference Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) 2025, Sardar Vallabhbhai National Institute of Technology, Surat. The conference is organized by the Department of Electrical Engineering, and it aims to bring together leading researchers, academics, industry professionals, and practitioners from around the globe to share their latest research findings, innovations, and developments in the field of advanced energy systems, renewable energy sources, and sustainable transportation solutions.</li>
              <li>Topics include smart grid technologies, energy storage, IoT applications in power systems, and the role of artificial intelligence in optimizing energy distribution. The conference also covers renewable energy advancements in solar, wind, and biofuels, alongside the evolution of electric and hybrid vehicles. It highlights sustainable mobility, smart transportation systems, and the environmental impacts of energy technologies.</li>
              <li>Special Sessions are an integral part of our conference program, offering the opportunity to focus on emerging, specialized, or interdisciplinary topics that may not be fully represented in the main conference tracks. They serve as a platform for experts to delve deeper into niche areas of interest, facilitate focused discussions, and promote future collaborations.</li>
            </ul>
          </div>

          {/*  Benefits of Organizing a Special Session: */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">✅ Benefits of Organizing a Special Session:</h2>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>Recognition as a Special Session Chair</li>
              <li>Opportunity to shape the technical content in your area of expertise</li>
              <li>Networking opportunities with key researchers and professionals</li>
              <li>Contribution to building a community around emerging research themes</li>
            </ul>
          </div>

          {/* Topics of Interest for Special Sessions */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              <span className="font-bold text-gray-900 dark:text-white">🧩 Topics of Interest for Special Sessions</span>
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>We welcome proposals across all areas covered by the conference, including but not limited to the regular tracks mentioned in the conference website.If your area is novel or evolving, we especially encourage you to submit a proposal that will broaden the conference's scope and appeal.</li>
            </ul>
          </div>

          {/* Proposal Submission Guidelines */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">📄 Proposal Submission Guideline </span>
              Special Session proposals should include the following information:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>Title of the Special Session:</li>
              <li>Names, affiliations, and contact details of the organizers:</li>
              <li>Short biography of each organizer (100–150 words):</li>
              <li>Session abstract (300–500 words): Explain the significance of the topic, why it fits within the scope of the conference, and what makes it timely and relevant.</li>
              <li>List of potential contributors or invited speakers (if already identified):</li>
              <li>Tentative number of papers/speakers expected: Minimum of 08 papers should be eligible for publish and at least one speaker is expected. </li>
            </ul>
          </div>

          {/* Important Dates: */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">⏳ Important Dates: </span>
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>Deadline for Special Session Proposals: 20-05-2025</li>
              <li>Notification of Acceptance: 25-05-2025</li>
              <li>Deadline for Special Session Paper Submissions: 31-07-2025</li>
              <li>Conference Dates: 22 Dec to 24 Dec 2025</li>
            </ul>
          </div>

          {/* Submission Procedure: */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">📬 Submission Procedure: </span>         
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>Please submit your Special Session proposal in PDF or Word format via email to:</li>
              <li>spert2025@gmail.com</li>
              <li>with the subject line: “Special Session Proposal – [Your Proposed Session Title]”</li>
            </ul>
          </div>

          {/* Review and Selection Process: */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              <span className="font-bold text-gray-900 dark:text-white">📌 Review and Selection Process: </span>
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>All proposals will be evaluated by the conference's Special Sessions Committee based on their relevance, novelty, the profile of the organizers, and alignment with the overall goals of the conference.</li>
              <li>Once accepted, special sessions will be listed on the official conference website, and a dedicated submission track will be created.</li>
              <li>Papers submitted to Special Sessions will undergo the same rigorous peer-review process as regular submissions and will be published in the conference proceedings, subject to the acceptance and registration of the authors.</li>
            </ul>
          </div>

          {/* Paper Format Section */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">Format for Paper Submission: </span>
              Maximum 6 pages and should follow the IEEE conference template. <Link href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View IEEE templates here</Link>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

