import ItemCarrinho from "@/model/ItemCarrinho";
import Produto from "@/model/Produto";
import { createContext, useState } from "react";

interface ProdutoContextProps {
  itens: ItemCarrinho[];
  adicionarProduto: (produto: Produto) => void;
}

const ProdutoContexto = createContext({} as any);
export default ProdutoContexto;

export function ProdutosProvider(props: any) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionarProduto(produto: Produto) {
    const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? {
      quantidade: 0,
      produto,
    };
    const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 };
    const outrosItens = itens.filter((item) => item.produto.id !== produto.id);
    setItens([...outrosItens, novoItem]);
  }

  return (
    <ProdutoContexto.Provider
      value={{
        itens,
        adicionarProduto,
      }}
    >
      {props.children}
    </ProdutoContexto.Provider>
  );
}
