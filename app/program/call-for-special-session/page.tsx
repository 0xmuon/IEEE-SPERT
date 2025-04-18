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
            <h2 className="text-2xl font-bold mb-4">Proposal Content</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              If you intend to propose and organize a special session, please provide us with a proposal using the following information:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>Title of the Special Session</li>
              <li>A brief description of the area of concern (approx. 300 words), with special focus on why we should believe this is an interesting and significant topic?</li>
              <li>The name and contact information of maximum special session chairs, who are willing to promote and organize a sufficient amount of quality submissions to the special session. Please also indicate the background of the organizers.</li>
              <li>A list of potential authors and their affiliation & other details (minimum 10)</li>
              <li>A list of potential reviewers and their affiliation & other details (minimum 10)</li>
            </ul>
          </div>

          {/* Special Session Organization Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Special Session Organization</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Once approved, it is the duty of the organizers to publicize the Special Session among researchers and practitioners in the field and attract a sufficient number of papers.
            </p>
          </div>

          {/* Review Process Section */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              <span className="font-bold text-gray-900 dark:text-white">Review Process: </span>
              Papers submitted to special sessions will undergo the same review process as regular papers. The special session chairs of the respective special session are responsible for organizing the review process, assuring at least three reviews per paper. This includes a selection of reviewers from their peers.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">Conflict of Interest: </span>
              Before starting the review process, special session organizers must explicitly declare papers, which present a conflict of interest for them. A conflict of interest arises where the judgment of a paper quality can be influenced by the organizers being authors or knowing some of the authors. To ensure independent reviews, this conflict must be marked as such in the submission system and the SS chairs notified so that they can arrange the review process.
            </p>
          </div>

          {/* Requirements Section */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              <span className="font-bold text-gray-900 dark:text-white">Requirements: </span>
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>A minimum of 8 accepted and registered papers with authors from at least 4 different institutions is required for each session.</li>
              <li>If a session has too few papers, accepted papers will be allocated to regular sessions wherever possible.</li>
              <li>In case of indication of weakly organized special sessions, the conference organizers will support the organizers with advice but reserve measures including cancellation of the respective special session.</li>
            </ul>
          </div>

          {/* Complimentary Registration Section */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">Complimentary Conference Registration: </span>
              At least one organizer of the successful Special Sessions is expected to register for and attend the conference, as well as chair the corresponding sessions. Organizers of a successful Special Session will get one free full registration (per at least 8 accepted and registered papers not authored by the any of the organizers)
            </p>
          </div>

          {/* Session Chairs Section */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">Session Chairs: </span>
              When a special session is finally accepted by the conference, SS organizers will serve as Session chairs in the conference. In some extenuated circumstance, Technical Program chairs and Conference General Chairs might take up the full control of appointing the Session Chairs, in case of SS organizers unable to participate in the conference.
            </p>
          </div>

          {/* Restrictions Section */}
          <div className="mb-12">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              <span className="font-bold text-gray-900 dark:text-white">Restrictions: </span>
              During the review process, Special Session Organizers must consider that:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 space-y-2">
              <li>An individual cannot be (co-) author of more than two papers submitted to the same Special Session.</li>
              <li>From one organizations maximum 2 organizers can be participated in one special session</li>
              <li>Maximum number of organizers in one session can be 4 and minimum 2</li>
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

