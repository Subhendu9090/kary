"use client";

import { useState } from "react";

interface Bag {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  capacity: string;
  weight: string;
  material: string;
  waterproof: boolean;
  laptopSize: string;
  warranty: string;
  features: string[];
}

const availableBags: Bag[] = [
  {
    id: "1",
    name: "Executive Pro",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    price: 189,
    rating: 4.9,
    capacity: "25L",
    weight: "1.2 kg",
    material: "Premium Leather",
    waterproof: true,
    laptopSize: "17 inch",
    warranty: "Lifetime",
    features: ["USB Charging", "RFID Protection", "TSA Approved", "Anti-Theft"]
  },
  {
    id: "2",
    name: "Campus Buddy",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop",
    price: 89,
    rating: 4.6,
    capacity: "20L",
    weight: "0.8 kg",
    material: "Canvas",
    waterproof: false,
    laptopSize: "15 inch",
    warranty: "2 Years",
    features: ["Multiple Pockets", "Padded Straps", "Water Bottle Holder"]
  },
  {
    id: "3",
    name: "Wanderlust 40",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop",
    price: 149,
    rating: 4.8,
    capacity: "40L",
    weight: "1.5 kg",
    material: "Nylon Ripstop",
    waterproof: true,
    laptopSize: "15 inch",
    warranty: "3 Years",
    features: ["Expandable", "Rain Cover", "Compression Straps", "Lockable"]
  },
  {
    id: "4",
    name: "Business Elite",
    image: "https://images.unsplash.com/photo-1548611635-b6e7827d7d32?w=400&h=400&fit=crop",
    price: 219,
    rating: 5.0,
    capacity: "18L",
    weight: "1.0 kg",
    material: "Italian Leather",
    waterproof: true,
    laptopSize: "16 inch",
    warranty: "Lifetime",
    features: ["Premium Hardware", "Document Organizer", "RFID", "Quick Access"]
  }
];

export default function BagComparison() {
  const [selectedBags, setSelectedBags] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleBagSelection = (bagId: string) => {
    if (selectedBags.includes(bagId)) {
      setSelectedBags(selectedBags.filter((id) => id !== bagId));
    } else if (selectedBags.length < 3) {
      setSelectedBags([...selectedBags, bagId]);
    }
  };

  const selectedBagData = availableBags.filter((bag) =>
    selectedBags.includes(bag.id)
  );

  const getBestValue = (attribute: keyof Bag, type: "min" | "max" | "bool") => {
    if (selectedBagData.length === 0) return null;

    if (type === "min") {
      return Math.min(...selectedBagData.map((bag) => typeof bag[attribute] === "number" ? bag[attribute] as number : Infinity));
    } else if (type === "max") {
      return Math.max(...selectedBagData.map((bag) => typeof bag[attribute] === "number" ? bag[attribute] as number : -Infinity));
    }
    return null;
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(30deg, transparent 12%, var(--color-accent) 12%, var(--color-accent) 13%, transparent 13%),
                              linear-gradient(150deg, transparent 12%, var(--color-primary) 12%, var(--color-primary) 13%, transparent 13%)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Smart Comparison
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Compare & Choose Wisely
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Select up to 3 bags to compare specifications, features, and pricing side-by-side
          </p>
        </div>

        {/* Bag Selection Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">
              Select Bags to Compare
              <span className="ml-3 text-sm font-normal text-foreground/60">
                ({selectedBags.length}/3 selected)
              </span>
            </h3>
            {selectedBags.length >= 2 && (
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-accent transition-colors"
              >
                {showComparison ? "Hide" : "Show"} Comparison
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableBags.map((bag, idx) => (
              <button
                key={bag.id}
                onClick={() => toggleBagSelection(bag.id)}
                disabled={!selectedBags.includes(bag.id) && selectedBags.length >= 3}
                className={`relative group text-left transition-all duration-300 animate-fadeInUp ${
                  selectedBags.includes(bag.id)
                    ? "ring-4 ring-accent scale-105"
                    : selectedBags.length >= 3
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={bag.image}
                      alt={bag.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Selection Checkbox */}
                    <div
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        selectedBags.includes(bag.id)
                          ? "bg-accent scale-110"
                          : "bg-white/90 backdrop-blur-sm"
                      }`}
                    >
                      {selectedBags.includes(bag.id) ? (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-400 rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className="font-bold mb-1">{bag.name}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${
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
                      <span className="text-xs text-foreground/60">({bag.rating})</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">${bag.price}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {showComparison && selectedBags.length >= 2 && (
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl animate-slideUp">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left font-bold sticky left-0 bg-muted z-10">
                      Feature
                    </th>
                    {selectedBagData.map((bag) => (
                      <th key={bag.id} className="p-4 text-center min-w-[200px]">
                        <img
                          src={bag.image}
                          alt={bag.name}
                          className="w-20 h-20 object-cover rounded-lg mx-auto mb-2"
                        />
                        <p className="font-bold text-sm">{bag.name}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Price Row */}
                  <tr className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold sticky left-0 bg-card">💰 Price</td>
                    {selectedBagData.map((bag) => (
                      <td
                        key={bag.id}
                        className={`p-4 text-center ${
                          bag.price === getBestValue("price", "min")
                            ? "bg-accent/10 font-bold text-accent"
                            : ""
                        }`}
                      >
                        ${bag.price}
                        {bag.price === getBestValue("price", "min") && (
                          <div className="text-xs mt-1">Best Value</div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Rating */}
                  <tr className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold sticky left-0 bg-card">⭐ Rating</td>
                    {selectedBagData.map((bag) => (
                      <td
                        key={bag.id}
                        className={`p-4 text-center ${
                          bag.rating === getBestValue("rating", "max")
                            ? "bg-accent/10 font-bold text-accent"
                            : ""
                        }`}
                      >
                        {bag.rating}/5.0
                        {bag.rating === getBestValue("rating", "max") && (
                          <div className="text-xs mt-1">Highest Rated</div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Capacity */}
                  <tr className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold sticky left-0 bg-card">📦 Capacity</td>
                    {selectedBagData.map((bag) => (
                      <td key={bag.id} className="p-4 text-center">
                        {bag.capacity}
                      </td>
                    ))}
                  </tr>

                  {/* Weight */}
                  <tr className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold sticky left-0 bg-card">⚖️ Weight</td>
                    {selectedBagData.map((bag) => (
                      <td key={bag.id} className="p-4 text-center">
                        {bag.weight}
                      </td>
                    ))}
                  </tr>

                  {/* Material */}
                  <tr className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold sticky left-0 bg-card">🧵 Material</td>
                    {selectedBagData.map((bag) => (
                      <td key={bag.id} className="p-4 text-center">
                        {bag.material}
                      </td>
                    ))}
                  </tr>

                  {/* Waterproof */}
                  <tr className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold sticky left-0 bg-card">💧 Waterproof</td>
                    {selectedBagData.map((bag) => (
                      <td key={bag.id} className="p-4 text-center">
                        {bag.waterproof ? (
                          <span className="text-green-600 font-semibold">✓ Yes</span>
                        ) : (
                          <span className="text-foreground/40">✗ No</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Laptop Size */}
                  <tr className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold sticky left-0 bg-card">💻 Laptop Size</td>
                    {selectedBagData.map((bag) => (
                      <td key={bag.id} className="p-4 text-center">
                        {bag.laptopSize}
                      </td>
                    ))}
                  </tr>

                  {/* Warranty */}
                  <tr className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold sticky left-0 bg-card">🛡️ Warranty</td>
                    {selectedBagData.map((bag) => (
                      <td key={bag.id} className="p-4 text-center">
                        {bag.warranty}
                      </td>
                    ))}
                  </tr>

                  {/* Features */}
                  <tr className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold sticky left-0 bg-card">✨ Features</td>
                    {selectedBagData.map((bag) => (
                      <td key={bag.id} className="p-4">
                        <ul className="space-y-1 text-sm">
                          {bag.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <span className="text-accent">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Action Row */}
                  <tr className="border-t border-border bg-muted/50">
                    <td className="p-4 sticky left-0 bg-muted/50"></td>
                    {selectedBagData.map((bag) => (
                      <td key={bag.id} className="p-4 text-center">
                        <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors">
                          Add to Cart
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedBags.length < 2 && (
          <div className="text-center py-12 bg-card border border-border rounded-2xl">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Select at least 2 bags to compare</h3>
            <p className="text-foreground/60">
              Choose bags from the grid above to see a detailed comparison
            </p>
          </div>
        )}
      </div>
    </section>
  );
}