"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Top Section - Newsletter */}
      <div className="relative bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Join Our Community
              </h3>
              <p className="text-foreground/70 text-lg">
                Subscribe for exclusive offers, style tips, and new arrivals delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-border bg-background focus:border-accent focus:outline-none transition-colors"
              />
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-accent transition-all hover:scale-105 shadow-lg whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 group mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/30 transition-all" />
                  <svg className="w-12 h-12 text-primary relative" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-primary tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    LUXEBAG
                  </h1>
                  <p className="text-[10px] text-foreground/60 uppercase tracking-widest -mt-1">Timeless Elegance</p>
                </div>
              </Link>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Crafting premium bags since 2015. We believe in quality, sustainability, and timeless design that accompanies you through life's journeys.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { icon: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 3h11a3.5 3.5 0 013.5 3.5v11a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 17.5v-11A3.5 3.5 0 016.5 3z" },
                  { icon: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                  { icon: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z M9.75 15.02l0-6.04 5.75 3.02-5.75 3.02z" },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white transition-all hover:scale-110"
                    aria-label={social.icon}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Shop</h4>
              <ul className="space-y-3">
                {["Women's Bags", "Men's Bags", "Travel Luggage", "Accessories", "New Arrivals", "Best Sellers", "Sale"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-bold text-lg mb-4">Customer Service</h4>
              <ul className="space-y-3">
                {["Track Order", "Shipping Info", "Returns Policy", "Size Guide", "Care Instructions", "FAQs", "Contact Us"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {["About Us", "Our Story", "Sustainability", "Careers", "Press", "Blog", "Partners"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Visit Us</h5>
                  <p className="text-sm text-foreground/70">
                    123 Leather Lane<br />
                    Fashion District, Mumbai 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Call Us</h5>
                  <p className="text-sm text-foreground/70">
                    +91 1800 123 4567<br />
                    Mon-Sat: 9AM - 6PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Email Us</h5>
                  <p className="text-sm text-foreground/70">
                    support@luxebag.com<br />
                    We reply within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-12 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: "🔒", title: "Secure Payment", desc: "SSL Encrypted" },
                { icon: "📦", title: "Free Shipping", desc: "Orders Over ₹1500" },
                { icon: "↩️", title: "Easy Returns", desc: "30-Day Policy" },
                { icon: "🛡️", title: "Authentic", desc: "100% Genuine" },
              ].map((badge) => (
                <div key={badge.title} className="p-4 bg-muted rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <h5 className="font-semibold mb-1">{badge.title}</h5>
                  <p className="text-xs text-foreground/60">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-muted py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60 text-center md:text-left">
              © 2024 LUXEBAG. All rights reserved. Crafted with ❤️ in India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="#" className="text-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-accent transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-accent transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="relative bg-card py-4 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap">
          <span className="text-sm text-foreground/60">We Accept:</span>
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "UPI", "Razorpay", "COD"].map((method) => (
              <div
                key={method}
                className="px-3 py-1 bg-muted rounded border border-border text-xs font-semibold text-foreground/70"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}