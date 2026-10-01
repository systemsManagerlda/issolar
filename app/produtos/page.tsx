import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

import { categories, products } from "@/lib/data";

import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Filter,
  PackageOpen,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import Link from "next/link";

type SearchParams = {
  q?: string;
  category?: string;
  brand?: string;
  systemType?: string;
  application?: string;
  technology?: string;
  availability?: string;
  power?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
};

/* ============================================================
   FILTROS
============================================================ */

const brands = Array.from(
  new Set(
    products
      .map((product) => product.brand)
      .filter(Boolean)
  )
);

const systemTypes = [
  "On-Grid",
  "Off-Grid",
  "Híbrido",
];

const applications = [
  "Residencial",
  "Comercial",
  "Industrial",
  "Agricultura",
  "Institucional",
];

const technologies = [
  "Híbrido",
  "Monocristalino",
  "Policristalino",
  "Lítio",
];

const availabilityOptions = [
  "Disponível",
  "Sob consulta",
];

const powerOptions = [
  "Até 5 kW",
  "5–10 kW",
  "10–20 kW",
  "20–50 kW",
  "Mais de 50 kW",
];

/* ============================================================
   POTÊNCIA
============================================================ */

function getPowerRange(value: string): [number, number] {
  switch (value) {
    case "Até 5 kW":
      return [0, 5];

    case "5–10 kW":
      return [5, 10];

    case "10–20 kW":
      return [10, 20];

    case "20–50 kW":
      return [20, 50];

    case "Mais de 50 kW":
      return [50, Infinity];

    default:
      return [0, Infinity];
  }
}

function getPowerInKw(product: {
  power?: number;
  powerUnit?: string;
}) {
  if (!product.power) {
    return 0;
  }

  if (
    product.powerUnit?.toLowerCase() === "w"
  ) {
    return product.power / 1000;
  }

  return product.power;
}

/* ============================================================
   PREÇO
============================================================ */

function getPrice(value?: string) {
  if (!value) {
    return null;
  }

  const numeric = value.replace(
    /[^\d]/g,
    ""
  );

  if (!numeric) {
    return null;
  }

  return Number(numeric);
}

/* ============================================================
   PÁGINA
============================================================ */

export default async function Produtos({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;

  const q =
    (sp.q || "").trim().toLowerCase();

  const category =
    sp.category || "";

  const brand =
    sp.brand || "";

  const systemType =
    sp.systemType || "";

  const application =
    sp.application || "";

  const technology =
    sp.technology || "";

  const availability =
    sp.availability || "";

  const power =
    sp.power || "";

  const minPrice =
    Number(sp.minPrice || 0);

  const maxPrice =
    Number(sp.maxPrice || 0);

  /* ==========================================================
     FILTRAR PRODUTOS
  ========================================================== */

  const filteredProducts =
    products.filter((product) => {
      const searchableText = `
        ${product.name}
        ${product.category}
        ${product.description}
        ${product.brand || ""}
        ${product.technology || ""}
        ${product.systemType || ""}
        ${product.application || ""}
      `.toLowerCase();

      /* Pesquisa */

      if (
        q &&
        !searchableText.includes(q)
      ) {
        return false;
      }

      /* Categoria */

      if (
        category &&
        product.category !== category
      ) {
        return false;
      }

      /* Marca */

      if (
        brand &&
        product.brand !== brand
      ) {
        return false;
      }

      /* Sistema */

      if (
        systemType &&
        product.systemType !== systemType
      ) {
        return false;
      }

      /* Aplicação */

      if (
        application &&
        product.application !== application
      ) {
        return false;
      }

      /* Tecnologia */

      if (
        technology &&
        product.technology !== technology
      ) {
        return false;
      }

      /* Disponibilidade */

      if (
        availability &&
        product.availability !== availability
      ) {
        return false;
      }

      /* Potência */

      if (power) {
        const [
          minPower,
          maxPower,
        ] = getPowerRange(power);

        const productPower =
          getPowerInKw(product);

        if (
          productPower < minPower ||
          productPower > maxPower
        ) {
          return false;
        }
      }

      /* Preço mínimo */

      const productPrice =
        getPrice(product.price);

      if (
        productPrice !== null &&
        minPrice > 0 &&
        productPrice < minPrice
      ) {
        return false;
      }

      /* Preço máximo */

      if (
        productPrice !== null &&
        maxPrice > 0 &&
        productPrice > maxPrice
      ) {
        return false;
      }

      return true;
    });

  /* ==========================================================
     ORDENAÇÃO
  ========================================================== */

  const sortedProducts =
    [...filteredProducts];

  if (sp.sort === "name-asc") {
    sortedProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sp.sort === "name-desc") {
    sortedProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  if (sp.sort === "power-desc") {
    sortedProducts.sort(
      (a, b) =>
        getPowerInKw(b) -
        getPowerInKw(a)
    );
  }

  /* ==========================================================
     FILTROS ATIVOS
  ========================================================== */

  const hasFilters =
    Boolean(
      q ||
      category ||
      brand ||
      systemType ||
      application ||
      technology ||
      availability ||
      power ||
      minPrice ||
      maxPrice
    );

  /* ==========================================================
     CONSTRUIR URL
  ========================================================== */

  const createUrl = (
    changes: Record<
      string,
      string | undefined
    >
  ) => {
    const params =
      new URLSearchParams();

    const current: Record<
      string,
      string | undefined
    > = {
      q: sp.q,
      category: sp.category,
      brand: sp.brand,
      systemType: sp.systemType,
      application: sp.application,
      technology: sp.technology,
      availability: sp.availability,
      power: sp.power,
      minPrice: sp.minPrice,
      maxPrice: sp.maxPrice,
      sort: sp.sort,
      ...changes,
    };

    Object.entries(current).forEach(
      ([key, value]) => {
        if (value) {
          params.set(key, value);
        }
      }
    );

    const query =
      params.toString();

    return query
      ? `/produtos?${query}`
      : "/produtos";
  };

  const activeCategory =
    categories.find(
      ([name]) =>
        name === category
    )?.[0];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f2f3f3]">

        {/* ======================================================
            BREADCRUMB
        ======================================================= */}

        <div className="border-b border-gray-200 bg-white">
          <div className="container">
            <div className="flex h-11 items-center gap-1.5 text-[8px] font-bold text-gray-400 sm:text-[9px]">

              <Link
                href="/"
                className="hover:text-[#a97700]"
              >
                Início
              </Link>

              <ChevronRight size={11} />

              <span className="font-black text-[#171717]">
                Produtos
              </span>

              {activeCategory && (
                <>
                  <ChevronRight size={11} />

                  <span className="font-black text-[#a97700]">
                    {activeCategory}
                  </span>
                </>
              )}

            </div>
          </div>
        </div>

        {/* ======================================================
            HEADER
        ======================================================= */}

        <section className="border-b border-gray-200 bg-white">
          <div className="container py-7 sm:py-9">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div className="min-w-0">

                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#ecd37d] bg-[#fff8df] px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.14em] text-[#8d6800]">
                  <Sparkles size={10} />
                  Catálogo IS Solar
                </div>

                <h1 className="mt-3 text-[28px] font-black tracking-tight text-[#171717] sm:text-[36px]">
                  Equipamentos solares
                </h1>

                <p className="mt-3 max-w-[650px] text-[10px] leading-5 text-gray-500 sm:text-[11px] sm:leading-6">
                  Encontre equipamentos por
                  categoria, marca, potência,
                  tecnologia, aplicação e tipo
                  de sistema.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-2">

                <div className="rounded-md border border-gray-200 bg-[#fafafa] px-4 py-3">
                  <div className="text-[7px] font-black uppercase tracking-wider text-gray-400">
                    Resultados
                  </div>

                  <div className="mt-1 text-[18px] font-black text-[#171717]">
                    {sortedProducts.length}
                  </div>
                </div>

                <div className="rounded-md border border-gray-200 bg-[#fafafa] px-4 py-3">
                  <div className="text-[7px] font-black uppercase tracking-wider text-gray-400">
                    Categorias
                  </div>

                  <div className="mt-1 text-[18px] font-black text-[#171717]">
                    {categories.length}
                  </div>
                </div>

              </div>

            </div>

            {/* ==================================================
                FILTROS ATIVOS
            =================================================== */}

            {hasFilters && (
              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-4">

                <span className="text-[8px] font-black uppercase tracking-wide text-gray-400">
                  Filtros ativos:
                </span>

                {q && (
                  <Link
                    href={createUrl({
                      q: undefined,
                    })}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#171717] px-3 py-1.5 text-[8px] font-black text-white"
                  >
                    Pesquisa: "{sp.q}"
                    <X size={10} />
                  </Link>
                )}

                {category && (
                  <Link
                    href={createUrl({
                      category: undefined,
                    })}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#ffbf00] px-3 py-1.5 text-[8px] font-black text-[#171717]"
                  >
                    {category}
                    <X size={10} />
                  </Link>
                )}

                {brand && (
                  <Link
                    href={createUrl({
                      brand: undefined,
                    })}
                    className="filter-chip"
                  >
                    Marca: {brand}
                    <X size={10} />
                  </Link>
                )}

                {systemType && (
                  <Link
                    href={createUrl({
                      systemType: undefined,
                    })}
                    className="filter-chip"
                  >
                    {systemType}
                    <X size={10} />
                  </Link>
                )}

                {application && (
                  <Link
                    href={createUrl({
                      application: undefined,
                    })}
                    className="filter-chip"
                  >
                    {application}
                    <X size={10} />
                  </Link>
                )}

                {technology && (
                  <Link
                    href={createUrl({
                      technology: undefined,
                    })}
                    className="filter-chip"
                  >
                    {technology}
                    <X size={10} />
                  </Link>
                )}

                {availability && (
                  <Link
                    href={createUrl({
                      availability: undefined,
                    })}
                    className="filter-chip"
                  >
                    {availability}
                    <X size={10} />
                  </Link>
                )}

                {power && (
                  <Link
                    href={createUrl({
                      power: undefined,
                    })}
                    className="filter-chip"
                  >
                    {power}
                    <X size={10} />
                  </Link>
                )}

                {(minPrice > 0 ||
                  maxPrice > 0) && (
                  <Link
                    href={createUrl({
                      minPrice: undefined,
                      maxPrice: undefined,
                    })}
                    className="filter-chip"
                  >
                    Preço
                    <X size={10} />
                  </Link>
                )}

                <Link
                  href="/produtos"
                  className="text-[8px] font-black text-gray-500 underline underline-offset-2 hover:text-[#a97700]"
                >
                  Limpar todos
                </Link>

              </div>
            )}

          </div>
        </section>

        {/* ======================================================
            CATÁLOGO
        ======================================================= */}

        <section className="py-5 sm:py-6">
          <div className="container">

            <div className="grid gap-4 lg:grid-cols-[250px_minmax(0,1fr)]">

              {/* ==================================================
                  SIDEBAR
              =================================================== */}

              <aside className="hidden lg:block">

                <div className="sticky top-[130px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_4px_18px_rgba(0,0,0,.04)]">

                  <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">

                    <div className="flex items-center gap-2">

                      <SlidersHorizontal
                        size={15}
                        className="text-[#a97700]"
                      />

                      <span className="text-[10px] font-black uppercase tracking-wide text-[#171717]">
                        Filtrar produtos
                      </span>

                    </div>

                    {hasFilters && (
                      <Link
                        href="/produtos"
                        className="text-[7px] font-black text-[#a97700]"
                      >
                        Limpar
                      </Link>
                    )}

                  </div>

                  <div className="max-h-[calc(100vh-180px)] overflow-y-auto">

                    {/* CATEGORIA */}

                    <FilterGroup title="Categoria">

                      <Link
                        href="/produtos"
                        className={`filter-option ${
                          !category
                            ? "filter-option-active"
                            : ""
                        }`}
                      >
                        <span>
                          Todos os produtos
                        </span>

                        <span>
                          {products.length}
                        </span>
                      </Link>

                      {categories.map(
                        ([name]) => {
                          const count =
                            products.filter(
                              (product) =>
                                product.category ===
                                name
                            ).length;

                          return (
                            <Link
                              key={name}
                              href={createUrl({
                                category: name,
                              })}
                              className={`filter-option ${
                                category === name
                                  ? "filter-option-active"
                                  : ""
                              }`}
                            >
                              <span>
                                {name}
                              </span>

                              <span>
                                {count}
                              </span>
                            </Link>
                          );
                        }
                      )}

                    </FilterGroup>

                    {/* MARCA */}

                    <FilterGroup title="Marca">

                      {brands.map((item) => (
                        <Link
                          key={item}
                          href={createUrl({
                            brand:
                              brand === item
                                ? undefined
                                : item,
                          })}
                          className={`filter-check ${
                            brand === item
                              ? "filter-check-active"
                              : ""
                          }`}
                        >
                          <span className="flex items-center gap-2">

                            <span className="filter-checkbox">
                              {brand === item && (
                                <Check size={10} />
                              )}
                            </span>

                            {item}

                          </span>
                        </Link>
                      ))}

                    </FilterGroup>

                    {/* SISTEMA */}

                    <FilterGroup title="Tipo de sistema">

                      {systemTypes.map(
                        (item) => (
                          <Link
                            key={item}
                            href={createUrl({
                              systemType:
                                systemType ===
                                item
                                  ? undefined
                                  : item,
                            })}
                            className={`filter-check ${
                              systemType === item
                                ? "filter-check-active"
                                : ""
                            }`}
                          >
                            <span className="flex items-center gap-2">

                              <span className="filter-checkbox">
                                {systemType ===
                                  item && (
                                  <Check size={10} />
                                )}
                              </span>

                              {item}

                            </span>
                          </Link>
                        )
                      )}

                    </FilterGroup>

                    {/* APLICAÇÃO */}

                    <FilterGroup title="Aplicação">

                      {applications.map(
                        (item) => (
                          <Link
                            key={item}
                            href={createUrl({
                              application:
                                application ===
                                item
                                  ? undefined
                                  : item,
                            })}
                            className={`filter-check ${
                              application ===
                              item
                                ? "filter-check-active"
                                : ""
                            }`}
                          >
                            <span className="flex items-center gap-2">

                              <span className="filter-checkbox">
                                {application ===
                                  item && (
                                  <Check size={10} />
                                )}
                              </span>

                              {item}

                            </span>
                          </Link>
                        )
                      )}

                    </FilterGroup>

                    {/* POTÊNCIA */}

                    <FilterGroup title="Potência">

                      {powerOptions.map(
                        (item) => (
                          <Link
                            key={item}
                            href={createUrl({
                              power:
                                power === item
                                  ? undefined
                                  : item,
                            })}
                            className={`filter-check ${
                              power === item
                                ? "filter-check-active"
                                : ""
                            }`}
                          >
                            <span className="flex items-center gap-2">

                              <span className="filter-checkbox">
                                {power ===
                                  item && (
                                  <Check size={10} />
                                )}
                              </span>

                              {item}

                            </span>
                          </Link>
                        )
                      )}

                    </FilterGroup>

                    {/* TECNOLOGIA */}

                    <FilterGroup title="Tecnologia">

                      {technologies.map(
                        (item) => (
                          <Link
                            key={item}
                            href={createUrl({
                              technology:
                                technology ===
                                item
                                  ? undefined
                                  : item,
                            })}
                            className={`filter-check ${
                              technology ===
                              item
                                ? "filter-check-active"
                                : ""
                            }`}
                          >
                            <span className="flex items-center gap-2">

                              <span className="filter-checkbox">
                                {technology ===
                                  item && (
                                  <Check size={10} />
                                )}
                              </span>

                              {item}

                            </span>
                          </Link>
                        )
                      )}

                    </FilterGroup>

                    {/* DISPONIBILIDADE */}

                    <FilterGroup title="Disponibilidade">

                      {availabilityOptions.map(
                        (item) => (
                          <Link
                            key={item}
                            href={createUrl({
                              availability:
                                availability ===
                                item
                                  ? undefined
                                  : item,
                            })}
                            className={`filter-check ${
                              availability ===
                              item
                                ? "filter-check-active"
                                : ""
                            }`}
                          >
                            <span className="flex items-center gap-2">

                              <span className="filter-checkbox">
                                {availability ===
                                  item && (
                                  <Check size={10} />
                                )}
                              </span>

                              {item}

                            </span>
                          </Link>
                        )
                      )}

                    </FilterGroup>

                    {/* PREÇO */}

                    <FilterGroup title="Preço">

                      <form
                        action="/produtos"
                        method="GET"
                        className="space-y-2"
                      >

                        {Object.entries(sp).map(
                          ([key, value]) => {

                            if (
                              !value ||
                              key === "minPrice" ||
                              key === "maxPrice"
                            ) {
                              return null;
                            }

                            return (
                              <input
                                key={key}
                                type="hidden"
                                name={key}
                                value={value}
                              />
                            );
                          }
                        )}

                        <div className="grid grid-cols-2 gap-2">

                          <input
                            name="minPrice"
                            type="number"
                            min="0"
                            placeholder="Mín."
                            defaultValue={
                              sp.minPrice || ""
                            }
                            className="h-9 w-full rounded border border-gray-200 px-2 text-[9px] outline-none focus:border-[#ffbf00]"
                          />

                          <input
                            name="maxPrice"
                            type="number"
                            min="0"
                            placeholder="Máx."
                            defaultValue={
                              sp.maxPrice || ""
                            }
                            className="h-9 w-full rounded border border-gray-200 px-2 text-[9px] outline-none focus:border-[#ffbf00]"
                          />

                        </div>

                        <button
                          type="submit"
                          className="h-9 w-full rounded-md bg-[#171717] text-[8px] font-black text-white transition-colors hover:bg-[#333]"
                        >
                          Aplicar preço
                        </button>

                      </form>

                    </FilterGroup>

                    {/* COTAÇÃO */}

                    <div className="border-t border-gray-100 bg-[#fff9e5] p-4">

                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#ffbf00]">
                        <ClipboardList size={14} />
                      </div>

                      <h3 className="mt-3 text-[10px] font-black text-[#171717]">
                        Precisa de vários produtos?
                      </h3>

                      <p className="mt-1 text-[8px] leading-4 text-gray-500">
                        Envie uma lista para
                        receber uma proposta.
                      </p>

                      <Link
                        href="/cotacao"
                        className="mt-3 flex min-h-[34px] items-center justify-center gap-1 rounded-md bg-[#171717] text-[8px] font-black text-white"
                      >
                        Solicitar cotação
                        <ArrowRight size={11} />
                      </Link>

                    </div>

                  </div>

                </div>

              </aside>

              {/* ==================================================
                  PRODUTOS
              =================================================== */}

              <div className="min-w-0">

                {/* MOBILE */}

                <div className="mb-3 lg:hidden">

                  <div className="flex gap-2 overflow-x-auto">

                    <MobileFilterButton
                      label="Categoria"
                      href="#filtros-mobile"
                    />

                    <MobileFilterButton
                      label="Marca"
                      href="#filtros-mobile"
                    />

                    <MobileFilterButton
                      label="Potência"
                      href="#filtros-mobile"
                    />

                    <MobileFilterButton
                      label="Aplicação"
                      href="#filtros-mobile"
                    />

                    <MobileFilterButton
                      label="Tecnologia"
                      href="#filtros-mobile"
                    />

                  </div>

                </div>

                {/* ==================================================
                    TOOLBAR
                =================================================== */}

                <div className="mb-3 flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <div className="text-[10px] font-black text-[#171717]">
                      {sortedProducts.length}{" "}
                      {sortedProducts.length ===
                      1
                        ? "produto encontrado"
                        : "produtos encontrados"}
                    </div>

                    <div className="mt-0.5 text-[8px] text-gray-400">
                      Refine os resultados
                      através dos filtros.
                    </div>

                  </div>

                  {/* ==================================================
                      ORDENAÇÃO
                  =================================================== */}

                  <div className="flex items-center gap-2">

                    <span className="hidden text-[8px] font-bold text-gray-400 sm:block">
                      Ordenar:
                    </span>

                    <form
                      action="/produtos"
                      method="GET"
                      className="relative flex items-center"
                    >

                      {Object.entries(sp).map(
                        ([key, value]) => {

                          if (
                            !value ||
                            key === "sort"
                          ) {
                            return null;
                          }

                          return (
                            <input
                              key={key}
                              type="hidden"
                              name={key}
                              value={value}
                            />
                          );
                        }
                      )}

                      <select
                        name="sort"
                        defaultValue={
                          sp.sort || ""
                        }
                        className="h-9 min-w-[145px] appearance-none rounded-md border border-gray-200 bg-white px-3 pr-8 text-[8px] font-bold text-gray-600 outline-none focus:border-[#ffbf00]"
                      >
                        <option value="">
                          Relevância
                        </option>

                        <option value="name-asc">
                          Nome A–Z
                        </option>

                        <option value="name-desc">
                          Nome Z–A
                        </option>

                        <option value="power-desc">
                          Maior potência
                        </option>
                      </select>

                      <ChevronDown
                        size={12}
                        className="pointer-events-none absolute right-2 text-gray-400"
                      />

                      <button
                        type="submit"
                        className="ml-2 h-9 rounded-md bg-[#171717] px-3 text-[8px] font-black text-white transition-colors hover:bg-[#333]"
                      >
                        Aplicar
                      </button>

                    </form>

                  </div>

                </div>

                {/* ==================================================
                    GRID
                =================================================== */}

                {sortedProducts.length >
                0 ? (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 xl:grid-cols-4">

                    {sortedProducts.map(
                      (product) => (
                        <div
                          key={product.slug}
                          className="min-w-0 transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          <ProductCard
                            p={product}
                          />
                        </div>
                      )
                    )}

                  </div>
                ) : (
                  <div className="rounded-lg border border-gray-200 bg-white">

                    <div className="flex min-h-[400px] flex-col items-center justify-center px-6 text-center">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff5cf] text-[#a97700]">
                        <PackageOpen size={27} />
                      </div>

                      <h2 className="mt-5 text-[18px] font-black text-[#171717]">
                        Nenhum produto encontrado
                      </h2>

                      <p className="mt-2 max-w-[420px] text-[9px] leading-5 text-gray-500">
                        Não encontramos
                        equipamentos com os
                        filtros selecionados.
                        Tente remover alguns
                        filtros ou solicitar uma
                        cotação.
                      </p>

                      <div className="mt-5 flex flex-col gap-2 sm:flex-row">

                        <Link
                          href="/produtos"
                          className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-5 text-[9px] font-black text-[#171717]"
                        >
                          Limpar filtros
                          <X size={13} />
                        </Link>

                        <Link
                          href="/cotacao"
                          className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-5 text-[9px] font-black text-[#171717]"
                        >
                          Solicitar cotação
                          <ClipboardList size={13} />
                        </Link>

                      </div>

                    </div>

                  </div>
                )}

                {/* ==================================================
                    RFQ
                =================================================== */}

                <div className="mt-4 overflow-hidden rounded-lg border border-[#e4c45b] bg-[#fff9e5]">

                  <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">

                    <div className="flex items-start gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#ffbf00] text-[#171717]">
                        <Zap size={17} />
                      </div>

                      <div>

                        <div className="text-[10px] font-black text-[#171717]">
                          Não encontrou o equipamento?
                        </div>

                        <p className="mt-1 text-[8px] leading-4 text-gray-500">
                          Envie a sua especificação
                          ou lista de equipamentos.
                        </p>

                      </div>

                    </div>

                    <Link
                      href="/cotacao"
                      className="group inline-flex min-h-[38px] items-center justify-center gap-2 rounded-md bg-[#171717] px-4 text-[9px] font-black text-white"
                    >
                      Pedir cotação

                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

/* =============================================================
   FILTER GROUP
============================================================= */

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-gray-100 p-4">

      <div className="mb-3 flex items-center justify-between">

        <h3 className="text-[9px] font-black uppercase tracking-wider text-[#171717]">
          {title}
        </h3>

        <ChevronDown
          size={12}
          className="text-gray-400"
        />

      </div>

      <div className="space-y-1">
        {children}
      </div>

    </div>
  );
}

/* =============================================================
   MOBILE FILTER BUTTON
============================================================= */

function MobileFilterButton({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex shrink-0 items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-2 text-[8px] font-black text-gray-600"
    >
      <Filter size={11} />
      {label}
    </Link>
  );
}