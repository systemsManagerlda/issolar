import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  Zap,
} from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
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
              href="/produtos"
              className="flex items-center gap-1 font-bold text-[#697078] transition hover:text-[#171717]"
            >
              <ArrowLeft size={14} />
              Catálogo
            </Link>

            <span className="text-[#bcbcbc]">/</span>

            <span className="truncate font-bold text-[#171717]">
              {product.name}
            </span>
          </div>
        </div>

        {/* PRODUCT */}
        <section className="container py-7 sm:py-10">
          <div className="overflow-hidden rounded-xl border border-[#dedede] bg-white shadow-[0_8px_30px_rgba(0,0,0,.05)]">
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
              {/* IMAGE */}
              <div className="border-b border-[#eeeeee] bg-[#f7f8f7] lg:border-b-0 lg:border-r">
                <div className="relative flex min-h-[420px] items-center justify-center p-8 sm:min-h-[540px] sm:p-12">
                  <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-md bg-white px-3 py-2 text-[9px] font-black uppercase tracking-wider text-[#171717] shadow-sm">
                    <BadgeCheck size={14} className="text-[#15783a]" />
                    Produto IS Solar
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[350px] w-full object-contain sm:h-[450px]"
                  />
                </div>
              </div>

              {/* INFORMATION */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* CATEGORY */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#fff4c7] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#8d6800]">
                    {product.category}
                  </span>

                  {product.availability && (
                    <span className="flex items-center gap-1.5 rounded-full bg-[#f1f7f2] px-3 py-1.5 text-[10px] font-black text-[#15783a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#15783a]" />
                      {product.availability}
                    </span>
                  )}
                </div>

                {/* TITLE */}
                <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#171717] sm:text-4xl">
                  {product.name}
                </h1>

                {/* BRAND */}
                {product.brand && (
                  <p className="mt-3 text-xs font-bold text-[#697078]">
                    Marca:{" "}
                    <span className="text-[#171717]">
                      {product.brand}
                    </span>
                  </p>
                )}

                {/* DESCRIPTION */}
                <p className="mt-5 text-sm leading-7 text-[#697078] sm:text-base">
                  {product.description}
                </p>

                {/* QUICK SPECS */}
                {(product.power ||
                  product.systemType ||
                  product.application ||
                  product.technology) && (
                  <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {product.power && (
                      <div className="rounded-lg border border-[#dedede] bg-[#fafafa] p-3">
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-[#697078]">
                          Potência
                        </span>

                        <strong className="mt-1 block text-sm font-black text-[#171717]">
                          {product.power}
                          {product.powerUnit}
                        </strong>
                      </div>
                    )}

                    {product.systemType && (
                      <div className="rounded-lg border border-[#dedede] bg-[#fafafa] p-3">
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-[#697078]">
                          Sistema
                        </span>

                        <strong className="mt-1 block text-sm font-black text-[#171717]">
                          {product.systemType}
                        </strong>
                      </div>
                    )}

                    {product.application && (
                      <div className="rounded-lg border border-[#dedede] bg-[#fafafa] p-3">
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-[#697078]">
                          Aplicação
                        </span>

                        <strong className="mt-1 block text-sm font-black text-[#171717]">
                          {product.application}
                        </strong>
                      </div>
                    )}

                    {product.technology && (
                      <div className="rounded-lg border border-[#dedede] bg-[#fafafa] p-3">
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-[#697078]">
                          Tecnologia
                        </span>

                        <strong className="mt-1 block text-sm font-black text-[#171717]">
                          {product.technology}
                        </strong>
                      </div>
                    )}
                  </div>
                )}

                {/* PRICE */}
                <div className="mt-7 rounded-xl border border-[#dedede] bg-white">
                  <div className="p-5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#697078]">
                      Preço
                    </span>

                    <div className="mt-1 text-3xl font-black tracking-tight text-[#171717]">
                      {product.price || "Consultar"}
                    </div>

                    <p className="mt-1 text-[10px] text-[#697078]">
                      Preço sujeito à disponibilidade e configuração do
                      projeto.
                    </p>

                    <Link
                      href={`/cotacao?produto=${encodeURIComponent(
                        product.name
                      )}`}
                      className="mt-5 flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-6 text-sm font-black text-[#171717] transition hover:bg-[#ffd04a]"
                    >
                      <ClipboardList size={17} />
                      Solicitar cotação
                      <ArrowRight size={16} />
                    </Link>

                    <AddToCartButton
                      product={{
                        slug: product.slug,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        category: product.category,
                      }}
                    />
                  </div>
                </div>

                {/* TRUST */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-lg bg-[#f7f8f7] p-3">
                    <ShieldCheck
                      size={18}
                      className="shrink-0 text-[#15783a]"
                    />

                    <div>
                      <strong className="block text-[10px] font-black text-[#171717]">
                        Suporte técnico
                      </strong>

                      <span className="text-[9px] text-[#697078]">
                        Apoio especializado
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-[#f7f8f7] p-3">
                    <Zap
                      size={18}
                      className="shrink-0 text-[#b17e00]"
                    />

                    <div>
                      <strong className="block text-[10px] font-black text-[#171717]">
                        Solução solar
                      </strong>

                      <span className="text-[9px] text-[#697078]">
                        Dimensionamento profissional
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS */}
        <section className="container pb-14 sm:pb-16">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            {/* SPECS */}
            <div className="rounded-xl border border-[#dedede] bg-white p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-[#eeeeee] pb-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#b17e00]">
                    Informação técnica
                  </span>

                  <h2 className="mt-1 text-2xl font-black text-[#171717]">
                    Especificações
                  </h2>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-[#fff4c7] sm:flex">
                  <Zap size={19} className="text-[#b17e00]" />
                </div>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {product.specs?.map((spec) => (
                  <div
                    key={spec}
                    className="flex items-start gap-3 rounded-lg border border-[#eeeeee] bg-[#fafafa] p-4"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-[#15783a]"
                    />

                    <span className="text-xs font-bold leading-5 text-[#444]">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONSULTATION */}
            <div className="rounded-xl bg-[#171717] p-6 text-white sm:p-8">
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ffbf00]">
                Precisa de ajuda?
              </span>

              <h2 className="mt-3 text-2xl font-black">
                Não sabe qual configuração escolher?
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/60">
                A nossa equipa pode ajudar a avaliar as necessidades do seu
                projeto e indicar uma configuração adequada.
              </p>

              <Link
                href={`/cotacao?produto=${encodeURIComponent(product.name)}`}
                className="mt-7 flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-5 text-xs font-black text-[#171717] transition hover:bg-[#ffd04a]"
              >
                Falar com a nossa equipa
                <ArrowRight size={16} />
              </Link>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <CheckCircle2 size={15} className="text-[#ffbf00]" />
                  Avaliação da necessidade
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs font-bold">
                  <CheckCircle2 size={15} className="text-[#ffbf00]" />
                  Dimensionamento da solução
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs font-bold">
                  <CheckCircle2 size={15} className="text-[#ffbf00]" />
                  Proposta personalizada
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="container pb-16">
          <div className="rounded-xl border border-[#dedede] bg-white px-6 py-8 sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-black text-[#171717]">
                  Interessado neste produto?
                </h2>

                <p className="mt-2 text-sm text-[#697078]">
                  Solicite uma cotação para o{" "}
                  <strong className="text-[#171717]">
                    {product.name}
                  </strong>
                  .
                </p>
              </div>

              <Link
                href={`/cotacao?produto=${encodeURIComponent(product.name)}`}
                className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-6 text-xs font-black text-[#171717] transition hover:bg-[#ffd04a]"
              >
                Solicitar cotação
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}