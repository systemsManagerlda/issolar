import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Sun,
  Zap,
} from "lucide-react";

export default function Projects() {
  return (
    <>
      <Header />

      <main className="bg-[#f5f5f5]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#171717] text-white">
          <div className="absolute inset-0">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#ffbf00]/10 blur-3xl" />
            <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#ffbf00]/10 blur-3xl" />
          </div>

          <div className="container relative py-14 sm:py-20">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#ffbf00]">
                <span className="h-px w-8 bg-[#ffbf00]" />
                Portfólio IS Solar
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Projetos que transformam{" "}
                <span className="text-[#ffbf00]">
                  energia solar em soluções.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Conheça alguns dos projetos e aplicações que representam o
                nosso trabalho na implementação de soluções de energia solar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cotacao"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-6 text-sm font-black text-[#171717] transition hover:bg-[#ffd04a]"
                >
                  Falar sobre o meu projeto
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/solucoes"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Conhecer soluções
                  <ChevronRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO / STATS */}
        <section className="container py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_440px] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                Experiência e soluções
              </p>

              <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                Energia solar para diferentes realidades
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#697078] sm:text-base">
                Cada projeto possui necessidades próprias. Por isso,
                trabalhamos com soluções adaptadas ao tipo de aplicação,
                consumo energético e características de cada local.
              </p>
            </div>

            <div className="grid grid-cols-3 divide-x rounded-lg border border-[#dedede] bg-white p-5">
              <div className="px-3 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff4c7]">
                  <Sun size={17} className="text-[#b17e00]" />
                </div>

                <strong className="mt-2 block text-xs font-black text-[#171717]">
                  Solar
                </strong>

                <span className="mt-1 block text-[10px] text-[#697078]">
                  Energia limpa
                </span>
              </div>

              <div className="px-3 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1f7f2]">
                  <Zap size={17} className="text-[#15783a]" />
                </div>

                <strong className="mt-2 block text-xs font-black text-[#171717]">
                  Eficiência
                </strong>

                <span className="mt-1 block text-[10px] text-[#697078]">
                  Energia otimizada
                </span>
              </div>

              <div className="px-3 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f5f5]">
                  <CheckCircle2 size={17} className="text-[#171717]" />
                </div>

                <strong className="mt-2 block text-xs font-black text-[#171717]">
                  Qualidade
                </strong>

                <span className="mt-1 block text-[10px] text-[#697078]">
                  Soluções profissionais
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="container pb-16">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                Portfólio
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#171717] sm:text-3xl">
                Projetos e aplicações
              </h2>
            </div>

            <span className="text-xs font-bold text-[#697078]">
              {projects.length}{" "}
              {projects.length === 1 ? "projeto apresentado" : "projetos apresentados"}
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                href={`/projetos/${project.slug}`}
                key={project.slug}
                className="group overflow-hidden rounded-xl border border-[#dedede] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#ffbf00] hover:shadow-[0_14px_40px_rgba(0,0,0,.10)]"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden bg-[#eeeeee]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-md bg-[#ffbf00] px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-[#171717]">
                      {project.type}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/80">
                      <MapPin size={13} className="text-[#ffbf00]" />
                      {project.location}
                    </div>

                    <h3 className="mt-1 text-xl font-black leading-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.14em] text-[#b17e00]">
                        Projeto solar
                      </span>

                      <p className="mt-1 text-xs text-[#697078]">
                        Solução adaptada à aplicação e ao local.
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] transition group-hover:bg-[#ffbf00]">
                      <ArrowRight
                        size={16}
                        className="text-[#171717]"
                      />
                    </div>
                  </div>

                  <div className="mt-5 border-t border-[#eeeeee] pt-4">
                    <span className="text-xs font-black text-[#171717]">
                      Ver detalhes do projeto
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-[#dedede] bg-white">
          <div className="container py-14 sm:py-16">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                Da ideia à implementação
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#171717]">
                Desenvolvemos cada projeto de forma estruturada
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697078]">
                O processo começa com a compreensão das necessidades do
                cliente e evolui para o dimensionamento, implementação e
                acompanhamento da solução.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                [
                  "01",
                  "Necessidades",
                  "Analisamos o objetivo e o perfil de consumo do projeto.",
                ],
                [
                  "02",
                  "Dimensionamento",
                  "Definimos a configuração adequada para a aplicação.",
                ],
                [
                  "03",
                  "Implementação",
                  "Executamos a instalação e o comissionamento da solução.",
                ],
                [
                  "04",
                  "Acompanhamento",
                  "Prestamos assistência e suporte técnico após a instalação.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-lg border border-[#dedede] bg-[#fafafa] p-5"
                >
                  <span className="text-3xl font-black text-[#ffbf00]">
                    {number}
                  </span>

                  <h3 className="mt-4 text-sm font-black text-[#171717]">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#697078]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-14 sm:py-16">
          <div className="relative overflow-hidden rounded-xl bg-[#171717] px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ffbf00]/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ffbf00]">
                  O seu projeto pode ser o próximo
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Tem uma necessidade de energia solar?
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Fale com a IS Solar e solicite uma solução dimensionada de
                  acordo com as características do seu projeto.
                </p>
              </div>

              <Link
                href="/cotacao"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-7 text-sm font-black text-[#171717] transition hover:bg-[#ffd04a]"
              >
                Solicitar cotação
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}