import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  HardHat,
  MonitorCheck,
  Settings,
  ShieldCheck,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Dimensionamento e estudo energético",
    description:
      "Análise das necessidades energéticas para definir uma solução solar adequada ao perfil de consumo.",
    icon: ClipboardCheck,
  },
  {
    title: "Engenharia de sistemas fotovoltaicos",
    description:
      "Desenvolvimento da configuração técnica do sistema, considerando equipamentos, desempenho e aplicação.",
    icon: Zap,
  },
  {
    title: "Fornecimento de equipamentos",
    description:
      "Fornecimento de painéis solares, inversores, baterias, estruturas, cabos e acessórios.",
    icon: Sun,
  },
  {
    title: "Instalação e montagem",
    description:
      "Execução da montagem e instalação dos sistemas de acordo com os requisitos do projeto.",
    icon: HardHat,
  },
  {
    title: "Comissionamento",
    description:
      "Verificação, configuração e preparação do sistema para entrada em operação.",
    icon: Settings,
  },
  {
    title: "Manutenção preventiva e corretiva",
    description:
      "Serviços de manutenção destinados a preservar o desempenho e a disponibilidade do sistema.",
    icon: Wrench,
  },
  {
    title: "Monitorização de sistemas",
    description:
      "Acompanhamento do funcionamento dos sistemas para facilitar a identificação de ocorrências.",
    icon: MonitorCheck,
  },
  {
    title: "Consultoria energética",
    description:
      "Orientação técnica para apoiar decisões relacionadas com geração, armazenamento e utilização de energia.",
    icon: ShieldCheck,
  },
];

export default function Services() {
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
                Serviços IS Solar
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Do projeto à operação,{" "}
                <span className="text-[#ffbf00]">
                  cuidamos da sua solução solar.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Uma abordagem integrada para desenvolver, fornecer,
                instalar, acompanhar e manter sistemas de energia solar
                adaptados às necessidades de cada cliente.
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
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="container py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                Soluções integradas
              </p>

              <h2 className="mt-2 max-w-3xl text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                Um único parceiro para todo o ciclo do projeto
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#697078] sm:text-base">
                Reunimos conhecimento técnico, fornecimento de equipamentos,
                instalação e suporte para simplificar a implementação de
                soluções de energia solar.
              </p>
            </div>

            <div className="grid grid-cols-3 divide-x rounded-lg border border-[#dedede] bg-white p-5">
              <div className="px-3 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff4c7]">
                  <Sun size={17} className="text-[#b17e00]" />
                </div>

                <strong className="mt-2 block text-xs font-black text-[#171717]">
                  Projeto
                </strong>

                <span className="mt-1 block text-[10px] text-[#697078]">
                  Engenharia
                </span>
              </div>

              <div className="px-3 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1f7f2]">
                  <Cog size={17} className="text-[#15783a]" />
                </div>

                <strong className="mt-2 block text-xs font-black text-[#171717]">
                  Instalação
                </strong>

                <span className="mt-1 block text-[10px] text-[#697078]">
                  Implementação
                </span>
              </div>

              <div className="px-3 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f5f5]">
                  <Wrench size={17} className="text-[#171717]" />
                </div>

                <strong className="mt-2 block text-xs font-black text-[#171717]">
                  Suporte
                </strong>

                <span className="mt-1 block text-[10px] text-[#697078]">
                  Pós-venda
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="container pb-16">
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
              O que fazemos
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#171717]">
              Serviços especializados
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#697078]">
              Desde a análise inicial até ao acompanhamento do sistema,
              disponibilizamos serviços para diferentes etapas de um projeto
              de energia solar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-xl border border-[#dedede] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ffbf00] hover:shadow-[0_14px_35px_rgba(0,0,0,.08)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fff4c7] text-[#b17e00] transition group-hover:bg-[#ffbf00] group-hover:text-[#171717]">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 min-h-[48px] text-base font-black leading-6 text-[#171717]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-[#697078]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-[#eeeeee] pt-4 text-[10px] font-black text-[#15783a]">
                    <CheckCircle2 size={14} />
                    Serviço especializado
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
                O nosso processo
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#171717]">
                Uma abordagem estruturada
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697078]">
                Organizamos cada etapa para garantir maior clareza,
                acompanhamento e adequação da solução às necessidades do
                cliente.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                [
                  "01",
                  "Diagnóstico",
                  "Compreendemos o consumo, necessidades e objetivos.",
                ],
                [
                  "02",
                  "Engenharia",
                  "Dimensionamos e definimos a configuração da solução.",
                ],
                [
                  "03",
                  "Implementação",
                  "Fornecemos, instalamos e colocamos o sistema em operação.",
                ],
                [
                  "04",
                  "Acompanhamento",
                  "Prestamos manutenção, monitorização e suporte técnico.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="relative rounded-lg border border-[#dedede] bg-[#fafafa] p-5"
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

        {/* WHY US */}
        <section className="container py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                Valor para o cliente
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                Mais do que equipamentos, entregamos soluções
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#697078]">
                O objetivo é disponibilizar uma solução coerente com a
                aplicação, tecnicamente estruturada e preparada para o
                acompanhamento ao longo da sua utilização.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Análise das necessidades do projeto",
                  "Dimensionamento técnico",
                  "Fornecimento de equipamentos",
                  "Instalação e comissionamento",
                  "Manutenção e suporte",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-[#333]"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#15783a]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-[#171717] p-7 text-white sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffbf00] text-[#171717]">
                <ShieldCheck size={23} />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Precisa de assistência técnica?
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/60">
                Podemos avaliar as necessidades do seu sistema e indicar o
                serviço adequado para a sua situação.
              </p>

              <Link
                href="/cotacao"
                className="mt-7 flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-6 text-xs font-black text-[#171717] transition hover:bg-[#ffd04a]"
              >
                Solicitar atendimento
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container pb-16">
          <div className="relative overflow-hidden rounded-xl bg-[#171717] px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ffbf00]/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ffbf00]">
                  Vamos trabalhar juntos
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Tem um projeto ou precisa de assistência?
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Fale com a IS Solar e apresente as necessidades do seu
                  projeto. A nossa equipa poderá avaliar a solução adequada.
                </p>
              </div>

              <Link
                href="/cotacao"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-7 text-sm font-black text-[#171717] transition hover:bg-[#ffd04a]"
              >
                Solicitar serviço
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