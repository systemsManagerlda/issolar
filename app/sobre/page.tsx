import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Leaf,
  ShieldCheck,
  Sun,
  Users,
  Zap,
} from "lucide-react";

export default function About() {
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
                IS Solar Moçambique
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Energia solar com{" "}
                <span className="text-[#ffbf00]">
                  visão de futuro.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Desenvolvemos e disponibilizamos soluções de energia solar
                pensadas para responder às necessidades de famílias,
                empresas, instituições, agricultores e comunidades em
                Moçambique.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cotacao"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-6 text-sm font-black text-[#171717] transition hover:bg-[#ffd04a]"
                >
                  Falar com a IS Solar
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/projetos"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Conhecer os nossos projetos
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="container py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-stretch">
            <div className="rounded-xl border border-[#dedede] bg-white p-7 sm:p-9">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                Quem somos
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                Uma empresa orientada para soluções de energia
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-[#697078] sm:text-base">
                <p>
                  A <strong className="text-[#171717]">IS Solar</strong> atua
                  na comercialização, dimensionamento e implementação de
                  soluções de energia solar para diferentes aplicações.
                </p>

                <p>
                  Trabalhamos com soluções para os setores residencial,
                  comercial, industrial e agrícola, incluindo aplicações
                  conectadas à rede, sistemas híbridos e soluções
                  independentes da rede elétrica.
                </p>

                <p>
                  O nosso trabalho combina equipamentos adequados,
                  conhecimento técnico e acompanhamento ao longo das
                  diferentes etapas de um projeto.
                </p>
              </div>
            </div>

            {/* MISSION */}
            <div className="relative overflow-hidden rounded-xl bg-[#171717] p-7 text-white sm:p-9">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#ffbf00]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffbf00] text-[#171717]">
                  <Sun size={23} />
                </div>

                <span className="mt-7 block text-xs font-black uppercase tracking-[0.16em] text-[#ffbf00]">
                  A nossa missão
                </span>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Tornar a energia solar mais acessível e útil.
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
                  Facilitar o acesso a soluções de energia solar de qualidade
                  para famílias, empresas, instituições e comunidades em
                  Moçambique, contribuindo para uma utilização mais eficiente
                  e sustentável da energia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section className="border-y border-[#dedede] bg-white">
          <div className="container py-14 sm:py-16">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                Onde atuamos
              </span>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                Soluções para diferentes necessidades
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697078]">
                Adaptamos a solução à aplicação, às necessidades energéticas
                e às características de cada projeto.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Residencial",
                  text: "Soluções para casas e propriedades que procuram geração e maior autonomia energética.",
                  icon: Users,
                },
                {
                  title: "Comercial",
                  text: "Sistemas destinados a empresas, lojas, escritórios e outros espaços comerciais.",
                  icon: Factory,
                },
                {
                  title: "Industrial",
                  text: "Soluções de maior escala para necessidades energéticas de instalações industriais.",
                  icon: Zap,
                },
                {
                  title: "Agrícola",
                  text: "Aplicações solares para agricultura, bombagem de água e outras necessidades rurais.",
                  icon: Leaf,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#dedede] bg-[#fafafa] p-5 transition hover:-translate-y-1 hover:border-[#ffbf00] hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,.06)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fff4c7] text-[#b17e00]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 text-base font-black text-[#171717]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#697078]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="container py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                A nossa forma de trabalhar
              </span>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                Técnica, qualidade e acompanhamento
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697078]">
                Procuramos construir relações de longo prazo através de
                soluções adequadas, comunicação clara e acompanhamento
                técnico.
              </p>

              <Link
                href="/servicos"
                className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#171717] transition hover:text-[#b17e00]"
              >
                Conhecer os nossos serviços
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Qualidade",
                  text: "Selecionamos soluções e equipamentos adequados às necessidades de cada aplicação.",
                },
                {
                  title: "Eficiência",
                  text: "Procuramos soluções que utilizem os recursos energéticos de forma racional.",
                },
                {
                  title: "Engenharia",
                  text: "O dimensionamento técnico é parte fundamental das nossas soluções.",
                },
                {
                  title: "Acompanhamento",
                  text: "Mantemos o foco no suporte antes, durante e depois da implementação.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#dedede] bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[#15783a]"
                    />

                    <h3 className="text-sm font-black text-[#171717]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-[#697078]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POSITIONING */}
        <section className="bg-[#171717] text-white">
          <div className="container py-14 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#ffbf00]">
                  A nossa visão
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Contribuir para um futuro energético mais sustentável.
                </h2>
              </div>

              <div className="border-l border-white/10 pl-6">
                <p className="text-sm leading-7 text-white/60 sm:text-base">
                  Acreditamos no potencial da energia solar como parte de uma
                  matriz energética mais eficiente, sustentável e acessível.
                  Por isso, procuramos desenvolver soluções que façam sentido
                  para as necessidades reais dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-14 sm:py-16">
          <div className="relative overflow-hidden rounded-xl bg-[#ffbf00] px-6 py-10 sm:px-10 sm:py-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#6e5200]">
                  IS Solar Moçambique
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                  Vamos encontrar a solução certa para o seu projeto.
                </h2>

                <p className="mt-4 text-sm leading-6 text-[#4f4100]">
                  Fale connosco e apresente as suas necessidades de energia.
                  A nossa equipa está preparada para avaliar o projeto.
                </p>
              </div>

              <Link
                href="/cotacao"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-md bg-[#171717] px-7 text-sm font-black text-white transition hover:bg-[#292929]"
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