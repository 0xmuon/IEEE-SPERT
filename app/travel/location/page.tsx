import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function LocationPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-white">
            Location Information
          </h1>
          <p className="md:text-xl mb-8 text-white">
            Surat is a major port city in Gujarat, India, known for its diamond and textile industries. It is one of the fastest-growing cities and a hub for trade and commerce. The city is famous for its delicious street food and vibrant culture. Surat also has a rich history, with influences from Mughal, Dutch, and British eras.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-white">Venue Location</h2>
          <p className="md:text-xl mb-8 text-white">
            Sardar Vallabhbhai National Institute of Technology, Surat: Located in Athwa, Surat, Gujarat 395007, India.
          </p>
          <iframe
            title="SVNIT Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6299713642265!2d72.78262877485321!3d21.167119180517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec8b56fdf3%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1739285605447!5m2!1sen!2sus"
            className="w-full h-64 md:h-96 mb-8 rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </main>
  );
}

