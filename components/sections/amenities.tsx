"use client";

import { Wifi, Coffee, Utensils, Car, Waves, Dumbbell, Sparkles, UtensilsCrossed } from "lucide-react";

const amenities = [
    {
        icon: Wifi,
        title: "High-Speed WiFi",
        description: "Complimentary throughout resort",
    },
    {
        icon: Waves,
        title: "Private Beach",
        description: "Exclusive beachfront access",
    },
    {
        icon: UtensilsCrossed,
        title: "Fine Dining",
        description: "Multi-cuisine restaurant",
    },
    {
        icon: Coffee,
        title: "Cafe & Lounge",
        description: "24/7 refreshments",
    },
    {
        icon: Dumbbell,
        title: "Fitness Center",
        description: "Modern equipment",
    },
    {
        icon: Car,
        title: "Valet Parking",
        description: "Complimentary service",
    },
    {
        icon: Sparkles,
        title: "Spa & Wellness",
        description: "Rejuvenating treatments",
    },
    {
        icon: Utensils,
        title: "Room Service",
        description: "24-hour availability",
    },
];

export function Amenities() {
    return (
        <section id="amenities" className="py-24 bg-[#2d4a3e] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 text-9xl opacity-5">🌿</div>
            <div className="absolute bottom-20 right-10 text-9xl opacity-5">🌿</div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="font-script text-2xl md:text-3xl text-[#c9a961] mb-4">
                        Facilities
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#e8e6e3] mb-6">
                        World-Class Amenities
                    </h2>
                    <div className="elegant-divider"></div>
                    <p className="text-lg text-[#e8e6e3] max-w-2xl mx-auto mt-6 leading-relaxed opacity-90">
                        Every detail designed for your comfort and pleasure
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {amenities.map((amenity, index) => {
                        const Icon = amenity.icon;
                        return (
                            <div
                                key={index}
                                className="text-center p-6 transition-all duration-300 hover:transform hover:-translate-y-2"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-[#c9a961] rounded-full mb-4 transition-all duration-300 group-hover:bg-[#c9a961]">
                                    <Icon className="w-10 h-10 text-[#c9a961]" />
                                </div>
                                <h3 className="text-xl font-display text-[#e8e6e3] mb-2">
                                    {amenity.title}
                                </h3>
                                <p className="text-[#e8e6e3] text-sm opacity-80">{amenity.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
