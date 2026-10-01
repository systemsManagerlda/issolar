import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sun,
} from "lucide-react";

export default function Contacts() {
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
                Contactos
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Vamos falar sobre a sua{" "}
                <span className="text-[#ffbf00]">
                  solução de energia.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Tem um projeto, precisa de equipamentos ou procura assistência
                técnica? Entre em contacto com a IS Solar e apresente as suas
                necessidades.
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
                  href="/servicos"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Conhecer os nossos serviços
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT OPTIONS */}
        <section className="container py-12 sm:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {/* LOCATION */}
            <div className="group rounded-xl border border-[#dedede] bg-white p-6 transition hover:-translate-y-1 hover:border-[#ffbf00] hover:shadow-[0_12px_30px_rgba(0,0,0,.07)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fff4c7] text-[#b17e00]">
                <MapPin size={21} />
              </div>

              <h2 className="mt-5 text-lg font-black text-[#171717]">
                Localização
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#697078]">
                Estamos em{" "}
                <strong className="text-[#171717]">
                  Maputo, Moçambique
                </strong>
                .
              </p>

              <p className="mt-4 text-xs text-[#697078]">
                Atendimento mediante disponibilidade da equipa.
              </p>
            </div>

            {/* WHATSAPP */}
            <div className="group rounded-xl border border-[#dedede] bg-white p-6 transition hover:-translate-y-1 hover:border-[#ffbf00] hover:shadow-[0_12px_30px_rgba(0,0,0,.07)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f1f7f2] text-[#15783a]">
                <MessageCircle size={21} />
              </div>

              <h2 className="mt-5 text-lg font-black text-[#171717]">
                WhatsApp
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#697078]">
                Fale com a nossa equipa para informações sobre produtos,
                projetos e soluções.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#15783a]">
                Atendimento comercial
                <ArrowRight size={14} />
              </span>
            </div>

            {/* QUOTE */}
            <div className="group rounded-xl border border-[#dedede] bg-white p-6 transition hover:-translate-y-1 hover:border-[#ffbf00] hover:shadow-[0_12px_30px_rgba(0,0,0,.07)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#171717] text-[#ffbf00]">
                <Send size={21} />
              </div>

              <h2 className="mt-5 text-lg font-black text-[#171717]">
                Solicitar cotação
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#697078]">
                Envie os detalhes do seu projeto e solicite uma proposta
                personalizada.
              </p>

              <Link
                href="/cotacao"
                className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#171717] transition hover:text-[#b17e00]"
              >
                Solicitar agora
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT CENTER */}
        <section className="border-y border-[#dedede] bg-white">
          <div className="container py-14 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
              {/* LEFT */}
              <div>
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
                  Central de atendimento
                </span>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                  Estamos disponíveis para ajudar
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#697078]">
                  Seja para adquirir equipamentos, desenvolver um novo
                  projeto, solicitar assistência ou esclarecer dúvidas, a
                  nossa equipa está preparada para receber o seu pedido.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f5]">
                      <Phone size={18} className="text-[#b17e00]" />
                    </div>

                    <div>
                      <strong className="block text-sm font-black text-[#171717]">
                        Telefone
                      </strong>

                      <span className="mt-1 block text-xs text-[#697078]">
                        Contacto comercial disponível mediante solicitação.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f5]">
                      <Mail size={18} className="text-[#b17e00]" />
                    </div>

                    <div>
                      <strong className="block text-sm font-black text-[#171717]">
                        E-mail
                      </strong>

                      <span className="mt-1 block text-xs text-[#697078]">
                        Atendimento por e-mail mediante disponibilidade.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5f5f5]">
                      <Clock3 size={18} className="text-[#b17e00]" />
                    </div>

                    <div>
                      <strong className="block text-sm font-black text-[#171717]">
                        Horário de atendimento
                      </strong>

                      <span className="mt-1 block text-xs text-[#697078]">
                        Consulte a equipa para confirmação do horário.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="rounded-xl bg-[#171717] p-7 text-white sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffbf00] text-[#171717]">
                  <Sun size={23} />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  Tem um projeto solar?
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  Partilhe connosco algumas informações sobre o seu projeto.
                  Podemos avaliar as necessidades e preparar uma solução
                  adequada à aplicação.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Residencial",
                    "Comercial",
                    "Industrial",
                    "Agrícola",
                    "Sistemas off-grid",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs font-bold text-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ffbf00]" />
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/cotacao"
                  className="mt-8 flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-6 text-sm font-black text-[#171717] transition hover:bg-[#ffd04a]"
                >
                  Solicitar cotação
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="container py-14 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-xl border border-[#dedede] bg-white p-7 sm:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fff4c7] text-[#b17e00]">
                <Building2 size={20} />
              </div>

              <h2 className="mt-5 text-2xl font-black text-[#171717]">
                IS Solar Moçambique
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#697078]">
                Soluções de energia solar para diferentes aplicações e
                necessidades em Moçambique.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-[#eeeeee] pt-5">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#b17e00]"
                />

                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-[#697078]">
                    Localização
                  </span>

                  <strong className="mt-1 block text-sm text-[#171717]">
                    Maputo, Moçambique
                  </strong>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#f0f1ef] p-7 sm:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#15783a] shadow-sm">
                <ShieldCheck size={20} />
              </div>

              <h2 className="mt-5 text-2xl font-black text-[#171717]">
                Atendimento profissional
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#697078]">
                Para pedidos técnicos, comerciais ou relacionados com
                projetos, recomendamos utilizar o formulário de cotação para
                enviar todas as informações relevantes.
              </p>

              <Link
                href="/cotacao"
                className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#171717] transition hover:text-[#b17e00]"
              >
                Abrir pedido de cotação
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="container pb-16">
          <div className="relative overflow-hidden rounded-xl bg-[#ffbf00] px-6 py-10 sm:px-10 sm:py-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#6e5200]">
                  IS Solar Moçambique
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
                  Pronto para começar o seu projeto?
                </h2>

                <p className="mt-4 text-sm leading-6 text-[#4f4100]">
                  Envie-nos as suas necessidades e dê o primeiro passo para
                  uma solução de energia solar adequada ao seu projeto.
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