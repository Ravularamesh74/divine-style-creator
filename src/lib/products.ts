import BLACK_OS_TS from "@/assets/BLACK-OS-TS.jpeg";
import BLACK_TS_BP from "@/assets/BLACK-TS-BP.jpeg";
import BLUE_OVERSIZE_TS from "@/assets/BLUE-OVERSIZE-T-SHIRT.jpeg";
import LENIN_ASH from "@/assets/LENIN-ASH.jpeg";
import LENIN_BLACK from "@/assets/LENIN-BLACK.jpeg";
import LENIN_BLUE from "@/assets/LENIN-BLUE.jpeg";
import LENIN_BROWN from "@/assets/LENIN-BROWN.jpeg";
import LENIN_GREY from "@/assets/LENIN-GREY.jpeg";
import LENIN_LIGHT_BLUE from "@/assets/LENIN-LIGHT-BLUE.jpeg";
import LENIN_LIGHT_GREY from "@/assets/LENIN-LIGHT-GREY.jpeg";
import LENIN_LIGHT_PINK from "@/assets/LENIN-LIGHT-PINK.jpeg";
import LENIN_PINK from "@/assets/LENIN-PINK.jpeg";
import LENIN_PURE_BLACK from "@/assets/LENIN-PURE-BLACK.jpeg";
import LENIN_ROSEY from "@/assets/LENIN-ROSEY.jpeg";
import LENIN_WHITE from "@/assets/LENIN-WHITE.jpeg";
import LENIN_SHIRT_PANT from "@/assets/Leninshirt-pant.jpeg";
import MAROON_OS_TS from "@/assets/MAROON-OS-TS.jpeg";
import TIMELESS_EDGE from "@/assets/OS-FIT-TIMELESS-EDGE.jpeg";
import WIDE_LEG_BP from "@/assets/PT-WIDE-LEG-BP.jpeg";
import TRI_TS_BP from "@/assets/TRI-TS-BP.jpeg";
import TRI_TS_BP2 from "@/assets/TRI-TS-BP2.jpeg";
import WHITE_OS_TS_BP from "@/assets/WHITE-OS-TS-BP.jpeg";
import WHITE_OS_TS_BP2 from "@/assets/WHITE-OS-TS-BP2.jpeg";
import BLACK_TS from "@/assets/Black-TS.jpeg";
import WHITE_TS_OF from "@/assets/WHITE-TS-OF.jpeg";
import GOLD_BRACELET from "@/assets/Gold-Bracelet.jpeg";
import GOLD_BRACELET_DIAMOND from "@/assets/Gold-bracelet-diamond.jpeg";
import ROYAL_STYLE_STEEL_BRACELET from "@/assets/Royal-Style-stainless-steel-bracelet.jpeg";

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  category:
    | "T-Shirts"
    | "Pants"
    | "Hoodies"
    | "Shirts"
    | "Jackets"
    | "Combos"
    | "Accessories";
  badge?: string;
  image: string;
  images?: string[];
  sizes?: string[];
  description: string;
};

const CK_LINEN_IMAGES = [
  LENIN_WHITE,
  LENIN_PURE_BLACK,
  LENIN_BLACK,
  LENIN_BLUE,
  LENIN_LIGHT_BLUE,
  LENIN_GREY,
  LENIN_LIGHT_GREY,
  LENIN_ASH,
  LENIN_BROWN,
  LENIN_PINK,
  LENIN_LIGHT_PINK,
  LENIN_ROSEY,
  LENIN_SHIRT_PANT,
];

export const products: Product[] = [
  {
    id: "1",
    name: "Black Oversized Tee",
    price: 799,
    oldPrice: 1199,
    category: "T-Shirts",
    badge: "BESTSELLER",
    image: BLACK_OS_TS,
    description:
      "Premium oversized fit crafted from heavyweight cotton for everyday comfort and streetwear style.",
  },
  {
    id: "2",
    name: "Black Tee + Baggy Pants",
    price: 1499,
    oldPrice: 2299,
    category: "Combos",
    badge: "HOT 🔥",
    image: BLACK_TS_BP,
    description:
      "Complete streetwear combo featuring a relaxed-fit black tee paired with baggy pants.",
  },
  {
    id: "3",
    name: "Blue Oversized T-Shirt",
    price: 799,
    oldPrice: 1199,
    category: "T-Shirts",
    badge: "NEW",
    image: BLUE_OVERSIZE_TS,
    description:
      "Clean oversized silhouette with a vibrant blue tone. Built for comfort and effortless styling.",
  },
  {
    id: "4",
    name: "Maroon Oversized Tee",
    price: 799,
    oldPrice: 1199,
    category: "T-Shirts",
    image: MAROON_OS_TS,
    description:
      "Rich maroon colorway with premium fabric and relaxed fit for a modern streetwear look.",
  },
  {
    id: "5",
    name: "Timeless Edge Oversized Tee",
    price: 899,
    oldPrice: 1399,
    category: "T-Shirts",
    badge: "TRENDING",
    image: TIMELESS_EDGE,
    description:
      "Signature Timeless Edge graphic oversized tee made for standout casual styling.",
  },
  {
    id: "6",
    name: "Wide Leg Baggy Pants",
    price: 1099,
    oldPrice: 1699,
    category: "Pants",
    image: WIDE_LEG_BP,
    description:
      "Relaxed wide-leg silhouette with premium construction for maximum comfort and versatility.",
  },
  {
    id: "7",
    name: "Tri Graphic Combo",
    price: 1599,
    oldPrice: 2499,
    category: "Combos",
    badge: "LIMITED",
    image: TRI_TS_BP,
    description:
      "Graphic oversized tee paired with matching bottoms for a complete street-ready fit.",
  },
  {
    id: "8",
    name: "Tri Streetwear Set",
    price: 1599,
    oldPrice: 2499,
    category: "Combos",
    image: TRI_TS_BP2,
    description:
      "Bold streetwear aesthetic with premium oversized proportions and coordinated styling.",
  },
  {
    id: "9",
    name: "White Oversized Tee Combo",
    price: 1499,
    oldPrice: 2299,
    category: "Combos",
    badge: "POPULAR",
    image: WHITE_OS_TS_BP,
    description:
      "Classic white oversized tee matched with baggy bottoms for a timeless streetwear look.",
  },
  {
    id: "10",
    name: "White Street Essential Set",
    price: 1499,
    oldPrice: 2299,
    category: "Combos",
    image: WHITE_OS_TS_BP2,
    description:
      "Minimalist oversized fit with versatile styling that works for every occasion.",
  },
  {
    id: "11",
    name: "Black Essential Tee",
    price: 699,
    oldPrice: 999,
    category: "T-Shirts",
    badge: "FRESH",
    image: BLACK_TS,
    description:
      "Minimal black tee with premium cotton build for everyday wear.",
  },
  {
    id: "12",
    name: "White Oversized Fit Tee",
    price: 799,
    oldPrice: 1199,
    category: "T-Shirts",
    badge: "NEW",
    image: WHITE_TS_OF,
    description:
      "Breathable oversized white tee with clean lines and soft touch.",
  },
  {
    id: "13",
    name: "Gold Bracelet — Classic",
    price: 2999,
    oldPrice: 3999,
    category: "Accessories",
    badge: "BLAZE",
    image: GOLD_BRACELET,
    description:
      "Premium gold bracelet with polished finish for elegant street style.",
  },
  {
    id: "14",
    name: "Diamond Gold Bracelet",
    price: 4999,
    oldPrice: 6999,
    category: "Accessories",
    image: GOLD_BRACELET_DIAMOND,
    description:
      "Luxury gold bracelet with diamond-inspired detailing for standout looks.",
  },
  {
    id: "15",
    name: "Royal Stainless Steel Bracelet",
    price: 2499,
    oldPrice: 3499,
    category: "Accessories",
    image: ROYAL_STYLE_STEEL_BRACELET,
    description:
      "Durable stainless steel bracelet with premium polish and modern edge.",
  },
  {
    id: "16",
    name: "CK Elite Crinkle Linen",
    price: 899,
    oldPrice: 1299,
    category: "Shirts",
    badge: "NEW",
    image: LENIN_WHITE,
    images: CK_LINEN_IMAGES,
    sizes: ["M", "L", "XL"],
    description: `CK

_Summer Wearables_

Elite Quality Airflow Crinkle Linen Solids

Soft and Superb Hand Feel 👌

*SIZES - M L XL*`,
  },
];

export const categories = [
  "ALL",
  "T-Shirts",
  "Pants",
  "Hoodies",
  "Shirts",
  "Jackets",
  "Combos",
  "Accessories",
] as const;

export function getProductImages(product: Product) {
  return product.images?.length ? product.images : [product.image];
}
