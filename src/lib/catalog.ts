import avocadoAsset from "@/assets/avacado.jpg";
import cinnamonAsset from "@/assets/cassia.jpg";
import corianderAsset from "@/assets/coriander.jpg";
import cuminAsset from "@/assets/cumin.jpg";
import fennelAsset from "@/assets/fennel.jpg";
import fenugreekAsset from "@/assets/fenugreek.jpg";
import groundnutAsset from "@/assets/groundnuts.jpg";
import hennaAsset from "@/assets/hennaf.jpg";
import psylliumAsset from "@/assets/psyllium.jpg";
import vanillaAsset from "@/assets/vanilla.jpg";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  origin: string;
  category: "Spices & seeds" | "Botanicals" | "Fresh produce" | "Nuts";
  image: string;
  description: string;
  uses: string[];
  specifications: Array<[string, string]>;
};

export const products: Product[] = [
  {
    slug: "cumin-seeds",
    name: "Premium Cumin Seeds (IPM Grade)", shortName: "Cumin Seeds", origin: "India", category: "Spices & seeds", image: cuminAsset,
    description: "Sourced from major cumin-producing regions of India (Gujarat and Rajasthan), IPM Grade Cumin Seeds are grown under controlled agricultural practices to minimize pesticide residue, meeting strict European and global food safety standards. They are characterized by their bold seed size, high aromatic essential oil content, rich earthy flavor, and distinctive warm aroma.",
    uses: ["Spices & Seasoning Blends", "Food Processing & Ready-To-Eat (RTE) Foods", "Oleoresin & Essential Oil Extraction", "Nutraceuticals", "Culinary Exports"],
    specifications: [["Available Forms & Grades", "Whole Seeds (Jeera), Cleaned & Machine Sorted (99% to 99.5% purity), Sortex Cleaned (99.8% to 99.9% purity), IPM Grade"], ["Moisture", "≤ 8.0% - 9.0% max"], ["Volatile Oil", "2.5% - 4.0% v/w min"], ["Total Ash", "≤ 8.0% max"], ["Acid Insoluble Ash", "≤ 1.5% max"], ["Purity", "99.5% to 99.9% (Sortex Clean)"], ["Foreign Matter", "≤ 0.1% - 0.5% max"], ["Pesticide Residue", "Compliant with EU MRL / IPM standards"]],
  },
  {
    slug: "coriander-seeds",
    name: "Premium Coriander Seeds", shortName: "Coriander Seeds", origin: "India", category: "Spices & seeds", image: corianderAsset,
    description: "Sourced from India's prime coriander-producing belts (Rajasthan, Madhya Pradesh, and Gujarat), Indian Coriander Seeds are renowned for their distinctive citrusy, warm, and mild aromatic flavor profile. Cleaned and sorted to eliminate split seeds and dust, they range from light brownish-yellow to bright green depending on the market grade.",
    uses: ["Spices & Curry Powder Blends", "Food Processing, Pickle & Sauce Manufacturing", "Essential Oil & Oleoresin Extraction", "Bakery & Beverage Flavoring", "Meat Processing & Seasoning Industry"],
    specifications: [["Available Forms & Grades", "Whole Seeds, Split Seeds (Dhaniya Dal), Ground Powder; Eagle, Scooter, Parrot and Double Parrot Quality"], ["Moisture", "≤ 8.0% - 9.0% max"], ["Volatile Oil", "0.3% - 0.5% v/w min"], ["Total Ash", "≤ 7.0% max"], ["Acid Insoluble Ash", "≤ 1.5% max"], ["Purity", "98.0% to 99.5% (Sortex Clean)"], ["Foreign Matter", "≤ 0.5% max"], ["Split / Damaged Seeds", "≤ 2.0% - 5.0% max (grade-dependent)"], ["Pesticide Residue", "Compliant with EU MRL / USFDA standards"]],
  },
  {
    slug: "psyllium-husk",
    name: "Premium Psyllium Husk (Isabgol)", shortName: "Psyllium Husk", origin: "India", category: "Botanicals", image: psylliumAsset,
    description: "Psyllium Husk (Plantago ovata) is the outer seed coating separated mechanically from the psyllium seed. Rich in natural soluble fiber, it is off-white to pale beige, virtually odorless, and possesses powerful hydrocolloid properties—swelling rapidly upon contact with water to form a smooth, viscous gel.",
    uses: ["Pharmaceuticals & Supplements", "Food Processing & Gluten-Free Bakery", "Nutraceuticals & Dietary Health", "Animal Nutrition & Specialty Feed"],
    specifications: [["Available Forms & Grades", "Whole Husk, Fine Husk Powder; 85%, 95%, 98%, and 99% Pharmaceutical / USP Grade"], ["Purity / Husk Content", "85% to 99% (grade-dependent)"], ["Swell Volume", "≥ 35-60 ml/g (grade-dependent)"], ["Moisture", "≤ 8.0%"], ["Total Ash", "≤ 2.5% - 4.0% max"], ["Acid Insoluble Ash", "≤ 0.3% - 1.0% max"], ["Extraneous Matter", "Light ≤ 1-3%, Heavy ≤ 0.2-0.5%"], ["Standards", "Compliant with USP / IP / BP Monograph & EU MRL"], ["Mesh Sizes", "30, 40, 60, 80 and 100 Mesh"]],
  },
  {
    slug: "vanilla-beans",
    name: "Premium Vanilla Beans (Planifolia Grade)", shortName: "Vanilla Beans", origin: "Indonesia", category: "Botanicals", image: vanillaAsset,
    description: "Sourced from Indonesia's key vanilla-growing regions (Java, Bali, and Sulawesi), Indonesian Vanilla Beans (Vanilla planifolia) are cured, sun-dried whole pods. Known for their full-bodied, rich, bold, and smoky-sweet flavor, these pods feature an oily, dark brown to black exterior with high naturally occurring vanillin content.",
    uses: ["Vanilla Extract, Oleoresin & Flavor Manufacturing", "Gourmet Bakery, Chocolate & Confectionery", "Ice Creams, Dairy Products & Fine Beverages", "Perfumery, Fine Fragrances & Cosmetics", "Nutraceuticals & Specialty Culinary Products"],
    specifications: [["Available Forms & Grades", "Whole Cured Beans/Pods; Grade A (Gourmet/Prime), Grade B (Extract Grade), Cuts/Split Beans"], ["Vanillin Content", "1.5% - 2.2% min"], ["Moisture Content", "25%-35% Grade A | 15%-25% Grade B"], ["Bean Length", "14 cm - 20 cm+ (grade-dependent)"], ["Color & Texture", "Dark brown / black, supple, flexible, and oily skin"], ["Foreign Matter / Defects", "≤ 0.5% max"], ["Residue", "Compliant with EU / USFDA Standards"]],
  },
  {
    slug: "cassia-cinnamon",
    name: "Premium Cassia Cinnamon (Korintje)", shortName: "Cassia Cinnamon", origin: "Indonesia", category: "Spices & seeds", image: cinnamonAsset,
    description: "Sourced from the Kerinci and West Sumatra regions of Indonesia, Indonesian Cassia Cinnamon (Cinnamomum burmannii) is famous worldwide as Korintje Cassia. Harvested from the inner bark, it offers an intense sweet-spicy aroma, deep reddish-brown color, and rich cinnamaldehyde essential oil content.",
    uses: ["Bakery, Confectionery & Sweet Pastries", "Beverages, Tea Blends & Coffees", "Spice Blends, Seasoning Mixes & Curry Powders", "Essential Oil & Flavoring Extraction", "Pharmaceuticals, Cosmetics & Oral Care"],
    specifications: [["Available Forms & Grades", "Whole Quills/Sticks (Korintje VA/VAA), Broken & Cleaned Bark (KABC / KBBC), Powder; AA, A, B, C"], ["Volatile Oil", "1.5% - 3.5% v/w min"], ["Moisture", "≤ 10.0% - 13.5% max"], ["Total Ash", "≤ 4.0% - 5.0% max"], ["Acid Insoluble Ash", "≤ 1.0% - 2.0% max"], ["Foreign Matter", "≤ 0.5% - 1.0% max"], ["Coumarin Content", "Standard natural range (~0.8%-1.2%)"], ["Pesticide Residue", "Compliant with EU MRL / USFDA Standards"]],
  },
  {
    slug: "fennel-seeds",
    name: "Premium Fennel Seeds", shortName: "Fennel Seeds", origin: "India", category: "Spices & seeds", image: fennelAsset,
    description: "Sourced primarily from Gujarat and Rajasthan, Indian Fennel Seeds (Foeniculum vulgare) are highly prized globally for their vibrant green color, sweet aromatic flavor, and pleasant anise-like scent. Mechanically cleaned and sorted, they range from sweet small-seed Lucknowi varieties to bold green export grades.",
    uses: ["Food Processing, Confectionery & Mouth Fresheners", "Spice Blends, Seasoning & Culinary Products", "Essential Oil & Oleoresin Extraction", "Herbal Teas, Digestive Health & Nutraceuticals", "Bakery, Spirits & Beverage Flavoring"],
    specifications: [["Available Forms & Grades", "Whole Seeds; Machine Cleaned, Sortex Cleaned, Premium Green, Medium Green and Small Lucknowi Quality"], ["Moisture", "≤ 8.0% - 10.0% max"], ["Volatile Oil", "1.5% - 2.5% v/w min; high grades up to 3.0%"], ["Total Ash", "≤ 8.0% max"], ["Acid Insoluble Ash", "≤ 1.5% max"], ["Purity", "99.0% to 99.8% (Sortex Clean)"], ["Foreign Matter", "≤ 0.2% - 0.5% max"], ["Pesticide Residue", "Compliant with EU MRL / USFDA standards"]],
  },
  {
    slug: "hass-avocado",
    name: "Fresh Moroccan Hass Avocado", shortName: "Hass Avocado", origin: "Morocco", category: "Fresh produce", image: avocadoAsset,
    description: "Cultivated in the fertile coastal regions of Gharb and Loukkos in Morocco, Moroccan Hass Avocados are premium fresh fruits prized for their rich, creamy texture and nutty flavor. Their pebbled, thick skin offers excellent transport durability and extended shelf life for global export markets.",
    uses: ["Fresh Retail & Supermarket Chains", "Foodservice, HORECA & Culinary Arts", "Commercial Guacamole, Purée & Dip Manufacturing", "Cold-Pressed Avocado Oil Extraction", "Cosmetics, Skincare & Personal Care"],
    specifications: [["Available Forms & Grades", "Fresh Whole Fruit; Class Extra, Class I, Class II"], ["Dry Matter Content", "≥ 21% – 23% min"], ["Oil Content", "12% – 20%+"], ["Fruit Weight / Size", "Calibers 12 to 24 (135g to 340g+)"], ["Sizing Counts", "4 kg box: 12, 14, 16, 18, 20, 22, 24"], ["Skin Appearance", "Pebbled, firm, dark green to dark purple/black upon ripening"], ["Defects / Tolerances", "≤ 5% – 10% max for Class I (UN/ECE FFV-42)"], ["Storage & Shipping", "5.5°C – 7°C unripened | RH 85% – 90%"], ["Residue", "Compliant with EU MRL Standards"]],
  },
  {
    slug: "fenugreek-seeds",
    name: "Premium Fenugreek Seeds", shortName: "Fenugreek Seeds", origin: "India", category: "Spices & seeds", image: fenugreekAsset,
    description: "Sourced mainly from Rajasthan, Indian Fenugreek Seeds (Trigonella foenum-graecum) are yellowish-brown, cuboid-shaped seeds known for their distinctive maple-like aroma and pleasantly bitter flavor. Carefully cleaned and sorted, they are recognized for high galactomannan soluble fiber and active compounds.",
    uses: ["Spice Blends, Curry Powders, Pickles & Seasonings", "Nutraceuticals & Dietary Supplements", "Botanical Extracts, Galactomannan & Oleoresin", "Herbal Teas & Medicinal Formulations", "Cosmetic, Hair Care & Personal Care"],
    specifications: [["Available Forms & Grades", "Whole Seeds, Ground Powder; Machine Cleaned (99%), Sortex Cleaned (99.5%-99.8%)"], ["Moisture", "≤ 9.0% – 10.0% max"], ["Volatile Oil", "0.2% – 0.4% v/w min"], ["Total Ash", "≤ 7.0% max"], ["Acid Insoluble Ash", "≤ 1.5% max"], ["Purity", "99.0% to 99.8%"], ["Foreign Matter", "≤ 0.2% – 0.5% max"], ["Pesticide Residue", "Compliant with EU MRL / USFDA standards"]],
  },
  {
    slug: "henna-powder",
    name: "Premium Henna Powder", shortName: "Henna Powder", origin: "India", category: "Botanicals", image: hennaAsset,
    description: "Sourced from Sojat, Rajasthan—the henna capital of India—this natural Henna Powder (Lawsonia inermis) is made by shade-drying and finely pulverizing premium leaves. Its high natural Lawsone content yields a rich reddish-brown stain and natural conditioning without synthetic additives.",
    uses: ["Natural Hair Dye & Hair Care Formulations", "Cosmetics & Body Art / Tattoo Paste", "Herbal Shampoo, Hair Mask & Conditioner", "Textile & Leather Natural Dyeing"],
    specifications: [["Available Forms & Grades", "Micro-fine Powder; Triple Filtered BAQ, Natural Hair Grade, Neutral Henna (Cassia)"], ["Lawsone Content", "1.5% – 2.5%+ min; BAQ Grade ≥ 2.0%"], ["Moisture", "≤ 8.0% – 10.0% max"], ["Total Ash", "≤ 10.0% – 12.0% max"], ["Acid Insoluble Ash", "≤ 3.0% max"], ["Mesh / Particle Size", "80 to 100+ Mesh (Triple Filtered)"], ["Purity", "100% pure and natural; free from PPD, ammonia, heavy metals and synthetic colors"], ["Standards", "EU Cosmetics Regulation (EC No. 1223/2009) & USFDA"]],
  },
  {
    slug: "groundnut-kernels",
    name: "Premium Groundnut Kernels / Peanuts", shortName: "Groundnut Kernels", origin: "India", category: "Nuts", image: groundnutAsset,
    description: "Sourced mainly from Gujarat's Saurashtra region, Indian Groundnuts (Arachis hypogaea) are globally acclaimed for high oil content, natural sweetness, and crunchy texture. Mechanically shelled and color-sorted, they are graded by size count and purity for consistent export quality.",
    uses: ["Peanut Butter, Spreads & Confectionery", "Roasted, Salted & Seasoned Snacks", "Edible Oil Extraction", "Bakery, Chocolates & Energy Bars", "Foodservice Sauces, Pastes & Gravies"],
    specifications: [["Available Forms & Grades", "Whole Raw Kernels, In-Shell Groundnuts, Blanched / Roasted; Bold, Java and TJ Quality"], ["Size Calibration", "Bold 35/40, 40/50, 50/60 | Java 40/50, 50/60, 60/70, 80/90"], ["Moisture", "≤ 7.0% – 8.0% max"], ["Oil Content", "48% – 52% min"], ["Purity", "99.0% to 99.5% (Sortex Clean)"], ["Foreign Matter", "≤ 0.5% max"], ["Damaged Kernels", "≤ 1.0% – 2.0% max"], ["Aflatoxin", "≤ 4 ppb EU or ≤ 15–20 ppb global standard"], ["Pesticide Residue", "Compliant with EU MRL / USFDA standards"]],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);