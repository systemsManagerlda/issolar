import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-[#f5f5f5]">
        {/* BREADCRUMB */}
        <div className="border-b border-[#dedede] bg-white">
          <div className="container flex min-h-[48px] items-center gap-2 text-xs">
            <Link
              href="/projetos"
              className="flex items-center gap-1 font-bold text-[#697078] transition hover:text-[#171717]"
            >
              <ArrowLeft size={14} />
              Projetos
            </Link>

            <span className="text-[#bcbcbc]">/</span>

            <span className="truncate font-bold text-[#171717]">
              {project.title}
            </span>
          </div>
        </div>

        {/* HERO */}
        <section className="container py-7 sm:py-10">
          <div className="overflow-hidden rounded-xl border border-[#dedede] bg-white shadow-[0_8px_30px_rgba(0,0,0,.06)]">
            <div className="grid lg:grid-cols-[1.5fr_1fr]">
              {/* IMAGE */}
              <div className="relative min-h-[300px] overflow-hidden bg-[#eeeeee] sm:min-h-[420px] lg:min-h-[520px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center rounded-md bg-[#ffbf00] px-3 py-2 text-[10px] font-black uppercase tracking-wider text-[#171717]">
                    Projeto IS Solar
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 sm:left-7 sm:right-7">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/80">
                    <Sun size={15} className="text-[#ffbf00]" />
                    Energia Solar
                  </div>

                  <h1 className="mt-2 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h1>
                </div>
              </div>

              {/* PROJECT INFO */}
              <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#b17e00]">
                    Tipo de projeto
                  </span>

                  <div className="mt-2 inline-flex items-center rounded-full bg-[#fff4c7] px-3 py-1.5 text-xs font-black text-[#8d6800]">
                    {project.type}
                  </div>
                </div>

                <div className="mt-8 border-t border-[#eeeeee] pt-7">
                  <h2 className="text-xl font-black text-[#171717]">
                    Sobre o projeto
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#697078]">
                    Este projeto apresenta uma solução de energia solar
                    desenvolvida para responder às necessidades específicas
                    da aplicação. A configuração final do sistema depende do
                    consumo energético, características do local e requisitos
                    técnicos do cliente.
                  </p>
                </div>

                <div className="mt-7 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#f5f5f5]">
                      <Zap size={16} className="text-[#b17e00]" />
                    </div>

                    <div>
                      <strong className="block text-xs font-black text-[#171717]">
                        Dimensionamento personalizado
                      </strong>
                      <span className="mt-1 block text-xs leading-5 text-[#697078]">
                        Sistema definido de acordo com as necessidades
                        energéticas do projeto.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#f5f5f5]">
                      <ShieldCheck size={16} className="text-[#15783a]" />
                    </div>

                    <div>
                      <strong className="block text-xs font-black text-[#171717]">
                        Equipamentos e instalação
                      </strong>
                      <span className="mt-1 block text-xs leading-5 text-[#697078]">
                        Solução preparada para instalação profissional e
                        acompanhamento técnico.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#f5f5f5]">
                      <MapPin size={16} className="text-[#b17e00]" />
                    </div>

                    <div>
                      <strong className="block text-xs font-black text-[#171717]">
                        Solução adaptada ao local
                      </strong>
                      <span className="mt-1 block text-xs leading-5 text-[#697078]">
                        A análise das condições do local faz parte do
                        dimensionamento do sistema.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    href="/cotacao"
                    className="flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-6 text-sm font-black text-[#171717] transition hover:bg-[#ffd04a]"
                  >
                    Falar sobre um projeto
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="container pb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[#dedede] bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff4c7]">
                <Sun size={19} className="text-[#b17e00]" />
              </div>

              <h3 className="mt-4 text-sm font-black text-[#171717]">
                Energia limpa
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#697078]">
                Aproveitamento da energia solar para geração de eletricidade.
              </p>
            </div>

            <div className="rounded-lg border border-[#dedede] bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1f7f2]">
                <Zap size={19} className="text-[#15783a]" />
              </div>

              <h3 className="mt-4 text-sm font-black text-[#171717]">
                Eficiência energética
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#697078]">
                Soluções dimensionadas de acordo com o perfil de consumo.
              </p>
            </div>

            <div className="rounded-lg border border-[#dedede] bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5]">
                <CheckCircle2 size={19} className="text-[#171717]" />
              </div>

              <h3 className="mt-4 text-sm font-black text-[#171717]">
                Acompanhamento técnico
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#697078]">
                Apoio técnico desde o dimensionamento até à implementação.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container pb-16">
          <div className="relative overflow-hidden rounded-xl bg-[#171717] px-6 py-10 text-white sm:px-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ffbf00]/10 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ffbf00]">
                  Tem um projeto semelhante?
                </span>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Vamos desenvolver uma solução para as suas necessidades.
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Partilhe os detalhes do seu projeto com a nossa equipa e
                  solicite uma avaliação personalizada.
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