import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Card, CardContent } from "@/components/ui/card"

export default function SubmissionAndRegistrationPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
            Registration Details
          </h1>
          
          <Card className="mb-8">
            <CardContent className="p-6">
<section className="w-full py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center mb-6 text-primary">Registration Fees</h2>
    <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
      Prices are inclusive of 18% GST. Payment Gateway charges, currency conversion, or any bank charges are extra.
    </p>
    <div className="overflow-auto rounded-lg shadow border dark:border-gray-700">
      <table className="min-w-full text-sm text-center text-gray-800 dark:text-gray-200">
        <thead className="bg-primary text-white">
          <tr>
            <th rowSpan={2} className="px-4 py-3 border">Category</th>
            <th colSpan={2} className="px-4 py-3 border">Early Bird<br /><span className="text-xs">(Upto 31 Oct, 2025)</span></th>
            <th colSpan={2} className="px-4 py-3 border">Standard<br /><span className="text-xs">(From 1st Nov, 2025)</span></th>
          </tr>
          <tr className="bg-primary/90">
            <th className="px-4 py-2 border">IEEE</th>
            <th className="px-4 py-2 border">Non-IEEE</th>
            <th className="px-4 py-2 border">IEEE</th>
            <th className="px-4 py-2 border">Non-IEEE</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Indian Author - Academia/Industry (1 Paper)", "₹9,440", "₹11,800", "₹11,800", "₹14,160"],
            ["Indian Author - Academia/Industry (2 Papers)", "₹11,800", "₹14,160", "₹14,160", "₹16,520"],
            ["Indian Author - Attendee", "₹7,080", "₹9,440", "₹9,440", "₹11,800"],
            ["Student Author (1 Paper)", "₹6,608", "₹8,260", "₹8,260", "₹10,620"],
            ["Student Attendee", "₹4,720", "₹5,900", "₹5,900", "₹8,260"],
            ["Foreign Author - Academia/Industry (2 Papers)", "$354", "$413", "$413", "$472"],
            ["Foreign Attendee", "$236", "$295", "$295", "$354"],
            ["Foreign Student Author (1 Paper)", "$236", "$295", "$295", "$354"],
            ["Foreign Student Attendee", "$177", "$236", "$236", "$295"],
          ].map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}>
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-3 border font-medium">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

<div className="mt-10 bg-primary/10 p-6 rounded-lg border dark:border-gray-700">
  <h3 className="text-2xl font-bold mb-4 text-primary">Important instructions:</h3>
  <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 dark:text-gray-300">
    <li>Each accepted paper must have at least one author registered under the full category (Academician, Scientist, Industry Professional, or Foreign Author) before the deadline to be included in IEEE Xplore.</li>
    <li>A single full registration allows the presentation and submission of up to two (2) papers.</li>
    <li>Student registration permits the presentation of only one (1) paper.</li>
    <li>Initial manuscript submissions may be up to six (6) pages. Two (2) additional pages are allowed in the final submission without extra charges. Maximum page limit is eight (8).</li>
    <li>Registration fees are non-refundable.</li>
  </ul>

  <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">Inclusions</h3>
  <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 dark:text-gray-300">
    <li><strong>Full Registration:</strong> Includes access to keynotes, tutorials, all technical sessions, a registration kit, lunch on all three days, tea breaks, and a gala dinner.</li>
    <li><strong>Student Registration:</strong> Includes access to Keynotes, tutorials, all conference sessions, a registration kit, lunches for all three days, tea breaks, and a gala dinner. Students must upload a valid student ID card during registration. Confirmation will be granted only after verifying the ID proof.</li>
  </ul>
</div>


<div className="mt-10 bg-primary/10 p-6 rounded-lg border dark:border-gray-700">
  <h3 className="text-2xl font-bold mb-4 text-primary">Bank Account Details for paying the Registration Fee</h3>
  <div className="text-gray-700 dark:text-gray-300 space-y-2">
    <p><strong>Account Number:</strong> 44122037989</p>
    <p><strong>Account Name:</strong> DIRECTOR SVNIT IEEE SPERT 2025</p>
    <p><strong>Bank Name:</strong> State Bank of India</p>
    <p><strong>Branch Address:</strong> SVNIT Branch</p>
    <p><strong>City:</strong> Surat, Gujarat State</p>
    <p><strong>Country:</strong> India</p>
  </div>
</div>



            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}

