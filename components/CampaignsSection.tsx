"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Droplets,
  Sparkles,
} from "lucide-react";

import { marketplaceBanners } from "@/lib/data";

export default function CampaignsSection() {
  return (
    <section className="section pt-0">
      <div className="container">

        {/* =====================================================
            CABEÇALHO
        ===================================================== */}

        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-[#ffbf00]" />

              <h2 className="title">
                Campanhas e oportunidades
              </h2>
            </div>

            <p className="sub mt-1">
              Conteúdos comerciais e soluções em destaque
            </p>
          </div>

          <Link
            href="/solucoes"
            className="
              hidden
              items-center
              gap-1
              text-[10px]
              font-black
              text-[#171717]
              transition-colors
              hover:text-[#a97700]
              sm:flex
            "
          >
            Ver todas
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* =====================================================
            GRID PRINCIPAL
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-2
            sm:grid-cols-2
            lg:grid-cols-[2fr_1fr_1fr]
          "
        >

          {/* ===================================================
              DESTAQUE PRINCIPAL
          =================================================== */}

          <Link
            href="/produtos"
            className="
              group
              relative
              min-h-[250px]
              overflow-hidden
              rounded-md
              border
              border-gray-200
              bg-[#163d25]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_10px_30px_rgba(0,0,0,.12)]
              sm:min-h-[270px]
              lg:min-h-[300px]
            "
          >

            {/* IMAGEM */}

            <Image
              src={
                marketplaceBanners[1]?.image ??
                "/market/banner-2.svg"
              }
              alt="Inversores e armazenamento"
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                50vw
              "
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/75
                via-black/40
                to-black/5
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-transparent
                to-transparent
              "
            />

            {/* CONTEÚDO */}

            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">

              <div>

                <div className="flex items-center gap-2">
                  <Sparkles
                    size={13}
                    className="text-[#ffbf00]"
                  />

                  <span
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.12em]
                      text-[#ffc400]
                    "
                  >
                    Destaque da semana
                  </span>
                </div>

                <h3
                  className="
                    mt-3
                    max-w-[330px]
                    text-2xl
                    font-black
                    leading-[1.05]
                    tracking-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Inversores e
                  <br />
                  armazenamento
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[330px]
                    text-[11px]
                    leading-5
                    text-white/70
                    sm:text-xs
                  "
                >
                  Soluções híbridas para maior
                  autonomia energética.
                </p>

              </div>

              <div>
                <span
                  className="
                    inline-flex
                    min-h-[38px]
                    items-center
                    gap-2
                    rounded
                    bg-[#ffbf00]
                    px-4
                    text-[9px]
                    font-black
                    text-[#171717]
                    transition-all
                    group-hover:bg-[#ffd34d]
                  "
                >
                  Explorar
                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </div>

            </div>

          </Link>

          {/* ===================================================
              AGRICULTURA
          =================================================== */}

          <Link
            href="/solucoes"
            className="
              group
              relative
              min-h-[250px]
              overflow-hidden
              rounded-md
              border
              border-gray-200
              bg-[#e9f0e8]
              p-5
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#c8d7c7]
              hover:shadow-[0_10px_30px_rgba(0,0,0,.08)]
              sm:min-h-[270px]
              lg:min-h-[300px]
            "
          >

            {/* ETIQUETA */}

            <div
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-white/70
                px-2.5
                py-1
                text-[8px]
                font-black
                uppercase
                tracking-wider
                text-[#806000]
              "
            >
              <Droplets size={11} />
              Agricultura
            </div>

            {/* TÍTULO */}

            <h3
              className="
                mt-3
                max-w-[220px]
                text-xl
                font-black
                leading-[1.05]
                tracking-tight
                text-[#173b25]
              "
            >
              Bombagem
              <br />
              solar
            </h3>

            <p
              className="
                mt-2
                max-w-[190px]
                text-[10px]
                leading-4
                text-gray-600
              "
            >
              Energia solar para água,
              irrigação e produção agrícola.
            </p>

            {/* IMAGEM */}

            <div
              className="
                absolute
                bottom-0
                right-0
                h-[58%]
                w-[75%]
                overflow-hidden
              "
            >
              <Image
                src="/solutions/agriculture.svg"
                alt="Bombagem solar"
                fill
                sizes="300px"
                className="
                  object-contain
                  object-right-bottom
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* LINK */}

            <div
              className="
                absolute
                bottom-5
                left-5
                z-10
                flex
                items-center
                gap-1
                text-[9px]
                font-black
                text-[#173b25]
              "
            >
              Ver solução
              <ArrowRight
                size={12}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </div>

          </Link>

          {/* ===================================================
              PROJETOS À MEDIDA
          =================================================== */}

          <Link
            href="/cotacao"
            className="
              group
              relative
              min-h-[250px]
              overflow-hidden
              rounded-md
              border
              border-[#f0d98a]
              bg-[#fff0b9]
              p-5
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_10px_30px_rgba(0,0,0,.08)]
              sm:min-h-[270px]
              lg:min-h-[300px]
            "
          >

            {/* ÍCONE */}

            <div
              className="
                absolute
                right-5
                top-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/60
                text-[#8b6700]
                transition-transform
                duration-500
                group-hover:rotate-6
                group-hover:scale-110
              "
            >
              <Calculator size={22} />
            </div>

            {/* ETIQUETA */}

            <div
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.12em]
                text-[#7b5b00]
              "
            >
              Projetos
            </div>

            {/* TÍTULO */}

            <h3
              className="
                mt-3
                max-w-[210px]
                text-xl
                font-black
                leading-[1.05]
                tracking-tight
                text-[#171717]
              "
            >
              Precisa de um
              <br />
              sistema à medida?
            </h3>

            {/* DESCRIÇÃO */}

            <p
              className="
                mt-3
                max-w-[210px]
                text-[10px]
                leading-4
                text-gray-700
              "
            >
              Envie potência, consumo ou
              equipamentos que pretende utilizar.
            </p>

            {/* BOTÃO */}

            <div
              className="
                absolute
                bottom-5
                left-5
                inline-flex
                min-h-[36px]
                items-center
                gap-2
                rounded
                bg-[#171717]
                px-4
                text-[9px]
                font-black
                text-white
                transition-all
                group-hover:bg-[#292929]
              "
            >
              Pedir cotação

              <ArrowRight
                size={12}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </div>

          </Link>

        </div>

        {/* =====================================================
            MOBILE — VER TODAS
        ===================================================== */}

        <Link
          href="/solucoes"
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
          Explorar todas as soluções
          <ArrowRight size={14} />
        </Link>

      </div>
    </section>
  );
}