"use client";

import { useState } from "react";

interface CustomizationOptions {
  color: string;
  engraving: string;
  strapType: string;
  accessories: string[];
}

const colorOptions = [
  {
    id: "black",
    name: "Midnight Black",
    hex: "#1a1a1a",
    filter: "grayscale(100%) brightness(0.3)",
  },
  {
    id: "brown",
    name: "Cognac Brown",
    hex: "#8B4513",
    filter: "sepia(100%) saturate(150%) hue-rotate(-10deg)",
  },
  {
    id: "navy",
    name: "Navy Blue",
    hex: "#1e3a8a",
    filter: "sepia(100%) saturate(200%) hue-rotate(180deg) brightness(0.7)",
  },
  { id: "gray", name: "Storm Gray", hex: "#6b7280", filter: "grayscale(100%)" },
  {
    id: "tan",
    name: "Desert Tan",
    hex: "#d4a574",
    filter: "sepia(80%) saturate(80%)",
  },
  {
    id: "green",
    name: "Forest Green",
    hex: "#065f46",
    filter: "sepia(100%) saturate(300%) hue-rotate(70deg) brightness(0.7)",
  },
];

const strapTypes = [
  { id: "leather", name: "Premium Leather", price: 0, icon: "🎀" },
  { id: "canvas", name: "Canvas Strap", price: 15, icon: "🧵" },
  { id: "chain", name: "Metal Chain", price: 25, icon: "⛓️" },
  { id: "adjustable", name: "Adjustable Padded", price: 20, icon: "📏" },
];

const accessories = [
  { id: "keychain", name: "Leather Keychain", price: 12, icon: "🔑" },
  { id: "pouch", name: "Inner Pouch", price: 18, icon: "👛" },
  { id: "raincover", name: "Rain Cover", price: 15, icon: "☂️" },
  { id: "lock", name: "TSA Lock", price: 10, icon: "🔒" },
];

export default function BagCustomizer() {
  const [customization, setCustomization] = useState<CustomizationOptions>({
    color: "brown",
    engraving: "",
    strapType: "leather",
    accessories: [],
  });

  const [showEngravingInput, setShowEngravingInput] = useState(false);
  const basePrice = 149;

  const calculateTotal = () => {
    let total = basePrice;

    // Add strap type price
    const strap = strapTypes.find((s) => s.id === customization.strapType);
    if (strap) total += strap.price;

    // Add accessories price
    customization.accessories.forEach((accId) => {
      const acc = accessories.find((a) => a.id === accId);
      if (acc) total += acc.price;
    });

    // Add engraving price
    if (customization.engraving.trim()) total += 20;

    return total;
  };

  const toggleAccessory = (accessoryId: string) => {
    setCustomization((prev) => ({
      ...prev,
      accessories: prev.accessories.includes(accessoryId)
        ? prev.accessories.filter((id) => id !== accessoryId)
        : [...prev.accessories, accessoryId],
    }));
  };

  const selectedColor = colorOptions.find((c) => c.id === customization.color);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--color-accent) 0, var(--color-accent) 1px, transparent 0, transparent 50%)`,
            backgroundSize: "10px 10px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Make It Yours
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Design Your Perfect Bag
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Customize every detail to create a bag that's uniquely yours. Live
            preview updates in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Live Preview */}
          <div className="sticky top-24">
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
              {/* Preview Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Live Preview</h3>
                <p className="text-sm text-foreground/60">
                  See your customizations in real-time
                </p>
              </div>

              {/* Bag Preview */}
              <div className="relative aspect-square bg-muted rounded-xl overflow-hidden mb-6">
                {/* Main Bag Image with Color Filter */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop"
                    alt="Customizable Bag"
                    className="w-4/5 h-4/5 object-contain drop-shadow-2xl transition-all duration-500"
                    style={{
                      filter: selectedColor?.filter,
                    }}
                  />

                  {/* Engraving Display */}
                  {customization.engraving && (
                    <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 animate-fadeIn">
                      <div className="px-4 py-2 bg-black/80 backdrop-blur-sm rounded-lg">
                        <p
                          className="text-white font-serif text-sm tracking-wider"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {customization.engraving}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Accessories Badges */}
                  <div className="absolute top-4 right-4 space-y-2">
                    {customization.accessories.map((accId, idx) => {
                      const acc = accessories.find((a) => a.id === accId);
                      return (
                        <div
                          key={accId}
                          className="px-3 py-1 bg-accent text-white rounded-full text-xs font-semibold shadow-lg animate-slideInRight"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          {acc?.icon} {acc?.name}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Color Indicator */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <div
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: selectedColor?.hex }}
                    />
                    <span className="text-sm font-semibold text-gray-800">
                      {selectedColor?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="space-y-3 p-6 bg-muted rounded-xl">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Base Price</span>
                  <span className="font-semibold">${basePrice}</span>
                </div>
                {strapTypes.find((s) => s.id === customization.strapType)
                  ?.price! > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">
                      {
                        strapTypes.find((s) => s.id === customization.strapType)
                          ?.name
                      }
                    </span>
                    <span className="font-semibold">
                      +$
                      {
                        strapTypes.find((s) => s.id === customization.strapType)
                          ?.price
                      }
                    </span>
                  </div>
                )}
                {customization.engraving.trim() && (
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">Custom Engraving</span>
                    <span className="font-semibold">+$20</span>
                  </div>
                )}
                {customization.accessories.map((accId) => {
                  const acc = accessories.find((a) => a.id === accId);
                  return (
                    <div key={accId} className="flex justify-between text-sm">
                      <span className="text-foreground/70">{acc?.name}</span>
                      <span className="font-semibold">+${acc?.price}</span>
                    </div>
                  );
                })}
                <div className="pt-3 border-t border-border flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-3xl font-bold text-primary">
                    ${calculateTotal()}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full mt-6 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-accent transition-all hover:scale-105 shadow-lg">
                Add to Cart - ${calculateTotal()}
              </button>
            </div>
          </div>

          {/* Customization Options */}
          <div className="space-y-6">
            {/* Color Selection */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg animate-fadeInUp">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Choose Color
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    onClick={() =>
                      setCustomization((prev) => ({ ...prev, color: color.id }))
                    }
                    className={`group relative p-4 rounded-xl border-2 transition-all ${
                      customization.color === color.id
                        ? "border-accent bg-accent/5 scale-105"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div
                      className="w-full aspect-square rounded-lg mb-2 shadow-md group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="text-xs font-semibold text-center">
                      {color.name}
                    </p>
                    {customization.color === color.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Engraving */}
            <div
              className="bg-card border border-border rounded-2xl p-6 shadow-lg animate-fadeInUp"
              style={{ animationDelay: "100ms" }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">✍️</span>
                Add Personal Engraving
                <span className="ml-auto text-sm font-normal text-foreground/60">
                  +$20
                </span>
              </h3>

              {!showEngravingInput ? (
                <button
                  onClick={() => setShowEngravingInput(true)}
                  className="w-full py-3 border-2 border-dashed border-border rounded-xl font-semibold text-foreground/70 hover:border-accent hover:text-accent transition-all"
                >
                  + Add Custom Engraving
                </button>
              ) : (
                <div className="space-y-3">
                  <input
                    type="text"
                    maxLength={20}
                    value={customization.engraving}
                    onChange={(e) =>
                      setCustomization((prev) => ({
                        ...prev,
                        engraving: e.target.value,
                      }))
                    }
                    placeholder="Enter your text (max 20 characters)"
                    className="w-full px-4 py-3 border-2 border-border rounded-xl bg-background focus:border-accent focus:outline-none transition-colors"
                  />
                  <p className="text-xs text-foreground/60">
                    {customization.engraving.length}/20 characters
                  </p>
                </div>
              )}
            </div>

            {/* Strap Type */}
            <div
              className="bg-card border border-border rounded-2xl p-6 shadow-lg animate-fadeInUp"
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎀</span>
                Select Strap Type
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {strapTypes.map((strap) => (
                  <button
                    key={strap.id}
                    onClick={() =>
                      setCustomization((prev) => ({
                        ...prev,
                        strapType: strap.id,
                      }))
                    }
                    className={`px-4 py-2 rounded-xl border-2 transition-all text-left ${
                      customization.strapType === strap.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="text-3xl mb-2">{strap.icon}</div>
                    <p className="font-semibold text-sm mb-1">{strap.name}</p>
                    <p className="text-xs text-foreground/60">
                      {strap.price === 0 ? "Included" : `+$${strap.price}`}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories */}
            <div
              className="bg-card border border-border rounded-2xl p-6 shadow-lg animate-fadeInUp"
              style={{ animationDelay: "300ms" }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                Add Accessories
              </h3>
              <div className="space-y-2">
                {accessories.map((accessory) => (
                  <button
                    key={accessory.id}
                    onClick={() => toggleAccessory(accessory.id)}
                    className={`w-full px-4 py-2 rounded-xl border-2 transition-all flex items-center justify-between ${
                      customization.accessories.includes(accessory.id)
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{accessory.icon}</span>
                      <div className="text-left">
                        <p className="font-semibold">{accessory.name}</p>
                        <p className="text-xs text-foreground/60">
                          +${accessory.price}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        customization.accessories.includes(accessory.id)
                          ? "border-accent bg-accent"
                          : "border-border"
                      }`}
                    >
                      {customization.accessories.includes(accessory.id) && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
