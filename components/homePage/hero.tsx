import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function Hero3D() {
  return (
    <section className="relative min-h-screen flex pt-10 justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 itmes-start ">
        {/* Left Content */}
        <div className="space-y-6 sm:p-0 p-4 animate-slideInLeft">
          <div className="inline-block">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent uppercase tracking-wider">
              ✨ New Collection 2024
            </span>
          </div>

          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block text-foreground">Not Just A Bag.</span>
            <span className="block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              It's Your Daily Partner.
            </span>
          </h1>

          <p className="text-md md:text-lg text-foreground/70 max-w-xl leading-relaxed">
            Experience the perfect fusion of style, functionality, and
            craftsmanship. Every bag is engineered for modern life, designed to
            adapt to your journey.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3">
            {[
              "Water Resistant",
              "USB Charging",
              "Anti-Theft",
              "Lifetime Warranty",
            ].map((feature, idx) => (
              <div
                key={feature}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground/80 hover:border-accent hover:text-accent transition-all cursor-default animate-fadeInUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg overflow-hidden shadow-2xl hover:shadow-accent/50 transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Shop Now
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>

            <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm">
              Explore Features
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
            {[
              { value: "50k+", label: "Happy Customers" },
              { value: "4.9", label: "Average Rating" },
              { value: "100+", label: "Bag Designs" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="animate-fadeInUp"
                style={{ animationDelay: `${(idx + 4) * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - 3D Interactive Bag */}

        <div className="relative group flex items-center justify-center animate-slideInRight">
          <CardContainer className="inter-var py-0">
            <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6  ">
              
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop"
                  height="1000"
                  width="1000"
                  className="h-120 w-full object-fit rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center py-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  // target="__blank"
                  className="px-4  rounded-xl text-xs font-normal"
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <div className="hidden group-hover:block">
            <div
              className="absolute top-1/4 right-1/4 animate-popIn cursor-pointer group"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative group">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div className="absolute hidden group-hover:block -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-3 py-1 rounded-lg text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  USB Charging Port
                </div>
              </div>
            </div>

            <div
              className="absolute top-1/2 left-1/4 animate-popIn cursor-pointer group"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-3 py-1 rounded-lg text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  Laptop Compartment
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-1/3 right-1/3 animate-popIn cursor-pointer group"
              style={{ animationDelay: "300ms" }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-accent/80 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card px-3 py-1 rounded-lg text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  Hidden Pocket
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-foreground/5 rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-foreground/50 font-medium">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6 text-foreground/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
