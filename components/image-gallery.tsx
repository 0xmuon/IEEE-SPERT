"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = images.length

  // Auto-slide through images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(timer)
  }, [totalSlides])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    )
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start py-12">

      {/* 🔹 FULLSCREEN BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="/images/video.mp4"
      />
      
      {/* 🔹 Optional dark overlay for readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-[2px] -z-10"></div>

      {/* 🔹 CONTENT CONTAINER */}
      <div className="w-[100%] max-w-6xl flex flex-col gap-6 z-10">

        {/* IMAGE SLIDESHOW BLOCK */}
        <div className="relative aspect-video overflow-hidden rounded-[32px] shadow-[0_18px_45px_rgba(0,0,0,0.28)]
                        bg-white/15 border border-white/30 backdrop-blur-2xl group">

          {/* Slide Container */}
          <div
            className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-full flex-shrink-0 bg-black/60"
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Left/Right buttons (show on hover) */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300 bg-black/30 hover:bg-black/50 
                       text-white rounded-full px-3 py-2 text-2xl shadow-md backdrop-blur-md"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300 bg-black/30 hover:bg-black/50 
                       text-white rounded-full px-3 py-2 text-2xl shadow-md backdrop-blur-md"
          >
            ›
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          {images.map((_, index) => {
            const isActive = index === currentIndex
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 border border-white/80 backdrop-blur-md
                  ${isActive ? "w-6 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"}
                `}
              />
            )
          })}
        </div>

        {/* BOTTOM REGISTRATION LINKS SECTION */}
        <div className="bg-white/75 rounded-3xl shadow-[0_12px_35px_rgba(0,0,0,0.15)] border border-white/60 backdrop-blur-2xl px-6 py-5">

          <h2 className="text-xl font-semibold mb-3 text-center text-slate-800 tracking-tight">
            Registration & Accommodation
          </h2>

          <ul className="text-sm space-y-3 text-slate-800">

            <li className="flex items-start gap-2">
              <span className="bg-emerald-600 text-white text-[10px] px-2 py-[2px] rounded-full font-semibold mt-[3px]">
                NEW
              </span>
              <a
                href="https://forms.gle/G7zt3YeGx2FEGKv89"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-emerald-800 hover:text-emerald-900"
              >
                All authors must fill the Google Form to complete registration
              </a>
            </li>

            <li className="flex items-start gap-2">
              <span className="bg-emerald-600 text-white text-[10px] px-2 py-[2px] rounded-full font-semibold mt-[3px]">
                NEW
              </span>
              <a
                href="/travel/hotel-booking"
                className="underline text-emerald-800 hover:text-emerald-900"
              >
                Click here for Guest House and Hotel booking details
              </a>
            </li>

            <li className="flex items-start gap-2">
              <span className="bg-emerald-600 text-white text-[10px] px-2 py-[2px] rounded-full font-semibold mt-[3px]">
                NEW
              </span>
              <a
                href="https://forms.gle/rgjdrgnGHGNtX6G19"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-emerald-800 hover:text-emerald-900"
              >
                Pay the attendee fee and click here to fill the registration form
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
