import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { enquireLink, products } from "@/lib/site";

const Products = () => {
  return (
    <section className="container py-16 lg:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Our Products</h1>
        <p className="mt-3 text-muted-foreground">Curated vitamins & wellness essentials at honest prices. Enquire on WhatsApp for any product.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="relative aspect-square overflow-hidden bg-gradient-hero">
              {p.tag && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  {p.tag}
                </span>
              )}
              <img src={p.image} alt={p.name} loading="lazy" width={512} height={512} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <h2 className="font-display font-semibold leading-tight">{p.name}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                <span className="font-display text-2xl font-bold">£{p.price}</span>
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
  );
};

export default Products;
