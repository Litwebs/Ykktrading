import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { enquireLink, products, EMAIL } from "@/lib/site";

const Products = () => {
  return (
    <section className="container py-16 lg:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Our Products
        </h1>
        <p className="mt-3 text-muted-foreground">
          Curated vitamins & wellness essentials at honest prices. Enquire on
          WhatsApp for any product.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:border-primary/20"
          >
            <div className="relative aspect-square overflow-hidden bg-gradient-hero">
              {p.tag && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-md">
                  {p.tag}
                </span>
              )}
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={512}
                height={512}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent pointer-events-none" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div>
                <h2 className="font-display font-semibold leading-tight">
                  {p.name}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                <span className="font-display text-2xl font-bold">
                  £{p.price}
                </span>
                <Button asChild variant="whatsapp" size="sm">
                  <a
                    href={enquireLink(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${p.name} on WhatsApp`}
                  >
                    <MessageCircle className="h-4 w-4" /> Enquire
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Refund & Exchange Policy */}
      <div className="mx-auto mt-16 max-w-2xl">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Refund &amp; Exchange Policy
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-primary font-bold shrink-0">•</span>
              <span>
                <strong className="text-foreground">Unopened items:</strong>{" "}
                Returns accepted within 14 days of delivery. Items must be in
                their original, sealed packaging.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-primary font-bold shrink-0">•</span>
              <span>
                <strong className="text-foreground">Exchanges:</strong> We're
                happy to exchange any item for a product of equal or greater
                value. Contact us via WhatsApp to arrange.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-primary font-bold shrink-0">•</span>
              <span>
                <strong className="text-foreground">
                  Damaged or incorrect items:
                </strong>{" "}
                If you receive a damaged or wrong item, please get in touch
                within 48 hours and we'll make it right promptly.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-primary font-bold shrink-0">•</span>
              <span>
                <strong className="text-foreground">Opened products:</strong>{" "}
                For hygiene and safety reasons, opened supplements cannot be
                returned unless the product is faulty.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground border-t border-border pt-4">
            To initiate a return or exchange, please contact us on WhatsApp or
            email{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              {EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
