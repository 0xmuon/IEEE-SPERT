import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Card, CardContent } from "@/components/ui/card"

export default function SubmissionAndRegistrationPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
            Submission and Registration
          </h1>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Registration Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Registrations will be Open soon!
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Please check back later for detailed information about submission guidelines and registration procedures.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}

