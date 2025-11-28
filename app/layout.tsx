import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundVideo } from "@/components/BackgroundVideo" // 👈 add this import

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IEEE-SPERT 2025",
  description:
    "IEEE International Conference on Smart Power, Energy, Renewables, and Transportation",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "0xmuon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} relative bg-transparent`}>
        {/* 🔹 Global background video (behind everything) */}
        <BackgroundVideo />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Content sits above video */}
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
