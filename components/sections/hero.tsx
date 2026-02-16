"use client";

import React, { useState } from "react";
import { ChevronDownIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";

export function Hero() {
  const [bookingData, setBookingData] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
    guests: "2",
  });

  const handleBookingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckAvailability = () => {
    // Scroll to contact section or handle booking
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white z-10 relative">
        <h1 className="font-script text-5xl md:text-6xl lg:text-7xl mb-6 text-white animate-fade-in">
          Experience Nature in Luxury
        </h1>
      </div>

      {/* Booking Widget */}
    </section>
  );
}
