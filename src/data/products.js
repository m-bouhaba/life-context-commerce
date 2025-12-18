const products = [
  // 🏠 HOME OFFICE / NEW JOB
  {
    id: "prod-001",
    name: "Ergonomic Office Chair",
    price: 199,
    image: "/images/chair.jpg",
    contexts: ["home-office", "new-job"],
    category: "Furniture",
    tags: ["ergonomic", "office", "comfort"],
    description:
      "Ergonomic office chair designed to provide comfort and support during long working hours.",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "prod-002",
    name: "Minimal Desk Lamp",
    price: 45,
    image: "/images/desk-lamp.jpg",
    contexts: ["home-office", "new-job"],
    category: "Lighting",
    tags: ["minimal", "led", "desk"],
    description:
      "Modern LED desk lamp with adjustable brightness for focused work.",
    rating: 4.4,
    inStock: true,
  },

  // ✈️ TRAVEL
  {
    id: "prod-003",
    name: "Travel Backpack",
    price: 89,
    image: "/images/travel-backpack.jpg",
    contexts: ["travel"],
    category: "Accessories",
    tags: ["travel", "backpack", "lightweight"],
    description:
      "Lightweight and durable backpack, perfect for short trips or frequent travel.",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "prod-004",
    name: "Noise Cancelling Headphones",
    price: 129,
    image: "/images/headphones.jpg",
    contexts: ["travel", "home-office"],
    category: "Electronics",
    tags: ["audio", "noise-cancelling", "wireless"],
    description:
      "Wireless noise cancelling headphones for immersive sound on the go.",
    rating: 4.8,
    inStock: true,
  },

  // 📦 MOVING
  {
    id: "prod-005",
    name: "Storage Organizer Set",
    price: 59,
    image: "/images/storage-organizer.jpg",
    contexts: ["moving"],
    category: "Home Organization",
    tags: ["storage", "organizer", "home"],
    description:
      "Versatile storage organizer set to help you settle into your new space.",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "prod-006",
    name: "Essential Tool Kit",
    price: 75,
    image: "/images/tool-kit.jpg",
    contexts: ["moving"],
    category: "Tools",
    tags: ["tools", "home", "diy"],
    description:
      "Essential toolkit with all the basic tools needed for home setup.",
    rating: 4.5,
    inStock: true,
  },

  // 💼 NEW JOB
  {
    id: "prod-007",
    name: "Professional Laptop Bag",
    price: 110,
    image: "/images/laptop-bag.jpg",
    contexts: ["new-job", "travel"],
    category: "Work Accessories",
    tags: ["work", "laptop", "professional"],
    description:
      "Sleek and professional laptop bag suitable for everyday work and commuting.",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "prod-008",
    name: "Smart Reusable Notebook",
    price: 39,
    image: "/images/smart-notebook.jpg",
    contexts: ["new-job"],
    category: "Stationery",
    tags: ["notes", "productivity", "eco-friendly"],
    description:
      "Reusable smart notebook that combines handwriting with digital organization.",
    rating: 4.2,
    inStock: true,
  },
];

export default products;
