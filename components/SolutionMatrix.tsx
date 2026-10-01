"use client";

import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  Factory,
  HomeIcon,
  Droplets,
  ShieldCheck,
  SunMedium,
  Zap,
  ChevronRight,
} from "lucide-react";

type Solution = {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
  category: string;
};

const solutions: Solution[] = [
  {
    name: "Residencial",
    description: "Casa, condomínio e backup",
    href: "/solucoes",
    icon: HomeIcon,
    category: "Habitação",
  },
  {
    name: "Comercial",
    description: "Lojas, escritórios e serviços",
    href: "/solucoes",
    icon: Building2,
    category: "Negócios",
  },
  {
    name: "Industrial",
    description: "Cargas elevadas e produção",
    href: "/solucoes",
    icon: Factory,
    category: "Indústria",
  },
  {
    name: "Agricultura",
    description: "Bombagem e irrigação",
    href: "/solucoes",
    icon: Droplets,
    category: "Agro",
  },
  {
    name: "Off-Grid",
    description: "Autonomia sem rede",
    href: "/solucoes",
    icon: BatteryCharging,
    category: "Autonomia",
  },
  {
    name: "Institucional",
    description: "ONGs, escolas e instituições",
    href: "/solucoes",
    icon: ShieldCheck,
    category: "Instituições",
  },
  {
    name: "Armazenamento",
    description: "Baterias e backup",
    href: "/solucoes",
    icon: BatteryCharging,
    category: "Energia",
  },
  {
    name: "Projetos especiais",
    description: "Soluções personalizadas",
    href: "/cotacao",
    icon: SunMedium,
    category: "Sob medida",
  },
];

export default function SolutionMatrix() {
  return (
    <section className="section pt-0">
      <div className="container">

        {/* =====================================================
            CABEÇALHO
        ===================================================== */}

        <div
          className="
            mb-4
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>

            <div className="flex items-center gap-2">

              <span
                className="
                  h-5
                  w-1
                  rounded-full
                  bg-[#ffbf00]
                "
              />

              <h2
                className="
                  text-[20px]
                  font-black
                  tracking-tight
                  text-[#171717]
                  sm:text-[22px]
                "
              >
                Soluções por aplicação
              </h2>

            </div>

            <p
              className="
                mt-1
                text-[10px]
                leading-4
                text-gray-500
                sm:text-[11px]
              "
            >
              Escolha a solução de acordo com o seu cenário
              de utilização.
            </p>

          </div>

          {/* LINK DESKTOP */}

          <Link
            href="/solucoes"
            className="
              group
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
            Ver todas as soluções

            <ArrowRight
              size={13}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

        {/* =====================================================
            MATRIZ DE SOLUÇÕES
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-2
            sm:grid-cols-3
            lg:grid-cols-4
          "
        >

          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <Link
                key={solution.name}
                href={solution.href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-md
                  border
                  border-gray-200
                  bg-white
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#e4b400]
                  hover:shadow-[0_10px_28px_rgba(0,0,0,.08)]
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
                    h-[2px]
                    origin-left
                    scale-x-0
                    bg-[#ffbf00]
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />

                {/* =================================================
                    CABEÇALHO DO CARD
                ================================================= */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
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
                      bg-[#fff7d7]
                      text-[#9b7200]
                      transition-all
                      duration-300
                      group-hover:border-[#ffbf00]
                      group-hover:bg-[#ffbf00]
                      group-hover:text-[#171717]
                    "
                  >
                    <Icon
                      size={19}
                      strokeWidth={2}
                    />
                  </div>

                  {/* SETA */}

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-50
                      text-gray-400
                      transition-all
                      duration-300
                      group-hover:bg-[#fff5cf]
                      group-hover:text-[#9b7200]
                    "
                  >
                    <ArrowRight
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>

                </div>

                {/* =================================================
                    INFORMAÇÃO
                ================================================= */}

                <div className="mt-4">

                  {/* CATEGORIA */}

                  <div
                    className="
                      mb-1
                      text-[7px]
                      font-black
                      uppercase
                      tracking-[0.14em]
                      text-[#b17e00]
                    "
                  >
                    {solution.category}
                  </div>

                  {/* TÍTULO */}

                  <h3
                    className="
                      text-[12px]
                      font-black
                      leading-tight
                      text-[#171717]
                      transition-colors
                      group-hover:text-[#9b7200]
                      sm:text-[13px]
                    "
                  >
                    {solution.name}
                  </h3>

                  {/* DESCRIÇÃO */}

                  <p
                    className="
                      mt-1.5
                      min-h-[30px]
                      text-[9px]
                      leading-4
                      text-gray-500
                      sm:text-[10px]
                    "
                  >
                    {solution.description}
                  </p>

                </div>

                {/* =================================================
                    LINK INTERNO
                ================================================= */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-1
                    text-[8px]
                    font-black
                    uppercase
                    tracking-wide
                    text-gray-400
                    transition-colors
                    group-hover:text-[#9b7200]
                  "
                >
                  Explorar solução

                  <ChevronRight
                    size={11}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  />
                </div>

              </Link>
            );
          })}

        </div>

        {/* =====================================================
            CTA INFERIOR
        ===================================================== */}

        <div
          className="
            mt-3
            overflow-hidden
            rounded-md
            border
            border-[#ead38a]
            bg-[#fff9e5]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              px-4
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-5
            "
          >

            {/* TEXTO */}

            <div className="flex items-center gap-3">

              <div
                className="
                  hidden
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#ffbf00]
                  text-[#171717]
                  sm:flex
                "
              >
                <Zap size={17} />
              </div>

              <div>

                <div
                  className="
                    text-[10px]
                    font-black
                    text-[#171717]
                  "
                >
                  Não encontrou a solução que procura?
                </div>

                <div
                  className="
                    mt-0.5
                    text-[8px]
                    leading-4
                    text-gray-600
                    sm:text-[9px]
                  "
                >
                  Fale com a nossa equipa para desenvolver
                  uma solução personalizada.
                </div>

              </div>

            </div>

            {/* BOTÃO */}

            <Link
              href="/cotacao"
              className="
                group
                inline-flex
                min-h-[38px]
                items-center
                justify-center
                gap-2
                rounded-md
                bg-[#171717]
                px-4
                text-[9px]
                font-black
                text-white
                transition-all
                hover:bg-[#292929]
                sm:shrink-0
              "
            >
              Solicitar projeto personalizado

              <ArrowRight
                size={13}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>
        </div>

        {/* =====================================================
            MOBILE
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
            text-[9px]
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