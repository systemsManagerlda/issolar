import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartContent from "@/components/CartContent";

export default function CartPage() {
  return (
    <>
      <Header />

      <main className="min-h-[60vh] bg-[#f5f5f5]">
        <div className="container py-10">
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b17e00]">
              Marketplace
            </p>

            <h1 className="mt-2 text-3xl font-black text-[#171717]">
              Carrinho
            </h1>

            <p className="mt-2 text-sm text-[#697078]">
              Reveja os produtos selecionados antes de solicitar a sua
              cotação.
            </p>
          </div>

          <CartContent />
        </div>
      </main>

      <Footer />
    </>
  );
}