"use client"; // Mark as a client component

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-20 border-t bg-background/95 backdrop-blur-sm flex items-center justify-between px-4 md:px-6">
      <div className="container flex flex-col gap-4 sm:flex-row justify-between items-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} IEEE-SPERT. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            IEEE Code of Ethics
          </Link>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-2">
        Powered by ⚡
      </p>
    </footer>
  );
};

export default Footer; 