"use client";

import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Zap,
  PanelTop,
  BatteryCharging,
  Sun,
  Wrench,
  Settings,
  Cable,
  ShieldCheck,
  Gauge,
} from "lucide-react";
import type { ElementType } from "react";

/* ============================================================
   TIPOS
============================================================ */

export type CategoryProduct = {
  name: string;
  image: string;
  price: string;
  badge?: string;
};

export type Category = {
  name: string;
  slug: string;
  count: string;
  icon: ElementType;
  subcategories: string[];
  products: CategoryProduct[];
};

/* ============================================================
   CATEGORIAS
============================================================ */

export const categories: Category[] = [
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
   PROPS
============================================================ */

type CategoryMenuProps = {
  activeCategory: number | null;
  setActiveCategory: (index: number | null) => void;
};

/* ============================================================
   COMPONENTE
============================================================ */

export default function CategoryMenu({
  activeCategory,
  setActiveCategory,
}: CategoryMenuProps) {
  return (
    <aside className="hidden lg:block">

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-[0_4px_18px_rgba(0,0,0,.06)]">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="relative flex h-[46px] items-center justify-between bg-[#171717] px-4 text-white">

          {/* detalhe amarelo */}

          <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#ffbf00]" />

          <div className="flex items-center gap-2">

            <div className="grid h-7 w-7 place-items-center rounded bg-[#ffbf00] text-[#171717]">

              <Zap
                size={14}
                fill="currentColor"
                strokeWidth={2.5}
              />

            </div>

            <div>

              <div className="text-[10px] font-black tracking-wide">
                COMPRAR POR CATEGORIA
              </div>

              <div className="mt-[1px] text-[7px] text-white/45">
                Encontre o equipamento ideal
              </div>

            </div>

          </div>

          {/* CONTADOR */}

          <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[8px] font-bold text-white/50">
            {categories.length}
          </div>

        </div>

        {/* ====================================================
            LISTA
        ==================================================== */}

        <nav
          aria-label="Categorias de produtos"
          className="divide-y divide-gray-100"
        >

          {categories.map((category, index) => {

            const Icon = category.icon;

            const active =
              activeCategory === index;

            return (
              <Link
                key={category.slug}
                href={`/produtos?categoria=${category.slug}`}
                onMouseEnter={() => {
                  setActiveCategory(index);
                }}
                onFocus={() => {
                  setActiveCategory(index);
                }}
                aria-current={
                  active
                    ? "true"
                    : undefined
                }
                className={`
                  group relative flex min-h-[43px]
                  items-center justify-between
                  px-3 py-1.5
                  outline-none
                  transition-all duration-150
                  ${
                    active
                      ? "bg-[#fff8d8] text-[#8d6800]"
                      : "bg-white text-gray-800 hover:bg-[#fffaf0]"
                  }
                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-[#ffbf00]
                `}
              >

                {/* indicador lateral */}

                <span
                  className={`
                    absolute bottom-0 left-0 top-0 w-[3px]
                    bg-[#ffbf00]
                    transition-opacity
                    ${
                      active
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />

                {/* CONTEÚDO */}

                <div className="flex min-w-0 items-center gap-2">

                  {/* ÍCONE */}

                  <div
                    className={`
                      grid h-7 w-7 shrink-0
                      place-items-center rounded
                      transition-all duration-150
                      ${
                        active
                          ? "bg-[#ffbf00] shadow-sm"
                          : "bg-[#f3f3f3] group-hover:bg-[#fff0b5]"
                      }
                    `}
                  >

                    <Icon
                      size={14}
                      strokeWidth={2}
                      className={
                        active
                          ? "text-[#171717]"
                          : "text-gray-500 group-hover:text-[#9b7100]"
                      }
                    />

                  </div>

                  {/* TEXTO */}

                  <div className="min-w-0">

                    <div
                      className={`
                        truncate text-[10px] leading-4
                        ${
                          active
                            ? "font-black"
                            : "font-bold"
                        }
                      `}
                    >
                      {category.name}
                    </div>

                    <div className="truncate text-[7px] leading-3 text-gray-400">
                      {category.count}
                    </div>

                  </div>

                </div>

                {/* SETA */}

                <div
                  className={`
                    ml-2 grid h-6 w-6 shrink-0
                    place-items-center rounded-full
                    transition-all duration-150
                    ${
                      active
                        ? "bg-[#ffbf00] text-[#171717]"
                        : "text-gray-300 group-hover:bg-[#fff0b5] group-hover:text-[#9b7100]"
                    }
                  `}
                >

                  <ChevronRight
                    size={13}
                    strokeWidth={2.5}
                    className={`
                      transition-transform duration-150
                      ${
                        active
                          ? "translate-x-[1px]"
                          : "group-hover:translate-x-[1px]"
                      }
                    `}
                  />

                </div>

              </Link>
            );
          })}

        </nav>

        {/* ====================================================
            TODAS AS CATEGORIAS
        ==================================================== */}

        <Link
          href="/produtos"
          onMouseEnter={() => {
            setActiveCategory(null);
          }}
          onFocus={() => {
            setActiveCategory(null);
          }}
          className="group flex min-h-[45px] items-center justify-between border-t border-gray-200 bg-[#fffdf5] px-4 text-[10px] font-black text-[#9b7100] outline-none transition-all hover:bg-[#fff4c5] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ffbf00]"
        >

          <div className="flex items-center gap-2">

            <span className="grid h-6 w-6 place-items-center rounded bg-[#ffbf00] text-[#171717]">

              <ArrowRight
                size={12}
                strokeWidth={2.5}
              />

            </span>

            <span>
              Ver todas as categorias
            </span>

          </div>

          <ChevronRight
            size={14}
            className="transition-transform duration-150 group-hover:translate-x-1"
          />

        </Link>

      </div>

    </aside>
  );
}