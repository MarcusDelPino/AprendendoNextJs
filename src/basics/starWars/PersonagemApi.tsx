import useStarWars from "@/data/hooks/useStarWars";
import { IconCheck } from "@tabler/icons-react";
import { table } from "console";

interface PersonagemApiProps {
  personagens: [];
  selecionar: (personagem: any) => void;
}

export default function PersonagemApi({ personagens, selecionar }: PersonagemApiProps) {
  
  return (
    <table className="w-3/5 text-xl text-center opacity-80 rounded-lg overflow-hidden ">
      <thead>
        <tr className="bg-zinc-800">
          <th className="p-2 font-black">Nome</th>
          <th className="p-2 font-black">Altura</th>
          <th className="p-2 font-black">Peso</th>
          <th className="p-2 font-black">Ações</th>
        </tr>
      </thead>
      <tbody>
        {personagens.map((persona:any, index:number) => 
          <tr  key={index}
          className={`
          ${index % 2 === 0 ? 'bg-slate-400' : 'bg-slate-600'}
          `}
          >
            <td className="p-2">{persona.name}</td>
            <td className="p-2">{persona.height}</td>
            <td className="p-2">{persona.mass}</td>
            <td className="p-2">
              <button className="botao" onClick={() => selecionar(persona)}><IconCheck/></button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
