import { useState } from "react";
import useProcessando from "./useProcessando";
import useTresPontos from "./useTresPontos";

export default function useStarWars() {
  const [personagens, setPersonagens] = useState<any>([]);
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();
  const { aparecer, tres } = useTresPontos();

  const obterPersonagens = async () => {
    try {
      iniciarProcessamento();
      aparecer();
      // console.log("Inicio da chamada");
      const resp = await fetch(`https://swapi.dev/api/people/`);
      const data = await resp.json();
      console.log(data);
      setPersonagens(data.results);
    } finally {
    }
    // console.log("Fim da chamada");
    finalizarProcessamento();
  };
  return { personagens, obterPersonagens, processando, tres };
}
