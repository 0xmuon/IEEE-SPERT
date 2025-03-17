import Link from "next/link"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Button } from "@/components/ui/button"
import { FileText, FormInput } from "lucide-react"

export default function SponsorshipsPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
            Sponsorship Opportunities
          </h1>

          {/* Sponsorship Categories */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              {
                title: "Diamond",
                amount: "₹5 Lakhs",
                benefits: [
                  "5 Free Registrations",
                  "Exhibition Stall",
                  "90 Sec Video Ad",
                  "Logo on banners",
                  "Industry Session"
                ]
              },
              {
                title: "Platinum",
                amount: "₹3 Lakhs",
                benefits: [
                  "3 Free Registrations",
                  "Exhibition Stall",
                  "Logo on banners",
                  "Industry Session"
                ]
              },
              {
                title: "Gold",
                amount: "₹2 Lakhs",
                benefits: [
                  "2 Free Registrations",
                  "Exhibition Stall",
                  "Logo on banners"
                ]
              },
              {
                title: "Silver",
                amount: "₹1 Lakh",
                benefits: [
                  "1 Free Registration",
                  "Exhibition Stall",
                  "Logo on banners"
                ]
              }
            ].map((tier, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{tier.title}</h3>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{tier.amount}</p>
                </div>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Current Sponsors Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Current Sponsors</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Platinum Sponsors */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Platinum Sponsors</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">Raj Vijtech Private Limited</p>
                      <p className="text-gray-600 dark:text-gray-300">Surat</p>
                    </div>
                    <img 
                      src="https://media.licdn.com/dms/image/v2/C4E0BAQEsSp-2XgoE-A/company-logo_200_200/company-logo_200_200/0/1630563919132?e=1750291200&v=beta&t=3IMFR0YkkSynwEkgSlZjuo1PFvkMDfgQOAHhfaG_W0k"
                      alt="Raj Vijtech Logo"
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Silver Sponsors */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Silver Sponsors</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold">TechSunBio Private Limited</p>
                    <p className="text-gray-600 dark:text-gray-300">Surat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Interested in Becoming a Sponsor?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of smart power, energy, renewables, and transportation. 
              Your support will help foster innovation and collaboration in these critical sectors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                size="lg" 
                className="flex items-center gap-2"
              >
                <Link href="https://drive.google.com/file/d/1ae65cS9ZIFQDEYZF6i7qwZemPxZXj7dS/view?usp=sharing" target="_blank">
                  <FileText className="w-5 h-5" />
                  Download Sponsorship Brochure
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="flex items-center gap-2"
              >
                <Link href="https://forms.gle/388gDTyLm746KNqQ8" target="_blank">
                  <FormInput className="w-5 h-5" />
                  Fill Sponsorship Form
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

