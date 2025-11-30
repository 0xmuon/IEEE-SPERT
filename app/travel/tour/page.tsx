import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function TourPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-white">
            Tour Information
          </h1>
          <p className="text-lg  dark:text-gray-300 mb-8 text-white">
            Explore the beautiful city of Surat and discover exciting places to visit during your stay for IEEE-SPERT 2025.
          </p>
          
          {/* Google Maps Embed */}
          <div className="w-full mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Points of Interest</h2>
          </div>

          {/* Tour Information */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Historical Sites</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Surat Fort</li>
                <li>• Dutch Garden</li>
                <li>• Old Fort</li>
                <li>• Chintamani Jain Temple</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Shopping & Entertainment</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• VR Mall</li>
                <li>• Althan Garden</li>
                <li>• Dumas Beach</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Dining & Cuisine</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Local Gujarati Cuisine</li>
                <li>• Street Food Markets</li>
                <li>• Fine Dining Restaurants</li>
                <li>• Traditional Sweet Shops</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="https://www.google.com/maps/@23.163206,71.6071211,6.96z/data=!4m2!11m1!2sh3-db2nXRgy-Bw2uM7tD8Q?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

