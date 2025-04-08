"use client"

import { useState, useEffect } from "react"

export default function VisitorCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Get the current count from localStorage
    const storedCount = localStorage.getItem('visitorCount')
    const currentCount = storedCount ? parseInt(storedCount) : 0

    // Increment the count
    const newCount = currentCount + 1
    setCount(newCount)

    // Store the new count
    localStorage.setItem('visitorCount', newCount.toString())
  }, [])

  return (
    <div className="w-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-2">
      <div className="container mx-auto px-4 text-right">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Visitors: <span className="font-bold">{count}</span>
        </p>
      </div>
    </div>
  )
} 