import { IconX } from "@tabler/icons-react";

interface FilmesApiProps {
  filmes: [];
  voltar: () => void
}

export default function FilmesApi({ filmes, voltar }: FilmesApiProps) {
  

  return (
    <table className="w-3/5 text-xl text-center opacity-80 rounded-lg overflow-hidden ">
      <thead>
        <tr className="bg-zinc-800">
          <th className="p-2 font-black">Título</th>
          <th className="p-2 font-black">Episódio</th>
          <th className="p-2 font-black">Data</th>
        </tr>
      </thead>
      <tbody>
        {filmes.map((persona:any, index:number) => 
          <tr  key={index}
          className={`
          ${index % 2 === 0 ? 'bg-slate-400' : 'bg-slate-600'}
          `}
          >
            <td className="p-2">{persona.title}</td>
            <td className="p-2">{persona.episode_id}</td>
            <td className="p-2">{new Date(persona.release_date).toLocaleDateString('pt-BR')}</td>
          </tr>
        )}
      </tbody>
      <tfoot className="">
        <tr>
        <td><button className="botao flex items-center justify-center" onClick={voltar}><IconX /></button></td>
        </tr>
      </tfoot>
    </table>
  );
}
