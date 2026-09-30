import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Globe2, PackageCheck, SearchCheck, Ship } from "lucide-react";
import heroAsset from "@/assets/hero.png";
import labAsset from "@/assets/about_lab.png";
import tradeAsset from "@/assets/about_trade.jpg";
import { Button } from "@/components/ui/button";
import { Eyebrow, ProductCard, QuoteBand, Stat, ProcessIcon } from "@/components/page-ui";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Pawan Agri Exports | Spices & Agricultural Products" },
    { name: "description", content: "Source premium spices, botanicals, nuts and fresh produce with reliable export coordination from Pawan Agri Exports." },
    { property: "og:title", content: "Pawan Agri Exports | Global Sourcing Partner" },
    { property: "og:description", content: "Premium whole spices and agricultural products for international buyers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return <>
    <section className="hero"><img src={heroAsset} alt="An assortment of premium spices and agricultural products" className="hero-image" /><div className="hero-shade" /><div className="site-container relative z-10 flex min-h-[690px] items-center py-20"><div className="max-w-3xl"><Eyebrow light>From origin to international markets</Eyebrow><h1 className="hero-title mt-5">Premium agri products.<br/><span>Trade made dependable.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/80">We source, verify, package, and coordinate export of spices, botanicals, nuts, and fresh produce for buyers worldwide.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/products">Explore products <ArrowRight /></Link></Button><Button asChild size="lg" variant="heroOutline"><Link to="/contact" search={{product:undefined}}>Send an enquiry</Link></Button></div></div></div>
      <div className="relative z-10 bg-primary/90 text-primary-foreground"><div className="site-container grid grid-cols-2 gap-7 py-7 md:grid-cols-4"><Stat value="10" label="Selected export products"/><Stat value="4" label="Sourcing regions"/><Stat value="99.9%" label="Purity grades available"/><Stat value="End-to-end" label="Trade coordination"/></div></div>
    </section>
    <section className="section"><div className="site-container"><div className="section-heading"><div><Eyebrow>Our product range</Eyebrow><h2>From trusted origins,<br/>selected for industry.</h2></div><Button asChild variant="outline"><Link to="/products">View all products <ArrowRight /></Link></Button></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0,4).map(p=><ProductCard key={p.slug} product={p}/>)}</div></div></section>
    <section className="section bg-secondary"><div className="site-container grid items-center gap-12 lg:grid-cols-2"><div className="relative"><img className="aspect-[5/4] w-full object-cover" src={labAsset} alt="Quality testing in a food laboratory"/><div className="image-note"><CheckCircle2/><span>Quality verification<br/>before dispatch</span></div></div><div><Eyebrow>Reliable by design</Eyebrow><h2 className="mt-4 text-4xl font-semibold md:text-5xl">A clear path from supplier to shipment.</h2><p className="mt-6 leading-8 text-muted-foreground">Our role is to make international procurement reliable, transparent, and seamless. We coordinate verified sourcing partners, product requirements, quality checks, documentation, and delivery.</p><div className="mt-9 grid gap-6 sm:grid-cols-2"><div className="feature"><ProcessIcon><SearchCheck/></ProcessIcon><div><h3>Verified sourcing</h3><p>Selected manufacturers, processors, and suppliers.</p></div></div><div className="feature"><ProcessIcon><PackageCheck/></ProcessIcon><div><h3>Tailored packaging</h3><p>Retail, HORECA, and bulk export formats.</p></div></div><div className="feature"><ProcessIcon><Ship/></ProcessIcon><div><h3>Export coordination</h3><p>Documentation and shipment support.</p></div></div><div className="feature"><ProcessIcon><Globe2/></ProcessIcon><div><h3>Global standards</h3><p>Specifications aligned with buyer needs.</p></div></div></div><Button asChild className="mt-9"><Link to="/about">How we work <ArrowRight/></Link></Button></div></div></section>
    <section className="section overflow-hidden"><div className="site-container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><Eyebrow>Built around your market</Eyebrow><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Flexible commercial models. One accountable partner.</h2><p className="mt-6 leading-8 text-muted-foreground">Depending on the requirement, we work through direct merchant export, sourcing agency, commission-based, and strategic partnership models.</p><Button asChild className="mt-8"><Link to="/contact" search={{product:undefined}}>Talk to our trade desk <ArrowRight/></Link></Button></div><img src={tradeAsset} alt="International sourcing partnership" className="aspect-[4/3] w-full object-cover"/></div></section>
    <QuoteBand />
  </>;
}