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
  emoji: string;
  tag?: string;
};

export const products: Product[] = [
  { name: "Shilajit Resin", price: 55, description: "Pure Himalayan resin rich in fulvic acid and minerals.", emoji: "🪨", tag: "Bestseller" },
  { name: "Shilajit Capsules", price: 45, description: "Convenient daily capsules for energy and vitality.", emoji: "💊" },
  { name: "Vitamin Tablets", price: 65, description: "High-strength complete daily vitamin formula.", emoji: "🌿", tag: "Premium" },
  { name: "Vitamin Gummies", price: 25, description: "Tasty fruit-flavoured daily vitamin gummies.", emoji: "🍊" },
  { name: "Hux D3", price: 10, description: "High-potency Vitamin D3 for bones and immunity.", emoji: "☀️" },
  { name: "Multivitamin Tablets", price: 12, description: "Essential everyday multivitamin support.", emoji: "🧬" },
  { name: "Vitamin C Tablets", price: 8, description: "Immune-boosting Vitamin C, easy to swallow.", emoji: "🍋" },
  { name: "Zinc Tablets", price: 7, description: "Supports immunity and skin health.", emoji: "🛡️" },
  { name: "Magnesium Tablets", price: 9, description: "Aids muscle recovery and restful sleep.", emoji: "🌙" },
  { name: "Cod Liver Oil Capsules", price: 6, description: "Omega-3, A & D for heart and joint health.", emoji: "🐟" },
  { name: "Iron Tablets", price: 5, description: "Helps reduce tiredness and fatigue.", emoji: "⚙️" },
  { name: "B12 Tablets", price: 10, description: "Energy support and healthy nervous system.", emoji: "⚡" },
  { name: "Hair, Skin & Nails Gummies", price: 15, description: "Biotin-rich beauty gummies for daily glow.", emoji: "✨" },
  { name: "Kids Multivitamin Gummies", price: 11, description: "Gentle daily nutrition kids actually enjoy.", emoji: "🧒" },
];
