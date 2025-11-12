"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/6.png",
  "/images/7.png",
  "/images/5.png",
  
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col lg:flex-row justify-center items-stretch w-full py-4 bg-gradient-to-b from-[#b3e5fc] to-[#c8e6c9] gap-4 px-4">

      {/* Announcements Section */}
      <div className="lg:w-1/5 w-full bg-white/60 rounded-xl shadow-lg p-4 backdrop-blur-md flex flex-col">
        <h2 className="text-xl font-semibold mb-2 text-center">Announcements</h2>
        <ul className="text-sm space-y-2 overflow-auto">
          <li>📢 Early Bird Registration Deadline: </li>
          <li>Oct 31, 2025</li>          
          <li>📅 Camera Ready paper submission Deadline: Oct 15,2025</li>
          <li>🎤 Keynote speakers announced </li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div className="relative aspect-video lg:w-3/5 w-full max-w-[1600px] overflow-hidden rounded-xl shadow-xl">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Conference image ${index + 1}`}
            fill
            className={`object-contain transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Updates Section */}
      <div className="lg:w-1/5 w-full bg-white/60 rounded-xl shadow-lg p-4 backdrop-blur-md flex flex-col">
  <h2 className="text-xl font-semibold mb-2 text-center">Author Registration</h2>
  <ul className="text-sm space-y-3 overflow-auto">

    <li className="flex items-start gap-2">
      <span className="bg-green-600 text-white text-[10px] px-2 py-[2px] rounded-full font-semibold mt-[3px]">
        NEW
      </span>
      <a
        href="https://forms.gle/G7zt3YeGx2FEGKv89"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-700 hover:text-blue-900"
      >
        All the authors are requested to fill the Google Form to complete the registration process
      </a>
    </li>

<h2 className="text-xl font-semibold mb-2 text-center">Accomodation details</h2>
    <li className="flex items-start gap-2">
      <span className="bg-green-600 text-white text-[10px] px-2 py-[2px] rounded-full font-semibold mt-[3px]">
        NEW
      </span>
      <a
        href="/travel/hotel-booking"
        className="underline text-blue-700 hover:text-blue-900"
      >
        Click here for the details related to Guest House and Hotel bookings
      </a>
    </li>

<h3 className="text-xl font-semibold mb-2 text-center">Attendee Registraion</h3>
    <li className="flex items-start gap-2">
      <span className="bg-green-600 text-white text-[10px] px-2 py-[2px] rounded-full font-semibold mt-[3px]">
        NEW
      </span>
      <a
        href="https://forms.gle/rgjdrgnGHGNtX6G19"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-700 hover:text-blue-900"
      >
        Please pay the registation fee and click here to fill the attendee registration form
      </a>
    </li>

    {/* 
    <li className="flex items-start gap-2">
      <span className="bg-yellow-500 text-white text-[10px] px-2 py-[2px] rounded-full font-semibold mt-[3px]">
      INFO
      </span>
      <span>🎓 Workshops and tutorials planned</span>
    </li>

    <li className="flex items-start gap-2">
      <span className="bg-yellow-500 text-white text-[10px] px-2 py-[2px] rounded-full font-semibold mt-[3px]">
      INFO
      </span>
      <span>📝 Schedule coming soon</span>
    </li>
    */}

  </ul>
</div>

    </div>
  )
}
