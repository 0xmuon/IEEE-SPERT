"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { ImageGallery } from "@/components/image-gallery"
import Image from "next/image"
import { Lightbulb } from "lucide-react"
import VisitorCounter from "@/app/components/VisitorCounter"

// Add this function before the ConferencePage component
function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="text-4xl font-bold">
        {timeLeft[interval]} {interval}{" "}
      </span>,
    );
  });

  return (
    <div className="text-center">
      {timerComponents.length ? timerComponents : <span>Conference has started!</span>}
    </div>
  );
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const regularTracks = [
    "Power converters for Integration of Renewable Energy into the grid, its control and management",
    "Energy Management and Storage Technologies",
    "Charging Systems and Infrastructure for Electrical transportation",
    "Power Converters and Drive systems for Electric Vehicles",
    "Control and Automation",
    "Grid resiliency and flexibility",
    "AI, Big data and Cybersecurity for power, energy and transportation",
    "Electricity market and regulatory framework",
  ]

  const announcements = [
    "Call for papers now open!",
    "Early bird registration closing soon",
    "Special session on AI in Power Systems",
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Welcome Section with Announcements */}
        <ImageGallery />
        <div className="w-full bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black py-4">
          <div className="container mx-auto">
            <marquee className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Our Current Sponsors | Platinum Sponsors: Raj Vijtech Private Limited, Surat | Silver Sponsors: TechSunBio Private Limited, Surat
            </marquee>
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                  Welcome to IEEE-SPERT 2025
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8 text-justify">
                  The IEEE International Conference on Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) aims to bring together experts and researchers to discuss advancements in these critical fields. This conference will explore innovative solutions and technologies that drive the future of energy and transportation, fostering collaboration and knowledge sharing among participants.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/authors/call-for-papers">Register Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/authors/submission-and-registration">Submit Paper</Link>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Announcements</h3>
                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <Card key={index} className="bg-primary/10">
                      <CardContent className="p-4">
                        <p className="text-primary font-medium">{announcement}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">Conference Overview</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The International Conference on Smart Power, Energy, Renewables, and Transportation aims to explore the integration of advanced energy systems, renewable energy sources, and sustainable transportation solutions. Topics include smart grid technologies, energy storage, IoT applications in power systems, and the role of artificial intelligence in optimizing energy distribution. The conference also covers renewable energy advancements in solar, wind, and biofuels, alongside the evolution of electric and hybrid vehicles. It highlights sustainable mobility, smart transportation systems, and the environmental impacts of energy technologies. Discussions will focus on policy, regulation, and economic strategies to accelerate the transition toward a cleaner, more efficient energy and transportation future. The event provides a platform for collaboration between experts from academia, industry, and government to drive innovations in these critical sectors.
              </p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">Important Dates</h2>
              <table className="min-w-full bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b dark:text-white">Date</th>
                    <th className="py-2 px-4 border-b dark:text-white">Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="dark:bg-gray-700">
                    <td className="py-2 px-4 border-b dark:text-gray-300">31st July 2025</td>
                    <td className="py-2 px-4 border-b dark:text-gray-300">Full Paper Submission Deadline</td>
                  </tr>
                  <tr className="dark:bg-gray-700">
                    <td className="py-2 px-4 border-b dark:text-gray-300">15th September 2025</td>
                    <td className="py-2 px-4 border-b dark:text-gray-300">Notification of Acceptance</td>
                  </tr>
                  <tr className="dark:bg-gray-700">
                    <td className="py-2 px-4 border-b dark:text-gray-300">15th October 2025</td>
                    <td className="py-2 px-4 border-b dark:text-gray-300">Final Paper Submission Deadline</td>
                  </tr>
                  <tr className="dark:bg-gray-700">
                    <td className="py-2 px-4 border-b dark:text-gray-300">19th December 2025</td>
                    <td className="py-2 px-4 border-b dark:text-gray-300">Conference Begins</td>
                  </tr>
                  <tr className="dark:bg-gray-700">
                    <td className="py-2 px-4 border-b dark:text-gray-300">21st December 2025</td>
                    <td className="py-2 px-4 border-b dark:text-gray-300">Conference Ends</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Conference Starts In
            </h2>
            <CountdownTimer targetDate="2025-12-19T00:00:00" />
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-12 text-center">
              Our Valued Sponsors
            </h2>
            
            {/* Platinum Sponsors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center border-b pb-2 max-w-md mx-auto">
                Platinum Sponsors
              </h3>
              <div className="flex justify-center">
                <div className="max-w-sm w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col items-center">
                      <Image 
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQEsSp-2XgoE-A/company-logo_200_200/company-logo_200_200/0/1630563919132?e=1750291200&v=beta&t=3IMFR0YkkSynwEkgSlZjuo1PFvkMDfgQOAHhfaG_W0k"
                        alt="Raj Vijtech Private Limited"
                        width={150}
                        height={150}
                        className="rounded-lg mb-4 hover:scale-105 transition-transform duration-200"
                      />
                      <h4 className="font-bold text-2xl mb-2">Raj Vijtech Private Limited</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">Surat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Silver Sponsors */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center border-b pb-2 max-w-md mx-auto">
                Silver Sponsors
              </h3>
              <div className="flex justify-center">
                <div className="max-w-sm w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col items-center">
                      <h4 className="font-bold text-2xl mb-2">TechSunBio Private Limited</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">Surat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">Organizers</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              The following organizations are financially supporting the IEEE-SPERT 2025 conference:
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/rRDfdZv7/PELS-logo.png" alt="PELS Logo" width={100} height={100} />
                </CardContent>
              </Card> */}
              <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/mrdb1b5s/ieee-logo.png" alt="IEEE Logo" width={100} height={100} />
                </CardContent>
              </Card>
              {/* <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/4gjF501z/IEEE-IES-Logo.png" alt="IEEE IES Logo" width={100} height={100} />
                </CardContent>
              </Card> */}
              {/* <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/tpxKrPdZ/IAS-logo.webp" alt="IAS Logo" width={100} height={100} />
                </CardContent>
              </Card> */}
              <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/ks9mhG84/guj-section-logo.png" alt="Gujarat Section Logo" width={100} height={100} />
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image 
                    src="https://imgs.search.brave.com/WFSCJ_QtSA6WBJR7nTNYbUyHylRSHAaK-XBDbUO7FZc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZuaXQuYWMuaW4v/aW1hZ2VzL2xvZ28u/cG5n"
                    alt="SVNIT Logo" 
                    width={100} 
                    height={100}
                    className="object-contain"
                  />
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image 
                    src="https://ieeegujaratsection.org/wp-content/uploads/sites/179/2023/01/IESIASPELS-Joint-Chapter.jpg"
                    alt="IEEE IES/PELS Joint Chapter Logo" 
                    width={100} 
                    height={100}
                    className="object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <VisitorCounter />
      <Footer />
    </div>
  )
}

