import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/LOGO.png";
import { Button } from "@/components/ui/button";

const nav = [["Home", "/"], ["About", "/about"], ["Products", "/products"], ["Packaging", "/packaging"], ["Contact", "/contact"]] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return <div className="min-h-screen bg-background text-foreground">
    <div className="bg-primary text-primary-foreground"><div className="site-container flex min-h-9 items-center justify-between gap-4 py-2 text-xs font-medium">
      <p>Merchant exporter · Whole spices & agri products</p>
      <div className="hidden items-center gap-5 sm:flex"><a className="top-link" href="tel:+918128200663"><Phone /> +91 81282 00663</a><a className="top-link" href="mailto:info@pawanagriexports.com"><Mail /> Email us</a></div>
    </div></div>
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur"><div className="site-container flex h-20 items-center justify-between">
      <Link to="/" aria-label="Pawan Agri Exports home"><img className="h-14 w-auto" src="LOGO.png" alt="Pawan Agri Exports" /></Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">{nav.map(([label,to])=><Link key={to} to={to} className={`nav-link ${pathname===to || (to==="/products" && pathname.startsWith("/products/")) ? "nav-link-active" : ""}`}>{label}</Link>)}</nav>
      <div className="hidden lg:block"><Button asChild size="lg"><Link to="/contact" search={{ product: undefined }}>Request a quote <ArrowUpRight /></Link></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"}>{open?<X/>:<Menu/>}</Button>
    </div>{open&&<nav className="site-container flex flex-col border-t border-border py-4 lg:hidden" aria-label="Mobile navigation">{nav.map(([label,to])=><Link key={to} to={to} onClick={()=>setOpen(false)} className="border-b border-border py-4 text-sm font-semibold">{label}</Link>)}<Button asChild className="mt-4"><Link to="/contact" search={{ product: undefined }} onClick={()=>setOpen(false)}>Request a quote</Link></Button></nav>}</header>
    <main>{children}</main>
    <footer className="bg-primary text-primary-foreground"><div className="site-container grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
      <div><img className="h-16 w-auto" src="LOGO.png" alt="Pawan Agri Exports" /><p className="mt-5 max-w-md text-sm leading-7 text-primary-foreground/70">Reliable global sourcing and export support for premium spices, agricultural products, and botanical raw materials.</p></div>
      <div><p className="footer-heading">Explore</p><div className="mt-4 grid gap-3 text-sm">{nav.slice(1).map(([label,to])=><Link key={to} to={to} className="footer-link">{label}</Link>)}</div></div>
      <div><p className="footer-heading">Trade desk</p><div className="mt-4 grid gap-3 text-sm text-primary-foreground/70"><a className="footer-link" href="tel:+918128200663">+91 81282 00663</a><a className="footer-link break-all" href="mailto:info@pawanagriexports.com">info@pawanagriexports.com</a><p>Ahmedabad, Gujarat 380061, India</p></div></div>
    </div><div className="border-t border-primary-foreground/10"><div className="site-container flex flex-wrap justify-between gap-3 py-5 text-xs text-primary-foreground/60"><p>© 2026 Pawan Agri Exports</p><p>Quality sourced. Trade simplified.</p></div></div></footer>
    <a href="https://wa.me/918128200663" target="_blank" rel="noreferrer" className="whatsapp" aria-label="Chat on WhatsApp"><Phone /></a>
  </div>;
}