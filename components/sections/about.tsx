"use client";

export function About() {
    return (
        <section id="about" className="py-24 bg-[#2d4a3e] relative overflow-hidden">
            {/* Decorative Leaf */}
            <div className="absolute top-10 right-10 text-9xl opacity-10">🌿</div>
            <div className="absolute bottom-10 left-10 text-9xl opacity-10">🌿</div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-script text-2xl md:text-3xl text-[#c9a961] mb-4">
                        Our Story
                    </p>

                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#e8e6e3] mb-6">
                        A Sanctuary of Serenity
                    </h2>

                    <div className="elegant-divider"></div>

                    <p className="text-lg text-[#e8e6e3] leading-relaxed mb-8 opacity-90">
                        Nestled along the pristine beaches of Goa, La La Land Resort is where luxury meets nature.
                        Our boutique property offers an intimate escape designed with meticulous attention to detail,
                        blending eco-friendly architecture with modern comfort. Each space is thoughtfully curated
                        to provide a seamless experience that honors both tradition and contemporary elegance.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                        <div className="text-center">
                            <p className="font-display text-4xl md:text-5xl text-[#c9a961] mb-2">50+</p>
                            <p className="text-sm text-[#e8e6e3] uppercase tracking-wider opacity-80">Guests</p>
                        </div>
                        <div className="text-center">
                            <p className="font-display text-4xl md:text-5xl text-[#c9a961] mb-2">12</p>
                            <p className="text-sm text-[#e8e6e3] uppercase tracking-wider opacity-80">Villas</p>
                        </div>
                        <div className="text-center">
                            <p className="font-display text-4xl md:text-5xl text-[#c9a961] mb-2">5★</p>
                            <p className="text-sm text-[#e8e6e3] uppercase tracking-wider opacity-80">Luxury</p>
                        </div>
                        <div className="text-center">
                            <p className="font-display text-4xl md:text-5xl text-[#c9a961] mb-2">24/7</p>
                            <p className="text-sm text-[#e8e6e3] uppercase tracking-wider opacity-80">Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
