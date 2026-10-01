import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Link,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";

export default async function Cotacao({
  searchParams,
}: {
  searchParams: Promise<{ produto?: string }>;
}) {
  const sp = await searchParams;

  const product = sp.produto || "";

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f2f3f3]">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="border-b border-gray-200 bg-white">

          <div className="container">

            <div className="grid gap-8 py-8 md:py-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">

              {/* Main heading */}
              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-[#ecd37d] bg-[#fff8df] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.14em] text-[#8d6800]">
                  <ClipboardList size={11} />
                  Request for Quotation
                </div>

                <h1 className="mt-4 max-w-[720px] text-[30px] font-black leading-[1.05] tracking-tight text-[#171717] sm:text-[38px] lg:text-[44px]">
                  Solicite uma cotação
                  <br className="hidden sm:block" />
                  para o seu projeto solar.
                </h1>

                <p className="mt-4 max-w-[650px] text-[11px] leading-5 text-gray-500 sm:text-xs sm:leading-6">
                  Conte-nos o que precisa. Envie equipamentos, quantidades,
                  especificações ou informações sobre o seu projeto e a nossa
                  equipa comercial poderá preparar uma proposta adequada.
                </p>

                {/* Trust points */}
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">

                  <div className="flex items-center gap-1.5">
                    <CheckCircle2
                      size={14}
                      className="text-[#16803c]"
                    />

                    <span className="text-[9px] font-bold text-gray-600">
                      Atendimento especializado
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <CheckCircle2
                      size={14}
                      className="text-[#16803c]"
                    />

                    <span className="text-[9px] font-bold text-gray-600">
                      Projetos personalizados
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <CheckCircle2
                      size={14}
                      className="text-[#16803c]"
                    />

                    <span className="text-[9px] font-bold text-gray-600">
                      Fornecimento de equipamentos
                    </span>
                  </div>

                </div>

              </div>

              {/* Hero side */}
              <div className="relative hidden overflow-hidden rounded-xl bg-[#171717] p-6 text-white lg:block">

                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#ffbf00]/10" />

                <div className="relative">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffbf00] text-[#171717]">
                    <Zap size={20} />
                  </div>

                  <div className="mt-5 text-[8px] font-black uppercase tracking-[0.14em] text-[#ffbf00]">
                    IS Solar
                  </div>

                  <h2 className="mt-2 text-[19px] font-black leading-tight">
                    Da necessidade à solução.
                  </h2>

                  <p className="mt-3 text-[9px] leading-5 text-white/50">
                    Partilhe as informações do seu projeto e permita que a
                    nossa equipa compreenda melhor as suas necessidades.
                  </p>

                  <div className="mt-5 space-y-2">

                    <div className="flex items-center gap-2">
                      <ShieldCheck
                        size={13}
                        className="text-[#ffbf00]"
                      />
                      <span className="text-[8px] text-white/60">
                        Processo comercial estruturado
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BadgeCheck
                        size={13}
                        className="text-[#ffbf00]"
                      />
                      <span className="text-[8px] text-white/60">
                        Soluções para vários setores
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <section className="py-6 md:py-8">

          <div className="container">

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_310px]">

              {/* =================================================
                  FORM
              ================================================== */}
              <form
                action="#"
                method="POST"
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,.045)]"
              >

                {/* Accent */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#ffbf00] via-[#ffd84d] to-transparent" />

                {/* Form header */}
                <div className="border-b border-gray-100 px-5 py-5 sm:px-6">

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fff5cf] text-[#a97700]">
                      <FileText size={18} />
                    </div>

                    <div>

                      <h2 className="text-[17px] font-black text-[#171717] sm:text-[19px]">
                        Informações do pedido
                      </h2>

                      <p className="mt-1 text-[9px] leading-4 text-gray-500 sm:text-[10px]">
                        Preencha os campos abaixo para nos ajudar a compreender
                        o seu pedido.
                      </p>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    SECTION 01 — CONTACT
                ================================================== */}
                <div className="border-b border-gray-100 p-5 sm:p-6">

                  <div className="mb-4 flex items-center gap-2">

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#171717] text-[8px] font-black text-white">
                      01
                    </span>

                    <div>
                      <h3 className="text-[11px] font-black text-[#171717]">
                        Dados de contacto
                      </h3>

                      <p className="text-[8px] text-gray-400">
                        Como podemos entrar em contacto consigo?
                      </p>
                    </div>

                  </div>

                  <div className="grid gap-4 md:grid-cols-2">

                    <div>
                      <label
                        htmlFor="nome"
                        className="mb-1.5 block text-[8px] font-black uppercase tracking-wide text-gray-600"
                      >
                        Nome completo *
                      </label>

                      <input
                        id="nome"
                        name="nome"
                        required
                        placeholder="Ex.: João Manuel"
                        className="h-11 w-full rounded-md border border-gray-200 bg-white px-3 text-[10px] outline-none transition-all placeholder:text-gray-400 focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/15"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="empresa"
                        className="mb-1.5 block text-[8px] font-black uppercase tracking-wide text-gray-600"
                      >
                        Empresa
                      </label>

                      <input
                        id="empresa"
                        name="empresa"
                        placeholder="Nome da empresa"
                        className="h-11 w-full rounded-md border border-gray-200 bg-white px-3 text-[10px] outline-none transition-all placeholder:text-gray-400 focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/15"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefone"
                        className="mb-1.5 block text-[8px] font-black uppercase tracking-wide text-gray-600"
                      >
                        Telefone / WhatsApp *
                      </label>

                      <div className="relative">

                        <Phone
                          size={14}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="telefone"
                          name="telefone"
                          required
                          placeholder="+258 ..."
                          className="h-11 w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-[10px] outline-none transition-all placeholder:text-gray-400 focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/15"
                        />

                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[8px] font-black uppercase tracking-wide text-gray-600"
                      >
                        Email *
                      </label>

                      <div className="relative">

                        <Mail
                          size={14}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="seuemail@empresa.com"
                          className="h-11 w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-[10px] outline-none transition-all placeholder:text-gray-400 focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/15"
                        />

                      </div>
                    </div>

                  </div>

                </div>

                {/* =================================================
                    SECTION 02 — PROJECT
                ================================================== */}
                <div className="border-b border-gray-100 p-5 sm:p-6">

                  <div className="mb-4 flex items-center gap-2">

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#171717] text-[8px] font-black text-white">
                      02
                    </span>

                    <div>
                      <h3 className="text-[11px] font-black text-[#171717]">
                        Informações do projeto
                      </h3>

                      <p className="text-[8px] text-gray-400">
                        Ajude-nos a compreender o tipo de solução pretendida.
                      </p>
                    </div>

                  </div>

                  <div className="grid gap-4 md:grid-cols-2">

                    <div>
                      <label
                        htmlFor="localizacao"
                        className="mb-1.5 block text-[8px] font-black uppercase tracking-wide text-gray-600"
                      >
                        Localização do projeto
                      </label>

                      <div className="relative">

                        <MapPin
                          size={14}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="localizacao"
                          name="localizacao"
                          placeholder="Cidade / Província"
                          className="h-11 w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-[10px] outline-none transition-all placeholder:text-gray-400 focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/15"
                        />

                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="tipoProjeto"
                        className="mb-1.5 block text-[8px] font-black uppercase tracking-wide text-gray-600"
                      >
                        Tipo de projeto
                      </label>

                      <select
                        id="tipoProjeto"
                        name="tipoProjeto"
                        defaultValue=""
                        className="h-11 w-full rounded-md border border-gray-200 bg-white px-3 text-[10px] outline-none transition-all focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/15"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>

                        <option value="residencial">
                          Residencial
                        </option>

                        <option value="comercial">
                          Comercial
                        </option>

                        <option value="industrial">
                          Industrial
                        </option>

                        <option value="off-grid">
                          Off-Grid
                        </option>

                        <option value="agricola">
                          Agrícola
                        </option>

                        <option value="institucional">
                          Institucional
                        </option>

                        <option value="outro">
                          Outro
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="potencia"
                        className="mb-1.5 block text-[8px] font-black uppercase tracking-wide text-gray-600"
                      >
                        Potência desejada
                      </label>

                      <div className="relative">

                        <Zap
                          size={14}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="potencia"
                          name="potencia"
                          placeholder="Ex.: 5 kW, 12 kW, 50 kW..."
                          className="h-11 w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-[10px] outline-none transition-all placeholder:text-gray-400 focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/15"
                        />

                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="produto"
                        className="mb-1.5 block text-[8px] font-black uppercase tracking-wide text-gray-600"
                      >
                        Produto / sistema de interesse
                      </label>

                      <input
                        id="produto"
                        name="produto"
                        defaultValue={product}
                        placeholder="Ex.: Inversor 12 kW, sistema solar..."
                        className="h-11 w-full rounded-md border border-gray-200 bg-white px-3 text-[10px] outline-none transition-all placeholder:text-gray-400 focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/15"
                      />

                    </div>

                  </div>

                </div>

                {/* =================================================
                    SECTION 03 — DETAILS
                ================================================== */}
                <div className="border-b border-gray-100 p-5 sm:p-6">

                  <div className="mb-4 flex items-center gap-2">

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#171717] text-[8px] font-black text-white">
                      03
                    </span>

                    <div>
                      <h3 className="text-[11px] font-black text-[#171717]">
                        Detalhes da necessidade
                      </h3>

                      <p className="text-[8px] text-gray-400">
                        Quanto mais informação fornecer, melhor poderemos
                        compreender o seu pedido.
                      </p>
                    </div>

                  </div>

                  <label
                    htmlFor="descricao"
                    className="mb-1.5 block text-[8px] font-black uppercase tracking-wide text-gray-600"
                  >
                    Descrição do projeto ou necessidade
                  </label>

                  <textarea
                    id="descricao"
                    name="descricao"
                    rows={6}
                    placeholder="Descreva o seu consumo, equipamentos que pretende alimentar, quantidade de painéis ou baterias, necessidades de backup, irrigação, bombagem ou outras informações relevantes..."
                    className="w-full resize-y rounded-md border border-gray-200 bg-white px-3 py-3 text-[10px] leading-5 outline-none transition-all placeholder:text-gray-400 focus:border-[#ffbf00] focus:ring-2 focus:ring-[#ffbf00]/15"
                  />

                  {/* Upload */}
                  <div className="mt-4">

                    <label
                      htmlFor="ficheiro"
                      className="group flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-[#fafafa] px-5 py-6 text-center transition-all hover:border-[#ffbf00] hover:bg-[#fffaf0]"
                    >

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff5cf] text-[#a97700] transition-transform group-hover:scale-105">
                        <Upload size={16} />
                      </div>

                      <div className="mt-3 text-[9px] font-black text-[#171717]">
                        Anexar documentos
                      </div>

                      <div className="mt-1 text-[8px] text-gray-400">
                        Lista de equipamentos, plantas, especificações ou
                        documentos do projeto
                      </div>

                      <div className="mt-2 text-[7px] font-bold uppercase tracking-wide text-[#a97700]">
                        PDF, JPG, PNG ou Excel
                      </div>

                      <input
                        id="ficheiro"
                        name="ficheiro"
                        type="file"
                        className="hidden"
                      />

                    </label>

                  </div>

                </div>

                {/* =================================================
                    SUBMIT
                ================================================== */}
                <div className="bg-[#fafafa] p-5 sm:p-6">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-start gap-2">

                      <ShieldCheck
                        size={15}
                        className="mt-0.5 shrink-0 text-[#16803c]"
                      />

                      <p className="max-w-md text-[8px] leading-4 text-gray-500">
                        As informações fornecidas serão utilizadas para
                        analisar o pedido e preparar o contacto comercial.
                      </p>

                    </div>

                    <button
                      type="submit"
                      className="group inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-6 text-[10px] font-black text-[#171717] transition-all duration-300 hover:bg-[#ffd34d] hover:shadow-[0_8px_20px_rgba(255,191,0,.2)]"
                    >
                      Enviar pedido de cotação

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                  </div>

                </div>

              </form>

              {/* =================================================
                  SIDEBAR
              ================================================== */}
              <aside className="space-y-3">

                {/* Contact card */}
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,.045)]">

                  <div className="bg-[#171717] p-5 text-white">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffbf00] text-[#171717]">
                      <MessageCircle size={17} />
                    </div>

                    <h3 className="mt-4 text-[16px] font-black">
                      Prefere falar diretamente?
                    </h3>

                    <p className="mt-2 text-[9px] leading-5 text-white/50">
                      Entre em contacto com a nossa equipa comercial para
                      esclarecer dúvidas sobre equipamentos ou projetos.
                    </p>

                  </div>

                  <div className="p-4">

                    <Link
                      href="/contactos"
                      className="group flex min-h-[42px] items-center justify-center gap-2 rounded-md border border-gray-200 bg-white text-[9px] font-black text-[#171717] transition-all hover:border-[#ffbf00] hover:bg-[#fff8df]"
                    >
                      Falar com especialista

                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>

                  </div>

                </div>

                {/* Why quote */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,.045)]">

                  <div className="flex items-center gap-2">

                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#fff5cf] text-[#a97700]">
                      <Sparkles size={14} />
                    </div>

                    <h3 className="text-[11px] font-black text-[#171717]">
                      Porquê solicitar uma cotação?
                    </h3>

                  </div>

                  <div className="mt-4 space-y-3">

                    <div className="flex gap-2">

                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0 text-[#16803c]"
                      />

                      <div>
                        <div className="text-[9px] font-black text-[#171717]">
                          Solução adequada
                        </div>

                        <div className="mt-0.5 text-[8px] leading-4 text-gray-500">
                          Apresente as suas necessidades e equipamentos.
                        </div>
                      </div>

                    </div>

                    <div className="flex gap-2">

                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0 text-[#16803c]"
                      />

                      <div>
                        <div className="text-[9px] font-black text-[#171717]">
                          Projetos personalizados
                        </div>

                        <div className="mt-0.5 text-[8px] leading-4 text-gray-500">
                          Para diferentes aplicações e dimensões.
                        </div>
                      </div>

                    </div>

                    <div className="flex gap-2">

                      <CheckCircle2
                        size={13}
                        className="mt-0.5 shrink-0 text-[#16803c]"
                      />

                      <div>
                        <div className="text-[9px] font-black text-[#171717]">
                          Pedidos em volume
                        </div>

                        <div className="mt-0.5 text-[8px] leading-4 text-gray-500">
                          Ideal para empresas e grandes projetos.
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Company project */}
                <div className="overflow-hidden rounded-xl bg-[#ffbf00] p-5">

                  <Building2
                    size={20}
                    className="text-[#171717]"
                  />

                  <h3 className="mt-4 text-[16px] font-black leading-tight text-[#171717]">
                    Projeto empresarial?
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-black/60">
                    Podemos analisar necessidades comerciais, industriais,
                    agrícolas e institucionais.
                  </p>

                  <Link
                    href="/projetos"
                    className="group mt-4 inline-flex items-center gap-1 text-[9px] font-black text-[#171717]"
                  >
                    Ver projetos

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

      </main>

      <Footer />
    </>
  );
}