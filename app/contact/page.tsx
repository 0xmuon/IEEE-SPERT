import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
            Contact Us
          </h1>
          
          
          {/* New section for IEEE-SPERT 2025 details */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">IEEE-SPERT 2025</h2>
            <p className="text-gray-500 dark:text-gray-400">Sardar Vallabhbhai National Institute of Technology, Surat</p>
            <p className="text-gray-500 dark:text-gray-400">Email: <a href="mailto:spert2025@gmail.com" className="text-blue-500">spert2025@gmail.com</a></p>
            <p className="text-gray-500 dark:text-gray-400">SVNIT, Surat - 395007 (Gujarat) India</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

