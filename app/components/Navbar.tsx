"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About Us", href: "/about/about-us" },
      { name: "Organizing Committee", href: "/about/organizing-committee" },
      { name: "Chairs", href: "/about/chairs" },
    ],
  },
  {
    name: "Authors",
    href: "/authors",
    children: [
      { name: "Call for Papers", href: "/authors/call-for-papers" },
      { name: "Call for Special Session", href: "/authors/call-for-special-session" },
      { name: "Submission and Registration", href: "/authors/submission-and-registration" },
    ],
  },
  {
    name: "Program",
    href: "/program",
    children: [
      { name: "Keynote Speaker", href: "/program/keynote-speaker" },
      { name: "Tutorial Speaker", href: "/program/tutorial-speaker" },
    ],
  },
  {
    name: "Travel",
    href: "/travel",
    children: [
      { name: "Visa Information", href: "/travel/visa-information" },
      { name: "Hotel Booking", href: "/travel/hotel-booking" },
      { name: "Tour", href: "/travel/tour" },
      { name: "Food", href: "/travel/food" },
      { name: "Location", href: "/travel/location" },
    ],
  },
  { name: "Sponsorships", href: "/sponsorships" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            IEEE
          </div>
          <span>IEEE-SPERT</span>
        </div>
        <div className="hidden lg:flex gap-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                      {item.name}
                      <ChevronDown className="size-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child, childIndex) => (
                      <DropdownMenuItem key={childIndex} asChild>
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <button onClick={toggleTheme} className="p-2 rounded-full">
          {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 