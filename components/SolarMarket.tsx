"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

type Category = {
  name: string;
  description: string;
  image: string;
};

const categories: Category[] = [
  {
    name: "Painéis Solares",
    description: "Painéis fotovoltaicos e módulos de alta eficiência",
    image: "/products/painelSolar.png",
  },
  {
    name: "Inversores",
    description: "Inversores on-grid, off-grid e híbridos",
    image: "/products/inverter.png",
  },
  {
    name: "Baterias",
    description: "Armazenamento de energia para maior autonomia",
    image: "/products/battery.png",
  },
  {
    name: "Bombas Solares",
    description: "Bombagem solar para agricultura e abastecimento",
    image: "/solutions/agriculture.png",
  },
  {
    name: "Sistemas Residenciais",
    description: "Soluções completas para casas e habitações",
    image: "/solutions/home.png",
  },
  {
    name: "Acessórios",
    description: "Cabos, estruturas, proteções e acessórios",
    image: "/products/acessorios.png",
  },
];

export default function SolarMarket() {
  return (
    <section className="section bg-[#f2f3f3]">
      <div className="container">

        {/* =====================================================
            CABEÇALHO
        ===================================================== */}

        <div className="mb-4 flex items-end justify-between gap-4">

          <div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-[#ffbf00]" />

              <h2 className="title">
                Explore o mercado solar
              </h2>
            </div>

            <p className="sub mt-1">
              Categorias de equipamentos e soluções para energia solar
            </p>
          </div>

          <Link
            href="/produtos"
            className="
              hidden
              shrink-0
              items-center
              gap-1
              text-[11px]
              font-black
              text-[#171717]
              transition-colors
              hover:text-[#b17e00]
              sm:flex
            "
          >
            Ver catálogo
            <ArrowRight size={13} />
          </Link>

        </div>

        {/* =====================================================
            CATEGORIAS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-2
            sm:grid-cols-3
            lg:grid-cols-6
          "
        >

          {categories.map((category) => (
            <Link
              href={`/produtos?categoria=${encodeURIComponent(
                category.name
              )}`}
              key={category.name}
              className="
                group
                relative
                overflow-hidden
                rounded-md
                border
                border-gray-200
                bg-white
                p-3
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#e5b300]
                hover:shadow-[0_8px_24px_rgba(0,0,0,.08)]
              "
            >

              {/* =================================================
                  INDICADOR SUPERIOR
              ================================================= */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-0.5
                  origin-left
                  scale-x-0
                  bg-[#ffbf00]
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                "
              />

              {/* =================================================
                  IMAGEM
              ================================================= */}

              <div
                className="
                  relative
                  mx-auto
                  aspect-square
                  max-w-[145px]
                  overflow-hidden
                  rounded-md
                  bg-[#f7f7f5]
                  p-4
                  transition-all
                  duration-300
                  group-hover:bg-[#fff8df]
                "
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="
                    (max-width: 640px) 45vw,
                    (max-width: 1024px) 30vw,
                    16vw
                  "
                  className="
                    object-contain
                    p-3
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* ÍCONE */}

                <div
                  className="
                    absolute
                    bottom-2
                    right-2
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#171717]
                    opacity-0
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <ChevronRight size={13} />
                </div>
              </div>

              {/* =================================================
                  INFORMAÇÃO
              ================================================= */}

              <div className="mt-3">

                <h3
                  className="
                    text-center
                    text-[11px]
                    font-black
                    leading-tight
                    text-[#171717]
                    transition-colors
                    group-hover:text-[#a97700]
                    sm:text-xs
                  "
                >
                  {category.name}
                </h3>

                <p
                  className="
                    mt-1
                    line-clamp-2
                    min-h-[28px]
                    text-center
                    text-[8px]
                    leading-3.5
                    text-gray-500
                    sm:text-[9px]
                  "
                >
                  {category.description}
                </p>

              </div>

              {/* =================================================
                  LINK
              ================================================= */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-1
                  text-[8px]
                  font-black
                  uppercase
                  tracking-wide
                  text-[#b17e00]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
              >
                Explorar
                <ArrowRight size={10} />
              </div>

            </Link>
          ))}

        </div>

        {/* =====================================================
            BOTÃO MOBILE
        ===================================================== */}

        <Link
          href="/produtos"
          className="
            mt-3
            flex
            min-h-[42px]
            items-center
            justify-center
            gap-2
            rounded-md
            border
            border-gray-300
            bg-white
            text-[10px]
            font-black
            text-[#171717]
            transition-all
            hover:border-[#ffbf00]
            hover:bg-[#fff8df]
            sm:hidden
          "
        >
          Ver catálogo completo
          <ArrowRight size={14} />
        </Link>

      </div>
    </section>
  );
}