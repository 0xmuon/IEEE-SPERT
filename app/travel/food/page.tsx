import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function FoodPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
      </section>
      <Footer />
    </main>
  )
}

