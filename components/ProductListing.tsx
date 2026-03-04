"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

// Product interface
interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  mainCategory: "women" | "men" | "travel";
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  colors: string[];
  material: string;
  capacity?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  onSale?: boolean;
  inStock: boolean;
  tags: string[];
}

// Sample product data
const allProducts: Product[] = [
  // Women's Products
  {
    id: "w1",
    name: "Classic Leather Tote",
    category: "Handbags",
    subcategory: "Tote Bags",
    mainCategory: "women",
    price: 129,
    originalPrice: 179,
    rating: 4.8,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop",
    colors: ["Brown", "Black", "Tan"],
    material: "Premium Leather",
    capacity: "15L",
    onSale: true,
    inStock: true,
    tags: ["professional", "everyday"],
  },
  {
    id: "w2",
    name: "Crossbody Chain Bag",
    category: "Handbags",
    subcategory: "Crossbody",
    mainCategory: "women",
    price: 89,
    rating: 4.6,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
    colors: ["Black", "Red", "Navy"],
    material: "Vegan Leather",
    isNew: true,
    inStock: true,
    tags: ["casual", "evening"],
  },
  {
    id: "w3",
    name: "Evening Envelope Clutch",
    category: "Clutches & Evening",
    subcategory: "Envelope Clutches",
    mainCategory: "women",
    price: 69,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&h=500&fit=crop",
    colors: ["Gold", "Silver", "Black"],
    material: "Satin",
    isBestSeller: true,
    inStock: true,
    tags: ["party", "formal"],
  },
  {
    id: "w4",
    name: "Leather Backpack Pro",
    category: "Backpacks",
    subcategory: "Leather Backpacks",
    mainCategory: "women",
    price: 159,
    rating: 4.7,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&h=500&fit=crop",
    colors: ["Brown", "Black"],
    material: "Full Grain Leather",
    capacity: "20L",
    isBestSeller: true,
    inStock: true,
    tags: ["professional", "travel"],
  },
  {
    id: "w5",
    name: "Mini Convertible Backpack",
    category: "Backpacks",
    subcategory: "Mini Backpacks",
    mainCategory: "women",
    price: 79,
    rating: 4.5,
    reviews: 178,
    image:
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&h=500&fit=crop",
    colors: ["Pink", "Beige", "Black"],
    material: "Canvas",
    capacity: "8L",
    isNew: true,
    inStock: true,
    tags: ["casual", "compact"],
  },

  // Men's Products
  {
    id: "m1",
    name: "Executive Leather Briefcase",
    category: "Business Bags",
    subcategory: "Briefcases",
    mainCategory: "men",
    price: 199,
    originalPrice: 249,
    rating: 5.0,
    reviews: 421,
    image:
      "https://images.unsplash.com/photo-1548611635-b6e7827d7d32?w=500&h=500&fit=crop",
    colors: ["Brown", "Black"],
    material: "Italian Leather",
    capacity: "15L",
    isBestSeller: true,
    onSale: true,
    inStock: true,
    tags: ["professional", "premium"],
  },
  {
    id: "m2",
    name: "Laptop Messenger Bag",
    category: "Business Bags",
    subcategory: "Messenger Bags",
    mainCategory: "men",
    price: 119,
    rating: 4.7,
    reviews: 267,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    colors: ["Black", "Navy", "Gray"],
    material: "Canvas & Leather",
    capacity: "18L",
    inStock: true,
    tags: ["tech", "everyday"],
  },
  {
    id: "m3",
    name: "Professional Laptop Bag",
    category: "Business Bags",
    subcategory: "Laptop Bags",
    mainCategory: "men",
    price: 139,
    rating: 4.8,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop",
    colors: ["Black", "Brown"],
    material: "Premium Nylon",
    capacity: "20L",
    isNew: true,
    inStock: true,
    tags: ["tech", "professional"],
  },
  {
    id: "m4",
    name: "Urban Travel Backpack",
    category: "Casual & Travel",
    subcategory: "Backpacks",
    mainCategory: "men",
    price: 99,
    rating: 4.6,
    reviews: 534,
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&h=500&fit=crop",
    colors: ["Black", "Olive", "Navy"],
    material: "Water-Resistant Nylon",
    capacity: "25L",
    isBestSeller: true,
    inStock: true,
    tags: ["travel", "everyday"],
  },
  {
    id: "m5",
    name: "Leather Card Holder",
    category: "Accessories",
    subcategory: "Card Holders",
    mainCategory: "men",
    price: 39,
    rating: 4.9,
    reviews: 892,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
    colors: ["Brown", "Black", "Navy"],
    material: "Full Grain Leather",
    isBestSeller: true,
    inStock: true,
    tags: ["minimal", "everyday"],
  },
  {
    id: "m6",
    name: "Weekend Duffle Bag",
    category: "Casual & Travel",
    subcategory: "Duffle Bags",
    mainCategory: "men",
    price: 149,
    rating: 4.7,
    reviews: 276,
    image:
      "https://images.unsplash.com/photo-1622560480234-1e8f7e6dfa79?w=500&h=500&fit=crop",
    colors: ["Brown", "Black", "Tan"],
    material: "Canvas & Leather",
    capacity: "40L",
    inStock: true,
    tags: ["travel", "gym"],
  },

  // Travel Products
  {
    id: "t1",
    name: "Cabin Luggage Pro",
    category: "Carry-On",
    subcategory: "Cabin Luggage",
    mainCategory: "travel",
    price: 189,
    rating: 4.8,
    reviews: 456,
    image:
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&h=500&fit=crop",
    colors: ["Black", "Navy", "Silver"],
    material: "Polycarbonate",
    capacity: "35L",
    isBestSeller: true,
    inStock: true,
    tags: ["durable", "lightweight"],
  },
  {
    id: "t2",
    name: "Travel Backpack 40L",
    category: "Carry-On",
    subcategory: "Travel Backpacks",
    mainCategory: "travel",
    price: 129,
    rating: 4.9,
    reviews: 678,
    image:
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&h=500&fit=crop",
    colors: ["Black", "Gray", "Olive"],
    material: "Ripstop Nylon",
    capacity: "40L",
    isNew: true,
    isBestSeller: true,
    inStock: true,
    tags: ["adventure", "versatile"],
  },
  {
    id: "t3",
    name: "Large Expandable Suitcase",
    category: "Check-In Luggage",
    subcategory: "Expandable Cases",
    mainCategory: "travel",
    price: 249,
    originalPrice: 299,
    rating: 4.7,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1596461200867-e69bc2e63692?w=500&h=500&fit=crop",
    colors: ["Black", "Navy", "Red"],
    material: "ABS Hardshell",
    capacity: "80L",
    onSale: true,
    inStock: true,
    tags: ["spacious", "durable"],
  },
  {
    id: "t4",
    name: "Packing Cubes Set",
    category: "Travel Accessories",
    subcategory: "Packing Cubes",
    mainCategory: "travel",
    price: 29,
    rating: 4.6,
    reviews: 1234,
    image:
      "https://images.unsplash.com/photo-1591348278863-ef0c3700a649?w=500&h=500&fit=crop",
    colors: ["Gray", "Black", "Navy"],
    material: "Nylon Mesh",
    isBestSeller: true,
    inStock: true,
    tags: ["organization", "essential"],
  },
  {
    id: "t5",
    name: "3-Piece Luggage Set",
    category: "Sets & Bundles",
    subcategory: "3-Piece Sets",
    mainCategory: "travel",
    price: 399,
    originalPrice: 499,
    rating: 4.9,
    reviews: 345,
    image:
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&h=500&fit=crop",
    colors: ["Black", "Navy"],
    material: "Polycarbonate",
    capacity: "150L+",
    onSale: true,
    inStock: true,
    tags: ["value", "complete"],
  },
];

// Category structure
const categoryStructure = {
  women: {
    title: "Women's Collection",
    categories: [
      {
        name: "Handbags",
        subcategories: [
          "Tote Bags",
          "Shoulder Bags",
          "Crossbody",
          "Hobo Bags",
          "Bucket Bags",
        ],
      },
      {
        name: "Clutches & Evening",
        subcategories: [
          "Envelope Clutches",
          "Wristlets",
          "Minaudières",
          "Box Clutches",
        ],
      },
      {
        name: "Backpacks",
        subcategories: [
          "Leather Backpacks",
          "Mini Backpacks",
          "Convertible",
          "Travel Backpacks",
        ],
      },
      {
        name: "Seasonal Picks",
        subcategories: [
          "New Arrivals",
          "Best Sellers",
          "Sale",
          "Limited Edition",
        ],
      },
    ],
  },
  men: {
    title: "Men's Collection",
    categories: [
      {
        name: "Business Bags",
        subcategories: [
          "Briefcases",
          "Laptop Bags",
          "Messenger Bags",
          "Portfolio Cases",
        ],
      },
      {
        name: "Casual & Travel",
        subcategories: ["Backpacks", "Duffle Bags", "Weekend Bags", "Gym Bags"],
      },
      {
        name: "Accessories",
        subcategories: ["Card Holders", "Wallets", "Belt Bags", "Tech Cases"],
      },
      {
        name: "Premium Line",
        subcategories: [
          "Luxury Leather",
          "Designer Picks",
          "Vintage Collection",
        ],
      },
    ],
  },
  travel: {
    title: "Travel & Luggage",
    categories: [
      {
        name: "Carry-On",
        subcategories: [
          "Cabin Luggage",
          "Travel Backpacks",
          "Weekenders",
          "Garment Bags",
        ],
      },
      {
        name: "Check-In Luggage",
        subcategories: ["Large Suitcases", "Trunk Cases", "Expandable Cases"],
      },
      {
        name: "Travel Accessories",
        subcategories: [
          "Packing Cubes",
          "Toiletry Bags",
          "Laptop Sleeves",
          "Passport Holders",
        ],
      },
      {
        name: "Sets & Bundles",
        subcategories: [
          "2-Piece Sets",
          "3-Piece Sets",
          "Travel Kits",
          "Gift Sets",
        ],
      },
    ],
  },
};

interface ProductListingProps {
  initialMainCategory?: "women" | "men" | "travel";
  initialCategory?: string;
  initialSubcategory?: string;
}

export default function ProductListing({
  initialMainCategory = "women",
  initialCategory,
  initialSubcategory,
}: ProductListingProps) {
  console.log(initialCategory, initialMainCategory, initialSubcategory);
  useEffect(() => {
    setMainCategory(initialMainCategory || "women");

    setSelectedCategories(initialCategory ? [initialCategory] : []);

    setSelectedSubcategories(initialSubcategory ? [initialSubcategory] : []);
  }, [initialMainCategory, initialCategory, initialSubcategory]);
  const [mainCategory, setMainCategory] = useState<"women" | "men" | "travel">(
    initialMainCategory,
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : [],
  );
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    initialSubcategory ? [initialSubcategory] : [],
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get all unique values for filters
  const allColors = [...new Set(allProducts.flatMap((p) => p.colors))];
  const allMaterials = [...new Set(allProducts.map((p) => p.material))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((p) => p.mainCategory === mainCategory);

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category),
      );
    }

    // Subcategory filter
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedSubcategories.includes(p.subcategory),
      );
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter((p) =>
        p.colors.some((c) => selectedColors.includes(c)),
      );
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter((p) => selectedMaterials.includes(p.material));
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - best sellers first
        filtered.sort(
          (a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0),
        );
    }

    return filtered;
  }, [
    mainCategory,
    selectedCategories,
    selectedSubcategories,
    priceRange,
    selectedColors,
    selectedMaterials,
    sortBy,
  ]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((s) => s !== subcategory)
        : [...prev, subcategory],
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material],
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setPriceRange([0, 500]);
    setSelectedColors([]);
    setSelectedMaterials([]);
  };

  const activeFiltersCount =
    selectedCategories.length +
    selectedSubcategories.length +
    selectedColors.length +
    selectedMaterials.length;

  return (
    <div className="min-h-screen bg-background pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">
              {categoryStructure[mainCategory].title}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {categoryStructure[mainCategory].title}
              </h1>
              <p className="text-foreground/70">
                Showing {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </div>

            {/* Main Category Tabs */}
            <div className="flex gap-2 bg-card border border-border rounded-xl p-1">
              {(
                Object.keys(categoryStructure) as Array<
                  keyof typeof categoryStructure
                >
              ).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setMainCategory(cat);
                    setSelectedCategories([]);
                    setSelectedSubcategories([]);
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    mainCategory === cat
                      ? "bg-primary text-white"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {categoryStructure[cat].title.split("'")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border-2 border-border rounded-lg hover:border-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                Filters
                {activeFiltersCount > 0 && (
                  <span className="px-2 py-0.5 bg-accent text-white text-xs font-bold rounded-full">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-foreground/60 hover:text-accent transition-colors underline"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* View Mode */}
              <div className="flex gap-1 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "grid"
                      ? "bg-background text-primary"
                      : "text-foreground/60"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "list"
                      ? "bg-background text-primary"
                      : "text-foreground/60"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-border rounded-lg bg-background focus:border-accent focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categoryStructure[mainCategory].categories.map((cat) => (
                    <div key={cat.name}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat.name)}
                          onChange={() => toggleCategory(cat.name)}
                          className="w-4 h-4 text-accent rounded focus:ring-accent"
                        />
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">
                          {cat.name}
                        </span>
                      </label>

                      {/* Subcategories */}
                      {selectedCategories.includes(cat.name) && (
                        <div className="ml-7 mt-2 space-y-2">
                          {cat.subcategories.map((sub) => (
                            <label
                              key={sub}
                              className="flex items-center gap-2 cursor-pointer group"
                            >
                              <input
                                type="checkbox"
                                checked={selectedSubcategories.includes(sub)}
                                onChange={() => toggleSubcategory(sub)}
                                className="w-3 h-3 text-accent rounded focus:ring-accent"
                              />
                              <span className="text-xs text-foreground/70 group-hover:text-accent transition-colors">
                                {sub}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full accent-accent"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">₹{priceRange[0]}</span>
                    <span className="font-semibold">₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {allColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border-2 transition-all ${
                        selectedColors.includes(color)
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Material</h3>
                <div className="space-y-2">
                  {allMaterials.map((material) => (
                    <label
                      key={material}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material)}
                        onChange={() => toggleMaterial(material)}
                        className="w-4 h-4 text-accent rounded focus:ring-accent"
                      />
                      <span className="text-sm group-hover:text-accent transition-colors">
                        {material}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-card border border-border rounded-xl">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">No products found</h3>
                <p className="text-foreground/60 mb-4">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({
  product,
  viewMode,
}: {
  product: Product;
  viewMode: "grid" | "list";
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (viewMode === "list") {
    return (
      <div
        className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-64 h-64 flex-shrink-0 overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.onSale && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
              SALE
            </div>
          )}
          {product.isNew && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
              NEW
            </div>
          )}
          {product.isBestSeller && !product.isNew && !product.onSale && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
              BEST SELLER
            </div>
          )}
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <div className="mb-2">
            <span className="text-xs text-foreground/60">
              {product.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-accent" : "text-foreground/20"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-foreground/60">
              ({product.reviews})
            </span>
          </div>

          <div className="mb-4 text-sm text-foreground/70">
            <p>Material: {product.material}</p>
            {product.capacity && <p>Capacity: {product.capacity}</p>}
            <div className="flex gap-1 mt-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="w-5 h-5 rounded-full border-2 border-border"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div>
              {product.originalPrice && (
                <span className="text-sm text-foreground/40 line-through mr-2">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="text-2xl font-bold text-primary">
                ₹{product.price}
              </span>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.onSale && (
            <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
              SALE
            </div>
          )}
          {product.isNew && (
            <div className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
              NEW
            </div>
          )}
          {product.isBestSeller && !product.isNew && !product.onSale && (
            <div className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
              BEST SELLER
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div
          className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
        >
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors">
            Quick Add
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-foreground/60">{product.category}</span>
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-accent" : "text-foreground/20"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-foreground/60">
            ({product.reviews})
          </span>
        </div>

        <div className="mb-4">
          <p className="text-xs text-foreground/60 mb-2">{product.material}</p>
          <div className="flex gap-1">
            {product.colors.slice(0, 4).map((color) => (
              <div
                key={color}
                className="w-5 h-5 rounded-full border-2 border-border"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <div className="w-5 h-5 rounded-full border-2 border-border bg-muted flex items-center justify-center text-[10px] font-bold">
                +{product.colors.length - 4}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            {product.originalPrice && (
              <span className="text-sm text-foreground/40 line-through block">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-primary">
              ₹{product.price}
            </span>
          </div>
          {!product.inStock && (
            <span className="text-sm text-red-500 font-semibold">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
