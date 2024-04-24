import BackGround from "@/basics/starWars/BackGround";
import FilmesApi from "@/basics/starWars/Filmes";
import PersonagemApi from "@/basics/starWars/PersonagemApi";
import useStarWars from "@/data/hooks/useStarWars";

export default function PageStarWars() {
  const { personagens, processando, selecionarPersonagem, movie, filme, voltar } = useStarWars();

  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <BackGround />

      {processando ? (
        <div>Processando</div>
      ) : filme.length > 0 ? (
        <FilmesApi filmes={filme} voltar={voltar}/>
      ) : personagens.length > 0 ? (
        <PersonagemApi personagens={personagens} selecionar={selecionarPersonagem}/>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3">
          <h1>Nenhum personagem encontrado</h1>
        </div>
      )}
    </div>
  );
}
