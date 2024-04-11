import ProdutoItem from "@/basics/listas/produtoItem";
import Produto from "@/model/Produto";

interface ListaProdutosProps{
    produtos: Produto[]
    comprar: (produto: Produto) => void
}

export default function Listasprodutos(props: ListaProdutosProps) {
    return (
        <div className="flex flex-wrap justify-around gap-4">
            {props.produtos.map(produto => <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar}/>)}
        </div>
    );
}
