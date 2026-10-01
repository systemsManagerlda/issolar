"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Search,
  FileText,
  Zap,
  ArrowRight,
  Headphones,
  CheckCircle2,
  Truck,
  PanelTop,
  BatteryCharging,
  Sun,
  Wrench,
  Cable,
  Settings,
  Gauge,
} from "lucide-react";
import { useEffect, useState } from "react";
import { marketplaceBanners } from "@/lib/data";
import CategoryMenu from "./CategoryMenu";
import MarketplaceCarousel from "./MarketplaceCarousel";

/* ============================================================
   TIPOS
============================================================ */

type Category = {
  name: string;
  slug: string;
  count: string;
  icon: React.ElementType;
  subcategories: string[];
  products: {
    name: string;
    image: string;
    price: string;
    badge?: string;
  }[];
};

/* ============================================================
   CATEGORIAS + PRODUTOS
============================================================ */

const categories: Category[] = [
  {
    name: "Painéis Solares",
    slug: "paineis",
    count: "620W · 550W · 450W",
    icon: PanelTop,
    subcategories: [
      "Painéis Monocristalinos",
      "Painéis Bifaciais",
      "Painéis 620W",
      "Painéis 550W",
      "Painéis 450W",
      "Painéis para Residências",
      "Painéis para Empresas",
    ],
    products: [
      {
        name: "Painel Solar Monocristalino 620W",
        image: "/products/panel.svg",
        price: "Sob consulta",
        badge: "Popular",
      },
      {
        name: "Painel Solar Bifacial 620W",
        image: "/products/panel.svg",
        price: "Sob consulta",
      },
      {
        name: "Painel Solar 550W",
        image: "/products/panel.svg",
        price: "Sob consulta",
      },
      {
        name: "Painel Solar 450W",
        image: "/products/panel.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Inversores",
    slug: "inversores",
    count: "Híbridos · On-Grid",
    icon: Zap,
    subcategories: [
      "Inversores Híbridos",
      "Inversores Off-Grid",
      "Inversores On-Grid",
      "Inversores Monofásicos",
      "Inversores Trifásicos",
      "Microinversores",
      "Acessórios para Inversores",
    ],
    products: [
      {
        name: "LuxPower SNA6000 6kW",
        image: "/products/inverter.svg",
        price: "Sob consulta",
        badge: "Destaque",
      },
      {
        name: "LuxPower SNA12000 12kW",
        image: "/products/inverter.svg",
        price: "Sob consulta",
      },
      {
        name: "Inversor Híbrido 10kW",
        image: "/products/inverter.svg",
        price: "Sob consulta",
      },
      {
        name: "Inversor Trifásico 12kW",
        image: "/products/inverter.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Baterias",
    slug: "baterias",
    count: "Lítio · 48V · 51.2V",
    icon: BatteryCharging,
    subcategories: [
      "Baterias de Lítio",
      "Baterias 48V",
      "Baterias 51.2V",
      "Baterias 5kWh",
      "Baterias 10kWh",
      "Baterias para Backup",
      "Sistemas de Armazenamento",
    ],
    products: [
      {
        name: "Bateria Lítio 5.12kWh 51.2V",
        image: "/products/battery.svg",
        price: "Sob consulta",
        badge: "Popular",
      },
      {
        name: "Bateria Lítio 10kWh",
        image: "/products/battery.svg",
        price: "Sob consulta",
      },
      {
        name: "Bateria 51.2V 100Ah",
        image: "/products/battery.svg",
        price: "Sob consulta",
      },
      {
        name: "Sistema de Armazenamento Solar",
        image: "/products/battery.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Bombas Solares",
    slug: "bombas",
    count: "Bombagem · Água",
    icon: Wrench,
    subcategories: [
      "Bombas Submersíveis",
      "Bombas de Superfície",
      "Bombas para Furos",
      "Bombas para Irrigação",
      "Controladores de Bombas",
      "Kits de Bombagem Solar",
    ],
    products: [
      {
        name: "Bomba Solar Submersível",
        image: "/products/pump.svg",
        price: "Sob consulta",
      },
      {
        name: "Sistema de Bombagem Solar",
        image: "/products/pump.svg",
        price: "Sob consulta",
        badge: "Agricultura",
      },
      {
        name: "Bomba Solar para Irrigação",
        image: "/products/pump.svg",
        price: "Sob consulta",
      },
      {
        name: "Controlador de Bomba Solar",
        image: "/products/inverter.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Estruturas",
    slug: "estruturas",
    count: "Telhado · Solo",
    icon: Settings,
    subcategories: [
      "Estruturas para Telhado",
      "Estruturas para Solo",
      "Estruturas para Chapas",
      "Estruturas para Telha",
      "Perfis de Alumínio",
      "Grampos e Fixadores",
    ],
    products: [
      {
        name: "Estrutura para 4 Painéis",
        image: "/products/mounting.svg",
        price: "Sob consulta",
      },
      {
        name: "Estrutura para Telhado",
        image: "/products/mounting.svg",
        price: "Sob consulta",
      },
      {
        name: "Estrutura de Solo",
        image: "/products/mounting.svg",
        price: "Sob consulta",
      },
      {
        name: "Kit de Fixação Solar",
        image: "/products/mounting.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Cabos e Acessórios",
    slug: "cabos",
    count: "DC · AC · MC4",
    icon: Cable,
    subcategories: [
      "Cabo Solar DC",
      "Cabos AC",
      "Conectores MC4",
      "Terminais",
      "Caixas de Junção",
      "Acessórios de Instalação",
    ],
    products: [
      {
        name: "Cabo Solar 6mm²",
        image: "/products/cable.svg",
        price: "Sob consulta",
      },
      {
        name: "Conector MC4",
        image: "/products/cable.svg",
        price: "Sob consulta",
      },
      {
        name: "Cabo Solar 4mm²",
        image: "/products/cable.svg",
        price: "Sob consulta",
      },
      {
        name: "Kit Conectores MC4",
        image: "/products/cable.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Kits Fotovoltaicos",
    slug: "kits",
    count: "Residencial · Comercial",
    icon: Sun,
    subcategories: [
      "Kit Solar 3kW",
      "Kit Solar 5kW",
      "Kit Solar 6kW",
      "Kit Solar 10kW",
      "Kit Solar 12kW",
      "Kits Residenciais",
      "Kits Comerciais",
    ],
    products: [
      {
        name: "Sistema Solar 5kW Chave na Mão",
        image: "/products/kit.svg",
        price: "Sob consulta",
        badge: "Mais vendido",
      },
      {
        name: "Sistema Solar 12kW Monofásico",
        image: "/products/kit.svg",
        price: "Sob consulta",
      },
      {
        name: "Sistema Solar 10kW",
        image: "/products/kit.svg",
        price: "Sob consulta",
      },
      {
        name: "Kit Solar Residencial",
        image: "/products/kit.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Sistemas Off-Grid",
    slug: "off-grid",
    count: "Autonomia · Backup",
    icon: BatteryCharging,
    subcategories: [
      "Sistemas Off-Grid",
      "Sistemas com Bateria",
      "Sistemas para Casas",
      "Sistemas para Empresas",
      "Backup Solar",
      "Energia de Emergência",
    ],
    products: [
      {
        name: "Sistema Off-Grid 5kW",
        image: "/products/kit.svg",
        price: "Sob consulta",
      },
      {
        name: "Sistema Off-Grid 6kW",
        image: "/products/kit.svg",
        price: "Sob consulta",
      },
      {
        name: "Sistema Solar com Backup",
        image: "/products/kit.svg",
        price: "Sob consulta",
      },
      {
        name: "Sistema Residencial Off-Grid",
        image: "/products/kit.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Irrigação Solar",
    slug: "irrigacao",
    count: "Agricultura · Água",
    icon: Sun,
    subcategories: [
      "Irrigação Agrícola",
      "Bombagem Solar",
      "Sistemas para Furos",
      "Sistemas para Reservatórios",
      "Projetos Agrícolas",
    ],
    products: [
      {
        name: "Sistema de Irrigação Solar",
        image: "/solutions/agriculture.svg",
        price: "Sob consulta",
        badge: "Agricultura",
      },
      {
        name: "Kit Bombagem para Agricultura",
        image: "/products/pump.svg",
        price: "Sob consulta",
      },
      {
        name: "Sistema Solar para Furo",
        image: "/products/pump.svg",
        price: "Sob consulta",
      },
      {
        name: "Bomba Solar Agrícola",
        image: "/products/pump.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Proteções Elétricas",
    slug: "protecao",
    count: "DPS · Disjuntores",
    icon: ShieldCheck,
    subcategories: [
      "DPS DC",
      "DPS AC",
      "Disjuntores DC",
      "Disjuntores AC",
      "Quadros Elétricos",
      "Proteção de Sistemas",
    ],
    products: [
      {
        name: "DPS DC Fotovoltaico",
        image: "/products/protection.svg",
        price: "Sob consulta",
      },
      {
        name: "Disjuntor DC Solar",
        image: "/products/protection.svg",
        price: "Sob consulta",
      },
      {
        name: "Quadro de Proteção Solar",
        image: "/products/protection.svg",
        price: "Sob consulta",
      },
      {
        name: "DPS AC Fotovoltaico",
        image: "/products/protection.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Monitorização",
    slug: "monitorizacao",
    count: "Wi-Fi · Smart",
    icon: Gauge,
    subcategories: [
      "Monitorização Wi-Fi",
      "Smart Meters",
      "CTs",
      "Monitorização de Inversores",
      "Sistemas Inteligentes",
    ],
    products: [
      {
        name: "Smart Meter Solar",
        image: "/products/monitor.svg",
        price: "Sob consulta",
      },
      {
        name: "Wi-Fi Dongle",
        image: "/products/monitor.svg",
        price: "Sob consulta",
      },
      {
        name: "Sistema de Monitorização",
        image: "/products/monitor.svg",
        price: "Sob consulta",
      },
      {
        name: "CT Sensor",
        image: "/products/monitor.svg",
        price: "Sob consulta",
      },
    ],
  },

  {
    name: "Geradores Híbridos",
    slug: "geradores",
    count: "Backup · Energia",
    icon: Zap,
    subcategories: [
      "Geradores Diesel",
      "Geradores Híbridos",
      "Backup Solar",
      "Integração com Inversores",
      "Sistemas de Emergência",
    ],
    products: [
      {
        name: "Sistema Híbrido Solar + Gerador",
        image: "/products/generator.svg",
        price: "Sob consulta",
      },
      {
        name: "Gerador para Sistema Solar",
        image: "/products/generator.svg",
        price: "Sob consulta",
      },
      {
        name: "Sistema de Backup Híbrido",
        image: "/products/generator.svg",
        price: "Sob consulta",
      },
      {
        name: "Integração Gerador + Inversor",
        image: "/products/generator.svg",
        price: "Sob consulta",
      },
    ],
  },
];

/* ============================================================
   MARKETPLACE HERO
============================================================ */

export default function MarketplaceHero() {

  const [activeSlide, setActiveSlide] = useState(0);

  /*
   * Categoria atualmente sobrevoada pelo mouse.
   * null = nenhuma categoria selecionada.
   */
  const [activeCategory, setActiveCategory] =
    useState<number | null>(null);

  /* ==========================================================
     CAROUSEL
  ========================================================== */

  useEffect(() => {

    const timer = setInterval(() => {

      setActiveSlide((current) =>
        current === marketplaceBanners.length - 1
          ? 0
          : current + 1
      );

    }, 5000);

    return () => clearInterval(timer);

  }, []);

  const nextSlide = () => {

    setActiveSlide((current) =>
      current === marketplaceBanners.length - 1
        ? 0
        : current + 1
    );

  };

  const previousSlide = () => {

    setActiveSlide((current) =>
      current === 0
        ? marketplaceBanners.length - 1
        : current - 1
    );

  };

  return (
    <section className="border-b border-gray-200 bg-[#e9eaeb] py-3 lg:py-4">

      <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-4 lg:px-6 2xl:px-8">

        {/* ====================================================
            HERO GRID
        ==================================================== */}

        <div className="grid gap-3 lg:grid-cols-[235px_minmax(0,1fr)_285px]">

          {/* ==================================================
              CATEGORIAS
          ================================================== */}

          <div
            className="relative hidden lg:block"
            onMouseLeave={() => setActiveCategory(null)}
          >

            <CategoryMenu
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            {/* ==================================================
                MEGA MENU
            ================================================== */}

            {activeCategory !== null && (

              <div
                className="absolute left-[calc(100%+8px)] top-0 z-50 w-[min(850px,calc(100vw-300px))] overflow-hidden rounded-md border border-gray-200 bg-white shadow-[0_15px_45px_rgba(0,0,0,.18)]"
                onMouseEnter={() =>
                  setActiveCategory(activeCategory)
                }
              >

                <div className="grid grid-cols-[230px_1fr]">

                  {/* ------------------------------------------
                      SUBCATEGORIAS
                  ------------------------------------------ */}

                  <div className="border-r bg-[#fafafa] p-4">

                    <div className="mb-3">

                      <div className="text-[9px] font-black uppercase tracking-wider text-[#a87800]">
                        Categoria
                      </div>

                      <div className="mt-1 text-sm font-black">
                        {categories[activeCategory].name}
                      </div>

                    </div>

                    <div className="space-y-1">

                      {categories[
                        activeCategory
                      ].subcategories.map((subcategory) => (

                        <Link
                          key={subcategory}
                          href={`/produtos?categoria=${categories[activeCategory].slug}`}
                          className="flex items-center justify-between rounded px-2 py-2 text-[10px] text-gray-600 transition-colors hover:bg-[#fff2b8] hover:text-[#8b6500]"
                        >

                          <span>
                            {subcategory}
                          </span>

                          <ChevronRight
                            size={11}
                            className="text-gray-300"
                          />

                        </Link>

                      ))}

                    </div>

                    <Link
                      href={`/produtos?categoria=${categories[activeCategory].slug}`}
                      className="mt-4 flex items-center gap-2 border-t pt-4 text-[9px] font-black text-[#a87800]"
                    >

                      Ver todos os produtos

                      <ArrowRight size={12} />

                    </Link>

                  </div>

                  {/* ------------------------------------------
                      PRODUTOS
                  ------------------------------------------ */}

                  <div className="p-4">

                    <div className="mb-3 flex items-center justify-between">

                      <div>

                        <div className="text-xs font-black">
                          Produtos em destaque
                        </div>

                        <div className="mt-1 text-[9px] text-gray-400">
                          Seleção IS Solar
                        </div>

                      </div>

                      <Link
                        href={`/produtos?categoria=${categories[activeCategory].slug}`}
                        className="text-[9px] font-black text-[#a87800]"
                      >
                        Ver todos →
                      </Link>

                    </div>

                    <div className="grid grid-cols-4 gap-3">

                      {categories[
                        activeCategory
                      ].products.map((product) => (

                        <Link
                          key={product.name}
                          href="/produtos"
                          className="group overflow-hidden rounded border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-[#ffbf00] hover:shadow-md"
                        >

                          <div className="relative flex aspect-square items-center justify-center bg-[#f7f7f5] p-3">

                            {product.badge && (

                              <span className="absolute left-2 top-2 z-10 rounded bg-[#ffbf00] px-1.5 py-1 text-[7px] font-black uppercase">
                                {product.badge}
                              </span>

                            )}

                            <Image
                              src={product.image}
                              alt={product.name}
                              width={130}
                              height={130}
                              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />

                          </div>

                          <div className="p-2">

                            <div className="line-clamp-2 min-h-[28px] text-[9px] font-bold leading-4">
                              {product.name}
                            </div>

                            <div className="mt-2 text-[9px] text-gray-400">
                              Preço
                            </div>

                            <div className="text-[10px] font-black">
                              {product.price}
                            </div>

                          </div>

                        </Link>

                      ))}

                    </div>

                    {/* BANNER INFERIOR */}

                    <div className="mt-4 flex items-center justify-between rounded bg-[#171717] px-4 py-3 text-white">

                      <div className="flex items-center gap-3">

                        <div className="grid h-8 w-8 place-items-center rounded bg-[#ffbf00] text-[#171717]">
                          <Zap size={15} />
                        </div>

                        <div>

                          <div className="text-[9px] font-black">
                            Precisa de ajuda?
                          </div>

                          <div className="text-[8px] text-white/50">
                            A nossa equipa pode dimensionar o seu sistema.
                          </div>

                        </div>

                      </div>

                      <Link
                        href="/cotacao"
                        className="rounded bg-[#ffbf00] px-3 py-2 text-[8px] font-black text-[#171717]"
                      >
                        PEDIR COTAÇÃO
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            )}

          </div>

          {/* ==================================================
              CAROUSEL
          ================================================== */}

          <MarketplaceCarousel />

          {/* ==================================================
                PAINEL DIREITO
            ================================================== */}

            <aside className="flex flex-col gap-3">
            {/* ==================================================
                BANNER PROMOCIONAL
            ================================================== */}

            <Link
                href="/produtos"
                className="group block overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#ffbf00] hover:shadow-md"
            >

                <div className="relative w-full overflow-hidden bg-white">

                <Image
                    src="/Banner whatsapp.png"
                    alt="IS Solar - Loja física e online"
                    width={750}
                    height={1700}
                    className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 285px"
                />

                {/* Overlay subtil no hover */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                </div>

            </Link>
            </aside>

        </div>

        {/* ====================================================
            MOBILE CATEGORIAS
        ==================================================== */}

        <div className="mt-3 overflow-x-auto lg:hidden">

          <div className="flex min-w-max gap-2">

            {categories.map((category) => (

              <Link
                key={category.slug}
                href={`/produtos?categoria=${category.slug}`}
                className="rounded border border-gray-200 bg-white px-4 py-3 shadow-sm"
              >

                <div className="whitespace-nowrap text-[10px] font-black">
                  {category.name}
                </div>

                <div className="mt-1 whitespace-nowrap text-[8px] text-gray-400">
                  {category.count}
                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}