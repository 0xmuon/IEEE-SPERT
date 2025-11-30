import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Image from "next/image"

export default function HotelBookingPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-white">
            Accomodation & Hotel Booking
          </h1>

          <div className="mt-10 bg-primary/10 p-6 rounded-lg border dark:border-gray-700 text-white dark:text-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-white dark:text-white">Accommodation at Instutute Guest House</h3>
            <ul className="list-disc list-outside pl-6 space-y-2 text-white dark:text-gray-100">
              <li>The participants of this conference can avail the accommodation facility at the Institute Guest House. The Guest House offers comfotable stay at affordable rates.</li>
              <li>The Guest House is located just outside the campus and is easily accessible by public transport.</li>
                <li>For booking the accommodation, please contact on the following:</li>
                <li>
                <div className="bg-white dark:bg-gray-900 border border-primary rounded-lg p-4 mt-2 shadow-sm w-fit text-gray-800 dark:text-gray-100">
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">Guest House Contact Details:</div>
                  <div>
                  <span className="font-medium text-yellow-600 dark:text-yellow-400">Phone:</span> 0261-2201502
                  </div>
                  <div>
                  <span className="font-medium text-yellow-600 dark:text-yellow-400">Email:</span> guesthouseoffice@svnit.ac.in, svnitguesthouse@gmail.com
                  </div>
                </div>
                </li>
                <li> For more details about the Guest House, please visit <Link href="https://www.svnit.ac.in/web/guesthouse.php" target="_blank" className="underline text-blue-600 dark:text-blue-400">Guest House - SVNIT</Link>. </li>
            </ul>
          </div>


            <div className="mt-10 bg-primary/5 p-6 rounded-lg border border-dashed border-primary dark:border-gray-700 text-gray-800 dark:text-gray-100">
            <h2 className="text-xl font-semibold mb-2 text-white dark:text-white">How to Book Accommodation</h2>
            <ol className="list-decimal list-inside space-y-2 text-white dark:text-gray-100">
              <li>
              Contact the Guest House using the phone or email provided above to check availability and reserve your room.
              </li>
              <li>
              Download and fill out the{" "}
              <Link
                href="https://www.svnit.ac.in/Data/campus/Accomodation%20Requision%20Form,%20SVPB-Guest%20House-27112024.pdf"
                target="_blank"
                className="underline text-blue-600 dark:text-blue-400"
              >
                Accommodation Requisition Form
              </Link>
              .
              </li>
              <li>
              Submit the completed form to the Guest House office via email or in person.
              </li>
              <li>
              Await confirmation of your booking from the Guest House office.
              </li>
            </ol>
            </div>
          <h2 className="text-xl font-semibold mt-10 mb-4 text-white">
            The tariff for the accommodation at the Guest House
          </h2>
          <div className="mt-8">
            <Image
              src="/images/6_GH.png"
              alt="Hotel Booking Tariff"
              width={800}
              height={600}
              className="mx-auto rounded-lg shadow-lg w-full h-auto max-w-2xl"/>
            </div>
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="https://www.svnit.ac.in/Data/campus/Accomodation%20Requision%20Form,%20SVPB-Guest%20House-27112024.pdf" target="_blank">
                Download Accommodation Requisition Form
              </Link>
            </Button>
          </div>
          <div className="mt-10 bg-primary/10 p-6 rounded-lg border dark:border-gray-700 text-gray-800 dark:text-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-white dark:text-white">Note:</h3>
            <ul className="list-disc list-outside pl-6 space-y-2 text-white dark:text-gray-100">
              <li>The accommodation will be provided on first come first serve basis.</li>
              <li>The participants are requested to carry a valid ID proof at the time of check-in.</li>
              <li>The participants are requested to inform the Guest House office in case of any cancellation or change in booking.</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="w-full py-6 md:py-10 lg:py-12 text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-6 text-white">Nearby Hotels</h2>
          <p className="mb-8 text-white">
        If you prefer to stay at a hotel, here are some options near SVNIT Surat. You can book directly with the hotel using the provided links.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Ginger Surat */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow border p-4 flex flex-col items-center text-gray-800 dark:text-gray-100">
          <Image
            src="/images/Ginger.png" // Example Ginger Surat image
            alt="Ginger Surat"
            width={320}
            height={200}
            className="rounded-lg object-cover w-full h-40 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Ginger Surat</h3>
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-center">
            <span className="font-medium">Distance:</span> ~2.5 km from SVNIT Surat
          </p>
          <Link
            href="https://maps.app.goo.gl/iGn2bzvuumMt1Lxs9"
            target="_blank"
            className="underline font-medium text-blue-600 dark:text-blue-400"
          >
            View Hotel & Book
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow border p-4 flex flex-col items-center text-gray-800 dark:text-gray-100">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipNhycHHWoNdgYlUlJ-H0sBy4tVYtZuNxyrBvDVC=w600-h400-k-no" // Replace with actual hotel image URL
            alt="Hotel Shagun"
            width={320}
            height={200}
            className="rounded-lg object-cover w-full h-40 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Hotel Shagun</h3>
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-center">
            <span className="font-medium">Distance:</span> ~2.5 km from SVNIT Surat
          </p>
          <Link
            href="https://www.google.com/maps/place/Hotel+Shagun+-+Rooms+%26+Banquet/@21.1606494,72.7716539,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNhycHHWoNdgYlUlJ-H0sBy4tVYtZuNxyrBvDVC!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipNhycHHWoNdgYlUlJ-H0sBy4tVYtZuNxyrBvDVC%3Dw129-h86-k-no!7i5472!8i3648!4m20!1m6!2m5!1shotels!5m3!5m2!1s2025-10-28!2i2!3m12!1s0x3be04d9035b4f451:0x32135184920c6004!5m4!1s2025-10-28!2i2!4m1!1i2!8m2!3d21.1604664!4d72.7717872!10e5!15sCgZob3RlbHOSAQVob3RlbKoBOhABKgoiBmhvdGVscygAMh4QASIainsixGVQ51rDIRxGAWYdQunD1rZjbCyu2qAyChACIgZob3RlbHPgAQA!16s%2Fg%2F1ptyn6070?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="underline font-medium text-blue-600 dark:text-blue-400"
          >
            View Hotel & Book
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow border p-4 flex flex-col items-center text-gray-800 dark:text-gray-100">
          <Image
            src="/images/Marriott.jpeg" // Replace with actual hotel image URL
            alt="Surat Marriott Hotel"
            width={320}
            height={200}
            className="rounded-lg object-cover w-full h-40 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Surat Marriot Hotel</h3>
          <p className="mb-2 text-gray-700 dark:text-gray-300 text-center">
            <span className="font-medium">Distance:</span> ~2.0 km from SVNIT Surat
          </p>
          <Link
            href="https://www.marriott.com/reservation/rateListMenu.mi?dclid=CLW20PnpnJADFRrJcwEdI-gCqw&gbraid=0AAAAAo3SzG4xTEMEMiv1pxBxNV-x1Qfv_&gclid=Cj0KCQjwgKjHBhChARIsAPJR3xenJmGqD7i_0hjfCmzXRgsirIzXmBMXMVZ1sQY5uiaX0EnAK7N-PuEaApGrEALw_wcB"
            target="_blank"
            className="underline font-medium text-blue-600 dark:text-blue-400"
          >
            View Hotel & Book
          </Link>
        </div>
        {/* Add more hotel cards as needed */}
          </div>
          <p className="mt-8 text-sm text-white text-center">
        Distances are approximate. Please check with the hotel for latest availability and rates.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

