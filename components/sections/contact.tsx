"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "2",
        roomType: "deluxe",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Inquiry sent successfully! We'll contact you soon.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    checkIn: "",
                    checkOut: "",
                    guests: "2",
                    roomType: "deluxe",
                    message: "",
                });
            } else {
                toast.error(data.error || "Failed to send inquiry. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
            console.error("Contact form error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#f8f6f3]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="font-script text-2xl md:text-3xl text-[#c9a961] mb-4">
                        Get in Touch
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
                        Plan Your Escape
                    </h2>
                    <div className="elegant-divider" style={{ background: "linear-gradient(to right, transparent, #c9a961, transparent)" }}></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-6 leading-relaxed">
                        Begin your journey to paradise. Our team is ready to create your perfect retreat.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <Phone className="w-8 h-8 text-[#c9a961] mx-auto mb-4" />
                            <p className="font-display text-lg text-[#1a1a1a] mb-2">Phone</p>
                            <p className="text-gray-600">+91 1234567890</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <Mail className="w-8 h-8 text-[#c9a961] mx-auto mb-4" />
                            <p className="font-display text-lg text-[#1a1a1a] mb-2">Email</p>
                            <p className="text-gray-600">info@lalalandresort.com</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <MapPin className="w-8 h-8 text-[#c9a961] mx-auto mb-4" />
                            <p className="font-display text-lg text-[#1a1a1a] mb-2">Location</p>
                            <p className="text-gray-600">Beach Road, Goa</p>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-[#1a1a1a] uppercase text-xs tracking-wider">Full Name *</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="luxury-input border-b border-[#c9a961]/30 focus:border-[#c9a961] rounded-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-[#1a1a1a] uppercase text-xs tracking-wider">Email *</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="luxury-input border-b border-[#c9a961]/30 focus:border-[#c9a961] rounded-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-[#1a1a1a] uppercase text-xs tracking-wider">Phone Number *</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+91 1234567890"
                                    className="luxury-input border-b border-[#c9a961]/30 focus:border-[#c9a961] rounded-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="checkIn" className="text-[#1a1a1a] uppercase text-xs tracking-wider">Check-in Date</Label>
                                    <Input
                                        id="checkIn"
                                        name="checkIn"
                                        type="date"
                                        value={formData.checkIn}
                                        onChange={handleChange}
                                        className="luxury-input border-b border-[#c9a961]/30 focus:border-[#c9a961] rounded-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="checkOut" className="text-[#1a1a1a] uppercase text-xs tracking-wider">Check-out Date</Label>
                                    <Input
                                        id="checkOut"
                                        name="checkOut"
                                        type="date"
                                        value={formData.checkOut}
                                        onChange={handleChange}
                                        className="luxury-input border-b border-[#c9a961]/30 focus:border-[#c9a961] rounded-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="guests" className="text-[#1a1a1a] uppercase text-xs tracking-wider">Number of Guests</Label>
                                    <select
                                        id="guests"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="flex h-12 w-full border-b border-[#c9a961]/30 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-[#c9a961] transition-colors"
                                    >
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Guests</option>
                                        <option value="3">3 Guests</option>
                                        <option value="4">4 Guests</option>
                                        <option value="5+">5+ Guests</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="roomType" className="text-[#1a1a1a] uppercase text-xs tracking-wider">Villa Type</Label>
                                    <select
                                        id="roomType"
                                        name="roomType"
                                        value={formData.roomType}
                                        onChange={handleChange}
                                        className="flex h-12 w-full border-b border-[#c9a961]/30 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-[#c9a961] transition-colors"
                                    >
                                        <option value="deluxe">Deluxe Ocean Villa</option>
                                        <option value="family">Family Garden Suite</option>
                                        <option value="villa">Premium Beach Villa</option>
                                        <option value="cottage">Tropical Cottage</option>
                                        <option value="bungalow">Beachfront Bungalow</option>
                                        <option value="honeymoon">Honeymoon Sanctuary</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-[#1a1a1a] uppercase text-xs tracking-wider">Special Requests</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Share any special requirements or questions..."
                                    rows={4}
                                    className="luxury-input border-b border-[#c9a961]/30 focus:border-[#c9a961] rounded-none resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-luxury w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Inquiry"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
