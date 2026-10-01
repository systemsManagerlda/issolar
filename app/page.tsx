import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import {categories,products,solutions,projects,marketplaceBanners,brands} from "@/lib/data";
import {ChevronRight,ShieldCheck,Truck,Zap,Factory,Home as HomeIcon,Droplets,BatteryCharging,SunMedium,ArrowRight,Calculator,FileText,Boxes,Headphones,Percent,Users,Globe2} from "lucide-react";
import MarketplaceHero from "@/components/MarketplaceHero";
import TrustBar from "@/components/TrustBar";
import SolarMarket from "@/components/SolarMarket";
import CampaignsSection from "@/components/CampaignsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import SolutionMatrix from "@/components/SolutionMatrix";
import BestSellers from "@/components/BestSellers";
import BrandsSection from "@/components/BrandsSection";
import ProjectsServices from "@/components/ProjectsServices";
import RFQSection from "@/components/RFQSection";

const visual=["/products/panel.svg","/products/inverter.svg","/products/battery.svg","/solutions/agriculture.svg","/solutions/home.svg","/products/inverter.svg"];

export default function Home(){
 return <><Header/><main>

  {/* 1 — MARKETPLACE HERO */}
  <MarketplaceHero />

  {/* 2 — TRUST + NUMBERS */}
  <TrustBar />

  {/* 3 — CATEGORY PORTAL */}
  <SolarMarket />

  {/* 4 — CAMPAIGN HUB */}
  <CampaignsSection />

  {/* 5 — FLASH PRODUCTS */}
  <FeaturedProducts />

  {/* 6 — SOLUTION MATRIX */}
  <SolutionMatrix />

  {/* 7 — PRODUCT INTELLIGENCE / BEST SELLERS */}
  <BestSellers />

  {/* 8 — BRANDS */}
  <BrandsSection />

  {/* 9 — PROJECTS + SERVICES */}
  <ProjectsServices />

  {/* 10 — RFQ WORKSPACE */}
  <RFQSection />

 </main><Footer/></>
}