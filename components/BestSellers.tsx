"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  PackageSearch,
  Percent,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { products } from "@/lib/data";

export default function BestSellers() {

  // ============================================================
  // APENAS 4 PRODUTOS EM DESTAQUE
  // ============================================================

  const featuredSlugs = [
    "inversor-luxpower-5kw-48v",
    "inversor-luxpower-12kw-48v",
    "inversor-deye-12kw-48v",
    "inversor-deye-20kw-high-voltage",
  ];

  const displayProducts = featuredSlugs
    .map((slug) =>
      products.find((product) => product.slug === slug)
    )
    .filter(
      (product): product is (typeof products)[number] =>
        Boolean(product)
    );

  // ============================================================
  // SCROLL
  // ============================================================

  const productsRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const element = productsRef.current;

    if (!element) return;

    const maxScrollLeft =
      element.scrollWidth - element.clientWidth;

    setCanScrollLeft(element.scrollLeft > 5);

    setCanScrollRight(
      maxScrollLeft > 5 &&
        element.scrollLeft < maxScrollLeft - 5
    );
  }, []);

  // ============================================================
  // SCROLL ESQUERDA
  // ============================================================

  const scrollLeft = () => {
    const element = productsRef.current;

    if (!element) return;

    element.scrollBy({
      left: -480,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 350);
  };

  // ============================================================
  // SCROLL DIREITA
  // ============================================================

  const scrollRight = () => {
    const element = productsRef.current;

    if (!element) return;

    element.scrollBy({
      left: 480,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 350);
  };

  // ============================================================
  // MONITORAR SCROLL
  // ============================================================

  useEffect(() => {
    const element = productsRef.current;

    if (!element) return;

    updateScrollButtons();

    element.addEventListener(
      "scroll",
      updateScrollButtons,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScrollButtons
    );

    return () => {
      element.removeEventListener(
        "scroll",
        updateScrollButtons
      );

      window.removeEventListener(
        "resize",
        updateScrollButtons
      );
    };
  }, [updateScrollButtons]);

  // ============================================================
  // TECLADO
  // ============================================================

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollLeft();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollRight();
    }
  };

  return (
    <section className="section pt-0">
      <div className="container">

        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_310px]">

          {/* =====================================================
              PRODUTOS EM DESTAQUE
          ====================================================== */}

          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,.045)]">

            {/* Linha amarela */}

            <div className="h-[3px] w-full bg-gradient-to-r from-[#ffbf00] via-[#ffd84d] to-transparent" />

            {/* HEADER */}

            <div className="border-b border-gray-100 px-4 py-4 sm:px-5">

              <div className="flex items-center justify-between gap-4">

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#fff5cf] text-[#a97700]">

                    <Sparkles
                      size={17}
                      strokeWidth={2.2}
                    />

                  </div>

                  <div className="min-w-0">

                    <div className="flex items-center gap-2">

                      <h2 className="truncate text-[18px] font-black tracking-tight text-[#171717] sm:text-[21px]">
                        Produtos em destaque
                      </h2>

                      <span className="hidden rounded-full bg-[#fff5cf] px-2 py-1 text-[7px] font-black uppercase tracking-wider text-[#8d6800] sm:inline-flex">
                        Destaques
                      </span>

                    </div>

                    <p className="mt-1 text-[9px] leading-4 text-gray-500 sm:text-[10px]">
                      Confira alguns dos nossos principais equipamentos.
                    </p>

                  </div>

                </div>

                <Link
                  href="/produtos"
                  className="group hidden shrink-0 items-center gap-1 text-[9px] font-black text-[#171717] transition-colors hover:text-[#a97700] sm:flex"
                >
                  Ver catálogo

                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>

              </div>

            </div>

            {/* =================================================
                CARROSSEL
            ================================================== */}

            <div className="relative bg-[#fafafa]">

              {/* BOTÃO ESQUERDO */}

              <button
                type="button"
                aria-label="Produtos anteriores"
                disabled={!canScrollLeft}
                onClick={scrollLeft}
                className={`
                  absolute
                  left-2
                  top-1/2
                  z-20
                  hidden
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  bg-white
                  shadow-md
                  md:flex
                  ${
                    canScrollLeft
                      ? "cursor-pointer border-gray-200 text-gray-700 hover:border-[#ffbf00] hover:bg-[#fff8df] hover:text-[#9b7200]"
                      : "cursor-not-allowed border-gray-100 text-gray-300 opacity-50"
                  }
                `}
              >
                <ChevronLeft size={18} />
              </button>

              {/* BOTÃO DIREITO */}

              <button
                type="button"
                aria-label="Próximos produtos"
                disabled={!canScrollRight}
                onClick={scrollRight}
                className={`
                  absolute
                  right-2
                  top-1/2
                  z-20
                  hidden
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  bg-white
                  shadow-md
                  md:flex
                  ${
                    canScrollRight
                      ? "cursor-pointer border-gray-200 text-gray-700 hover:border-[#ffbf00] hover:bg-[#fff8df] hover:text-[#9b7200]"
                      : "cursor-not-allowed border-gray-100 text-gray-300 opacity-50"
                  }
                `}
              >
                <ChevronRight size={18} />
              </button>

              {/* =================================================
                  LISTA DOS 4 PRODUTOS
              ================================================== */}

              <div
                ref={productsRef}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className="flex gap-3 overflow-x-auto p-3 outline-none scrollbar-thin sm:p-4"
              >

                {displayProducts.map((product) => (

                  <Link
                    key={product.slug}
                    href={`/produtos/${product.slug}`}
                    className="group w-[220px] shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#e4b400] hover:shadow-[0_10px_25px_rgba(0,0,0,.09)]"
                  >

                    {/* IMAGEM */}

                    <div className="relative h-40 overflow-hidden bg-[#f6f6f4] p-4">

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="220px"
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* BADGE */}

                      <div className="absolute left-2 top-2 rounded bg-[#ffbf00] px-2 py-1 text-[7px] font-black uppercase tracking-wide text-[#171717]">
                        Destaque
                      </div>

                      {/* SETA */}

                      <div className="absolute bottom-2 right-2 flex h-7 w-7 translate-y-2 items-center justify-center rounded-full bg-white text-[#171717] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                        <ArrowRight size={13} />

                      </div>

                    </div>

                    {/* INFORMAÇÕES */}

                    <div className="p-3">

                      <div className="mb-1 text-[8px] font-black uppercase tracking-wider text-[#b17e00]">
                        {product.category}
                      </div>

                      <h3 className="line-clamp-2 min-h-[30px] text-[11px] font-black leading-4 text-[#171717] transition-colors group-hover:text-[#9b7200]">
                        {product.name}
                      </h3>

                      {/* POTÊNCIA */}

                      {product.power && (
                        <div className="mt-2 text-[8px] font-bold text-gray-500">

                          Potência:

                          <span className="ml-1 font-black text-[#171717]">
                            {product.power}{" "}
                            {product.powerUnit}
                          </span>

                        </div>
                      )}

                      {/* PREÇO */}

                      <div className="mt-3 flex items-end justify-between gap-2">

                        <div>

                          <div className="text-[7px] uppercase tracking-wide text-gray-400">
                            Preço
                          </div>

                          <div className="mt-0.5 text-xs font-black text-[#171717]">
                            {product.price || "Consultar"}
                          </div>

                        </div>

                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4f4f4] text-gray-500 transition-colors group-hover:bg-[#fff5cf] group-hover:text-[#9b7200]">

                          <ChevronRight size={12} />

                        </div>

                      </div>

                    </div>

                  </Link>

                ))}

              </div>

              {/* =================================================
                  INDICADOR MOBILE
              ================================================== */}

              <div className="flex items-center justify-center gap-1.5 pb-3 md:hidden">

                <span
                  className={`h-1.5 rounded-full transition-all ${
                    canScrollLeft
                      ? "w-1.5 bg-gray-300"
                      : "w-5 bg-[#ffbf00]"
                  }`}
                />

                <span
                  className={`h-1.5 rounded-full transition-all ${
                    canScrollRight
                      ? "w-5 bg-[#ffbf00]"
                      : "w-1.5 bg-gray-300"
                  }`}
                />

              </div>

              {/* CATÁLOGO MOBILE */}

              <div className="border-t border-gray-100 px-3 py-3 sm:hidden">

                <Link
                  href="/produtos"
                  className="flex min-h-[40px] items-center justify-center gap-2 rounded-md border border-gray-300 bg-white text-[9px] font-black text-[#171717] transition-all hover:border-[#ffbf00] hover:bg-[#fff8df]"
                >
                  Ver catálogo completo
                  <ArrowRight size={13} />
                </Link>

              </div>

            </div>

            {/* =================================================
                FOOTER
            ================================================== */}

            <div className="flex flex-col gap-3 border-t border-gray-100 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef8f1] text-[#16803c]">
                  <ShieldCheck size={14} />
                </div>

                <div>

                  <div className="text-[8px] font-black uppercase tracking-wide text-[#171717]">
                    Equipamentos selecionados
                  </div>

                  <div className="mt-0.5 text-[8px] text-gray-500">
                    Consulte disponibilidade, especificações e condições comerciais.
                  </div>

                </div>

              </div>

              <Link
                href="/produtos"
                className="group inline-flex items-center gap-1 self-start text-[9px] font-black text-gray-500 transition-colors hover:text-[#a97700] sm:self-auto"
              >
                Explorar produtos

                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </div>

          {/* =====================================================
              RFQ
          ====================================================== */}

          <aside className="relative overflow-hidden rounded-lg border border-[#e4c45b] bg-white shadow-[0_4px_20px_rgba(0,0,0,.045)]">

            <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#fff3b8]" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-[#fff8df]" />

            <div className="relative p-5">

              <div className="flex items-start justify-between gap-3">

                <div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5cf] px-2.5 py-1 text-[7px] font-black uppercase tracking-wider text-[#8d6800]">

                    <Percent size={10} />

                    RFQ

                  </div>

                  <h3 className="mt-3 text-[17px] font-black leading-tight tracking-tight text-[#171717]">
                    Precisa de vários equipamentos?
                  </h3>

                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#171717] text-[#ffbf00]">
                  <FileText size={19} />
                </div>

              </div>

              <p className="mt-3 text-[10px] leading-5 text-gray-500">
                Envie a sua lista de equipamentos, quantidades ou especificações
                e receba uma proposta comercial personalizada.
              </p>

              <div className="mt-4 space-y-2">

                <div className="flex items-center gap-2 rounded-md bg-[#fafafa] px-3 py-2.5">

                  <PackageSearch
                    size={14}
                    className="shrink-0 text-[#a97700]"
                  />

                  <span className="text-[9px] font-bold text-gray-600">
                    Aceitamos listas de equipamentos
                  </span>

                </div>

                <div className="flex items-center gap-2 rounded-md bg-[#fafafa] px-3 py-2.5">

                  <FileText
                    size={14}
                    className="shrink-0 text-[#a97700]"
                  />

                  <span className="text-[9px] font-bold text-gray-600">
                    Especificações técnicas e projetos
                  </span>

                </div>

                <div className="flex items-center gap-2 rounded-md bg-[#fafafa] px-3 py-2.5">

                  <ShieldCheck
                    size={14}
                    className="shrink-0 text-[#16803c]"
                  />

                  <span className="text-[9px] font-bold text-gray-600">
                    Atendimento comercial especializado
                  </span>

                </div>

              </div>

              <Link
                href="/cotacao"
                className="group mt-5 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-4 text-[10px] font-black text-[#171717] transition-all duration-300 hover:bg-[#ffd34d] hover:shadow-[0_6px_18px_rgba(255,191,0,.25)]"
              >

                <Send
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />

                Enviar lista para cotação

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />

              </Link>

              <div className="mt-5 border-t border-gray-100 pt-4">

                <div className="flex items-start gap-2">

                  <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffbf00]" />

                  <p className="text-[8px] leading-4 text-gray-500">
                    Ideal para instalações residenciais, comerciais,
                    industriais, agricultura e projetos especiais.
                  </p>

                </div>

              </div>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ffbf00]" />

          </aside>

        </div>

      </div>
    </section>
  );
}