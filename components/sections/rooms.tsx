"use client";

import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const rooms = [
    {
        id: 1,
        name: "Deluxe Ocean Villa",
        description: "Immerse yourself in luxury with panoramic ocean views, king-size bed, and private balcony overlooking the Arabian Sea.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
        capacity: "2 Guests",
        amenities: ["King Bed", "Ocean View", "Private Balcony", "Mini Bar"],
        price: "₹5,999",
    },
    {
        id: 2,
        name: "Family Garden Suite",
        description: "Spacious sanctuary perfect for families, featuring two bedrooms, living area, and direct access to lush tropical gardens.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074",
        capacity: "4-5 Guests",
        amenities: ["2 Bedrooms", "Living Area", "Garden Access", "Kitchenette"],
        price: "₹9,999",
    },
    {
        id: 3,
        name: "Premium Beach Villa",
        description: "Ultimate luxury with private infinity pool, outdoor shower, and exclusive beachfront access for an unforgettable stay.",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074",
        capacity: "2-3 Guests",
        amenities: ["Private Pool", "Beach Access", "Outdoor Shower", "Butler Service"],
        price: "₹15,999",
    },
    {
        id: 4,
        name: "Tropical Cottage",
        description: "Cozy retreat surrounded by nature, featuring elegant interiors and a private patio perfect for morning meditation.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
        capacity: "2 Guests",
        amenities: ["Queen Bed", "Garden View", "Private Patio", "Hammock"],
        price: "₹4,499",
    },
    {
        id: 5,
        name: "Beachfront Bungalow",
        description: "Wake up to the sound of waves in this charming bungalow with direct beach access and stunning sunrise views.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
        capacity: "2-3 Guests",
        amenities: ["Beach Access", "Sea View", "Private Deck", "Outdoor Lounge"],
        price: "₹7,999",
    },
    {
        id: 6,
        name: "Honeymoon Sanctuary",
        description: "Romantic escape with jacuzzi, champagne on arrival, and breathtaking sunset views for an intimate celebration.",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070",
        capacity: "2 Guests",
        amenities: ["Jacuzzi", "Sunset View", "Romance Package", "Champagne"],
        price: "₹12,999",
    },
];

export function Rooms() {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="rooms" className="py-24 bg-[#f8f6f3]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="font-script text-2xl md:text-3xl text-[#c9a961] mb-4">
                        Accommodations
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
                        Luxury Villas & Suites
                    </h2>
                    <div className="elegant-divider" style={{ background: "linear-gradient(to right, transparent, #c9a961, transparent)" }}></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-6 leading-relaxed">
                        Each villa is a masterpiece of design, offering privacy, comfort, and breathtaking views
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {rooms.map((room, index) => (
                        <div
                            key={room.id}
                            className="luxury-card group"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 right-6 bg-[#2d4a3e] text-[#c9a961] px-4 py-2">
                                    <p className="text-sm font-medium">{room.price}<span className="text-xs opacity-80">/night</span></p>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-display text-2xl md:text-3xl text-[#1a1a1a]">
                                        {room.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Users className="w-4 h-4" />
                                        <span>{room.capacity}</span>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {room.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {room.amenities.map((amenity, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="outline"
                                            className="text-xs px-3 py-1 bg-[#f8f6f3] text-gray-700 border-[#c9a961]/20"
                                        >
                                            {amenity}
                                        </Badge>
                                    ))}
                                </div>

                                <Button
                                    onClick={scrollToContact}
                                    variant="outline"
                                    className="w-full border-2 border-[#2d4a3e] text-[#2d4a3e] hover:bg-[#2d4a3e] hover:text-[#e8e6e3] transition-all duration-300 uppercase text-sm tracking-wider font-medium rounded-none h-auto py-3"
                                >
                                    Reserve Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
