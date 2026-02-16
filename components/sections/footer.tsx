"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-[#2d4a3e] text-[#e8e6e3] py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="font-display text-3xl md:text-4xl text-[#c9a961] mb-4">La La Land Resort</h3>
                        <p className="font-script text-xl text-[#c9a961] mb-4">Your Paradise in Goa</p>
                        <p className="text-[#e8e6e3] opacity-80 mb-6 leading-relaxed">
                            Experience luxury beachfront living where every detail is designed with nature in mind.
                            A sanctuary of serenity awaits.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://www.instagram.com/lalalandresortgoa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border-2 border-[#c9a961] flex items-center justify-center hover:bg-[#c9a961] hover:text-[#2d4a3e] transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 border-2 border-[#c9a961] flex items-center justify-center hover:bg-[#c9a961] hover:text-[#2d4a3e] transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-xl text-[#c9a961] mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {["Home", "About", "Rooms", "Amenities", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.toLowerCase());
                                        }}
                                        className="text-[#e8e6e3] opacity-80 hover:opacity-100 hover:text-[#c9a961] transition-all text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-display text-xl text-[#c9a961] mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-[#c9a961] mt-0.5 flex-shrink-0" />
                                <Link href="tel:+911234567890" className="text-[#e8e6e3] opacity-80 hover:opacity-100 hover:text-[#c9a961] transition-all text-sm">
                                    +91 1234567890
                                </Link>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#c9a961] mt-0.5 flex-shrink-0" />
                                <Link href="mailto:info@lalalandresort.com" className="text-[#e8e6e3] opacity-80 hover:opacity-100 hover:text-[#c9a961] transition-all text-sm">
                                    info@lalalandresort.com
                                </Link>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#c9a961] mt-0.5 flex-shrink-0" />
                                <span className="text-[#e8e6e3] opacity-80 text-sm">Beach Road, Goa, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#c9a961]/20 pt-8 text-center">
                    <p className="text-[#e8e6e3] opacity-70 text-sm">
                        &copy; {new Date().getFullYear()} La La Land Resort. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
