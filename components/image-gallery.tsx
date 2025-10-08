"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
//  "https://i.ibb.co/dwsTR2T4/Screenshot-2025-10-03-145653.png",
"/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  //"https://i.ibb.co/JWB2yy71/common-banner.png",
  //"https://i.ibb.co/k2RHKH4y/Whats-App-Image-2025-06-06-at-23-25-07.jpg",
  //"https://i.ibb.co/tMv2dKth/Rani-Ki-Vav.jpg",
  //"https://i.ibb.co/XZwCvyjT/Getty-Images-821330386.jpg",
  //"https://i.ibb.co/mCFnBrbN/Dandi.jpg",
  //"https://i.ibb.co/Mkjvsc4b/gopi-talav.jpg",
  //"https://i.ibb.co/QF5BGM2J/Akshardham-Temple-Banner.jpg",
 // "https://i.ibb.co/X031GYt/photo1.webp",
 // "https://i.ibb.co/8LS03LTr/Akshardham-Temple-Gujarat-7.jpg",
 // "https://i.ibb.co/KzGBFs9v/electrical-engg-svnit.jpg",
  //"https://i.ibb.co/nNmk47W7/Statue-of-Unity-Engineering-Construction-and-Project-Management-of-Worlds-Tallest-Statue.jpg",
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
<div className="flex justify-center items-center w-full py-0 bg-gradient-to-b from-[#b3e5fc] to-[#c8e6c9] relative">
  <div className="relative aspect-video w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] max-w-[1600px] overflow-hidden">
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
</div>



)

}


