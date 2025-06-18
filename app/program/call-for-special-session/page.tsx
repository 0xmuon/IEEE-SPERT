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
              <li>with the subject line: "Special Session Proposal – [Your Proposed Session Title]"</li>
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

          {/* Special Sessions Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Approved Special Sessions</h2>
            <div className="space-y-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Advanced Control and Optimization of DC-DC Converters for Smart and Sustainable Energy Systems</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Organizers:</strong><br />
                  1. Dr. Vanjari Venkata Ramana, Assistant Professor, Department of Electrical Engineering, Delhi Technological University, Delhi<br />
                  2. Dr. D.G. Abhilash Krishna, Assistant Professor, Department of Electrical and Electronics Engineering, RV College of Engineering, Bengaluru
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Solar Energy Solutions for Renewable Integration and Electric Mobility</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Organizers:</strong><br />
                  1. Dr. Chinmaya K A, Assistant Professor, Department of Electrical Engineering IIT (BHU), Varanasi, India<br />
                  2. Dr. Dileep. G, Assistant Professor, Department of Electrical and Electronics Engineering Jigme Namgyel Engineering College, Dewathang, Bhutan<br />
                  3. Dr. Sukriti Tiwari, Assistant Professor, National Institute of Technology Calicut (NITC), Kerala, India
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Intelligent Forecasting Techniques for Smart Energy and Transportation Systems using Machine Learning and Hybrid Deep Learning Models</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Organizers:</strong><br />
                  1. Madderla Chiranjeevi, Assistant Professor, School of Computer Science and Artificial Intelligence, SR University, Warangal, India<br />
                  2. Dr. Tukaram Moger, Associate Professor, Department of Electrical and Electronics Engineering, NITK Surathkal, Mangalore, India<br />
                  3. Dr. Debashisha Jena, Professor, Department of Electrical and Electronics Engineering, NITK Surathkal, Mangalore, India
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Smart Mobility: Integration of AI, Batteries and Charging Systems for EVs</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Organizers:</strong><br />
                  1. Hareesh Myneni, Assistant Professor, Department of Electrical Engineering, NIT Srinagar, Jammu & Kashmir, India<br />
                  2. Dr. D. V. Siva krishna Rao, Assistant Professor, Department of Electrical Engineering, NIT Trichy
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Advanced Power Converters and Control Techniques for Renewable Energy Systems</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Organizers:</strong><br />
                  1. Dr. Ravi Eswar K M, Assistant Professor, Department of Electrical and Electronics Engineering, SRM Institute of Science and Technology, Chennai, India<br />
                  2. Dr. Phani Teja Bankupalli, Assistant Professor, Department of Electrical and Electronics Engineering, SRM Institute of Science and Technology, Chennai, India
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Applications of Machine-Learning in Energy Systems</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Organizers:</strong><br />
                  1. Dr. Sandeep Kakran, Assistant Professor Gr. 1, Electrical Engineering Department, NIT Kurukshetra<br />
                  2. Dr. Pradeep Kumar, Assistant Professor Gr. 1, Electrical Engineering Department, NIT Kurukshetra<br />
                  3. Dr. Rajesh Kumar, Assistant Professor Gr. 1, Electrical Engineering Department, NIT Kurukshetra
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Integration of Smart Agriculture and Energy for Empowering Rural India</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Organizers:</strong><br />
                  1. Dr. Sonali Paunikar, Professor & Head, Department of Electrical and Electronics Engineering, IES College of Technology, Bhopal<br />
                  2. Dr. N P Patidar, Professor, Department of Electrical Engineering, MANIT Bhopal<br />
                  3. Prof. Mohan Lal Kolhe, Professor in Smart Grid & Renewable Energy, Faculty of Engineering & Science, University of Agder (Norway)
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Innovation in Renewable and Power Converters: Quest for a more sustainable energy and e-mobility</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Organizers:</strong><br />
                  1. Dr. Soumyabrata Barik, Assistant Professor, Department of Electrical Engineering, IIT (ISM) Dhanbad<br />
                  2. Dr. Sukanta Halder, Assistant Professor, Department of Electrical Engineering, IIT (ISM) Dhanbad, Jharkhand, India<br />
                  3. Dr. Sudarshan Swain, Assistant Professor, Department of Electrical and Electronics Engineering, BITS Pilani, K.K. Birla Goa Campus<br />
                  4. Dr. Subhadeep Paladhi, Assistant Professor, Department of Electrical Engineering, IIT Indore
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Multilevel Inverters: Advanced Topologies, Modulation Strategies for medium and high-power Applications</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Organizers:</strong><br />
                  1. Dr. Y Suresh, NITK Surathkal, Karnataka, India<br />
                  2. Dr. Ravi Raushan, NITK Surathkal, Karnataka, India<br />
                  3. Dr. C Dhanamjayulu, VIT Vellore, Tamilnadu, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

