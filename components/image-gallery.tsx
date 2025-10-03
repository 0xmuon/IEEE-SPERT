"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
//  "https://i.ibb.co/dwsTR2T4/Screenshot-2025-10-03-145653.png",
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
    </div>
  )
}


