import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/catalog";

export function Eyebrow({ children, light=false }: { children: React.ReactNode; light?: boolean }) { return <p className={`eyebrow ${light?"text-primary-foreground/75":"text-accent"}`}>{children}</p>; }

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) { return <section className="page-hero"><div className="site-container relative z-10 py-20 md:py-28"><Eyebrow light>{eyebrow}</Eyebrow><h1 className="page-title mt-5 max-w-4xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75 md:text-lg">{copy}</p></div></section>; }

export function ProductCard({ product }: { product: Product }) { return <article className="product-card group"><Link to="/products/$slug" params={{slug: product.slug}} className="block h-full"><div className="aspect-[4/3] overflow-hidden bg-muted"><img src={product.image} alt={product.shortName} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground"><MapPin className="size-3.5" />{product.origin}<span className="ml-auto text-accent">{product.category}</span></div><h2 className="mt-4 text-xl font-semibold leading-tight">{product.shortName}</h2><div className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">View specifications <ArrowRight className="size-4 transition group-hover:translate-x-1" /></div></div></Link></article>; }

export function QuoteBand() { return <section className="bg-accent text-accent-foreground"><div className="site-container flex flex-col items-start justify-between gap-7 py-12 md:flex-row md:items-center"><div><Eyebrow>Global sourcing partner</Eyebrow><h2 className="mt-2 text-3xl font-semibold md:text-4xl">Let’s build a dependable supply line.</h2></div><Button asChild size="lg" variant="secondary"><Link to="/contact" search={{ product: undefined }}>Discuss your requirement <ArrowRight /></Link></Button></div></section>; }

export function Stat({ value, label }: { value: string; label: string }) { return <div className="border-l border-primary-foreground/20 pl-5"><p className="text-3xl font-semibold md:text-4xl">{value}</p><p className="mt-2 text-sm text-primary-foreground/65">{label}</p></div>; }

export function ProcessIcon({ children }: { children: React.ReactNode }) { return <div className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">{children}</div>; }

export { Globe2 };