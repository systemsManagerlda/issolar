"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Factory,
  Sparkles,
} from "lucide-react";

import { brands } from "@/lib/data";

export default function BrandsSection() {
  return (
    <section className="section pt-0">
      <div className="container">

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,.045)]">

          {/* =====================================================
              TOP ACCENT
          ====================================================== */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#ffbf00] via-[#ffd84d] to-transparent" />

          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="border-b border-gray-100 px-4 py-4 sm:px-5 lg:px-6">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex min-w-0 items-center gap-3">

                {/* Icon */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#fff5cf] text-[#a97700]">
                  <Factory
                    size={17}
                    strokeWidth={2.2}
                  />
                </div>

                <div className="min-w-0">

                  <div className="flex items-center gap-2">

                    <h2 className="truncate text-[18px] font-black tracking-tight text-[#171717] sm:text-[21px]">
                      Marcas e fabricantes
                    </h2>

                    <span className="hidden items-center gap-1 rounded-full bg-[#eef8f1] px-2 py-1 text-[7px] font-black uppercase tracking-wider text-[#16803c] sm:inline-flex">
                      <BadgeCheck size={10} />
                      Selecionadas
                    </span>

                  </div>

                  <p className="mt-1 text-[9px] leading-4 text-gray-500 sm:text-[10px]">
                    Tecnologias e fabricantes para diferentes faixas de projeto.
                  </p>

                </div>

              </div>

              <Link
                href="/produtos"
                className="group inline-flex min-h-[36px] shrink-0 items-center justify-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 text-[9px] font-black text-[#171717] transition-all duration-200 hover:border-[#ffbf00] hover:bg-[#fffaf0] hover:text-[#8d6800] sm:min-h-[38px] sm:px-4"
              >
                Explorar marcas

                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </div>

          {/* =====================================================
              BRANDS GRID
          ====================================================== */}
          <div className="bg-[#fafafa] p-3 sm:p-4 lg:p-5">

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">

              {brands.map((brand, index) => (
                <Link
                  key={brand}
                  href={`/produtos?marca=${encodeURIComponent(brand)}`}
                  className="group relative overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#e4b400] hover:shadow-[0_10px_25px_rgba(0,0,0,.08)]"
                >

                  {/* Top hover line */}
                  <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-[#ffbf00] transition-transform duration-300 group-hover:scale-x-100" />

                  {/* Brand area */}
                  <div className="flex h-[82px] items-center justify-center px-3 sm:h-[90px]">

                    <div className="flex flex-col items-center justify-center">

                      {/* Manufacturer icon */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f5] text-gray-400 transition-all duration-300 group-hover:bg-[#fff5cf] group-hover:text-[#a97700]">
                        <Factory
                          size={17}
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Brand name */}
                      <div className="mt-2 text-center text-[10px] font-black text-gray-600 transition-colors duration-300 group-hover:text-[#171717] sm:text-[11px]">
                        {brand}
                      </div>

                    </div>

                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-center gap-1 border-t border-gray-100 bg-[#fcfcfc] py-2 text-[7px] font-black uppercase tracking-wider text-gray-400 transition-colors duration-300 group-hover:bg-[#fffaf0] group-hover:text-[#a97700]">
                    Ver produtos
                    <ChevronRight
                      size={10}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>

                </Link>
              ))}

            </div>

          </div>

          {/* =====================================================
              FOOTER / INFO
          ====================================================== */}
          <div className="flex flex-col gap-3 border-t border-gray-100 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-6">

            <div className="flex items-center gap-2">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff5cf] text-[#a97700]">
                <Sparkles size={13} />
              </div>

              <div>

                <div className="text-[8px] font-black uppercase tracking-wide text-[#171717]">
                  Tecnologia para diferentes projetos
                </div>

                <div className="mt-0.5 text-[8px] text-gray-500">
                  Explore equipamentos e soluções por fabricante.
                </div>

              </div>

            </div>

            <Link
              href="/produtos"
              className="group inline-flex items-center gap-1 self-start text-[9px] font-black text-gray-500 transition-colors hover:text-[#a97700] sm:self-auto"
            >
              Ver todos os fabricantes

              <ArrowRight
                size={12}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}