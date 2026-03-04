"use client";

import { useState } from "react";

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: "cod" | "upi" | "card" | "razorpay";
  upiId?: string;
  guestCheckout: boolean;
}

export default function FastCheckout() {
  const [formData, setFormData] = useState<CheckoutForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
    guestCheckout: true,
  });

  const cartItems = [
    {
      id: "1",
      name: "Executive Pro Backpack",
      price: 189,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Fast & Secure Checkout
          </h2>
          <p className="text-foreground/70">Complete your purchase in minutes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guest Checkout Toggle */}
              <div className="bg-card border border-border rounded-xl p-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.guestCheckout}
                    onChange={(e) => setFormData({ ...formData, guestCheckout: e.target.checked })}
                    className="w-5 h-5 text-accent rounded focus:ring-accent"
                  />
                  <span className="font-semibold">Continue as Guest</span>
                </label>
              </div>

              {/* Contact Information */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 border-2 border-border rounded-lg bg-background focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 border-2 border-border rounded-lg bg-background focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 border-2 border-border rounded-lg bg-background focus:border-accent focus:outline-none transition-colors md:col-span-2"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                  Shipping Address
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Street Address *"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg bg-background focus:border-accent focus:outline-none transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City *"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="px-4 py-3 border-2 border-border rounded-lg bg-background focus:border-accent focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="State *"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="px-4 py-3 border-2 border-border rounded-lg bg-background focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="PIN Code *"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg bg-background focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">3</span>
                  Payment Method
                </h3>
                <div className="space-y-3">
                  {[
                    { id: "cod", label: "Cash on Delivery", icon: "💵", recommended: true },
                    { id: "upi", label: "UPI Payment", icon: "📱" },
                    { id: "razorpay", label: "Card / Razorpay", icon: "💳" },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.paymentMethod === method.id
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                          className="w-5 h-5 text-accent"
                        />
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-semibold">{method.label}</span>
                      </div>
                      {method.recommended && (
                        <span className="px-2 py-1 bg-accent text-white text-xs font-bold rounded-full">
                          Popular
                        </span>
                      )}
                    </label>
                  ))}

                  {formData.paymentMethod === "upi" && (
                    <input
                      type="text"
                      placeholder="Enter UPI ID (e.g., username@upi)"
                      value={formData.upiId}
                      onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-border rounded-lg bg-background focus:border-accent focus:outline-none transition-colors"
                    />
                  )}
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-accent transition-all hover:scale-105 shadow-lg"
              >
                Place Order - ₹{total.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                      <p className="text-sm text-foreground/60">Qty: {item.quantity}</p>
                      <p className="font-bold text-primary">₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Tax (GST 18%)</span>
                  <span className="font-semibold">₹{tax.toFixed(2)}</span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">₹{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                {[
                  { icon: "🔒", text: "Secure Payment" },
                  { icon: "📦", text: "Free Shipping" },
                  { icon: "↩️", text: "30-Day Returns" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}