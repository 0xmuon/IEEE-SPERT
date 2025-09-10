"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "https://i.ibb.co/JWB2yy71/common-banner.png",
  "https://i.ibb.co/k2RHKH4y/Whats-App-Image-2025-06-06-at-23-25-07.jpg",
  "https://i.ibb.co/tMv2dKth/Rani-Ki-Vav.jpg",
  "https://i.ibb.co/XZwCvyjT/Getty-Images-821330386.jpg",
  "https://i.ibb.co/mCFnBrbN/Dandi.jpg",
  "https://i.ibb.co/Mkjvsc4b/gopi-talav.jpg",
  "https://i.ibb.co/QF5BGM2J/Akshardham-Temple-Banner.jpg",
 // "https://i.ibb.co/X031GYt/photo1.webp",
 // "https://i.ibb.co/8LS03LTr/Akshardham-Temple-Gujarat-7.jpg",
 // "https://i.ibb.co/KzGBFs9v/electrical-engg-svnit.jpg",
  "https://i.ibb.co/nNmk47W7/Statue-of-Unity-Engineering-Construction-and-Project-Management-of-Worlds-Tallest-Statue.jpg",
  //"https://i.ibb.co/Pvwm2mZW/statue-of-unity-blog-cover.webp",
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
    <div className="relative w-full h-[68vh]">
      {/* Rotating images */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Conference image ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Full dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">
          IEEE International Conference on
        </h1>
        <p className="text-lg md:text-xl text-center mb-2">
          Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) 2025
        </p>
        <p className="text-base md:text-lg mb-4">22 Dec - 24 Dec, 2025</p>

        {/* SVNIT + Gujarat Section Logos side by side */}
        <div className="flex flex-row items-center justify-center gap-8 mb-4">

          <Image 
            src="https://i.ibb.co/ks9mhG84/guj-section-logo.png"
            alt="Gujarat Section Logo"
            width={300}
            height={300}
            className="object-contain"
          />
          <Image 
            src="https://www.svnit.ac.in/images/logo.png"
            alt="SVNIT Logo"
            width={150}
            height={150}
            className="object-contain"
          />
          <Image 
            src="https://i.ibb.co/fYQ9ZvB3/Jt-Chapter-Logo.png"
            alt="IEEE IES/PELS Joint Chapter Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        

        <p className="text-sm md:text-base text-center">
          Finacially sponsored and jointly organized by IEEE Gujarat Section, IEEE Gujarat Section IAS/IES/PELS Joint Chapter and
        </p>
        <p className="text-sm md:text-base text-center mb-4">
          Department of Electrical Engineering, Sardar Vallabhbhai National Institute of Technology, Surat, Gujarat, INDIA
        </p>

        {/* IEEE IAS + PELS Logos side by side */}
        <div className="flex flex-row items-center justify-center gap-6">
          <Image 
            src="https://i.ibb.co/xqbwmHGg/IAS-Logo-No-BG1.png"
            alt="IEEE IAS Logo"
            width={120}
            height={90}
            className="object-contain"
          />
          <Image 
            src="https://i.ibb.co/8nwDMYMV/pels-tag-clear-bar-vert.png"
            alt="IEEE PELS Logo"
            width={90}
            height={70}
            className="object-contain"
          />
        </div>
          <p className="text-base md:text-lg font-semibold mb-3">
          Technically co-sponsored by IEEE Industrial Electronics Society (IAS) and Power Electronics Society (PELS)
        </p>
        
      </div>
    </div>
  )
}


