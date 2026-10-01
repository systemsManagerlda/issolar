import Link from "next/link";
import {Heart, ShoppingCart, ArrowUpRight} from "lucide-react";
import type {Product} from "@/lib/data";

export default function ProductCard({p}:{p:Product}){
 return <article className="group overflow-hidden rounded border bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,.09)]">
  <div className="relative bg-[#f7f7f5]">
   <Link href={`/produtos/${p.slug}`}><div className="aspect-square p-4"><img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain"/></div></Link>
   {p.badge&&<span className="absolute left-2 top-2 rounded bg-[#ffbf00] px-2 py-1 text-[9px] font-black uppercase">{p.badge}</span>}
   <button aria-label="Adicionar aos favoritos" className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/90 shadow"><Heart size={14}/></button>
  </div>
  <div className="p-3">
   <div className="text-[10px] font-black uppercase text-[#a87900]">{p.category}</div>
   <Link href={`/produtos/${p.slug}`} className="mt-1 block line-clamp-2 text-xs font-black leading-5">{p.name}</Link>
   <div className="mt-2 flex flex-wrap gap-1">{p.specs.map(s=><span key={s} className="rounded bg-[#f1f1f1] px-1.5 py-1 text-[9px] text-gray-600">{s}</span>)}</div>
   <div className="mt-3 flex items-end justify-between gap-2"><div><div className="text-[10px] text-gray-500">Preço</div><div className="text-sm font-black">{p.price}</div></div><Link href={`/cotacao?produto=${encodeURIComponent(p.name)}`} className="grid h-8 w-8 place-items-center rounded bg-[#ffbf00]"><ShoppingCart size={14}/></Link></div>
   <div className="mt-2 flex items-center justify-between text-[9px] text-gray-500"><span>Disponível para cotação</span><Link href={`/produtos/${p.slug}`} className="font-bold text-gray-800"><ArrowUpRight size={12} className="inline"/> Detalhes</Link></div>
  </div>
 </article>
}