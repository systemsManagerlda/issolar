"use client";

import {
  ShieldCheck,
  Truck,
  Boxes,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Fornecedor verificado",
    description: "Processo comercial seguro",
    badge: "VERIFICADO",
  },
  {
    icon: Truck,
    title: "Entrega e logística",
    description: "Cobertura em Moçambique",
    badge: "NACIONAL",
  },
  {
    icon: Boxes,
    title: "Catálogo técnico",
    description: "Equipamentos selecionados",
    badge: "PROFISSIONAL",
  },
  {
    icon: Headphones,
    title: "Suporte especializado",
    description: "Pré e pós-venda",
    badge: "SUPORTE",
  },
];

export default function TrustBar() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="container">

        {/* ======================================================
            DESKTOP / TABLET
        ====================================================== */}

        <div className="hidden divide-x divide-gray-200 md:grid md:grid-cols-4">

          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  flex
                  min-w-0
                  items-center
                  gap-3
                  px-4
                  py-4
                  transition-colors
                  hover:bg-[#fffaf0]
                "
              >

                {/* ÍCONE */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#f0d98a]
                    bg-[#fff8df]
                    text-[#b17e00]
                    transition-all
                    duration-300
                    group-hover:border-[#ffbf00]
                    group-hover:bg-[#ffbf00]
                    group-hover:text-[#171717]
                  "
                >
                  <Icon size={19} strokeWidth={2.2} />
                </div>

                {/* TEXTO */}

                <div className="min-w-0 flex-1">

                  <div className="flex items-center gap-1.5">
                    <h3
                      className="
                        truncate
                        text-[11px]
                        font-black
                        tracking-tight
                        text-[#171717]
                      "
                    >
                      {item.title}
                    </h3>

                    <CheckCircle2
                      size={12}
                      className="shrink-0 text-[#16803c]"
                    />
                  </div>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[9px]
                      font-medium
                      text-gray-500
                    "
                  >
                    {item.description}
                  </p>

                </div>

                {/* BADGE */}

                <span
                  className="
                    hidden
                    shrink-0
                    rounded-full
                    bg-gray-100
                    px-2
                    py-1
                    text-[7px]
                    font-black
                    tracking-wider
                    text-gray-500
                    xl:block
                  "
                >
                  {item.badge}
                </span>

              </div>
            );
          })}

        </div>

        {/* ======================================================
            MOBILE
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            divide-x
            divide-y
            divide-gray-200
            md:hidden
          "
        >
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  flex
                  min-w-0
                  items-center
                  gap-2.5
                  px-3
                  py-3.5
                  transition-colors
                  active:bg-[#fff8df]
                "
              >

                {/* ÍCONE */}

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
                    text-[#b17e00]
                  "
                >
                  <Icon size={16} />
                </div>

                {/* TEXTO */}

                <div className="min-w-0">

                  <div className="flex items-center gap-1">
                    <div
                      className="
                        truncate
                        text-[9px]
                        font-black
                        leading-tight
                        text-[#171717]
                      "
                    >
                      {item.title}
                    </div>

                    <CheckCircle2
                      size={9}
                      className="shrink-0 text-[#16803c]"
                    />
                  </div>

                  <div
                    className="
                      mt-0.5
                      truncate
                      text-[7px]
                      leading-tight
                      text-gray-500
                    "
                  >
                    {item.description}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}