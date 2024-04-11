import Moeda from "@/basics/utils/Moeda";
import ItemCarrinho from "@/model/ItemCarrinho";

export default function ItemCarrinhoCompra(props: ItemCarrinho) {

  return (
    <div className="flex items-center bg-blue-500 rounded-full gap-5">
      <span className="flex justify-center items-center w-7 h-7 p-2 rounded-full bg-blue-700">
        {props.quantidade}
      </span>
      <span>{props.produto.nome}</span>
      <span className="pr-5">{Moeda.formatarValor(props.produto.preco * props.quantidade)}</span>
    </div>
  );
}
