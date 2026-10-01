"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  UserRound,
  Menu,
  X,
  ClipboardList,
  ChevronDown,
  Zap,
  Phone,
  Heart,
  Building2,
  Wrench,
  BatteryCharging,
  PanelTop,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: boolean;
};

const navLinks: NavLink[] = [
  {
    label: "Produtos",
    href: "/produtos",
    dropdown: true,
  },
  {
    label: "Soluções",
    href: "/solucoes",
    dropdown: true,
  },
  {
    label: "Projetos",
    href: "/projetos",
  },
  {
    label: "Serviços",
    href: "/servicos",
    dropdown: true,
  },
  {
    label: "Marcas",
    href: "/produtos",
  },
  {
    label: "Sobre nós",
    href: "/sobre",
  },
];

const categories = [
  {
    label: "Painéis Solares",
    href: "/produtos?category=Painéis%20Solares",
    icon: PanelTop,
  },
  {
    label: "Inversores",
    href: "/produtos?category=Inversores",
    icon: Zap,
  },
  {
    label: "Baterias",
    href: "/produtos?category=Baterias",
    icon: BatteryCharging,
  },
  {
    label: "Sistemas Fotovoltaicos",
    href: "/produtos?category=Sistemas",
    icon: Sun,
  },
  {
    label: "Bombas Solares",
    href: "/produtos?category=Bombas",
    icon: Wrench,
  },
  {
    label: "Estruturas",
    href: "/produtos?category=Estruturas",
    icon: Building2,
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // ============================================================
  // CONTADOR DO CARRINHO
  // ============================================================

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      try {
        const stored = localStorage.getItem("is-solar-cart");

        if (!stored) {
          setCartCount(0);
          return;
        }

        const cart = JSON.parse(stored);

        if (!Array.isArray(cart)) {
          setCartCount(0);
          return;
        }

        const total = cart.reduce(
          (
            sum: number,
            item: {
              quantity?: number;
            }
          ) => {
            return sum + (Number(item.quantity) || 0);
          },
          0
        );

        setCartCount(total);
      } catch (error) {
        console.error(
          "Erro ao atualizar contador do carrinho:",
          error
        );

        setCartCount(0);
      }
    };

    // Atualiza imediatamente ao carregar o Header
    updateCartCount();

    // Atualiza quando um produto é adicionado/removido
    window.addEventListener("cart-updated", updateCartCount);

    // Atualiza caso o localStorage seja alterado por outra aba
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener(
        "cart-updated",
        updateCartCount
      );

      window.removeEventListener(
        "storage",
        updateCartCount
      );
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,.08)]">

      {/* ============================================================
          TOP BAR
      ============================================================ */}

      <div className="bg-[#171717] text-white">
        <div className="mx-auto flex min-h-[32px] w-full max-w-[1600px] items-center justify-between px-4 text-[10px] sm:px-6 2xl:px-8">

          <div className="flex items-center gap-4">
            <span className="font-black tracking-wide">
              IS SOLAR MOÇAMBIQUE
            </span>

            <span className="hidden text-white/45 md:block">
              Marketplace de energia solar
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/65">

            <span className="hidden sm:block">
              🇲🇿 PT-MZ
            </span>

            <span className="hidden lg:block">
              EN
            </span>

            <Link
              href="/contactos"
              className="transition-colors hover:text-[#ffbf00]"
            >
              Central de ajuda
            </Link>

            <span className="hidden text-white/20 lg:block">
              |
            </span>

            <Link
              href="/contactos"
              className="hidden items-center gap-1 transition-colors hover:text-[#ffbf00] lg:flex"
            >
              <Phone size={11} />
              Contacte-nos
            </Link>

          </div>
        </div>
      </div>

      {/* ============================================================
          HEADER PRINCIPAL
      ============================================================ */}

      <div className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex min-h-[76px] w-full max-w-[1600px] items-center gap-3 px-4 sm:px-6 lg:gap-5 2xl:px-8">

          {/* LOGO */}

          <Link
            href="/"
            className="group shrink-0"
            aria-label="IS Solar - Página inicial"
          >
            <Image
              src="/brand/logo.png"
              alt="IS Solar"
              width={210}
              height={72}
              priority
              className="w-[130px] object-contain transition-transform duration-200 group-hover:scale-[1.02] sm:w-[155px] lg:w-[175px]"
            />
          </Link>

          {/* ========================================================
              BOTÃO COMPRAR
          ======================================================== */}

          <button
            type="button"
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="hidden h-[44px] items-center gap-2 rounded border border-gray-200 bg-[#f7f7f7] px-4 text-xs font-black transition-all hover:border-[#ffbf00] hover:bg-[#fff8dc] lg:flex"
          >
            <Zap
              size={17}
              className="text-[#c58d00]"
              fill="currentColor"
            />

            <span>
              Comprar
            </span>

            <ChevronDown
              size={14}
              className={`transition-transform ${
                categoryOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* ========================================================
              PESQUISA
          ======================================================== */}

          <form
            action="/produtos"
            className="hidden min-w-0 flex-1 md:flex"
          >
            <div className="flex h-[46px] w-full overflow-hidden rounded-[4px] border-2 border-[#ffbf00] bg-white shadow-sm transition-shadow focus-within:shadow-[0_0_0_3px_rgba(255,191,0,.15)]">

              <select
                name="category"
                defaultValue=""
                aria-label="Categoria"
                className="hidden min-w-[125px] cursor-pointer border-r border-gray-200 bg-[#fafafa] px-3 text-xs font-bold outline-none lg:block"
              >
                <option value="">
                  Todas categorias
                </option>

                <option value="Painéis Solares">
                  Painéis
                </option>

                <option value="Inversores">
                  Inversores
                </option>

                <option value="Baterias">
                  Baterias
                </option>

                <option value="Bombas">
                  Bombas
                </option>

                <option value="Estruturas">
                  Estruturas
                </option>
              </select>

              <input
                name="q"
                type="search"
                placeholder="Pesquise equipamentos, marcas, kits ou soluções..."
                aria-label="Pesquisar produtos"
                className="min-w-0 flex-1 bg-white px-4 text-[13px] outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                aria-label="Pesquisar"
                className="flex w-[54px] shrink-0 items-center justify-center bg-[#ffbf00] text-[#171717] transition-colors hover:bg-[#f3b300]"
              >
                <Search
                  size={20}
                  strokeWidth={2.5}
                />
              </button>

            </div>
          </form>

          {/* ========================================================
              AÇÕES DESKTOP
          ======================================================== */}

          <div className="ml-auto hidden items-center gap-1 lg:flex">

            {/* FAVORITOS */}

            <Link
              href="#"
              className="group flex min-w-[65px] flex-col items-center justify-center rounded px-3 py-2 transition-colors hover:bg-gray-50"
            >
              <Heart
                size={20}
                strokeWidth={1.8}
                className="transition-colors group-hover:text-[#c38e00]"
              />

              <span className="mt-1 text-[9px] font-bold">
                Favoritos
              </span>
            </Link>

            {/* COTAÇÕES */}

            <Link
              href="/cotacao"
              className="group flex min-w-[68px] flex-col items-center justify-center rounded px-3 py-2 transition-colors hover:bg-gray-50"
            >
              <div className="relative">

                <ClipboardList
                  size={20}
                  strokeWidth={1.8}
                  className="transition-colors group-hover:text-[#c38e00]"
                />

                <span className="absolute -right-2 -top-2 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#ffbf00] px-1 text-[8px] font-black text-[#171717]">
                  0
                </span>

              </div>

              <span className="mt-1 text-[9px] font-bold">
                Cotações
              </span>
            </Link>

            {/* ======================================================
                CARRINHO
            ====================================================== */}

            <Link
              href="/carrinho"
              className="group flex min-w-[68px] flex-col items-center justify-center rounded px-3 py-2 transition-colors hover:bg-gray-50"
            >
              <div className="relative">

                <ShoppingCart
                  size={21}
                  strokeWidth={1.8}
                  className="transition-colors group-hover:text-[#c38e00]"
                />

                <span
                  className={`absolute -right-2 -top-2 flex h-[15px] min-w-[15px] items-center justify-center rounded-full px-1 text-[8px] font-black transition-all ${
                    cartCount > 0
                      ? "bg-[#ffbf00] text-[#171717]"
                      : "bg-[#e5e5e5] text-[#777]"
                  }`}
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>

              </div>

              <span className="mt-1 text-[9px] font-bold">
                Carrinho
              </span>
            </Link>

            {/* CONTA */}

            <Link
              href="#"
              className="group flex min-w-[68px] flex-col items-center justify-center rounded px-3 py-2 transition-colors hover:bg-gray-50"
            >
              <UserRound
                size={21}
                strokeWidth={1.8}
                className="transition-colors group-hover:text-[#c38e00]"
              />

              <span className="mt-1 text-[9px] font-bold">
                Minha conta
              </span>
            </Link>

          </div>

          {/* ========================================================
              MENU MOBILE
          ======================================================== */}

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
            aria-expanded={mobileOpen}
            className="ml-auto grid h-11 w-11 place-items-center rounded border border-gray-200 transition-colors hover:bg-gray-50 lg:hidden"
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </div>

      {/* ============================================================
          DROPDOWN DE CATEGORIAS
      ============================================================ */}

      {categoryOpen && (
        <div className="absolute left-0 right-0 top-[108px] hidden border-b border-gray-200 bg-white shadow-xl lg:block">

          <div className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 2xl:px-8">

            <div className="grid grid-cols-3 gap-3 xl:grid-cols-6">

              {categories.map((category) => {

                const Icon = category.icon;

                return (
                  <Link
                    key={category.label}
                    href={category.href}
                    onClick={() => setCategoryOpen(false)}
                    className="group flex items-center gap-3 rounded border border-gray-100 bg-[#fafafa] p-4 transition-all hover:border-[#ffbf00] hover:bg-[#fff9df]"
                  >

                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded bg-white shadow-sm">

                      <Icon
                        size={20}
                        className="text-[#a97800] transition-transform group-hover:scale-110"
                      />

                    </div>

                    <div>

                      <div className="text-[11px] font-black">
                        {category.label}
                      </div>

                      <div className="mt-1 text-[9px] text-gray-500">
                        Ver produtos →
                      </div>

                    </div>

                  </Link>
                );
              })}

            </div>

          </div>
        </div>
      )}

      {/* ============================================================
          NAVEGAÇÃO DESKTOP
      ============================================================ */}

      <nav className="hidden border-b border-gray-200 bg-white lg:block">

        <div className="mx-auto flex h-[45px] w-full max-w-[1600px] items-center px-4 sm:px-6 2xl:px-8">

          <Link
            href="/produtos"
            className="flex h-full items-center gap-2 bg-[#ffbf00] px-6 text-[11px] font-black transition-colors hover:bg-[#f3b300]"
          >
            <Menu size={16} />
            TODAS AS CATEGORIAS
          </Link>

          {navLinks.map((link) => (

            <Link
              key={link.label}
              href={link.href}
              className="group flex h-full items-center gap-1 px-5 text-[11px] font-bold transition-colors hover:bg-[#fafafa] hover:text-[#a97700]"
            >

              {link.label}

              {link.dropdown && (
                <ChevronDown
                  size={12}
                  className="text-gray-400 transition-transform group-hover:translate-y-[1px]"
                />
              )}

            </Link>

          ))}

          <Link
            href="/cotacao"
            className="ml-auto flex h-[31px] items-center gap-2 rounded bg-[#171717] px-5 text-[10px] font-black text-white transition-all hover:bg-[#333]"
          >
            <ClipboardList size={14} />
            SOLICITAR COTAÇÃO
          </Link>

        </div>
      </nav>

      {/* ============================================================
          MENU MOBILE
      ============================================================ */}

      {mobileOpen && (

        <div className="border-b border-gray-200 bg-white shadow-xl lg:hidden">

          <div className="mx-auto w-full max-w-[1600px] px-4 py-4 sm:px-6">

            {/* PESQUISA MOBILE */}

            <form
              action="/produtos"
              className="mb-4 flex h-[46px] overflow-hidden rounded border-2 border-[#ffbf00]"
            >
              <input
                name="q"
                type="search"
                placeholder="Pesquisar produtos..."
                className="min-w-0 flex-1 px-3 text-sm outline-none"
              />

              <button
                type="submit"
                className="flex w-12 items-center justify-center bg-[#ffbf00]"
              >
                <Search size={19} />
              </button>
            </form>

            {/* AÇÕES RÁPIDAS */}

            <div className="mb-4 grid grid-cols-3 gap-2">

              <Link
                href="/cotacao"
                onClick={closeMobile}
                className="flex flex-col items-center justify-center rounded border bg-[#fafafa] py-3 transition-colors hover:bg-[#fff9df]"
              >
                <ClipboardList size={19} />

                <span className="mt-1 text-[9px] font-bold">
                  Cotações
                </span>
              </Link>

              <Link
                href="/carrinho"
                onClick={closeMobile}
                className="flex flex-col items-center justify-center rounded border bg-[#fafafa] py-3 transition-colors hover:bg-[#fff9df]"
              >
                <div className="relative">

                  <ShoppingCart size={19} />

                  {cartCount > 0 && (
                    <span className="absolute -right-3 -top-2 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#ffbf00] px-1 text-[8px] font-black text-[#171717]">
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}

                </div>

                <span className="mt-1 text-[9px] font-bold">
                  Carrinho
                </span>
              </Link>

              <Link
                href="/conta"
                onClick={closeMobile}
                className="flex flex-col items-center justify-center rounded border bg-[#fafafa] py-3 transition-colors hover:bg-[#fff9df]"
              >
                <UserRound size={19} />

                <span className="mt-1 text-[9px] font-bold">
                  Minha conta
                </span>
              </Link>

            </div>

            {/* MENU */}

            <div className="divide-y rounded border">

              {navLinks.map((link) => (

                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="flex items-center justify-between px-4 py-3 text-xs font-bold transition-colors hover:bg-[#fff9df]"
                >

                  <span>
                    {link.label}
                  </span>

                  {link.dropdown && (
                    <ChevronDown
                      size={15}
                      className="text-gray-400"
                    />
                  )}

                </Link>

              ))}

            </div>

            {/* CTA MOBILE */}

            <Link
              href="/cotacao"
              onClick={closeMobile}
              className="mt-4 flex min-h-[45px] items-center justify-center gap-2 rounded bg-[#ffbf00] text-xs font-black transition-colors hover:bg-[#f3b300]"
            >
              <ClipboardList size={17} />
              SOLICITAR COTAÇÃO
            </Link>

            {/* CONTACTO */}

            <Link
              href="/contactos"
              onClick={closeMobile}
              className="mt-2 flex min-h-[42px] items-center justify-center gap-2 rounded border text-[11px] font-bold transition-colors hover:bg-gray-50"
            >
              <Phone size={15} />
              Contactar a IS Solar
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}