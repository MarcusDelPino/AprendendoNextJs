import BackGround from "@/basics/starWars/BackGround";
import Personagem from "@/basics/starWars/Personagem";
import PersonagemApi from "@/basics/starWars/PersonagemApi";
import useStarWars from "@/data/hooks/useStarWars";

export default function PageStarWars() {
  const { personagens, obterPersonagens, processando, tres } = useStarWars();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <BackGround />

      {processando ? (
        <div>{tres}</div>
      ) : personagens.length > 0 ? (
        <PersonagemApi personagens={personagens} />
      ) : (
        <div className="flex flex-col justify-center items-center gap-3">
          <h1>Nenhum personagem encontrado</h1>
          <button className="botao" onClick={obterPersonagens}>
            Obter
          </button>
        </div>
      )}
    </div>
  );
}
