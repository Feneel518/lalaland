"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Rooms", id: "rooms" },
    { name: "Amenities", id: "amenities" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${
        isScrolled
          ? "bg-[#2d4a3e]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border-2 border-[#c9a961] flex items-center justify-center transition-all duration-300 group-hover:bg-[#c9a961]">
              <span className="font-display text-[#c9a961] text-xl group-hover:text-[#2d4a3e] transition-colors">
                LL
              </span>
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="font-display text-[#e8e6e3] text-xl">
                La La Land
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#c9a961] text-xs">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="text-white bg-transparent hover:bg-[#2d4a3e] p-2 rounded-sm transition-colors text-sm font-medium relative group">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Booking Button & Mobile Menu - Right */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block bg-[#c9a961] hover:bg-[#d4b574] text-[#1a1a1a] px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 h-auto">
              Book Now
            </Button>

            {/* Mobile Menu Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-[#e8e6e3] hover:text-[#c9a961] hover:bg-transparent transition-colors">
                  <Menu size={28} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#2d4a3e] border-l border-[#c9a961]/20 w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="font-display text-2xl text-[#c9a961] text-left">
                    La La Land Resort
                  </SheetTitle>
                  <div className="flex gap-0.5 justify-start">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#c9a961] text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </SheetHeader>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.id);
                      }}
                      className="text-[#e8e6e3] hover:text-[#c9a961] hover:bg-[#3d5a4d]/50 transition-all text-base py-3 px-4 rounded-md">
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-[#c9a961] hover:bg-[#d4b574] text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300">
                    Book Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
