import produtos from "@/constants/produtos";
import Listasprodutos from "../../basics/listas/Listasprodutos";
import { useContext } from "react";
import Carrinho from "@/basics/listas/Carrinho";
import ProdutoContexto from "@/basics/contexts/ProdutoContext";
export default function PaginaProdutos() {

  const { itens, adicionarProduto } = useContext(ProdutoContexto)

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
