"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Sun, Moon, Flame } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type NavChild = { name: string; href: string };
type NavItem = {
  name: string;
  href: string;
  children?: NavChild[];
  isHot?: boolean;
  isImportant?: boolean;
};

const navItems: NavItem[] = [
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About Us", href: "/about/about-us" },
      { name: "Organizing Committee", href: "/about/organizing-committee" },
    ],
  },
  {
    name: "Authors",
    href: "/authors",
    children: [
      { name: "Call for Papers", href: "/authors/call-for-papers" },
      { name: "Submission", href: "/authors/submission-and-registration" },
    ],
  },
  {
    name: "Registration",
    href: "/registration",
  },
    {
    name: "Camera Ready Paper Submission",
    href: "/Camera-Ready-Paper-Submission",
    //isHot: true,
    isImportant: true,
  },
  {
    name: "Program",
    href: "/program",
    children: [
      { name: "Special Sessions", href: "/program/call-for-special-session" },
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
  { name: "Students & YPs", href: "/students-and-yps" },
  { name: "Sponsorships", href: "/sponsorships" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-2xl transition-all duration-300 text-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <img
            src="https://i.ibb.co/zHXKYVRC/ieee-spert-logo-removebg-preview.png"
            alt="IEEE-SPERT Logo"
            className="h-14"
          />
          <span>SPERT 2025</span>
        </Link>
        <button onClick={toggleMenu} className="lg:hidden">
          <span className="text-2xl">☰</span>
        </button>
        <div className={`hidden lg:flex gap-6`}>
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={`flex items-center gap-1 text-base font-medium transition-colors ${
                      item.name === "Registration"
                        ? "text-white bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 border border-red-600 rounded-md px-3 py-1"
                        : "text-white hover:text-white"
                    }`}>
                      {item.name}
                      <ChevronDown className="size-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child, childIndex) => (
                      <DropdownMenuItem key={childIndex} asChild>
                        <Link href={child.href} className="text-sm">{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`text-base font-medium transition-colors ${
                    item.isHot && item.isImportant
                      ? "text-red-600 dark:text-red-400 font-bold bg-gradient-to-r from-red-500/10 to-orange-500/10 px-3 py-2 rounded-lg border-2 border-red-500/30 hover:border-red-500/60 hover:from-red-500/20 hover:to-orange-500/20 hover:text-red-700 dark:hover:text-red-300"
                      : "text-white hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.isHot && item.isImportant && (
                    <span className="ml-1 text-xs bg-red-500 text-white px-2 py-1 rounded-full animate-bounce">NEW</span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
        {/* Mobile Menu */}
        <div className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
          {navItems.map((item, index) => (
            <div key={index} className="p-2">
              {item.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={`flex items-center gap-1 text-lg font-medium transition-colors ${
                      item.name === "Registration"
                        ? "text-white bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 border border-red-600 rounded-md px-3 py-1"
                        : "text-white hover:text-white"
                    }`}>
                      {item.name}
                      <ChevronDown className="size-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child, childIndex) => (
                      <DropdownMenuItem key={childIndex} asChild>
                        <Link href={child.href} className="text-sm">{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`block text-base font-medium transition-colors ${
                    item.isHot && item.isImportant
                      ? "text-red-600 dark:text-red-400 font-bold bg-gradient-to-r from-red-500/10 to-orange-500/10 px-3 py-2 rounded-lg border-2 border-red-500/30 hover:border-red-500/60 hover:from-red-500/20 hover:to-orange-500/20 hover:text-red-700 dark:hover:text-red-300"
                      : "text-white hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.isHot && item.isImportant && (
                    <span className="ml-1 text-xs bg-red-500 text-white px-2 py-1 rounded-full animate-bounce">NEW</span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <button onClick={toggleTheme} className="p-2 rounded-full">
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
            <span className="sr-only">Toggle theme</span>
          </button>
          <Link 
            href="https://www.svnit.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              src="https://imgs.search.brave.com/WFSCJ_QtSA6WBJR7nTNYbUyHylRSHAaK-XBDbUO7FZc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZuaXQuYWMuaW4v/aW1hZ2VzL2xvZ28u/cG5n"
              alt="SVNIT Logo"
              width={40}
              height={40}
              className="ml-4"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 