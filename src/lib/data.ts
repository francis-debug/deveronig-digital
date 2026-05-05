export const CATEGORIES = [
  { slug: "kitchen-appliances", name: "Kitchen Appliances", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=70" },
  { slug: "home-appliances", name: "Home Appliances", image: "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?w=600&q=70" },
  { slug: "tvs-entertainment", name: "TVs & Entertainment", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=70" },
  { slug: "power-backup", name: "Power Backup", image: "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?w=600&q=70" },
  { slug: "solar-systems", name: "Solar Systems", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=70" },
  { slug: "security-systems", name: "Security Systems", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=70" },
  { slug: "networking", name: "Networking", image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&q=70" },
  { slug: "office-equipment", name: "Office Equipment", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70" },
  { slug: "power-tools", name: "Power Tools", image: "https://images.unsplash.com/photo-1581147036324-c47a03a81d48?w=600&q=70" },
  { slug: "lighting-electrical", name: "Lighting & Electrical", image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=70" },
  { slug: "home-essentials", name: "Home Essentials", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=70" },
  { slug: "cooling-heating", name: "Cooling & Heating", image: "https://images.unsplash.com/photo-1631545806609-25fd2bb01865?w=600&q=70" },
  { slug: "gym-equipment", name: "Gym Equipment", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=70" },
  { slug: "bikes-ride-ons", name: "Bikes & Ride-Ons", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=70" },
  { slug: "commercial", name: "Commercial Equipment", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=70" },
  { slug: "water-solutions", name: "Water Solutions", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=70" },
  { slug: "automotive", name: "Automotive", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=70" },
  { slug: "audio", name: "Audio Equipment", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=70" },
  { slug: "smart-home", name: "Smart Home", image: "https://images.unsplash.com/photo-1558002038-bb4237b50dec?w=600&q=70" },
  { slug: "accessories", name: "Accessories", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=70" },
];

export type Product = {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description?: string;
  brand?: string;
  inStock?: boolean;
};

const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=70`;

export const PRODUCTS: Product[] = [
  { id: "p1", title: "Hisense 43\" Smart Android TV Full HD", price: 32999, oldPrice: 41999, image: img("1593359677879-a4bb92f829d1"), rating: 4.6, reviews: 248, category: "tvs-entertainment", brand: "Hisense" },
  { id: "p2", title: "Von 4-Burner Gas Cooker with Oven", price: 45500, oldPrice: 58000, image: img("1556909114-f6e7ad7d3136"), rating: 4.7, reviews: 132, category: "kitchen-appliances", brand: "Von" },
  { id: "p3", title: "Ramtons 200L Double Door Refrigerator", price: 38900, oldPrice: 47000, image: img("1571175443880-49e1d25b2bc5"), rating: 4.5, reviews: 98, category: "home-appliances", brand: "Ramtons" },
  { id: "p4", title: "Bruhm 7kg Front Load Washing Machine", price: 52400, oldPrice: 65000, image: img("1626806787461-102c1bfaaea1"), rating: 4.4, reviews: 76, category: "home-appliances", brand: "Bruhm" },
  { id: "p5", title: "Solar 300W Mono Crystalline Panel", price: 18500, oldPrice: 22000, image: img("1509391366360-2e959784a276"), rating: 4.8, reviews: 56, category: "solar-systems" },
  { id: "p6", title: "Hikvision 4-Channel CCTV Kit + DVR", price: 24900, oldPrice: 32000, image: img("1558002038-1055907df827"), rating: 4.6, reviews: 189, category: "security-systems", brand: "Hikvision" },
  { id: "p7", title: "JBL Bluetooth Wireless Soundbar 2.1", price: 15900, oldPrice: 21000, image: img("1545454675-3531b543be5d"), rating: 4.7, reviews: 312, category: "audio", brand: "JBL" },
  { id: "p8", title: "Inverter 3000W Pure Sine Wave Power", price: 27500, oldPrice: 34000, image: img("1620283085439-39620a1e21c4"), rating: 4.5, reviews: 64, category: "power-backup" },
  { id: "p9", title: "Mika 2.5HP Treadmill with Bluetooth", price: 78900, oldPrice: 95000, image: img("1534438327276-14e5300c3a48"), rating: 4.6, reviews: 41, category: "gym-equipment", brand: "Mika" },
  { id: "p10", title: "TP-Link 4G LTE MiFi Portable Router", price: 4999, oldPrice: 6500, image: img("1606904825846-647eb07f5be2"), rating: 4.3, reviews: 521, category: "networking", brand: "TP-Link" },
  { id: "p11", title: "Bosch 13mm Cordless Drill 18V Kit", price: 12400, oldPrice: 15800, image: img("1581147036324-c47a03a81d48"), rating: 4.8, reviews: 87, category: "power-tools", brand: "Bosch" },
  { id: "p12", title: "Smart WiFi Bulb 9W Multicolor RGB", price: 990, oldPrice: 1500, image: img("1558002038-bb4237b50dec"), rating: 4.4, reviews: 643, category: "smart-home" },
  { id: "p13", title: "Samsung 55\" Crystal UHD 4K Smart TV", price: 64900, oldPrice: 79900, image: img("1593784991095-a205069470b6"), rating: 4.8, reviews: 421, category: "tvs-entertainment", brand: "Samsung" },
  { id: "p14", title: "LG 1.5HP Split Air Conditioner Inverter", price: 58500, oldPrice: 68000, image: img("1631545806609-25fd2bb01865"), rating: 4.6, reviews: 92, category: "cooling-heating", brand: "LG" },
  { id: "p15", title: "HP LaserJet Pro M404 Mono Printer", price: 28500, oldPrice: 33000, image: img("1497366216548-37526070297c"), rating: 4.5, reviews: 73, category: "office-equipment", brand: "HP" },
  { id: "p16", title: "Premium LED Pendant Light 5-Bulb", price: 7400, oldPrice: 9900, image: img("1565814329452-e1efa11c5b89"), rating: 4.4, reviews: 38, category: "lighting-electrical" },
  { id: "p17", title: "Mountain Bike 26\" 21-Speed Aluminium", price: 22500, oldPrice: 28000, image: img("1571068316344-75bc76f77890"), rating: 4.6, reviews: 51, category: "bikes-ride-ons" },
  { id: "p18", title: "Water Dispenser Hot & Cold Standing", price: 14900, oldPrice: 18500, image: img("1548839140-29a749e1cf4d"), rating: 4.5, reviews: 124, category: "water-solutions" },
  { id: "p19", title: "Smart Door Lock Fingerprint + Wifi", price: 11900, oldPrice: 14900, image: img("1558002038-bb4237b50dec"), rating: 4.4, reviews: 88, category: "smart-home" },
  { id: "p20", title: "USB-C 65W Fast Charger + Cable", price: 1490, oldPrice: 2200, image: img("1583394838336-acd977736f90"), rating: 4.5, reviews: 902, category: "accessories" },
  { id: "p21", title: "Reverse Camera + 7\" Monitor Kit", price: 6900, oldPrice: 8900, image: img("1492144534655-ae79c964c9d7"), rating: 4.3, reviews: 47, category: "automotive" },
  { id: "p22", title: "Karaoke System 8\" with 2 Mics", price: 18900, oldPrice: 24000, image: img("1545454675-3531b543be5d"), rating: 4.5, reviews: 65, category: "audio" },
  { id: "p23", title: "Industrial Blender 2L Heavy Duty", price: 8900, oldPrice: 11500, image: img("1565299585323-38d6b0865b47"), rating: 4.4, reviews: 28, category: "commercial" },
  { id: "p24", title: "Yoga Mat 10mm Premium Non-Slip", price: 1890, oldPrice: 2900, image: img("1534438327276-14e5300c3a48"), rating: 4.7, reviews: 218, category: "gym-equipment" },
];

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}
export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
export function productsByCategory(slug: string) {
  return PRODUCTS.filter((p) => p.category === slug);
}

export const WHATSAPP_NUMBER = "254712407941";
export const PHONE_DISPLAY = "0712 407 941";
