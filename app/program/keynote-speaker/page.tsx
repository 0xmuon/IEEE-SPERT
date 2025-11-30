import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function KeynoteSpeakerPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-white">
            Keynote Speaker
          </h1>
          <div className="flex flex-wrap justify-between">
            <div className="bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black p-6 rounded-lg shadow-md mb-4 w-full md:w-1/2 lg:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Professor Bhim Singh</h2>
              <img
                src="https://www.svnit.ac.in/web/images/Prof.BhimSingh.jpg"
                alt="Professor Bhim Singh"
                className="h-48 mb-4 rounded-lg"
              />
              <p className="text-gray-500 dark:text-gray-400">
                An expert in power quality, renewable energy, and power electronics, earned his B.E. from the University of Roorkee (1977) and M.Tech. & Ph.D. from IIT Delhi (1979, 1983); he has served at IIT Roorkee and IIT Delhi, becoming a Professor in 1997, holding key positions such as ABB Chair Professor, CEA Chair Professor, Head of EE Dept., and Dean Academics at IIT Delhi; currently a SERB National Science Chair and Emeritus Professor at IIT Delhi, he has guided 116 Ph.D. scholars, filed 106 patents, executed 90+ projects, authored a textbook, chaired IEEE conferences, and received accolades like the International Kalpana Chawla Solar Award (2020), IEEE IAS Outstanding Educator Award (2020), and IIT Delhi Faculty Lifetime Achievement Award (2018); a Fellow of IEEE, INAE, INSA, NASI, and TWAS, he has led IEEE Delhi Section, mentored successful start-ups, contributed to national research policies including the Indo-UK Smart Grid initiative, delivered 300+ invited talks, and chaired 100+ conference sessions, making significant contributions to academia and industry.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black p-6 rounded-lg shadow-md mb-4 w-full md:w-1/2 lg:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Dr. Brij N. Singh</h2>
              <img
                src="https://imgs.search.brave.com/xGF0XujYpA39ojfR6ArR4FPpoKBebYegNV8Oid6ryAc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zbW1j/Lm9ybmwuZ292LzIw/MjIvd3AtY29udGVu/dC91cGxvYWRzL3Np/dGVzLzQvMjAyMi8w/OS9NaWNyb3NvZnRU/ZWFtcy1pbWFnZS02/LmpwZw"
                alt="Dr. Brij N. Singh"
                className="h-48 mb-4 rounded-lg"
              />
              <p className="text-gray-500 dark:text-gray-400">
                Dr. Brij N. Singh, a John Deere Technical Fellow, was honored on July 20, 2020, for his contributions to Power Electronics Engineering; since September 2020, he has served as Region 4 Public Funding Manager, securing government funding for R&D in emerging technologies across the U.S., Canada, and Australia, while fostering research collaborations with non-compete industries; with extensive leadership experience in power electronics design, development, and commercialization, he holds 35 U.S. patents, a trade secret, and over a dozen pending patents, with his robust inverter power stage designs accumulating over 50 million field hours without failure; recipient of three innovation awards and a team collaboration award at John Deere, he chaired the Member Advisory Committee at PowerAmerica Institute (2020-2021), received the 2020 IEEE Power Electronics Emerging Technology Award for his work on engine-cooled SiC inverters, was selected as an IEEE Power Electronics Distinguished Lecturer (2021-2024), and was honored by the U.S. Department of Energy's Vehicle Technology Office in 2023 with the Distinguished Achievement Award for contributions to electric drive technologies and off-road vehicle R&D.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

