"use client";

import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";

type Product = {
  slug: string;
  name: string;
  price?: string;
  image: string;
  category?: string;
};

type AddToCartButtonProps = {
  product: Product;
};

type CartItem = Product & {
  quantity: number;
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  function addToCart() {
    try {
      const stored = localStorage.getItem("is-solar-cart");

      const cart: CartItem[] = stored ? JSON.parse(stored) : [];

      const existingIndex = cart.findIndex(
        (item) => item.slug === product.slug
      );

      if (existingIndex >= 0) {
        cart[existingIndex] = {
          ...cart[existingIndex],
          quantity: cart[existingIndex].quantity + 1,
        };
      } else {
        cart.push({
          ...product,
          quantity: 1,
        });
      }

      localStorage.setItem("is-solar-cart", JSON.stringify(cart));

      // Permite que Header, Carrinho e outros componentes
      // saibam que o carrinho foi atualizado.
      window.dispatchEvent(new Event("cart-updated"));

      setAdded(true);

      setTimeout(() => {
        setAdded(false);
      }, 1800);
    } catch (error) {
      console.error("Erro ao adicionar produto ao carrinho:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={addToCart}
      className={`mt-2 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md border px-6 text-xs font-black transition ${
        added
          ? "border-[#15783a] bg-[#f1f7f2] text-[#15783a]"
          : "border-[#dedede] text-[#171717] hover:border-[#171717] hover:bg-[#fafafa]"
      }`}
    >
      {added ? (
        <>
          <Check size={16} />
          Adicionado ao carrinho
        </>
      ) : (
        <>
          <ShoppingCart size={16} />
          Adicionar ao carrinho
        </>
      )}
    </button>
  );
}