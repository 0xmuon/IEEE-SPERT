import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Card, CardContent } from "@/components/ui/card"

export default function RegistrationInstructionsPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
            Instructions for Submission of Camera Ready Paper and Registration
          </h1>

          <Card className="mb-8">
            <CardContent className="p-6 space-y-10 text-gray-800 dark:text-gray-200">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">STEP 1: CAMERA-READY PAPER UPLOAD (DEADLINE: October 15, 2025)</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2">
                  <li>
                    <strong>SIMILARITY INDEX:</strong> Must be BELOW 20% (excluding references). Papers exceeding 20% will not be forwarded to IEEE Xplore.
                  </li>
                  <li>
                    <strong>REVISIONS:</strong> Revise your paper as per REVIEWER COMMENTS available on the Microsoft CMT Portal.
                  </li>
                  <li>
                    <strong>IEEE TEMPLATE:</strong> Prepare the paper strictly according to the IEEE template: <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="underline text-primary">IEEE templates</a>
                  </li>
                  <li>
                    <strong>PROOFREADING:</strong> Carefully proofread to ensure no further revisions are required.
                  </li>
                  <li>
                    <strong>COPYRIGHT NOTICE:</strong> Add to the LEFT FOOTER of the FIRST PAGE ONLY (not all pages). Use one of the following:
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>For papers in which all authors are employed by the US government: U.S. Government work not protected by U.S. copyright</li>
                      <li>For papers in which all authors are employed by a Crown government (UK, Canada, Australia): 979-8-3315-9894-5/25/$31.00 ©2025 Crown</li>
                      <li>For papers in which all authors are employed by the European Union: 979-8-3315-9894-5/25/$31.00 ©2025 European Union</li>
                      <li>For all other papers: 979-8-3315-9894-5/25/$31.00 ©2025 IEEE</li>
                    </ul>
                  </li>
                  <li>
                    <strong>IEEE PDF EXPRESS (to generate IEEE-compliant PDF):</strong>
                    <div className="mt-2 space-y-2">
                      <p>First-time users should do the following:</p>
                      <ol className="list-decimal pl-6 space-y-1">
                        <li>Select the New Users - <a href="https://ieee-pdf-express.org/Account/Login" target="_blank" rel="noopener noreferrer" className="underline text-primary">Click Here</a>.</li>
                      <li>Enter the following:
                        <ul className="list-disc pl-6 mt-1">
                          <li>67079X for the Conference ID</li>
                          <li>your email address</li>
                          <li>a password</li>
                        </ul>
                      </li>
                        <li>Continue to enter information as prompted.</li>
                      </ol>
                      <p>An online confirmation and an email confirmation will verify your account setup.</p>
                      <p>Previous users of PDF eXpress should follow the above steps using their existing password and verify contact information.</p>
                      <p>For all users (after login):</p>
                      <ol className="list-[lower-roman] pl-6 space-y-1">
                        <li>Complete your profile if prompted</li>
                        <li>Click on “CREATE NEW TITLE”</li>
                        <li>Upload your paper. If conversion errors appear, correct the file and resubmit until you see: “File has been converted successfully.”</li>
                        <li>Download the FINAL IEEE-COMPLIANT PDF</li>
                      </ol>
                    </div>
                  </li>
                  <li>
                    <strong>FINAL UPLOAD:</strong> Submit the converted PDF to the IEEE SPERT 2025 CMT Portal: <a href="https://cmt3.research.microsoft.com/SPERT2025" target="_blank" rel="noopener noreferrer" className="underline text-primary">CMT Portal</a>
                  </li>
                </ol>
              </div>

              <hr className="border-t" />

              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">STEP 2: SUPPLEMENTARY FILE UPLOAD (DEADLINE: October 15, 2025)</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2">
                  <li><strong>RESPONSE SHEET:</strong> Explain how each reviewer's comment has been addressed.</li>
                  <li><strong>PLAGIARISM REPORT:</strong> Generate with Turnitin or iThenticate.</li>
                  <li><strong>ZIP FOLDER:</strong> Name the folder with your Paper ID (e.g., PID402). Include both the response sheet and plagiarism report.</li>
                  <li>Upload this ZIP file under “SUPPLEMENTARY FILE UPLOAD” in CMT Portal: <a href="https://cmt3.research.microsoft.com/SPERT2025" target="_blank" rel="noopener noreferrer" className="underline text-primary">CMT Portal</a>.</li>
                </ol>
              </div>

              <hr className="border-t" />

              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">STEP 3: REGISTRATION (EARLY BIRD DEADLINE: October 31, 2025)</h2>
                <ol className="list-decimal list-outside pl-6 space-y-2">
                  <li>At least ONE AUTHOR of each accepted paper must register.</li>
                  <li><strong>REGISTRATION LINK:</strong> <a href="https://www.spert.in/registration" target="_blank" rel="noopener noreferrer" className="underline text-primary">https://www.spert.in/registration</a></li>
                  <li>Pay the fee as per your category to the account listed on the website.</li>
                  <li>After payment, complete the GOOGLE FORM to finalize registration: <a href="https://forms.gle/G7zt3YeGx2FEGKv89" target="_blank" rel="noopener noreferrer" className="underline text-primary">Google Form</a></li>
                </ol>
              </div>

              <hr className="border-t" />

              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">STEP 4: IEEE COPYRIGHT FORM (eCF) SUBMISSION</h2>
                <p className="mb-2">To ensure your paper is published in IEEE Xplore, it is mandatory to transfer copyright to IEEE. The corresponding (submitting) author of each paper must complete this process. The steps are as follows:</p>
                <ol className="list-decimal list-outside pl-6 space-y-2">
                  <li>Log in to your CMT Paper Submission Portal and click on the IEEE Copyright link to go to the IEEE Copyright Form submission page.</li>
                  <li>Click “Click here to redirect to the IEEE copyright website” to proceed to the IEEE eCF portal.</li>
                  <li>Follow the instructions on the IEEE eCF portal to complete the copyright transfer.</li>
                  <li>Once completed, download the finalized Copyright Form as a PDF and keep a copy.</li>
                  <li>Return to the CMT Paper Submission Portal and upload the downloaded PDF of the Copyright Transfer Form.</li>
                </ol>
                <p className="mt-3 font-semibold">NOTE: Each accepted paper requires a SEPARATE COPYRIGHT TRANSFER.</p>
              </div>

              <hr className="border-t" />

              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-primary">For MORE DETAILS</h2>
                <p>
                  Please visit: <a href="https://www.spert.in/authors/submission-and-registration" target="_blank" rel="noopener noreferrer" className="underline text-primary">https://www.spert.in/authors/submission-and-registration</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}


