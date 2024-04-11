import ItemCarrinho from "@/model/ItemCarrinho";
import ItemCarrinhoCompra from "@/pages/listas/ItemCarrinhoCompra";
import { IconCircleX } from "@tabler/icons-react";
import CarrinhoVazio from "./CarrinhoVazio";
import Moeda from "../utils/Moeda";

interface CarrinhoProps {
  itens: ItemCarrinho[];
}

export default function Carrinho(props: CarrinhoProps) {

  const total = props.itens.reduce((soma, item) => {
    return soma + item.quantidade * item.produto.preco
  },0)

  return (
    <div className="flex flex-col border border-blue-600 overflow-hidden rounded-lg w-4/5">
      <div className="flex justify-between bg-zinc-200 text-3xl p-3">
        <span>Carrinho</span>
        <span>{Moeda.formatarValor(total)}</span>
      </div>
      <div className="flex gap-5 p-3">
        {props.itens.length === 0 ? (
          <CarrinhoVazio />
        ) : (
          props.itens.map((item, i) => {
            return <ItemCarrinhoCompra key={i} {...item} />;
          })
        )}
      </div>
    </div>
  );
}
