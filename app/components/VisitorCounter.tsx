"use client"

import { useState, useEffect } from "react"

export default function VisitorCounter() {
  const [count, setCount] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      // Get the current count from localStorage
      const storedCount = localStorage.getItem('visitorCount')
      const currentCount = storedCount ? parseInt(storedCount) : 0

      // Increment the count
      const newCount = currentCount + 1
      setCount(newCount)

      // Store the new count
      localStorage.setItem('visitorCount', newCount.toString())
    }
  }, [])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-2">
        <div className="container mx-auto px-4 text-right">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Visitors: <span className="font-bold">-</span>
          </p>
        </div>
      </div>
    )
  }

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