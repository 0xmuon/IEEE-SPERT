"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "https://i.ibb.co/QFHnxq40/Statue-of-Unity.webp",
  "https://i.ibb.co/X031GYt/photo1.webp",
  "https://i.ibb.co/8LS03LTr/Akshardham-Temple-Gujarat-7.jpg",
  "https://i.ibb.co/KzGBFs9v/electrical-engg-svnit.jpg"
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
    <div className="relative w-full h-[550px] overflow-hidden">
      {images.map((src, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          {/* Blurred Background */}
          <Image
            src={src}
            alt={`Background image ${index + 1}`}
            fill
            className="object-cover filter blur-xl scale-110"
          />
          {/* Centered Image at Natural Aspect Ratio */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[90%] max-w-4xl h-auto aspect-video">
              <Image
                src={src}
                alt={`Main image ${index + 1}`}
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4 z-20 text-center">
        <h1 className="text-4xl font-bold mb-4">IEEE International Conference on</h1>
        <p className="text-xl mb-2">
          Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) 2025
        </p>
        <p className="text-lg mb-4">22 Dec - 24 Dec, 2025</p>
        <Image 
          src="https://imgs.search.brave.com/WFSCJ_QtSA6WBJR7nTNYbUyHylRSHAaK-XBDbUO7FZc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZuaXQuYWMuaW4v/aW1hZ2VzL2xvZ28u/cG5n"
          alt="SVNIT Logo"
          width={150}
          height={150}
          className="my-4"
        />
        <p className="text-lg">Organized by Electrical Engineering Department</p>
        <p className="text-lg">Sardar Vallabhbhai National Institute of Technology, Surat, Gujarat, INDIA</p>
      </div>
    </div>
  )
}
