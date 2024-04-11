import ProdutoItem from "@/basics/listas/produtoItem";
import produtos from "@/constants/produtos";
import Listasprodutos from "../../basics/listas/Listasprodutos";
import { useState } from "react";
import Produto from "@/model/Produto";
import Carrinho from "@/basics/listas/Carrinho";
import ItemCarrinho from "@/model/ItemCarrinho";
export default function PaginaProdutos() {

  const [itens  , setItens  ] = useState<ItemCarrinho[]>([])

  function adicionarProduto(produto: Produto) {
    const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? {quantidade:0, produto}
    const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1}
    const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
    setItens([...outrosItens, novoItem])
  }

  return (
    <div
      className={`
        flex justify-center items-center h-screen flex-col gap-10
        `}
    >
      <Carrinho itens={itens}/>
      <Listasprodutos produtos={produtos} comprar={adicionarProduto}/>
    </div>
  );
}
