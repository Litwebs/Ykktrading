import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, ShieldCheck, Truck, Leaf, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-vitamins.jpg";

const WHATSAPP_NUMBER = "447956736032";
const WHATSAPP_DISPLAY = "07956736032";
const EMAIL = "Ykktrading@outlook.com";

const enquireLink = (product?: string) =>
  product
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Ykk Trading, I am interested in ${product}`)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

type Product = {
  name: string;
  price: number;
  description: string;
  emoji: string;
  tag?: string;
};

const products: Product[] = [
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">Ykk Trading</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Products</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </nav>
          <Button asChild variant="whatsapp" size="sm">
            <a href={enquireLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Enquire
            </a>
          </Button>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="container grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24 lg:py-32">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
                <Sparkles className="h-3.5 w-3.5" /> UK-Based Wellness Store
              </span>
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Premium Vitamins<br />& Wellness Products
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                Quality supplements available from Ykk Trading. Message us on WhatsApp to enquire — fast, friendly, no hassle.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={enquireLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" /> Enquire on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#products">Browse Products</a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Trusted quality</div>
                <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> UK-based</div>
                <div className="flex items-center gap-2"><Leaf className="h-4 w-4 text-primary" /> Affordable</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary/20 blur-3xl" />
              <img
                src={heroImage}
                alt="Premium vitamin supplements from Ykk Trading"
                width={1536}
                height={1024}
                className="relative w-full rounded-3xl object-cover shadow-elegant"
              />
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="container py-20 lg:py-28">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Our Products</h2>
            <p className="mt-3 text-muted-foreground">Curated vitamins & wellness essentials at honest prices.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative flex aspect-square items-center justify-center bg-gradient-hero">
                  {p.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                      {p.tag}
                    </span>
                  )}
                  <span className="text-7xl transition-transform duration-300 group-hover:scale-110" aria-hidden>
                    {p.emoji}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="font-display font-semibold leading-tight">{p.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                    <span className="font-display text-2xl font-bold text-foreground">£{p.price}</span>
                    <Button asChild variant="whatsapp" size="sm">
                      <a href={enquireLink(p.name)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${p.name} on WhatsApp`}>
                        <MessageCircle className="h-4 w-4" /> Enquire
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-secondary/40 py-20 lg:py-28">
          <div className="container grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">About Us</span>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Reasonably priced wellness, delivered with care.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ykk Trading supplies a hand-picked range of vitamins, supplements, and wellness products at honest, affordable prices.
                Whether you're after daily essentials or premium specialities like Shilajit, our team is just a WhatsApp message away —
                quick to reply, easy to deal with, and always happy to help.
              </p>
              <Button asChild variant="whatsapp" size="lg">
                <a href={enquireLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Message us on WhatsApp
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, title: "Quality First", text: "Trusted supplements you can rely on." },
                { icon: Leaf, title: "Wellness Focus", text: "Hand-picked for everyday health." },
                { icon: MessageCircle, title: "Quick Replies", text: "Fast WhatsApp enquiries, real people." },
                { icon: Sparkles, title: "Fair Prices", text: "Premium products without the markup." },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-20 lg:py-28">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-gradient-hero p-8 shadow-card sm:p-12">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
              <p className="mt-3 text-muted-foreground">We reply quickly on WhatsApp — get your enquiry answered today.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href={enquireLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-2xl bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <MessageCircle className="h-6 w-6 text-whatsapp" />
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="font-display font-semibold">{WHATSAPP_DISPLAY}</div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex flex-col items-center gap-2 rounded-2xl bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <Mail className="h-6 w-6 text-primary" />
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-display text-sm font-semibold break-all">{EMAIL}</div>
              </a>
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-card p-6 text-center shadow-soft">
                <Leaf className="h-6 w-6 text-primary" />
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Business</div>
                <div className="font-display font-semibold">Ykk Trading</div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="whatsapp" size="lg">
                <a href={enquireLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Enquire on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/30 py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Ykk Trading. All rights reserved.</p>
          <p>UK-based vitamins & wellness store.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={enquireLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
