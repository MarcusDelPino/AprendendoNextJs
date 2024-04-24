import { useEffect, useState, useCallback } from "react";
import useProcessando from "./useProcessando";

export default function useStarWars() {
  const [personagens, setPersonagens] = useState<any>([]);
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();
  const [movie, setMovie] = useState<any>([]);
  const [filme, setFilme] = useState<any>([]);

  const selecionarPersonagem = (personagem: any) => {
    setMovie(personagem);
    console.log(personagem)
  };

  const obterFilms = useCallback(
    async (personagem: any) => {
      if (!personagem?.films?.length) return;
      try {
        iniciarProcessamento();
        const reqs = personagem.films.map(async (films: string) => {
          const response = await fetch(films);
          
          return response.json();
        });

        const filmes = await Promise.all(reqs);
        setFilme(filmes);
      } finally {
        finalizarProcessamento();
      }
    },
    [iniciarProcessamento, finalizarProcessamento]
  );

  const voltar = () => {
    setMovie(null);
    setFilme([]);
  };

  const obterPersonagens = useCallback(async () => {
    try {
      iniciarProcessamento();
      console.log("Inicio da chamada");
      const resp = await fetch(`https://swapi.py4e.com/api/people/`);
      const data = await resp.json();
      setPersonagens(data.results);
      console.log(data.results);
    } finally {
    }
    // console.log("Fim da chamada");
    finalizarProcessamento();
  }, [iniciarProcessamento, finalizarProcessamento]);

  useEffect(() => {
    obterPersonagens();
  }, [obterPersonagens]);

  useEffect(() => {
    obterFilms(movie);
  }, [movie, obterFilms]);

  return {
    personagens,
    processando,
    selecionarPersonagem,
    movie,
    filme,
    voltar,
  };
}
