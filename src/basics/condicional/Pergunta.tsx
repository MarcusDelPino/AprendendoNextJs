import { useState } from "react";
import If from "./If";
import { IconCaretDown, IconCaretUp } from "@tabler/icons-react";

interface PerguntaProps {
    indice: number
    pergunta: string
    resposta: string
    aberto: boolean
    alternarVisibilidade: (indice:number) => void
}

export default function Pergunta(props: PerguntaProps) {
      

    return (
        <div className={` border border-blue-800 rounded-md cursor-pointer overflow-hidden  `}>
            <div className={` text-white bg-zinc-700 p-5 select-none flex justify-between `} onClick={() => props.alternarVisibilidade(props.indice)}>
                <span>{props.pergunta}</span>
                {props.aberto ? <IconCaretUp /> : <IconCaretDown />}
            </div>
                <If teste={props.aberto}>
    
                    <div className={`p-5`}>
                    {props.resposta}
                </div>
              
                </If>
            
        </div>
    );
}
