import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {

  const [ativo, setAtivo] = useState<number>(0);

  const alternarVisibilidade = (indice: number) => {
    if(indice === ativo){
      setAtivo(-1)
    }else {
      setAtivo(indice)
    }
  }

  return (
    <div className={`flex flex-col gap-3 w-[90%] md:w-3/4`}>
      <Pergunta 
      indice={0}
      aberto={ativo === 0}
      resposta="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea quod ipsum unde amet, magni ab hic cum quas dolor consectetur saepe, aliquid, consequuntur non doloribus! Laudantium itaque dolor expedita!" 
      pergunta="O que é o Next.js?" 
      alternarVisibilidade={alternarVisibilidade}/>
      <Pergunta 
      indice={1}
      aberto={ativo === 1}
      resposta="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt incidunt omnis aspernatur quidem labore tempore, molestiae modi mollitia cum nostrum perferendis minima, consequatur, expedita blanditiis consectetur! Tempore animi assumenda nihil!" pergunta="Por que usar o Next.js?" 
      alternarVisibilidade={alternarVisibilidade}/>
      <Pergunta
      aberto={ativo === 2}
      indice={2} 
      resposta="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt incidunt omnis aspernatur quidem labore tempore, molestiae modi mollitia cum nostrum perferendis minima, consequatur, expedita blanditiis consectetur! Tempore animi assumenda nihil!" pergunta="Quais são os benefícios do Next.js?" 
      alternarVisibilidade={alternarVisibilidade}/>
      <Pergunta
      aberto={ativo === 3}
      indice={3} 
      resposta="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt incidunt omnis aspernatur quidem labore tempore, molestiae modi mollitia cum nostrum perferendis minima, consequatur, expedita blanditiis consectetur! Tempore animi assumenda nihil!" pergunta="Como funcionam as páginas e rotas no Next.js?" 
      alternarVisibilidade={alternarVisibilidade}/>
    </div>
  );
}
