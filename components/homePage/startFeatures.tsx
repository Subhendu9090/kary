"use client";

import { useState, useEffect, useRef } from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: { top: string; left: string };
  details: string[];
  animation: string;
}

const features: Feature[] = [
  {
    id: "laptop",
    title: "Laptop Compartment",
    description: "Padded protection for devices up to 17 inches",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    position: { top: "25%", left: "20%" },
    details: [
      "Triple-layer foam padding",
      "Shock-resistant material",
      "Fits 15-17 inch laptops",
      "Velcro security strap",
    ],
    animation: "padding",
  },
  {
    id: "usb",
    title: "USB Charging Port",
    description: "Built-in power bank pocket with external USB",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    position: { top: "40%", left: "75%" },
    details: [
      "Quick charge compatible",
      "Cable routing system",
      "Compatible with all power banks",
      "Weather-resistant port cover",
    ],
    animation: "charging",
  },
  {
    id: "pocket",
    title: "Hidden Anti-Theft Pocket",
    description: "Secret compartment for valuables",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    position: { top: "65%", left: "50%" },
    details: [
      "Back panel access only",
      "RFID blocking material",
      "Holds passport, cards, cash",
      "Slash-proof fabric",
    ],
    animation: "reveal",
  },
  {
    id: "water",
    title: "Water Resistant",
    description: "Premium water-repellent coating",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    position: { top: "50%", left: "30%" },
    details: [
      "YKK water-resistant zippers",
      "Sealed seam construction",
      "Rain cover included",
      "Quick-dry fabric technology",
    ],
    animation: "waterproof",
  },
];

export default function SmartFeatures() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = (animation: string) => {
    switch (animation) {
      case "padding":
        return "animate-padding";
      case "charging":
        return "animate-charging";
      case "reveal":
        return "animate-reveal";
      case "waterproof":
        return "animate-waterproof";
      default:
        return "";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Smart Features
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Innovation in Every Detail
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Click on the hotspots below to explore the intelligent features that
            make our bags stand out
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Bag Visualization */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {/* Main Bag Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop"
                  alt="Smart Bag Features"
                  className={`w-full h-full object-contain drop-shadow-2xl transition-all duration-500 ${
                    activeFeature
                      ? "opacity-90 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                />

                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 rounded-full blur-3xl opacity-50" />
              </div>

              {/* Interactive Hotspots */}
              {features.map((feature, idx) => (
                <button
                  key={feature.id}
                  onClick={() =>
                    setActiveFeature(
                      activeFeature === feature.id ? null : feature.id,
                    )
                  }
                  className={`absolute w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group ${
                    isInView ? "animate-popIn" : "opacity-0"
                  } ${
                    activeFeature === feature.id
                      ? "bg-accent   scale-110 shadow-2xl"
                      : "bg-card border-2 border-accent/50 hover:scale-110 hover:bg-accent hover:text-whit"
                  }`}
                  style={{
                    top: feature.position.top,
                    left: feature.position.left,
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  {/* Pulse Ring */}
                  <span
                    className={`absolute inset-0 rounded-full border-2 border-accent animate-ping ${
                      activeFeature === feature.id ? "opacity-75" : "opacity-0"
                    }`}
                  />

                  {/* Icon */}
                  <span className="relative z-10">{feature.icon}</span>

                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-3 py-1 rounded-lg text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border">
                    {feature.title}
                  </span>

                  {/* Connection Line */}
                  {activeFeature === feature.id && (
                    <div className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-accent to-transparent animate-drawLine" />
                  )}
                </button>
              ))}
            </div>

            {/* Instruction */}
            <div className="text-center mt-8">
              <p className="text-sm text-foreground/60 font-medium flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-accent animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
                Click the hotspots to explore features
              </p>
            </div>
          </div>

          {/* Feature Details Panel */}
          <div className="relative">
            {activeFeature ? (
              <div
                className={`bg-card border border-border rounded-2xl p-8 shadow-2xl ${
                  features.find((f) => f.id === activeFeature)
                    ? getAnimationClass(
                        features.find((f) => f.id === activeFeature)!.animation,
                      )
                    : ""
                }`}
              >
                {features
                  .filter((f) => f.id === activeFeature)
                  .map((feature) => (
                    <div key={feature.id} className="space-y-6">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-foreground/70">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Technical Details */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60">
                          Technical Details
                        </h4>
                        <ul className="space-y-3">
                          {feature.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 animate-slideInRight"
                              style={{ animationDelay: `${idx * 50}ms` }}
                            >
                              <svg
                                className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-foreground/80">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Visual Demo */}
                      <div className="relative h-40 bg-muted rounded-xl overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {feature.animation === "padding" && (
                            <div className="relative w-24 h-24">
                              <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse-padding" />
                              <div
                                className="absolute inset-2 bg-primary/40 rounded-lg animate-pulse-padding"
                                style={{ animationDelay: "0.2s" }}
                              />
                              <div
                                className="absolute inset-4 bg-primary/60 rounded-lg animate-pulse-padding"
                                style={{ animationDelay: "0.4s" }}
                              />
                            </div>
                          )}

                          {feature.animation === "charging" && (
                            <div className="relative w-32 h-32">
                              <svg
                                className="w-full h-full text-accent"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  className="animate-dash"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                  strokeDasharray="100"
                                  strokeDashoffset="100"
                                />
                              </svg>
                            </div>
                          )}

                          {feature.animation === "reveal" && (
                            <div className="relative w-32 h-32">
                              <div className="absolute inset-0 bg-card border-2 border-accent rounded-lg overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-accent/40 animate-reveal-slide" />
                              </div>
                            </div>
                          )}

                          {feature.animation === "waterproof" && (
                            <div className="relative w-32 h-32">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-3 h-3 bg-accent rounded-full opacity-70 animate-rainDrop"
                                  style={{
                                    left: `${20 + i * 20}%`,
                                    animationDelay: `${i * 0.3}s`,
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <button className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-accent transition-colors">
                        Learn More About This Feature
                      </button>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-12 shadow-xl text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-foreground/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Select a Feature</h3>
                <p className="text-foreground/60">
                  Click on any hotspot on the bag to explore its innovative
                  features and technical details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-padding {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes reveal-slide {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes rainDrop {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes drawLine {
          from {
            width: 0;
          }
          to {
            width: 2rem;
          }
        }

        .animate-pulse-padding {
          animation: pulse-padding 2s ease-in-out infinite;
        }

        .animate-padding {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-charging {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-reveal {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-waterproof {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-dash {
          animation: dash 2s ease-in-out infinite;
        }

        .animate-reveal-slide {
          animation: reveal-slide 3s ease-in-out infinite;
        }

        .animate-rainDrop {
          animation: rainDrop 2s linear infinite;
        }

        .animate-drawLine {
          animation: drawLine 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
