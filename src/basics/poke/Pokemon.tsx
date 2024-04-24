import { useState } from "react";
import Image from "next/image";
import useProcessando from "@/data/hooks/useProcessando";

interface PokeImageProps {
  pokeName: string;
}

export default function Pokemon({pokeName}: PokeImageProps) {
  const { processando, iniciarProcessamento, finalizarProcessamento } =
    useProcessando();
  const [imgPoke, setImgPoke] = useState<string>("");
  
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
  console.log(URL)

  const receivePoke = async () => {
    try {
      iniciarProcessamento();
      const resp = await fetch(URL);
      const data = await resp.json();
      console.log(data, pokeName);
      setImgPoke(data.sprites.front_default);
    } finally {
      finalizarProcessamento();
    }
  };

  return (
    <div className="flex justify-center ">
      {processando ? (
        <div>pokemon
          <h1 className="botao " onClick={receivePoke}>
            PokeDex
          </h1>
        </div>
      ) : (
        <div>
          <Image
            src={imgPoke}
            width={150}
            height={150}
            decoding="async"
            alt="Imagem pokemon"
            
          />
          
        </div>
      )}
    </div>
  );
}
