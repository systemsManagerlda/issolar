"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileText,
  MessageSquare,
  Send,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const benefits = [
  "Lista de equipamentos",
  "Especificações técnicas",
  "Projetos personalizados",
];

export default function RFQSection() {
  return (
    <section className="section">
      <div className="container">

        <div className="relative overflow-hidden rounded-xl bg-[#171717] text-white shadow-[0_12px_40px_rgba(0,0,0,.16)]">

          {/* =====================================================
              DECORATIVE BACKGROUND
          ====================================================== */}

          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/5" />

          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#ffbf00]/10" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#ffbf00]/5 blur-3xl" />

          {/* Yellow accent */}
          <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#ffbf00]" />

          <div className="relative grid lg:grid-cols-[minmax(0,1fr)_390px]">

            {/* =================================================
                MAIN RFQ AREA
            ================================================== */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">

              {/* Label */}
              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ffbf00] text-[#171717]">
                  <FileText size={14} />
                </div>

                <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#ffc400] sm:text-[9px]">
                  RFQ • Request for Quotation
                </span>

              </div>

              {/* Heading */}
              <h2 className="mt-5 max-w-[650px] text-[26px] font-black leading-[1.05] tracking-tight text-white sm:text-[31px] md:text-[36px]">
                Não encontrou exatamente
                <br className="hidden sm:block" />
                o que procura?
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-[650px] text-[10px] leading-5 text-white/60 sm:text-[11px] sm:leading-6 md:text-xs">
                Envie a sua lista de equipamentos, especificações ou necessidades
                energéticas. A nossa equipa comercial pode preparar uma proposta
                adequada ao seu projeto.
              </p>

              {/* =================================================
                  BENEFITS
              ================================================== */}
              <div className="mt-6 grid gap-2 sm:grid-cols-3">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-colors hover:border-[#ffbf00]/30 hover:bg-white/[0.06]"
                  >
                    <CheckCircle2
                      size={13}
                      className="shrink-0 text-[#ffbf00]"
                    />

                    <span className="text-[8px] font-bold text-white/70 sm:text-[9px]">
                      {benefit}
                    </span>
                  </div>
                ))}

              </div>

              {/* =================================================
                  BUTTONS
              ================================================== */}
              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">

                <Link
                  href="/cotacao"
                  className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-5 text-[10px] font-black text-[#171717] transition-all duration-300 hover:bg-[#ffd34d] hover:shadow-[0_8px_25px_rgba(255,191,0,.2)]"
                >
                  <Send
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />

                  Solicitar cotação

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/contactos"
                  className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-5 text-[10px] font-black text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <MessageSquare
                    size={14}
                    className="text-white/60 transition-colors group-hover:text-[#ffbf00]"
                  />

                  Falar com especialista

                  <ArrowRight
                    size={12}
                    className="text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </Link>

              </div>

              {/* =================================================
                  TRUST LINE
              ================================================== */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5">

                <div className="flex items-center gap-1.5">
                  <BadgeCheck
                    size={13}
                    className="text-[#ffbf00]"
                  />

                  <span className="text-[8px] font-bold text-white/50">
                    Atendimento comercial
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Zap
                    size={13}
                    className="text-[#ffbf00]"
                  />

                  <span className="text-[8px] font-bold text-white/50">
                    Soluções solares
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Building2
                    size={13}
                    className="text-[#ffbf00]"
                  />

                  <span className="text-[8px] font-bold text-white/50">
                    Projetos empresariais
                  </span>
                </div>

              </div>

            </div>

            {/* =================================================
                ENTERPRISE PANEL
            ================================================== */}
            <div className="relative overflow-hidden bg-[#ffbf00] p-6 text-[#171717] sm:p-8 md:p-10">

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/15" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-black/5" />

              <div className="relative">

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#171717] text-[#ffbf00]">
                  <Users
                    size={21}
                    strokeWidth={2}
                  />
                </div>

                {/* Label */}
                <div className="mt-5 text-[8px] font-black uppercase tracking-[0.16em] text-black/50">
                  Para empresas e grandes projetos
                </div>

                {/* Heading */}
                <h3 className="mt-2 text-[22px] font-black leading-[1.05] tracking-tight">
                  Uma solução para
                  <br />
                  o seu projeto.
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-[320px] text-[10px] leading-5 text-black/60">
                  Fornecimento de equipamentos, projetos personalizados,
                  soluções completas e pedidos em volume.
                </p>

                {/* =================================================
                    ENTERPRISE FEATURES
                ================================================== */}
                <div className="mt-6 space-y-2">

                  <div className="flex items-center gap-2">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/50">
                      <CheckCircle2 size={12} />
                    </div>

                    <span className="text-[9px] font-black">
                      Pedidos em volume
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/50">
                      <CheckCircle2 size={12} />
                    </div>

                    <span className="text-[9px] font-black">
                      Projetos personalizados
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/50">
                      <CheckCircle2 size={12} />
                    </div>

                    <span className="text-[9px] font-black">
                      Fornecimento de equipamentos
                    </span>

                  </div>

                </div>

                {/* CTA */}
                <Link
                  href="/cotacao"
                  className="group mt-7 inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#171717] px-5 text-[10px] font-black text-white transition-all duration-300 hover:bg-[#292929] hover:shadow-[0_8px_20px_rgba(0,0,0,.18)]"
                >
                  Começar pedido

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>

          </div>

          {/* =====================================================
              BOTTOM STRIP
          ====================================================== */}
          <div className="relative border-t border-black/10 bg-[#121212] px-6 py-3 sm:px-8">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-2">

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbf00]/10 text-[#ffbf00]">
                  <Sparkles size={11} />
                </div>

                <span className="text-[8px] font-bold text-white/40">
                  Precisa de uma solução diferente? Fale com a equipa IS Solar.
                </span>

              </div>

              <Link
                href="/contactos"
                className="group inline-flex items-center gap-1 text-[8px] font-black text-white/60 transition-colors hover:text-[#ffbf00]"
              >
                Contactar equipa comercial

                <ArrowRight
                  size={11}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}