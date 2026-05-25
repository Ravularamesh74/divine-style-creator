import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  category: "T-Shirts" | "Pants" | "Hoodies" | "Shirts" | "Jackets" | "Combos";
  badge?: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  { id: "1", name: "Street Art Combo", price: 1499, oldPrice: 2499, category: "Combos", badge: "COMBO", image: p1, description: "Oversized graphic tee paired with statement cargo joggers. A two-piece fit that owns the street." },
  { id: "2", name: "Graphic Oversized Tee", price: 799, oldPrice: 1299, category: "T-Shirts", badge: "HOT 🔥", image: p2, description: "Premium 240 GSM heavy cotton. Loud graphic. Loose silhouette built for movement." },
  { id: "3", name: "Cargo Joggers", price: 999, oldPrice: 1599, category: "Pants", image: p3, description: "Multi-pocket utility joggers with tapered ankle cuffs. Function meets fit." },
  { id: "4", name: "Minimal Logo Hoodie", price: 1299, oldPrice: 1999, category: "Hoodies", badge: "NEW", image: p4, description: "Heavyweight fleece with embroidered Daddy crown. Effortless cold-weather flex." },
  { id: "5", name: "Tropical Print Shirt", price: 899, oldPrice: 1499, category: "Shirts", image: p5, description: "Resort-ready button-down. Bold print, breezy rayon, vacation energy." },
  { id: "6", name: "Distressed Denim Jacket", price: 1899, oldPrice: 2999, category: "Jackets", badge: "TRENDING", image: p6, description: "Vintage-washed denim with hand-distressed details. Layer over everything." },
];

export const categories = ["ALL", "T-Shirts", "Pants", "Hoodies", "Shirts", "Jackets", "Combos"] as const;
