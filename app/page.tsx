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

// Add JSX namespace declaration
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

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

  const timerComponents: React.ReactNode[] = [];

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
    <Link 
      href="/authors/call-for-papers" 
      className="text-primary hover:underline"
    >
      Final Call for papers up to 31 August 2025
    </Link>,
    <Link 
      href="/program/call-for-special-session" 
      className="text-primary hover:underline"
    >
      Special Sessions
    </Link>
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Welcome Section with Announcements */}

          <div className="w-full bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black py-4 animate-pulse" style={{ animationDelay: '0s' }}>
            <div className="container mx-auto">
              <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block" style={{ marginLeft: '0px' }}>
                  Final deadline for paper submission is extended up to 31st August, 2025 (Hard Deadline)
                </div>
              </div>
            </div>
          </div>
        <ImageGallery />
        <div className="w-full bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black py-4 animate-pulse" style={{ animationDelay: '0s' }}>
          <div className="container mx-auto">
            <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block" style={{ marginLeft: '0px' }}>
                Our Current Sponsors | Platinum Sponsors: Raj Vijtech Private Limited, Surat | Silver Sponsors: TechSunBio Private Limited, Surat
              </div>
            </div>
          </div>
        </div>
        <section className="w-full py-4 md:py-4 lg:py-4 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
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
                    <Link href="/">Register Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/authors/call-for-papers">Submit Paper</Link>
                  </Button>
                </div>
              </div>
              {/* Important Dates Section */}
              <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between">
                <div className="md:w-full mt-8 md:mt-0">
                  <div className="bg-primary/10 rounded-xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6 text-primary">
                      Important Dates
                    </h2>
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-primary/20 dark:bg-gray-700">
                            <th className="py-3 px-4 text-left font-semibold text-primary dark:text-white">Date</th>
                            <th className="py-3 px-4 text-left font-semibold text-primary dark:text-white">Event</th>
                          </tr>
                        </thead>
                        <tbody>
                       <tr className="bg-primary/5 hover:bg-primary/10 dark:hover:bg-gray-700">
                          <td className="py-3 px-4 font-bold text-gray-800 dark:text-gray-200">
                            <span className="text-red-600 line-through">31st July 2025</span><br />
                            <span className="text-red-600 line-through">17th August 2025</span><br />
                            <span className="text-purple-600 font-extrabold animate-pulse">31 August 2025</span><br />
                            <span className="text-yellow-600 font-semibold">(Hard Deadline)</span>
                          </td>
                          <td className="py-3 px-4 text-blue-600 dark:text-blue-400">
                            Full Paper Submission Deadline
                          </td>
                        </tr>

                          <tr className="bg-white dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-gray-700">
                            <td className="py-3 px-4 font-bold text-gray-800 dark:text-gray-200">15th September 2025</td>
                            <td className="py-3 px-4 text-green-600 dark:text-green-400">Notification of Acceptance</td>
                          </tr>
                          <tr className="bg-primary/5 hover:bg-primary/10 dark:hover:bg-gray-700">
                            <td className="py-3 px-4 font-bold text-gray-800 dark:text-gray-200">15th October 2025</td>
                            <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">Final Paper Submission Deadline</td>
                          </tr>
                          <tr className="bg-white dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-gray-700">
                            <td className="py-3 px-4 font-bold text-gray-800 dark:text-gray-200">22nd December 2025</td>
                            <td className="py-3 px-4 text-purple-600 dark:text-purple-400">Conference Begins</td>
                          </tr>
                          <tr className="bg-primary/5 hover:bg-primary/10 dark:hover:bg-gray-700">
                            <td className="py-3 px-4 font-bold text-gray-800 dark:text-gray-200">24th December 2025</td>
                            <td className="py-3 px-4 text-red-600 dark:text-red-400">Conference Ends</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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

<section className="w-full py-4 md:py-8 lg:py-12 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
  <div className="container px-4 md:px-6">
    <div className="grid grid-cols-1 gap-4">
      
      {/* Regular Tracks */}
      <Card className="bg-white dark:bg-gray-800 shadow-md">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-primary">Regular Tracks</h2> {/* reduced mb */}
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {regularTracks.map((track, index) => (
              <li key={index}>{track}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Special Sessions */}
      <Card className="bg-white dark:bg-gray-800 shadow-md">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-primary">Special Sessions</h2> {/* reduced mb */}
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>SS1:</strong> Advanced Control and Optimization of DC-DC Converters for Smart and Sustainable Energy Systems</li>
            <li><strong>SS2:</strong> Solar Energy Solutions for Renewable Integration and Electric Mobility</li>
            <li><strong>SS3:</strong> Intelligent Forecasting Techniques for Smart Energy and Transportation Systems using Machine Learning and Hybrid Deep Learning Models</li>
            <li><strong>SS4:</strong> Smart Mobility: Integration of AI, Batteries and Charging Systems for EVs</li>
            <li><strong>SS5:</strong> Advanced Power Converters and Control Techniques for Renewable Energy Systems</li>
            <li><strong>SS6:</strong> Applications of Machine-Learning in Energy Systems</li>
            <li><strong>SS7:</strong> Integration of Smart Agriculture and Energy for Empowering Rural India</li>
            <li><strong>SS8:</strong> Innovation in Renewable and Power Converters: Quest for a more sustainable energy and e-mobility</li>
            <li><strong>SS9:</strong> Wide Band Gap devices-based converters for renewable and transportation applications</li>
            <li><strong>SS10:</strong> Multilevel Inverters: Advanced Topologies, Modulation Strategies for medium and high-power Applications</li>
            <li><strong>SS11:</strong> Thermal Runaway Characterization, Management Strategies and Safety Mechanisms in EV Battery Packs</li>
            <li><strong>SS12:</strong> Flexible and Self-Powered Nanogenerator-Integrated Systems for Smart Energy and Sustainable Electronics</li>
            <li><strong>SS13:</strong> Green Intelligence: Advanced Materials and AI-Driven Approaches for Smart and Resilient Energy Infrastructure</li>
            <li><strong>SS14:</strong> Cybersecurity and Resilience of Smart Power and Renewable Energy Systems</li>
            <li><strong>SS15:</strong> AI-Driven Predictive Maintenance and Fault Detection in Power and EV Systems</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
</section>




        {/* Countdown Section */}
        <section className="w-full py-4 md:py-8 lg:py-12 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Conference Starts In
            </h2>
            <CountdownTimer targetDate="2025-12-19T00:00:00" />
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="w-full py-4 md:py-8 lg:py-12">
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
                        src="https://i.ibb.co/27zWC9Ht/rvpl1.jpg"
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
                    <Image 
                         src="https://i.ibb.co/fVmFVZTv/tsb.jpg"
                         alt="TechSunBio Private Limited"
                         width={240}
                         height={240}
                       />
                      <h4 className="font-bold text-2xl mb-2 text-center">TechSunBio Private Limited</h4>
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

