import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const AboutUsPage = () => {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex items-center mb-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              About SVNIT
            </h1>
            <img
              src="https://i.ibb.co/DgPtSdG6/svnit-logo.png"
              alt="SVNIT Logo"
              className="h-24 ml-4"
            />
          </div>
          <div className="bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              The Institute was established as Sardar Vallabhbhai Regional College of Engineering & Technology (SVRCET) Surat in 1961 as one of the Regional Engineering Colleges (RECs) to impart technical education. The Government of India declared the Sardar Vallabhbhai Regional College of Engineering & Technology (SVRCET) Surat to Sardar Vallabhbhai National Institute of Technology (SVNIT) Surat with status of 'Deemed University' with effect from 4th December, 2002. With the enactment of National Institutes of Technology Act-2007, the Institute has been granted the status of 'Institution of National Importance' w.e.f. August 15, 2007.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              The Institute now offers eleven (11) B.Tech. Degree Programmes, twenty-one (21) M.Tech. Degree Programmes, three (03) Five Years Integrated M.Sc. Degree Programmes in Chemistry, Mathematics & Physics, One (01) Five Years Integrated B.Tech and M.Tech Degree Programme and Master of Business Administration in Business Analytics. Institute offers Doctoral Degree Programme in Engineering, Science, Management and English. Institute also offers M. Tech (R) in all the engineering disciplines.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              The Institute has been recognized by the Government of India as one of the centres for the Quality Improvement Programme for M.Tech. and Ph.D.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Institute has also established the Centre of Indian Knowledge System and Centre for the Tribal Technology Development.
            </p>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-white">
            About Department of Electrical Engineering
          </h1>
          <img
            src="https://i.ibb.co/jPNkdgQv/electrical-engg-svnit.jpg"
            alt="Department of Electrical Engineering"
            className="h-80 mb-4"
          />
          <div className="bg-gradient-to-r from-green-200 to-white dark:from-blue-800 dark:to-black p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              The Department of Electrical Engineering (DoEE) is one of the oldest departments established in 1961. Currently, the department offers B. Tech. in Electrical Engineering and B. Tech. Minor in Electrical Engineering for other discipline students, along with M. Tech. in Power Electronics and Electric Drives, M. Tech. in Power Systems and M. Tech. in Instrumentation and Control. Also, the department offers PhD programme in the research areas of power electronics and electrical drives, power systems, renewable energy, control systems, electrical vehicles and other area of electrical engineering. The department provides consultancy and electrical testing services to various industries, government and semi-government organizations.
            </p>
          </div>
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
