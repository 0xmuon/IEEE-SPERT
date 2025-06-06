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
        <h1 className="text-4xl font-bold text-center mb-4">IEEE International Conference on</h1>
        <p className="text-xl text-center mb-2">
          Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) 2025
        </p>
        <p className="text-lg">22 Dec - 24 Dec, 2025</p>
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

