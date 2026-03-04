"use client";

import { useState } from "react";

interface BagRecommendation {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  features: string[];
  capacity: string;
}

const lifestyleModes = {
  college: {
    title: "College Mode",
    icon: "🎓",
    color: "from-blue-500 to-purple-600",
    description: "Perfect for students on the go",
    bags: [
      {
        id: "c1",
        name: "Campus Pro",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        price: 89,
        rating: 4.8,
        features: ["Laptop sleeve", "Book compartment", "USB charging"],
        capacity: "25L"
      },
      {
        id: "c2",
        name: "Study Buddy",
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop",
        price: 69,
        rating: 4.6,
        features: ["Multiple pockets", "Water bottle holder", "Padded straps"],
        capacity: "20L"
      },
      {
        id: "c3",
        name: "Scholar Elite",
        image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop",
        price: 119,
        rating: 4.9,
        features: ["Premium leather", "Tablet pocket", "Anti-theft"],
        capacity: "30L"
      }
    ]
  },
  office: {
    title: "Office Mode",
    icon: "💼",
    color: "from-gray-700 to-gray-900",
    description: "Professional style for work",
    bags: [
      {
        id: "o1",
        name: "Executive Brief",
        image: "https://images.unsplash.com/photo-1548611635-b6e7827d7d32?w=400&h=400&fit=crop",
        price: 159,
        rating: 4.9,
        features: ["Premium leather", "Laptop compartment", "Document organizer"],
        capacity: "15L"
      },
      {
        id: "o2",
        name: "Business Pro",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
        price: 139,
        rating: 4.7,
        features: ["TSA friendly", "Quick access pocket", "RFID blocking"],
        capacity: "18L"
      },
      {
        id: "o3",
        name: "Corporate Elite",
        image: "https://images.unsplash.com/photo-1622560481234-1e8f7e6dfa79?w=400&h=400&fit=crop",
        price: 199,
        rating: 5.0,
        features: ["Italian leather", "Gold hardware", "Lifetime warranty"],
        capacity: "20L"
      }
    ]
  },
  travel: {
    title: "Travel Mode",
    icon: "✈️",
    color: "from-orange-500 to-red-600",
    description: "Adventure-ready companions",
    bags: [
      {
        id: "t1",
        name: "Wanderlust 40",
        image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop",
        price: 129,
        rating: 4.8,
        features: ["Expandable", "Rain cover", "Compression straps"],
        capacity: "40L"
      },
      {
        id: "t2",
        name: "Globe Trotter",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        price: 149,
        rating: 4.9,
        features: ["Carry-on size", "Multiple compartments", "Lockable zippers"],
        capacity: "35L"
      },
      {
        id: "t3",
        name: "Explorer Max",
        image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&h=400&fit=crop",
        price: 179,
        rating: 5.0,
        features: ["Durable fabric", "Laptop sleeve", "Hydration compatible"],
        capacity: "50L"
      }
    ]
  }
};

export default function LifestyleSelector() {
  const [selectedMode, setSelectedMode] = useState<keyof typeof lifestyleModes | null>(null);
  const [hoveredBag, setHoveredBag] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-background to-muted/50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Personalized Selection
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Choose Your Lifestyle
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Select your daily routine and we'll recommend the perfect bags designed for your needs
          </p>
        </div>

        {/* Lifestyle Mode Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {(Object.keys(lifestyleModes) as Array<keyof typeof lifestyleModes>).map((mode, idx) => {
            const modeData = lifestyleModes[mode];
            return (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 overflow-hidden animate-fadeInUp ${
                  selectedMode === mode
                    ? "border-accent bg-accent/5 scale-105 shadow-2xl"
                    : "border-border hover:border-accent/50 hover:scale-102"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${modeData.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                    {modeData.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{modeData.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4">
                    {modeData.description}
                  </p>

                  {/* Selection Indicator */}
                  {selectedMode === mode && (
                    <div className="flex items-center justify-center gap-2 text-accent font-semibold animate-fadeIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Selected
                    </div>
                  )}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </button>
            );
          })}
        </div>

        {/* Recommended Bags */}
        {selectedMode && (
          <div className="animate-slideUp">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  Recommended for {lifestyleModes[selectedMode].title}
                </h3>
                <p className="text-foreground/60">
                  Handpicked bags perfect for your lifestyle
                </p>
              </div>
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lifestyleModes[selectedMode].bags.map((bag, idx) => (
                <div
                  key={bag.id}
                  onMouseEnter={() => setHoveredBag(bag.id)}
                  onMouseLeave={() => setHoveredBag(null)}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={bag.image}
                      alt={bag.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Quick View Overlay */}
                    <div
                      className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredBag === bag.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors">
                        Quick View
                      </button>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                      {bag.capacity}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{bag.name}</h4>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(bag.rating)
                                ? "text-accent"
                                : "text-foreground/20"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-foreground/60">
                        ({bag.rating})
                      </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {bag.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground/70"
                        >
                          <svg
                            className="w-4 h-4 text-accent flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-2xl font-bold text-primary">
                          ${bag.price}
                        </span>
                      </div>
                      <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why These Bags Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20 rounded-2xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Why these bags are perfect for you
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedMode === "college" && (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground/70">Spacious compartments for books and laptops</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground/70">Comfortable padding for long campus walks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground/70">Modern designs that match student style</p>
                    </div>
                  </>
                )}
                {selectedMode === "office" && (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground/70">Professional appearance for business meetings</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground/70">Organized compartments for documents</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground/70">Durable materials built to last</p>
                    </div>
                  </>
                )}
                {selectedMode === "travel" && (
                  <>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground/70">Large capacity for extended trips</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground/70">Weather-resistant materials</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground/70">Security features for peace of mind</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedMode && (
          <div className="text-center py-16 animate-fadeInUp">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Select Your Lifestyle Mode</h3>
            <p className="text-foreground/60">
              Choose from the options above to see personalized bag recommendations
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}