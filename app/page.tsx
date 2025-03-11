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
    "Keynote speakers announced",
    "Special session on AI in Power Systems",
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Welcome Section with Announcements */}
        <ImageGallery />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-conference">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
                  Welcome to IEEE-SPERT 2025
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
                  The IEEE International Conference on Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) aims to bring together experts and researchers to discuss advancements in these critical fields. This conference will explore innovative solutions and technologies that drive the future of energy and transportation, fostering collaboration and knowledge sharing among participants.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button size="lg">Register Now</Button>
                  <Button size="lg" variant="outline">
                    Submit Paper
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Conference Starts In
            </h2>
            <CountdownTimer targetDate="2025-12-19T00:00:00" />
          </div>
        </section>

        {/* Organizers Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">Organizers</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/rRDfdZv7/PELS-logo.png" alt="PELS Logo" width={100} height={100} />
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/mrdb1b5s/ieee-logo.png" alt="IEEE Logo" width={100} height={100} />
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/4gjF501z/IEEE-IES-Logo.png" alt="IEEE IES Logo" width={100} height={100} />
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/tpxKrPdZ/IAS-logo.webp" alt="IAS Logo" width={100} height={100} />
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <Image src="https://i.ibb.co/ks9mhG84/guj-section-logo.png" alt="Gujarat Section Logo" width={100} height={100} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

