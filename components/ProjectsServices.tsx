"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  ClipboardCheck,
  Factory,
  HardHat,
  MapPin,
  Settings,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import { projects } from "@/lib/data";

const services = [
  {
    title: "Dimensionamento",
    description: "Análise de consumo e dimensionamento do sistema.",
    icon: ClipboardCheck,
  },
  {
    title: "Engenharia",
    description: "Projeto técnico e definição da solução.",
    icon: Settings,
  },
  {
    title: "Instalação",
    description: "Montagem, configuração e comissionamento.",
    icon: HardHat,
  },
  {
    title: "Manutenção",
    description: "Acompanhamento técnico e manutenção dos sistemas.",
    icon: Wrench,
  },
];

export default function ProjectsServices() {
  return (
    <section className="section pt-0">
      <div className="container">

        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,1fr)]">

          {/* =====================================================
              PROJETOS E REFERÊNCIAS
          ====================================================== */}
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,.045)]">

            {/* Accent */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#ffbf00] via-[#ffd84d] to-transparent" />

            {/* Header */}
            <div className="border-b border-gray-100 px-4 py-4 sm:px-5">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#fff5cf] text-[#a97700]">
                    <Building2
                      size={17}
                      strokeWidth={2.2}
                    />
                  </div>

                  <div className="min-w-0">

                    <div className="flex items-center gap-2">

                      <h2 className="truncate text-[18px] font-black tracking-tight text-[#171717] sm:text-[21px]">
                        Projetos e referências
                      </h2>

                      <span className="hidden items-center gap-1 rounded-full bg-[#eef8f1] px-2 py-1 text-[7px] font-black uppercase tracking-wider text-[#16803c] sm:inline-flex">
                        <ShieldCheck size={10} />
                        Experiência
                      </span>

                    </div>

                    <p className="mt-1 text-[9px] leading-4 text-gray-500 sm:text-[10px]">
                      Aplicações residenciais, comerciais e agrícolas.
                    </p>

                  </div>

                </div>

                <Link
                  href="/projetos"
                  className="group inline-flex min-h-[36px] shrink-0 items-center justify-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 text-[9px] font-black text-[#171717] transition-all duration-200 hover:border-[#ffbf00] hover:bg-[#fffaf0] hover:text-[#8d6800] sm:min-h-[38px] sm:px-4"
                >
                  Ver todos os projetos

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>

              </div>

            </div>

            {/* =================================================
                PROJECTS GRID
            ================================================== */}
            <div className="bg-[#fafafa] p-3 sm:p-4">

              <div className="grid gap-3 sm:grid-cols-3">

                {projects.map((project) => (
                  <Link
                    href={`/projetos/${project.slug}`}
                    key={project.slug}
                    className="group overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#e4b400] hover:shadow-[0_12px_28px_rgba(0,0,0,.09)]"
                  >

                    {/* Image */}
                    <div className="relative h-36 overflow-hidden bg-gray-100 sm:h-32 lg:h-36">

                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                      {/* Project type */}
                      <div className="absolute left-2.5 top-2.5 rounded bg-[#ffbf00] px-2 py-1 text-[7px] font-black uppercase tracking-wider text-[#171717]">
                        {project.type}
                      </div>

                      {/* Location */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-[8px] font-bold text-white">
                        <MapPin size={10} />
                        {project.location}
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-2.5 right-2.5 flex h-7 w-7 translate-y-2 items-center justify-center rounded-full bg-white text-[#171717] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowRight size={13} />
                      </div>

                    </div>

                    {/* Project information */}
                    <div className="p-3">

                      <div className="flex items-start justify-between gap-2">

                        <h3 className="line-clamp-2 min-h-[30px] text-[11px] font-black leading-4 text-[#171717] transition-colors group-hover:text-[#9b7200]">
                          {project.title}
                        </h3>

                        <ChevronRight
                          size={13}
                          className="mt-0.5 shrink-0 text-gray-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#a97700]"
                        />

                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2.5">

                        <span className="text-[7px] font-black uppercase tracking-wider text-gray-400">
                          Referência IS Solar
                        </span>

                        <span className="text-[8px] font-black text-[#a97700]">
                          Ver projeto
                        </span>

                      </div>

                    </div>

                  </Link>
                ))}

              </div>

            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between border-t border-gray-100 bg-white px-4 py-3 sm:px-5">

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff5cf] text-[#a97700]">
                  <Sparkles size={13} />
                </div>

                <div className="text-[8px] text-gray-500">
                  <span className="font-black text-[#171717]">
                    Soluções adaptadas
                  </span>{" "}
                  a diferentes necessidades energéticas.
                </div>

              </div>

              <Link
                href="/cotacao"
                className="group hidden items-center gap-1 text-[9px] font-black text-gray-500 transition-colors hover:text-[#a97700] sm:inline-flex"
              >
                Iniciar projeto

                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </div>

          {/* =====================================================
              IS SOLAR SERVICES
          ====================================================== */}
          <aside className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,.045)]">

            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#303030]" />

            <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-[#fff3b8]" />

            {/* Dark header */}
            <div className="relative overflow-hidden bg-[#171717] p-5">

              {/* small yellow line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[#ffbf00]" />

              <div className="relative">

                <div className="flex items-center justify-between gap-3">

                  <div className="inline-flex items-center gap-1.5 text-[8px] font-black uppercase tracking-[0.14em] text-[#ffc400]">
                    <Sparkles size={11} />
                    IS SOLAR SERVICES
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#ffbf00]">
                    <Wrench size={16} />
                  </div>

                </div>

                <h3 className="mt-3 text-[21px] font-black leading-[1.05] tracking-tight text-white">
                  Do estudo
                  <br />
                  à instalação.
                </h3>

                <p className="mt-3 max-w-[330px] text-[9px] leading-5 text-white/60">
                  Dimensionamento, engenharia, fornecimento, instalação,
                  comissionamento e manutenção de sistemas de energia solar.
                </p>

                <Link
                  href="/servicos"
                  className="group mt-4 inline-flex min-h-[36px] items-center gap-2 rounded bg-[#ffbf00] px-4 text-[9px] font-black text-[#171717] transition-all hover:bg-[#ffd34d]"
                >
                  Conhecer serviços

                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>

            {/* =================================================
                SERVICES
            ================================================== */}
            <div className="grid grid-cols-2 gap-px bg-gray-200">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    href="/servicos"
                    key={service.title}
                    className="group relative overflow-hidden bg-white p-4 transition-all duration-300 hover:bg-[#fffaf0]"
                  >

                    {/* Hover accent */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#ffbf00] transition-all duration-300 group-hover:w-full" />

                    {/* Icon */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f5f5f5] text-gray-500 transition-all duration-300 group-hover:bg-[#fff5cf] group-hover:text-[#a97700]">
                      <Icon size={15} />
                    </div>

                    {/* Content */}
                    <div className="mt-3">

                      <div className="text-[10px] font-black text-[#171717] transition-colors group-hover:text-[#9b7200]">
                        {service.title}
                      </div>

                      <p className="mt-1 text-[8px] leading-4 text-gray-500">
                        {service.description}
                      </p>

                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      size={12}
                      className="mt-3 text-gray-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#a97700]"
                    />

                  </Link>
                );
              })}

            </div>

            {/* Bottom CTA */}
            <div className="border-t border-gray-100 bg-[#fafafa] px-4 py-3">

              <Link
                href="/cotacao"
                className="group flex min-h-[40px] items-center justify-center gap-2 rounded-md border border-gray-300 bg-white text-[9px] font-black text-[#171717] transition-all duration-200 hover:border-[#ffbf00] hover:bg-[#fff8df]"
              >
                <ClipboardCheck
                  size={13}
                  className="text-[#a97700]"
                />

                Solicitar avaliação do projeto

                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}