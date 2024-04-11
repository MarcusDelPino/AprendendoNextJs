import { IconCircleX } from "@tabler/icons-react";

export default function CarrinhoVazio() {
    return (
        <div className="flex gap-5">
            <IconCircleX color="red"/>
            <span>Nenhum item no carrinho</span>
          </div>
    );
}
