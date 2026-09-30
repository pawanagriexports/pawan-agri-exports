import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, FileCheck2, Handshake, Search, Ship } from "lucide-react";
import spicesAsset from "@/assets/about_spices.png";
import tradeAsset from "@/assets/about_trade.jpg";
import labAsset from "@/assets/about_lab.png";
import { Button } from "@/components/ui/button";
import { Eyebrow, PageHero, ProcessIcon, QuoteBand } from "@/components/page-ui";

const processSteps = [
  { icon: Search, number: "01", title: "Supplier identification" },
  { icon: FileCheck2, number: "02", title: "Quality & documentation" },
  { icon: Ship, number: "03", title: "Shipment coordination" },
  { icon: Handshake, number: "04", title: "Long-term partnerships" },
];

export const Route = createFileRoute("/about")({ head:()=>({meta:[{title:"About Us | Pawan Agri Exports"},
    {name:"description",content:"Learn how Pawan Agri Exports supports international buyers with transparent sourcing, quality verification, and export coordination."},
    {property:"og:title",content:"About Pawan Agri Exports"},
    {property:"og:description",content:"Your reliable global sourcing and export partner based in Ahmedabad, India."},
    {property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), 
    component: About });

function About(){
  return <>
    <PageHero eyebrow="Who we are" title="Rooted in sourcing. Built for global trade." copy="We help international businesses source premium spices, agri products, and botanical raw materials from trusted global sourcing hubs."/>
    <section className="section"><div className="site-container grid items-center gap-12 lg:grid-cols-2">
      <div>
        <Eyebrow>Ahmedabad, India</Eyebrow>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Local relationships. International execution.</h2>
        <p className="mt-6 leading-8 text-muted-foreground">We work with verified manufacturers, processors, suppliers, and business partners across different markets to source and facilitate products according to required specifications, quality standards, and documentation needs.</p>
        <p className="mt-5 leading-8 text-muted-foreground">We specialize in Cumin, Coriander, Fennel, Fenugreek, Psyllium Husk, Groundnuts, Henna, Vanilla, Cinnamon, Avocado, and other selected agricultural products—while helping producers reach international markets.</p>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {["Transparent sourcing","Clear communication","Consistent quality","Dependable execution"].map(x=><li key={x} className="flex items-center gap-3 font-semibold"><Check className="size-4 text-accent"/>{x}</li>)}
        </ul>
      </div>
      <div className="image-grid">
        <img src={spicesAsset} alt="Premium spices and agricultural products"/>
        <img src={labAsset} alt="Quality testing laboratory"/>
        <img src={tradeAsset} alt="Global trade partnership"/>
      </div>
    </div></section>
    <section className="section bg-secondary"><div className="site-container"><div className="max-w-2xl"><Eyebrow>End-to-end support</Eyebrow>
    <h2 className="mt-4 text-4xl font-semibold md:text-5xl">We stay involved at every step.</h2></div>
    <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">{processSteps.map(({ icon: Icon, number, title })=><div className="bg-background p-7" key={title}><ProcessIcon><Icon/></ProcessIcon>
    <p className="mt-8 text-xs font-bold text-accent">{number}</p>
    <h3 className="mt-2 text-lg font-semibold">{title}</h3></div>)}</div>
    <Button asChild className="mt-10"><Link to="/products">Explore our range <ArrowRight/></Link></Button></div></section>
    <QuoteBand/>
  </>;
}