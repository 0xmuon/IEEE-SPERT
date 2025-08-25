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
            Submission
          </h1>
          
          <Card className="mb-8">
            <CardContent className="p-6">

            <div className="mt-10 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
  <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">Camera Ready Paper Submission</h3>
  
  <div className="space-y-6 text-gray-700 dark:text-gray-300">
    <div>
      <h4 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">Submission Requirements</h4>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>All accepted papers must be submitted in their final, camera-ready format</li>
        <li>Papers must strictly adhere to IEEE conference paper format</li>
        <li>All figures and tables must be of high quality and resolution</li>
        <li>Authors must ensure all references are complete and properly formatted</li>
      </ul>
    </div>

    
  </div>
</div>


<div className="mt-10 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
  <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">From your document to PDF</h3>
  
  <div className="space-y-6 text-gray-700 dark:text-gray-300">
    <div>
      <p className="mb-3">
        IEEE has a clear and (almost) complete technical definition of the allowed PDF characteristics for conferences. 
        The latest version can be downloaded from <a href="https://www.ieee.org/publications/services/services-resources" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">IEEE Publishing Technology Resources page</a>.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Embedding Typographic Fonts</h4>
      <p className="mb-3">
        IEEE asks for embedded typographic fonts on each PDF file. And this is one of the most frequent mistakes. 
        The pdf file must include (embed) the fonts needed to be shown on screen and printed.
      </p>
      <p className="mb-3">
        If the fonts are not embedded when generating the PDF, it is usually a configuration issue of the software 
        that creates the pdf file. It is not a word processor problem (Microsoft Word, LibreOffice Writer, etc…) 
        It is just a misconfiguration of the PDF creator (Adobe Distiller, Primo PDF, etc…) Please take a look at 
        the user manual and the configuration menus. The solution is often a few clicks away. Just configure your 
        program to embed all typographic fonts.
      </p>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Guidelines for final-paper submission (for accepted papers)</h4>
      
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>The corresponding author must submit the final version of the manuscript before the submission deadline.</li>
        <li>All manuscripts should follow the paper submission guidelines.</li>
        <li>The final version of your manuscript must not be significantly different from the accepted version. IEEE SPERT 2025 conference committee will be using the CrossCheck automated screening system to verify the originality of papers.</li>
        <li>Papers that violate IEEE's publication policy and guidelines may be rejected, even if they have been accepted in the review process. Disciplinary action may also be taken by IEEE if the violation is deemed severe.</li>
        <li>The final version of all manuscripts must be in PDF format. IEEE maintains strict formatting standards for all manuscripts published in the IEEE Xplore® Digital Library.</li>
        <li>Authors must use the <a href="https://ieee-pdf-express.org/account/login?ReturnUrl=%2F" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">IEEE PDFeXpress® site</a> to convert manuscript files to the required format. Please use the conference ID <strong>(To be added)</strong> to create a user account for accessing the IEEE PDF eXpress system.</li>
      </ul>
    </div>
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

