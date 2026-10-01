"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  CreditCard,
  Smartphone,
} from "lucide-react";

type CartItem = {
  slug: string;
  name: string;
  price?: string;
  image: string;
  category?: string;
  quantity: number;
};

export default function CartContent() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    loadCart();

    const handleUpdate = () => {
      loadCart();
    };

    window.addEventListener("cart-updated", handleUpdate);

    return () => {
      window.removeEventListener("cart-updated", handleUpdate);
    };
  }, []);

  function loadCart() {
    try {
      const stored = localStorage.getItem("is-solar-cart");

      if (!stored) {
        setCart([]);
        return;
      }

      const parsedCart = JSON.parse(stored);

      if (!Array.isArray(parsedCart)) {
        setCart([]);
        return;
      }

      setCart(parsedCart);
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error);
      setCart([]);
    }
  }

  function saveCart(updatedCart: CartItem[]) {
    setCart(updatedCart);

    localStorage.setItem(
      "is-solar-cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("cart-updated"));
  }

  function increase(slug: string) {
    saveCart(
      cart.map((item) =>
        item.slug === slug
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decrease(slug: string) {
    saveCart(
      cart
        .map((item) =>
          item.slug === slug
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function remove(slug: string) {
    saveCart(
      cart.filter((item) => item.slug !== slug)
    );
  }

  /*
   * ============================================================
   * CARRINHO VAZIO
   * ============================================================
   */

  if (cart.length === 0) {
    return (
      <div className="rounded-xl border border-[#dedede] bg-white p-12 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff4c7]">
          <ShoppingCart
            size={28}
            className="text-[#b17e00]"
          />
        </div>

        <h2 className="mt-5 text-2xl font-black text-[#171717]">
          O seu carrinho está vazio
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm text-[#697078]">
          Adicione produtos do catálogo para começar
          a sua encomenda.
        </p>

        <Link
          href="/produtos"
          className="mt-6 inline-flex min-h-[46px] items-center gap-2 rounded-md bg-[#ffbf00] px-6 text-xs font-black text-[#171717] transition-colors hover:bg-[#f3b300]"
        >
          Ver produtos
          <ArrowRight size={16} />
        </Link>

      </div>
    );
  }

  /*
   * ============================================================
   * TOTAL DE PRODUTOS
   * ============================================================
   */

  const totalProducts = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /*
   * ============================================================
   * CARRINHO
   * ============================================================
   */

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_350px]">

      {/* ========================================================
          LISTA DE PRODUTOS
      ======================================================== */}

      <div className="space-y-3">

        {cart.map((item) => (
          <div
            key={item.slug}
            className="flex gap-4 rounded-xl border border-[#dedede] bg-white p-4"
          >

            {/* IMAGEM */}

            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-[#f7f8f7]">

              <Image
                src={item.image}
                alt={item.name}
                width={110}
                height={110}
                className="h-full w-full object-contain p-2"
              />

            </div>

            {/* INFORMAÇÕES */}

            <div className="min-w-0 flex-1">

              {item.category && (
                <span className="text-[9px] font-black uppercase text-[#b17e00]">
                  {item.category}
                </span>
              )}

              <h3 className="mt-1 text-sm font-black text-[#171717]">
                {item.name}
              </h3>

              <p className="mt-2 text-sm font-black text-[#171717]">
                {item.price || "Consultar"}
              </p>

              {/* QUANTIDADE */}

              <div className="mt-3 flex items-center gap-2">

                <button
                  type="button"
                  onClick={() => decrease(item.slug)}
                  className="flex h-8 w-8 items-center justify-center rounded border border-[#dedede] bg-white transition-colors hover:border-[#ffbf00] hover:bg-[#fff9df]"
                  aria-label="Diminuir quantidade"
                >
                  <Minus size={14} />
                </button>

                <span className="min-w-[25px] text-center text-xs font-black">
                  {item.quantity}
                </span>

                <button
                  type="button"
                  onClick={() => increase(item.slug)}
                  className="flex h-8 w-8 items-center justify-center rounded border border-[#dedede] bg-white transition-colors hover:border-[#ffbf00] hover:bg-[#fff9df]"
                  aria-label="Aumentar quantidade"
                >
                  <Plus size={14} />
                </button>

                <button
                  type="button"
                  onClick={() => remove(item.slug)}
                  className="ml-3 text-[#d33] transition hover:text-[#a00]"
                  title="Remover produto"
                  aria-label="Remover produto"
                >
                  <Trash2 size={16} />
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* ========================================================
          RESUMO + PAGAMENTO
      ======================================================== */}

      <aside className="h-fit rounded-xl border border-[#dedede] bg-white p-6">

        {/* RESUMO */}

        <span className="text-[10px] font-black uppercase tracking-wider text-[#697078]">
          Resumo
        </span>

        <h2 className="mt-2 text-2xl font-black text-[#171717]">
          Pedido
        </h2>

        <div className="my-5 border-t border-[#eeeeee]" />

        <div className="flex items-center justify-between text-sm">

          <span className="text-[#697078]">
            Produtos
          </span>

          <strong className="text-[#171717]">
            {totalProducts}
          </strong>

        </div>

        {/* ======================================================
            FORMAS DE PAGAMENTO
        ====================================================== */}

        <div className="mt-6 border-t border-[#eeeeee] pt-5">

          <h3 className="text-xs font-black uppercase tracking-wide text-[#171717]">
            Formas de pagamento
          </h3>

          <p className="mt-1 text-[10px] leading-relaxed text-[#697078]">
            Escolha uma das opções disponíveis para
            efetuar o pagamento da sua encomenda.
          </p>

          {/* M-PESA */}

          <div className="mt-4 flex items-center gap-3 rounded-lg border border-[#e4e4e4] bg-white p-3 transition-colors hover:border-[#ffbf00]">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f3f3f3]">
              <Smartphone
                size={20}
                className="text-[#171717]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-black text-[#171717]">
                M-Pesa
              </p>

              <p className="mt-0.5 text-[9px] text-[#697078]">
                Pagamento móvel
              </p>
            </div>

          </div>

          {/* E-MOLA */}

          <div className="mt-2 flex items-center gap-3 rounded-lg border border-[#e4e4e4] bg-white p-3 transition-colors hover:border-[#ffbf00]">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f3f3f3]">
              <Smartphone
                size={20}
                className="text-[#171717]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-black text-[#171717]">
                E-Mola
              </p>

              <p className="mt-0.5 text-[9px] text-[#697078]">
                Pagamento móvel
              </p>
            </div>

          </div>

          {/* VISA */}

          <div className="mt-2 flex items-center gap-3 rounded-lg border border-[#e4e4e4] bg-white p-3 transition-colors hover:border-[#ffbf00]">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f3f3f3]">
              <CreditCard
                size={20}
                className="text-[#171717]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-black text-[#171717]">
                Visa
              </p>

              <p className="mt-0.5 text-[9px] text-[#697078]">
                Cartão bancário
              </p>
            </div>

          </div>

        </div>

        {/* ======================================================
            CONTINUAR A COMPRAR
        ====================================================== */}

        <Link
          href="/produtos"
          className="mt-5 flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-[#dedede] bg-white px-5 text-xs font-black text-[#171717] transition-colors hover:border-[#ffbf00] hover:bg-[#fff9df]"
        >
          Continuar a comprar
          <ArrowRight size={15} />
        </Link>

      </aside>

    </div>
  );
}