
import useStarWars from "@/data/hooks/useStarWars";

interface PersonagemApiProps{
  personagens: []
  
  
  
}

export default function PersonagemApi(props: PersonagemApiProps) {
  const { personagens } = props;

  const renderPersonagens = () => {
    return (
      <ul>
        {personagens.map((personagem: any, i: any) => (
          <li key={i}>{personagem.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {renderPersonagens()}
    </div>
  );
}
