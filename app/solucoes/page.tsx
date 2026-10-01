import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { solutions } from "@/lib/data";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Factory,
  Home,
  Leaf,
  Droplets,
  Sun,
  Zap,
} from "lucide-react";

const solutionIcons = [
  Home,
  Factory,
  Leaf,
  Droplets,
  Sun,
  Zap,
];

export default function Solutions() {
  return (
    <>
      <Header />

      <main className="bg-[#f5f5f5]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#171717] text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#ffbf00] blur-3xl" />
            <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#ffbf00] blur-3xl" />
          </div>

          <div className="container relative py-14 sm:py-20">
            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#ffbf00]">
                <span className="h-px w-8 bg-[#ffbf00]" />
                Soluções de energia solar
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Energia solar pensada para{" "}
                <span className="text-[#ffbf00]">
                  cada necessidade.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Soluções completas de energia solar para residências,
                empresas, agricultura, indústria e projetos de diferentes
                dimensões em Moçambique.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cotacao"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-6 text-sm font-black text-[#171717] transition hover:bg-[#ffd04a]"
                >
                  Solicitar uma cotação
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/projetos"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Ver projetos
                  <ChevronRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="container py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                Soluções IS Solar
              </p>

              <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                Uma solução solar para cada aplicação
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#697078] sm:text-base">
                Desenvolvemos e fornecemos sistemas solares adaptados ao
                consumo, espaço, orçamento e objetivos de cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-3 divide-x rounded-lg border border-[#dedede] bg-white p-5">
              <div className="px-3 text-center">
                <strong className="block text-2xl font-black text-[#171717]">
                  B2C
                </strong>
                <span className="mt-1 block text-[10px] font-bold text-[#697078]">
                  Residencial
                </span>
              </div>

              <div className="px-3 text-center">
                <strong className="block text-2xl font-black text-[#171717]">
                  B2B
                </strong>
                <span className="mt-1 block text-[10px] font-bold text-[#697078]">
                  Empresas
                </span>
              </div>

              <div className="px-3 text-center">
                <strong className="block text-2xl font-black text-[#171717]">
                  EPC
                </strong>
                <span className="mt-1 block text-[10px] font-bold text-[#697078]">
                  Projetos
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="container pb-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(([name, description, image], index) => {
              const Icon = solutionIcons[index % solutionIcons.length];

              return (
                <article
                  key={name}
                  className="group overflow-hidden rounded-xl border border-[#dedede] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#ffbf00] hover:shadow-[0_14px_40px_rgba(0,0,0,.10)]"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden bg-[#eeeeee]">
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffbf00] text-[#171717] shadow-lg">
                      <Icon size={19} strokeWidth={2.5} />
                    </div>

                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#ffbf00]">
                        IS Solar
                      </span>

                      <h2 className="mt-1 text-xl font-black text-white">
                        {name}
                      </h2>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <p className="min-h-[60px] text-sm leading-6 text-[#697078]">
                      {description}
                    </p>

                    <div className="my-5 border-t border-[#eeeeee]" />

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#444]">
                        <CheckCircle2
                          size={15}
                          className="text-[#15783a]"
                        />
                        Dimensionamento personalizado
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-[#444]">
                        <CheckCircle2
                          size={15}
                          className="text-[#15783a]"
                        />
                        Equipamentos de qualidade
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-[#444]">
                        <CheckCircle2
                          size={15}
                          className="text-[#15783a]"
                        />
                        Instalação e suporte
                      </div>
                    </div>

                    <Link
                      href="/cotacao"
                      className="mt-6 flex min-h-[42px] items-center justify-between rounded-md bg-[#171717] px-4 text-xs font-black text-white transition group-hover:bg-[#ffbf00] group-hover:text-[#171717]"
                    >
                      <span>Solicitar solução</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-[#dedede] bg-white">
          <div className="container py-14 sm:py-16">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                Como trabalhamos
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#171717]">
                Do primeiro contacto à energia a funcionar
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                [
                  "01",
                  "Análise",
                  "Compreendemos o consumo, necessidades e objetivos do projeto.",
                ],
                [
                  "02",
                  "Dimensionamento",
                  "Definimos a solução técnica e os equipamentos adequados.",
                ],
                [
                  "03",
                  "Instalação",
                  "Executamos a instalação e o comissionamento do sistema.",
                ],
                [
                  "04",
                  "Suporte",
                  "Acompanhamos o sistema através de manutenção e assistência.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="relative rounded-lg border border-[#dedede] bg-[#fafafa] p-5"
                >
                  <span className="text-3xl font-black text-[#ffbf00]">
                    {number}
                  </span>

                  <h3 className="mt-4 text-base font-black text-[#171717]">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#697078]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-14 sm:py-16">
          <div className="relative overflow-hidden rounded-xl bg-[#171717] px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-[#ffbf00]/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ffbf00]">
                  Precisa de uma solução personalizada?
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Vamos dimensionar o seu projeto solar.
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Envie-nos as informações do seu projeto e a nossa equipa
                  poderá avaliar a solução mais adequada às suas necessidades.
                </p>
              </div>

              <Link
                href="/cotacao"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-7 text-sm font-black text-[#171717] transition hover:bg-[#ffd04a]"
              >
                Pedir cotação
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