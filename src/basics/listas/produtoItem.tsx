import Produto from "@/model/Produto";
import { IconCarTurbine, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

interface ProdutoItemProps {
  produto: Produto;
  comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { id, nome, preco, descricao, imagem } = props.produto;
  return (
    <div
      className={`\
            flex flex-col rounded-md border border-zinc-600 p-1
        `}
    >
      <Image
        quality={75} // {number 1-100}
        priority={false} // {false} | {true}
        src={imagem}
        width={250}
        height={250}
        alt="Imagem do produto"
        placeholder="empty"
      />
      <div className="flex flex-col p-3 gap-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-black">{nome}</div>
          <div className="text-blue-700 font-bold">R$ {preco}</div>
        </div>
        <div className="text-gray-700">{descricao}</div>
      </div>
      <div className="flex justify-end">
        <button onClick={() => props.comprar(props.produto)} className="botao flex items-center gap-3 hover:bg-blue-100">
          <IconShoppingCart />  Add ao carrinho
        </button>
      </div>
    </div>
  );
}
