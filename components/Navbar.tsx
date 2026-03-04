"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

// Category data structure
const megaMenuData = {
  women: {
    title: "Women's Bags",
    categories: [
      {
        name: "Handbags",
        items: ["Tote Bags", "Shoulder Bags", "Crossbody", "Hobo Bags", "Bucket Bags"]
      },
      {
        name: "Clutches & Evening",
        items: ["Envelope Clutches", "Wristlets", "Minaudières", "Box Clutches"]
      },
      {
        name: "Backpacks",
        items: ["Leather Backpacks", "Mini Backpacks", "Convertible", "Travel Backpacks"]
      },
      {
        name: "Seasonal Picks",
        items: ["New Arrivals", "Best Sellers", "Sale", "Limited Edition"]
      }
    ],
    featured: {
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop",
      title: "Spring Collection 2024",
      subtitle: "Vibrant colors meet timeless design"
    }
  },
  men: {
    title: "Men's Bags",
    categories: [
      {
        name: "Business Bags",
        items: ["Briefcases", "Laptop Bags", "Messenger Bags", "Portfolio Cases"]
      },
      {
        name: "Casual & Travel",
        items: ["Backpacks", "Duffle Bags", "Weekend Bags", "Gym Bags"]
      },
      {
        name: "Accessories",
        items: ["Card Holders", "Wallets", "Belt Bags", "Tech Cases"]
      },
      {
        name: "Premium Line",
        items: ["Luxury Leather", "Designer Picks", "Vintage Collection"]
      }
    ],
    featured: {
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
      title: "Executive Series",
      subtitle: "Crafted for the modern professional"
    }
  },
  travel: {
    title: "Travel & Luggage",
    categories: [
      {
        name: "Carry-On",
        items: ["Cabin Luggage", "Travel Backpacks", "Weekenders", "Garment Bags"]
      },
      {
        name: "Check-In Luggage",
        items: ["Large Suitcases", "Trunk Cases", "Expandable Cases"]
      },
      {
        name: "Travel Accessories",
        items: ["Packing Cubes", "Toiletry Bags", "Laptop Sleeves", "Passport Holders"]
      },
      {
        name: "Sets & Bundles",
        items: ["2-Piece Sets", "3-Piece Sets", "Travel Kits", "Gift Sets"]
      }
    ],
    featured: {
      image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=500&fit=crop",
      title: "Wanderlust Collection",
      subtitle: "Adventure awaits with style"
    }
  }
};

interface MegaMenuProps {
  type: keyof typeof megaMenuData;
  isOpen: boolean;
  onClose: () => void;
}

function MegaMenu({ type, isOpen, onClose }: MegaMenuProps) {
  const data = megaMenuData[type];
  
  return (
    <div
      className={`absolute left-0 right-0 top-full w-full bg-card border-t border-border shadow-2xl overflow-hidden transition-all duration-500 ease-out ${
        isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
      }`}
      style={{ 
        transformOrigin: "top",
        backdropFilter: "blur(20px)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Categories Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {data.categories.map((category, idx) => (
              <div 
                key={category.name}
                className="animate-fadeInUp"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 pb-2 border-b border-border/50">
                  {category.name}
                </h3>
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`/shop?main=${type}&category=${category.name}&sub=${item}`}
                        className="text-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300 text-sm block"
                        onClick={onClose}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Section */}
          <div 
            className="lg:col-span-2 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative group overflow-hidden rounded-lg h-full min-h-75 bg-linear-to-br from-primary/5 to-accent/5">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${data.featured.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-accent text-background text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  Featured
                </span>
                <h3 className="text-2xl font-bold mb-2">{data.featured.title}</h3>
                <p className="text-white/90 text-sm mb-4">{data.featured.subtitle}</p>
                <Link
                  href={`/shop?main=${type}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"
                  onClick={onClose}
                >
                  Explore Collection
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MegaMenuNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState<keyof typeof megaMenuData | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: keyof typeof megaMenuData) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const closeMegaMenu = () => {
    setActiveMenu(null);
  };

  if (!mounted) return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
            : "bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/30 transition-all" />
                <svg className="w-10 h-10 text-primary relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  KARY
                </h1>
                <p className="text-[10px] text-foreground/60 uppercase tracking-widest -mt-1">Timeless Elegance</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-1">
                {(["women", "men", "travel"] as const).map((menu) => (
                  <div
                    key={menu}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(menu)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-accent transition-colors uppercase tracking-wide relative group">
                      {menu === "women" ? "Women" : menu === "men" ? "Men" : "Travel"}
                      <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent transform origin-left transition-transform duration-300 ${
                        activeMenu === menu ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} />
                    </button>
                  </div>
                ))}
                <Link href="/collections" className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-accent transition-colors uppercase tracking-wide relative group">
                  Collections
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
                <Link href="/about" className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-accent transition-colors uppercase tracking-wide relative group">
                  About
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-4">
                {/* Search */}
                <button className="p-2 hover:bg-muted rounded-lg transition-colors group">
                  <svg className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* Account */}
                <button className="p-2 hover:bg-muted rounded-lg transition-colors group">
                  <svg className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>

                {/* Cart */}
                <button className="p-2 hover:bg-muted rounded-lg transition-colors group relative">
                  <svg className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-background text-[10px] font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 hover:bg-muted rounded-lg transition-all hover:rotate-180 duration-500"
                >
                  {theme === "dark" ? (
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu for Desktop */}
        <div onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)} onMouseLeave={handleMouseLeave}>
          {activeMenu && <MegaMenu type={activeMenu} isOpen={true} onClose={closeMegaMenu} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-[calc(100vh-5rem)] overflow-y-scroll opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-6 bg-card border-t border-border">
            {/* Mobile Categories */}
            {Object.entries(megaMenuData).map(([key, data]) => (
              <div key={key} className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                  {data.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {data.categories.map((category) => (
                    <div key={category.name}>
                      <p className="text-xs font-semibold text-primary mb-2">{category.name}</p>
                      <ul className="space-y-1.5">
                        {category.items.slice(0, 3).map((item) => (
                          <li key={item}>
                            <Link
                              href={`/shop?main=${key}&category=${category.name}&sub=${item}`}
                              className="text-xs text-foreground/60 hover:text-accent transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-accent transition-colors"
              >
                {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
              </button>
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                  <svg className="w-5 h-5 text-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-background text-[10px] font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20" />

      {/* Add required animations to global CSS */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
      `}</style>
    </>
  );
}