"use client"; // Mark as a client component

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm px-4 md:px-6 py-6">
      <div className="container flex flex-col gap-4">
        {/* Microsoft CMT Acknowledgment */}
        <div className="text-xs text-muted-foreground text-center mb-4">
          The <a 
            href="https://cmt3.research.microsoft.com" 
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft CMT service
          </a> was used for managing the peer-reviewing process for this conference. 
          This service was provided for free by Microsoft and they bore all expenses, 
          including costs for Azure cloud services as well as for software development and support.
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} IEEE-SPERT. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link> */}
            <Link 
              href="https://www.ieee.org/about/corporate/governance/p7-8.html" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              IEEE Code of Ethics
            </Link>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Powered by ⚡
        </p>
      </div>
    </footer>
  );
};

export default Footer; 