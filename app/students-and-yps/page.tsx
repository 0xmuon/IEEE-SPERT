"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function StudentsAndYPsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Students & YPs
            </h1>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Student & Young Professionals (S&YP) Activity Committee of the Industrial Electronics Society (IES) is continuously implementing a paper assistance program (IES-SYPA) – a competition-based financial support for the IES S&YP members to attend IES Majority Sponsored Conferences. Moreover, during the conference, we will organize a SYP forum – a special event aimed at helping students and young professional members stay connected in the IES community. SYP forum will provide a unique opportunity to ask questions and get professional advice directly from IEEE Fellows, the IES President, AdCom members, and experienced colleagues.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  This event includes tutorials from academia and industry, a 3-min Video Session, and an open discussion forum.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">IES-SYPA Program</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Competition-based financial support for IES S&YP members to attend IES Majority Sponsored Conferences.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">SYP Forum</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Special event to help students and young professionals stay connected in the IES community.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Professional Advice</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Get advice directly from IEEE Fellows, IES President, AdCom members, and experienced colleagues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 