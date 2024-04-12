import useProcessando from "@/data/hooks/useProcessando";
import useTresPontos from "@/data/hooks/useTresPontos";
import { useState } from "react";

export default function Personagem() {
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();
  const { aparecer, tres } = useTresPontos();

  const simularChamadaApi = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 10000);
    });
  };

  const obterPersonagens = async () => {
    try {
      iniciarProcessamento();
      aparecer()
      // console.log("Inicio da chamada");
      await simularChamadaApi();
    } finally {
    }
    // console.log("Fim da chamada");
    finalizarProcessamento();
  };

  return (
    <div>
      {processando ? (
        <div>Processando{tres}</div>
      ) : (
        <h1>Conteúdo com os personagens</h1>
      )}
      <button className="botao" onClick={obterPersonagens}>
        Obter
      </button>
    </div>
  );
}
