import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function OrganizingCommitteePage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Organizing Committee
          </h1>

          {/* Committee Sections */}
          <div className="space-y-12">
            {/* Chief Patron & Patron */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">Chief Patron</h2>
                <p className="text-lg">Prof. Bhim Singh</p>
                <p className="text-gray-600 dark:text-gray-300">IEEE Fellow, Chairman, BoG, SVNIT Surat</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">Patron</h2>
                <p className="text-lg">Prof. Anupam Shukla</p>
                <p className="text-gray-600 dark:text-gray-300">Director, SVNIT Surat</p>
              </div>
            </div>

            {/* Honorary Chairs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Honorary Chairs</h2>
              <ul className="space-y-4">
                <li>
                  <p className="text-lg">Dr. Brij N. Singh</p>
                  <p className="text-gray-600 dark:text-gray-300">IEEE Fellow, John Deere Fellow, Electrification R&D Manager in John Deere USA</p>
                </li>
                <li>
                  <p className="text-lg">Prof. Victor Veliadis</p>
                  <p className="text-gray-600 dark:text-gray-300">IEEE Fellow, CTO of PowerAmerica and Professor at NC State University</p>
                </li>
                <li>
                  <p className="text-lg">Dr. Sanjeet Kumar Dwivedi</p>
                  <p className="text-gray-600 dark:text-gray-300">Fellow IET, Senior Consultant, RDT Engineers, Denmark</p>
                </li>
              </ul>
            </div>

            {/* General Chairs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">General Chairs</h2>
              <ul className="space-y-4">
                <li>
                  <p className="text-lg">Prof. Chirag N. Paunwala</p>
                  <p className="text-gray-600 dark:text-gray-300">Chair - IEEE Gujarat Section</p>
                </li>
                <li>
                  <p className="text-lg">Dr. Mahmadasraf A. Mulla</p>
                  <p className="text-gray-600 dark:text-gray-300">DoEE, SVNIT Surat</p>
                </li>
                <li>
                  <p className="text-lg">Dr. Aeidapu Mahesh</p>
                  <p className="text-gray-600 dark:text-gray-300">DoEE, SVNIT Surat</p>
                </li>
              </ul>
            </div>

            {/* Organizing Chairs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Organizing Chairs</h2>
              <ul className="space-y-4">
                {[
                  "Prof. Pranav B. Darji, DoEE, SVNIT Surat",
                  "Dr. Priyesh Chauhan, IITRAM, Ahmedabad",
                  "Dr. Rajasekharareddy Chilipi, DoEE, SVNIT Surat",
                  "Dr. Sanjay Tolani, DoEE, SVNIT Surat",
                  "Dr. K. V. Praveen Kumar, DoEE, SVNIT Surat",
                  "Dr. Suresh Lakhimsetty, DoEE, SVNIT Surat"
                ].map((chair, index) => (
                  <li key={index} className="text-lg">{chair}</li>
                ))}
              </ul>
            </div>

            {/* Conference Secretaries */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Conference Secretaries</h2>
              <ul className="space-y-4">
                {[
                  "Dr. Jammala Venkataramanaiah, DoEE, SVNIT",
                  "Dr. Basant K. Sethi, DoEE, SVNIT",
                  "Dr. Gangireddy Sushnigdha, DoEE, SVNIT",
                  "Dr. Akanksha Shukla, DoEE, SVNIT"
                ].map((secretary, index) => (
                  <li key={index} className="text-lg">{secretary}</li>
                ))}
              </ul>
            </div>

            {/* Other Committee Sections */}
            {[
              {
                title: "Finance Chair",
                members: [
                  "Dr. Mahmadasraf A. Mulla, DoEE, SVNIT Surat",
                  "Prof. A. K. Panchal, DoEE, SVNIT",
                  "Dr. Basant K. Sethi, DoEE, SVNIT",
                  "Dr. Akanksha Shukla, DoEE, SVNIT"
                ]
              },
              {
                title: "Technical Program Committee Chairs",
                members: [
                  "Prof. Pranav B. Darji, DoEE, SVNIT Surat",
                  "Dr. Mahmadasraf A. Mulla, DoEE, SVNIT Surat",
                  "Dr. Aeidapu Mahesh, DoEE, SVNIT Surat",
                  "Prof. Sabha Raj Arya, DoEE, SVNIT Surat",
                  "Prof. Anandita Chawdhury, DoEE, SVNIT Surat",
                  "Dr. Brij N. Singh, IEEE Fellow, John Deere Fellow, Electrification R&D Manager in John Deere USA",
                  "Prof. Victor Veliadis, IEEE Fellow, CTO of PowerAmerica and Professor at NC State University",
                  "Dr. Surender Reddy Salkuti, Department of Railroad and Electrical Engineering, Woosong University, Republic of Korea",
                  "Dr. Amit Ved, Marwadi University"
                ]
              },
              // Add other committees here...
            ].map((committee, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">{committee.title}</h2>
                <ul className="space-y-4">
                  {committee.members.map((member, memberIndex) => (
                    <li key={memberIndex} className="text-lg">{member}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Advisory Committees */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">National Advisory Committee Members</h2>
                <ul className="space-y-4">
                  {[
                    "Prof. Bhim Singh, IIT Delhi",
                    "Prof. K. Siva Kumar, IIT Hyderabad",
                    "Prof. Raghavan K, IIT Gandhinagar",
                    "Dr. Deepak Ronanki, IIT Madras",
                    "Prof. Pramod Agarwal, IIT Roorkee",
                    "Prof. B. Murali Mohan, IIT Kharagpur",
                    "Prof. Narsa Reddy Tummuru, IIT Bhubaneshwar",
                    "Prof. Bharat Singh Rajpurohit, IIT Jodhpur",
                    "Prof. Pradhyuman Chaturvedi, VNIT Nagpur",
                    "Prof. Ashwani Kumar, NIT Kurukshetra",
                    "Prof. V.T. Somasekhar, DoEE, NIT Warangal",
                    "Dr. Naveen Yalla, IIT BHU",
                    "Prof. R B Jadeja, Marwadi University",
                    "Dr. Gopal Gajjar, Hitachi Energy",
                    "Dr. Vijay K. Shah, ABB, Vadodara"
                  ].map((member, index) => (
                    <li key={index} className="text-lg">{member}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">International Advisory Committee Members</h2>
                <ul className="space-y-4">
                  {[
                    "Dr. Brij N. Singh, IEEE Fellow, John Deere Fellow, Electrification R&D Manager in John Deere USA",
                    "Prof. Victor Veliadis, IEEE Fellow, CTO of PowerAmerica and Professor at NC State University",
                    "Prof. Akshay Rathore, Singapore Institute of Technology",
                    "Prof. Sanjib Kumar Panda, Department of Electrical Engineering, NUS",
                    "Jiaxing Lei, School of Electrical Engineering, Southeast University, China",
                    "Prof. Akhtar Kalam, Victoria University, Melbourne, Victoria 8001 Australia",
                    "Dr. Anurag Sharma, Newcastle University, Singapore",
                    "Dr. Dhivya Sampath Kumar, Singapore Institute of Technology, Singapore",
                    "Yam P. Siwakoti, Associate Professor at the University of Technology Sydney Macquarie Park, New South Wales, Australia"
                  ].map((member, index) => (
                    <li key={index} className="text-lg">{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

