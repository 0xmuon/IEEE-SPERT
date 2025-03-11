"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "https://i.ibb.co/QFHnxq40/Statue-of-Unity.webp",
  "https://i.ibb.co/X031GYt/photo1.webp",
  "https://i.ibb.co/8LS03LTr/Akshardham-Temple-Gujarat-7.jpg",
  "https://i.ibb.co/KzGBFs9v/electrical-engg-svnit.jpg",
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
    <div className="relative w-full h-[550px]">
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
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl font-bold text-center mb-4">IEEE International Conference</h1>
        <p className="text-xl text-center mb-2">
          IEEE International Conference on Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) 2025
        </p>
        <p className="text-lg">19 Dec - 21 Dec, 2025</p>
        <p className="text-lg">Surat, Gujarat, INDIA</p>
      </div>
    </div>
  )
}

