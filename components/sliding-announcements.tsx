"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const announcements = [
  "Call for papers now open!",
  "Early bird registration closing soon",
  "Keynote speakers announced",
  "Call for Special session will be announced soon!",
]

export function SlidingAnnouncements() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextAnnouncement = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
  }

  const prevAnnouncement = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-4 flex items-center justify-between">
          <button onClick={prevAnnouncement} className="text-primary-foreground">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <p className="text-center flex-1">{announcements[currentIndex]}</p>
          <button onClick={nextAnnouncement} className="text-primary-foreground">
            <ChevronRight className="h-6 w-6" />
          </button>
        </CardContent>
      </Card>
    </div>
  )
}

