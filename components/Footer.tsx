"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sun,
  Truck,
  Wrench,
  Youtube,
  Zap,
} from "lucide-react";

const shopLinks = [
  {
    label: "Todos os produtos",
    href: "/produtos",
  },
  {
    label: "Painéis solares",
    href: "/produtos?categoria=Painéis%20Solares",
  },
  {
    label: "Inversores",
    href: "/produtos?categoria=Inversores",
  },
  {
    label: "Baterias",
    href: "/produtos?categoria=Baterias",
  },
  {
    label: "Bombas solares",
    href: "/produtos?categoria=Bombas%20Solares",
  },
];

const solutionLinks = [
  {
    label: "Residencial",
    href: "/solucoes",
  },
  {
    label: "Comercial",
    href: "/solucoes",
  },
  {
    label: "Industrial",
    href: "/solucoes",
  },
  {
    label: "Agricultura",
    href: "/solucoes",
  },
  {
    label: "Off-Grid",
    href: "/solucoes",
  },
];

const companyLinks = [
  {
    label: "Sobre nós",
    href: "/sobre",
  },
  {
    label: "Projetos",
    href: "/projetos",
  },
  {
    label: "Serviços",
    href: "/servicos",
  },
  {
    label: "Marcas",
    href: "/produtos",
  },
  {
    label: "Contactos",
    href: "/contactos",
  },
];

export default function Footer() {
  return (
    <footer className="mt-8 bg-[#171717] text-white">

      {/* =========================================================
          TOP CTA
      ========================================================== */}
      <div className="border-b border-white/10 bg-[#202020]">

        <div className="container">

          <div className="flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-4">

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ffbf00] text-[#171717] sm:flex">
                <Zap
                  size={22}
                  strokeWidth={2.2}
                />
              </div>

              <div>

                <div className="text-[11px] font-black uppercase tracking-[0.12em] text-[#ffbf00]">
                  Energia solar para o seu projeto
                </div>

                <h2 className="mt-1 text-[18px] font-black tracking-tight text-white sm:text-[20px]">
                  Precisa de uma solução personalizada?
                </h2>

                <p className="mt-1 max-w-xl text-[9px] leading-4 text-white/50 sm:text-[10px]">
                  Fale com a nossa equipa e receba orientação para encontrar
                  equipamentos e soluções adequadas às suas necessidades.
                </p>

              </div>

            </div>

            <Link
              href="/cotacao"
              className="group inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-5 text-[9px] font-black text-[#171717] transition-all duration-300 hover:bg-[#ffd34d] hover:shadow-[0_8px_25px_rgba(255,191,0,.18)]"
            >
              Solicitar cotação

              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}
      <div className="border-b border-white/10">

        <div className="container py-10 lg:py-12">

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1.2fr]">

            {/* ===================================================
                COMPANY
            ==================================================== */}
            <div>

              <Link
                href="/"
                className="inline-block"
              >
                <div className="rounded-md bg-white px-3 py-2">
                  <Image
                    src="/brand/logo.png"
                    alt="IS Solar Moçambique"
                    width={190}
                    height={70}
                    className="h-auto w-[145px]"
                  />
                </div>
              </Link>

              <p className="mt-5 max-w-[320px] text-[10px] leading-5 text-white/50">
                Soluções de energia solar para residências, empresas,
                agricultura, indústria e projetos especiais em Moçambique.
              </p>

              {/* Trust */}
              <div className="mt-5 flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffbf00]/10 text-[#ffbf00]">
                  <ShieldCheck size={14} />
                </div>

                <div>
                  <div className="text-[8px] font-black uppercase tracking-wide text-white">
                    Soluções profissionais
                  </div>

                  <div className="mt-0.5 text-[8px] text-white/40">
                    Equipamentos, projetos e suporte técnico
                  </div>
                </div>

              </div>

              {/* Social */}
              <div className="mt-6 flex items-center gap-2">

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#ffbf00] hover:bg-[#ffbf00] hover:text-[#171717]"
                >
                  <Facebook size={14} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#ffbf00] hover:bg-[#ffbf00] hover:text-[#171717]"
                >
                  <Instagram size={14} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#ffbf00] hover:bg-[#ffbf00] hover:text-[#171717]"
                >
                  <Linkedin size={14} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#ffbf00] hover:bg-[#ffbf00] hover:text-[#171717]"
                >
                  <Youtube size={14} />
                </a>

              </div>

            </div>

            {/* ===================================================
                COMPRAR
            ==================================================== */}
            <div>

              <div className="flex items-center gap-2">

                <div className="h-4 w-1 rounded-full bg-[#ffbf00]" />

                <h3 className="text-[10px] font-black uppercase tracking-wider text-white">
                  Comprar
                </h3>

              </div>

              <div className="mt-4 space-y-2.5">

                {shopLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-1 text-[9px] text-white/45 transition-colors hover:text-[#ffbf00]"
                  >
                    <ChevronRight
                      size={11}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    />

                    <span>{item.label}</span>
                  </Link>
                ))}

              </div>

            </div>

            {/* ===================================================
                SOLUÇÕES
            ==================================================== */}
            <div>

              <div className="flex items-center gap-2">

                <div className="h-4 w-1 rounded-full bg-[#ffbf00]" />

                <h3 className="text-[10px] font-black uppercase tracking-wider text-white">
                  Soluções
                </h3>

              </div>

              <div className="mt-4 space-y-2.5">

                {solutionLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-1 text-[9px] text-white/45 transition-colors hover:text-[#ffbf00]"
                  >
                    <ChevronRight
                      size={11}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    />

                    <span>{item.label}</span>
                  </Link>
                ))}

              </div>

            </div>

            {/* ===================================================
                EMPRESA
            ==================================================== */}
            <div>

              <div className="flex items-center gap-2">

                <div className="h-4 w-1 rounded-full bg-[#ffbf00]" />

                <h3 className="text-[10px] font-black uppercase tracking-wider text-white">
                  Empresa
                </h3>

              </div>

              <div className="mt-4 space-y-2.5">

                {companyLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-1 text-[9px] text-white/45 transition-colors hover:text-[#ffbf00]"
                  >
                    <ChevronRight
                      size={11}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    />

                    <span>{item.label}</span>
                  </Link>
                ))}

              </div>

            </div>

            {/* ===================================================
                CONTACTOS
            ==================================================== */}
            <div>

              <div className="flex items-center gap-2">

                <div className="h-4 w-1 rounded-full bg-[#ffbf00]" />

                <h3 className="text-[10px] font-black uppercase tracking-wider text-white">
                  Contactos
                </h3>

              </div>

              <div className="mt-4 space-y-4">

                {/* Location */}
                <div className="flex items-start gap-2.5">

                  <MapPin
                    size={14}
                    className="mt-0.5 shrink-0 text-[#ffbf00]"
                  />

                  <div>

                    <div className="text-[9px] font-black text-white">
                      Moçambique
                    </div>

                    <div className="mt-0.5 text-[8px] leading-4 text-white/40">
                      Maputo, Moçambique
                    </div>

                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-start gap-2.5">

                  <Phone
                    size={14}
                    className="mt-0.5 shrink-0 text-[#ffbf00]"
                  />

                  <div>

                    <div className="text-[9px] font-black text-white">
                      Atendimento
                    </div>

                    <div className="mt-0.5 text-[8px] text-white/40">
                      Contacte a nossa equipa comercial
                    </div>

                  </div>

                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5">

                  <Mail
                    size={14}
                    className="mt-0.5 shrink-0 text-[#ffbf00]"
                  />

                  <div>

                    <div className="text-[9px] font-black text-white">
                      Email
                    </div>

                    <div className="mt-0.5 break-all text-[8px] text-white/40">
                      comercial@issolar.co.mz
                    </div>

                  </div>

                </div>

                {/* WhatsApp */}
                <Link
                  href="/contactos"
                  className="group flex min-h-[36px] items-center justify-center gap-2 rounded-md border border-[#ffbf00]/30 bg-[#ffbf00]/5 text-[8px] font-black text-[#ffbf00] transition-all hover:bg-[#ffbf00] hover:text-[#171717]"
                >
                  <MessageCircle size={13} />

                  Falar com a IS Solar

                  <ArrowRight
                    size={11}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          SERVICE STRIP
      ========================================================== */}
      <div className="border-b border-white/10 bg-[#141414]">

        <div className="container">

          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

            {/* Delivery */}
            <div className="flex items-center gap-3 px-1 py-4 sm:px-5">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#ffbf00]">
                <Truck size={15} />
              </div>

              <div>
                <div className="text-[8px] font-black uppercase tracking-wide text-white">
                  Cobertura nacional
                </div>

                <div className="mt-0.5 text-[8px] text-white/35">
                  Soluções para diferentes regiões
                </div>
              </div>

            </div>

            {/* Technical */}
            <div className="flex items-center gap-3 px-1 py-4 sm:px-5">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#ffbf00]">
                <Wrench size={15} />
              </div>

              <div>
                <div className="text-[8px] font-black uppercase tracking-wide text-white">
                  Suporte técnico
                </div>

                <div className="mt-0.5 text-[8px] text-white/35">
                  Apoio antes e depois da instalação
                </div>
              </div>

            </div>

            {/* Company */}
            <div className="flex items-center gap-3 px-1 py-4 sm:px-5">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#ffbf00]">
                <Building2 size={15} />
              </div>

              <div>
                <div className="text-[8px] font-black uppercase tracking-wide text-white">
                  Projetos profissionais
                </div>

                <div className="mt-0.5 text-[8px] text-white/35">
                  Residencial, comercial e industrial
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================== */}
      <div className="bg-[#101010]">

        <div className="container">

          <div className="flex flex-col gap-3 py-4 text-[8px] sm:flex-row sm:items-center sm:justify-between">

            <div className="text-white/35">
              © {new Date().getFullYear()}{" "}
              <span className="font-black text-white/60">
                IS Solar Moçambique
              </span>
              . Todos os direitos reservados.
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/30">

              <Link
                href="/termos"
                className="transition-colors hover:text-[#ffbf00]"
              >
                Termos e condições
              </Link>

              <span className="h-3 w-px bg-white/10" />

              <Link
                href="/privacidade"
                className="transition-colors hover:text-[#ffbf00]"
              >
                Política de privacidade
              </Link>

              <span className="h-3 w-px bg-white/10" />

              <span className="font-bold text-white/40">
                PT-MZ
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}