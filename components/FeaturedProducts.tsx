"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  PackageOpen,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function FeaturedProducts() {
  const productCount = products.length;

  return (
    <section className="section pt-0">
      <div className="container">

        {/* =====================================================
            VITRINE PRINCIPAL
        ===================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-lg
            border
            border-gray-200
            bg-white
            shadow-[0_4px_20px_rgba(0,0,0,.045)]
          "
        >

          {/* ===================================================
              LINHA SUPERIOR DE DESTAQUE
          =================================================== */}

          <div
            className="
              h-[3px]
              w-full
              bg-gradient-to-r
              from-[#ffbf00]
              via-[#ffd84d]
              to-transparent
            "
          />

          {/* ===================================================
              CABEÇALHO
          =================================================== */}

          <div
            className="
              border-b
              border-gray-100
              px-4
              py-4
              sm:px-5
              sm:py-5
              lg:px-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              {/* -----------------------------------------------
                  IDENTIDADE DA SECÇÃO
              ----------------------------------------------- */}

              <div className="min-w-0">

                <div className="flex items-center gap-2">

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-[#fff5cf]
                      text-[#a97700]
                    "
                  >
                    <Sparkles
                      size={16}
                      strokeWidth={2.2}
                    />
                  </div>

                  <div className="min-w-0">

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <h2
                        className="
                          truncate
                          text-[18px]
                          font-black
                          leading-none
                          tracking-tight
                          text-[#171717]
                          sm:text-[21px]
                        "
                      >
                        Produtos em destaque
                      </h2>

                      <span
                        className="
                          hidden
                          rounded-full
                          bg-[#f4f4f4]
                          px-2
                          py-1
                          text-[7px]
                          font-black
                          uppercase
                          tracking-wider
                          text-gray-500
                          sm:inline-flex
                        "
                      >
                        Selecionados
                      </span>
                    </div>

                    <p
                      className="
                        mt-1.5
                        text-[9px]
                        leading-4
                        text-gray-500
                        sm:text-[10px]
                      "
                    >
                      Equipamentos selecionados para projetos
                      solares residenciais, comerciais e industriais.
                    </p>

                  </div>

                </div>

              </div>

              {/* -----------------------------------------------
                  AÇÕES
              ----------------------------------------------- */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  gap-3
                  sm:justify-end
                "
              >

                {/* CONTADOR */}

                <div
                  className="
                    hidden
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-gray-200
                    bg-gray-50
                    px-3
                    py-2
                    text-[8px]
                    font-black
                    text-gray-500
                    sm:flex
                  "
                >
                  <PackageOpen size={12} />

                  <span>
                    {productCount}{" "}
                    {productCount === 1
                      ? "produto"
                      : "produtos"}
                  </span>
                </div>

                {/* CATÁLOGO */}

                <Link
                  href="/produtos"
                  className="
                    group
                    inline-flex
                    min-h-[36px]
                    items-center
                    gap-1.5
                    rounded-md
                    border
                    border-gray-200
                    bg-white
                    px-3
                    text-[9px]
                    font-black
                    text-[#171717]
                    transition-all
                    duration-200
                    hover:border-[#ffbf00]
                    hover:bg-[#fffaf0]
                    hover:text-[#8d6800]
                    sm:min-h-[38px]
                    sm:px-4
                  "
                >
                  <span className="hidden sm:inline">
                    Ver catálogo completo
                  </span>

                  <span className="sm:hidden">
                    Ver catálogo
                  </span>

                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>

              </div>

            </div>
          </div>

          {/* ===================================================
              PRODUTOS
          =================================================== */}

          <div
            className="
              bg-[#fafafa]
              p-2
              sm:p-3
              lg:p-4
            "
          >

            {products.length > 0 ? (
              <div
                className="
                  grid
                  grid-cols-2
                  gap-2
                  sm:grid-cols-3
                  sm:gap-3
                  lg:grid-cols-4
                  xl:grid-cols-5
                "
              >
                {products.map((product) => (
                  <div
                    key={product.slug}
                    className="
                      min-w-0
                      transition-transform
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    <ProductCard
                      p={product}
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* =================================================
                 ESTADO SEM PRODUTOS
              ================================================= */

              <div
                className="
                  flex
                  min-h-[260px]
                  flex-col
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-dashed
                  border-gray-300
                  bg-white
                  px-6
                  text-center
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fff5cf]
                    text-[#a97700]
                  "
                >
                  <PackageOpen size={25} />
                </div>

                <h3
                  className="
                    mt-4
                    text-sm
                    font-black
                    text-[#171717]
                  "
                >
                  Nenhum produto disponível
                </h3>

                <p
                  className="
                    mt-1
                    max-w-[340px]
                    text-[10px]
                    leading-4
                    text-gray-500
                  "
                >
                  Os produtos em destaque serão apresentados
                  aqui assim que estiverem disponíveis.
                </p>

                <Link
                  href="/produtos"
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-md
                    bg-[#ffbf00]
                    px-4
                    py-2.5
                    text-[9px]
                    font-black
                    text-[#171717]
                    transition-all
                    hover:bg-[#ffd34d]
                  "
                >
                  Explorar catálogo
                  <ArrowRight size={13} />
                </Link>

              </div>
            )}

          </div>

          {/* ===================================================
              FAIXA INFORMATIVA
          =================================================== */}

          <div
            className="
              flex
              flex-col
              gap-3
              border-t
              border-gray-100
              bg-white
              px-4
              py-3
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-5
              lg:px-6
            "
          >

            {/* INFORMAÇÃO */}

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <div
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#eef8f1]
                  text-[#16803c]
                "
              >
                <ShieldCheck
                  size={14}
                />
              </div>

              <div>
                <div
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-wide
                    text-[#171717]
                  "
                >
                  Equipamentos selecionados
                </div>

                <div
                  className="
                    mt-0.5
                    text-[8px]
                    text-gray-500
                  "
                >
                  Soluções para diferentes necessidades
                  de energia solar.
                </div>
              </div>
            </div>

            {/* LINK */}

            <Link
              href="/produtos"
              className="
                group
                inline-flex
                items-center
                gap-1
                self-start
                text-[9px]
                font-black
                text-[#555]
                transition-colors
                hover:text-[#a97700]
                sm:self-auto
              "
            >
              Explorar todo o catálogo

              <ChevronRight
                size={13}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                "
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}