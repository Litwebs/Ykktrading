import shilajitResin from "@/assets/products/shilajit-resin.jpg";
import shilajitCapsules from "@/assets/products/shilajit-capsules.jpg";
import vitaminTablets from "@/assets/products/vitamin-tablets.jpg";
import vitaminGummies from "@/assets/products/vitamin-gummies.jpg";
import vitaminD3 from "@/assets/products/vitamin-d3.jpg";
import multivitamin from "@/assets/products/multivitamin.jpg";
import vitaminC from "@/assets/products/vitamin-c.jpg";
import zinc from "@/assets/products/zinc.jpg";
import magnesium from "@/assets/products/magnesium.jpg";
import codLiverOil from "@/assets/products/cod-liver-oil.jpg";
import iron from "@/assets/products/iron.jpg";
import b12 from "@/assets/products/b12.jpg";
import hairSkinNails from "@/assets/products/hair-skin-nails.jpg";
import kidsGummies from "@/assets/products/kids-gummies.jpg";

export const WHATSAPP_NUMBER = "447956736032";
export const WHATSAPP_DISPLAY = "07956736032";
export const EMAIL = "Ykktrading@outlook.com";

export const enquireLink = (product?: string) =>
  product
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Ykk Trading, I am interested in ${product}`)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

export type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  { name: "Shilajit Resin", price: 55, description: "Pure Himalayan resin rich in fulvic acid and minerals.", image: shilajitResin, tag: "Bestseller" },
  { name: "Shilajit Capsules", price: 45, description: "Convenient daily capsules for energy and vitality.", image: shilajitCapsules },
  { name: "Vitamin Tablets", price: 65, description: "High-strength complete daily vitamin formula.", image: vitaminTablets, tag: "Premium" },
  { name: "Vitamin Gummies", price: 25, description: "Tasty fruit-flavoured daily vitamin gummies.", image: vitaminGummies },
  { name: "Hux D3", price: 10, description: "High-potency Vitamin D3 for bones and immunity.", image: vitaminD3 },
  { name: "Multivitamin Tablets", price: 12, description: "Essential everyday multivitamin support.", image: multivitamin },
  { name: "Vitamin C Tablets", price: 8, description: "Immune-boosting Vitamin C, easy to swallow.", image: vitaminC },
  { name: "Zinc Tablets", price: 7, description: "Supports immunity and skin health.", image: zinc },
  { name: "Magnesium Tablets", price: 9, description: "Aids muscle recovery and restful sleep.", image: magnesium },
  { name: "Cod Liver Oil Capsules", price: 6, description: "Omega-3, A & D for heart and joint health.", image: codLiverOil },
  { name: "Iron Tablets", price: 5, description: "Helps reduce tiredness and fatigue.", image: iron },
  { name: "B12 Tablets", price: 10, description: "Energy support and healthy nervous system.", image: b12 },
  { name: "Hair, Skin & Nails Gummies", price: 15, description: "Biotin-rich beauty gummies for daily glow.", image: hairSkinNails },
  { name: "Kids Multivitamin Gummies", price: 11, description: "Gentle daily nutrition kids actually enjoy.", image: kidsGummies },
];
