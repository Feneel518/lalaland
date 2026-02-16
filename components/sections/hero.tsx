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
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-5xl px-4">
        <div className="bg-[#2d4a3e]/95 backdrop-blur-md rounded-full px-6 md:px-10 py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 shadow-2xl border border-[#c9a961]/10">
          {/* Check In */}
          <div className="flex items-center gap-4 flex-1 w-full md:w-auto min-w-0">
            {/* <Calendar className="w-5 h-5 text-[#c9a961] flex-shrink-0" /> */}
            <div className="flex flex-col items-start w-full min-w-0">
              <label
                htmlFor="checkIn"
                className="text-[#c9a961] text-xs uppercase tracking-widest mb-1.5 font-medium">
                Check In
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!bookingData.checkIn}
                    className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal">
                    {bookingData.checkIn ? (
                      format(bookingData.checkIn, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={bookingData.checkIn}
                    onSelect={(e) => {
                      setBookingData({
                        ...bookingData,
                        checkIn: e ?? new Date(),
                      });
                    }}
                    className="rounded-lg border bg-white!"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-14 bg-[#c9a961]/20"></div>

          {/* Check Out */}
          <div className="flex items-center gap-4 flex-1 w-full md:w-auto min-w-0">
            <div className="flex flex-col items-start w-full min-w-0">
              <label
                htmlFor="checkOut"
                className="text-[#c9a961] text-xs uppercase tracking-widest mb-1.5 font-medium">
                Check Out
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!bookingData.checkOut}
                    className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal">
                    {bookingData.checkOut ? (
                      format(bookingData.checkOut, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={bookingData.checkOut}
                    onSelect={(e) => {
                      setBookingData({
                        ...bookingData,
                        checkOut: e ?? new Date(),
                      });
                    }}
                    className="rounded-lg border bg-white!"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-14 bg-[#c9a961]/20"></div>

          {/* Guests */}
          <div className="flex items-center gap-4 flex-1 w-full md:w-auto min-w-0">
            <Users className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
            <div className="flex flex-col items-start w-full min-w-0">
              <label
                htmlFor="guests"
                className="text-[#c9a961] text-xs uppercase tracking-widest mb-1.5 font-medium">
                Guest
              </label>
              <select
                id="guests"
                name="guests"
                value={bookingData.guests}
                onChange={handleBookingChange}
                className="bg-transparent text-white text-sm border-none outline-none cursor-pointer focus:outline-none w-full">
                <option value="1" className="bg-[#2d4a3e] text-white">
                  1 Guest
                </option>
                <option value="2" className="bg-[#2d4a3e] text-white">
                  2 Guests
                </option>
                <option value="3" className="bg-[#2d4a3e] text-white">
                  3 Guests
                </option>
                <option value="4" className="bg-[#2d4a3e] text-white">
                  4 Guests
                </option>
                <option value="5+" className="bg-[#2d4a3e] text-white">
                  5+ Guests
                </option>
              </select>
            </div>
          </div>

          {/* Check Availability Button */}
          <Button
            onClick={handleCheckAvailability}
            className="bg-[#c9a961] hover:bg-[#d4b574] text-[#1a1a1a] px-8 py-6 rounded-full font-medium text-sm uppercase tracking-widest transition-all duration-300 whitespace-nowrap h-auto shadow-lg hover:shadow-xl flex-shrink-0">
            Check Availability
          </Button>
        </div>
      </div>
    </section>
  );
}
