import { useState } from "react";

export default function useTresPontos() {

    const [ tres, setTres ] = useState<string>("");

  const aparecer = () => {
    setTimeout(() => {
      setTres("Processando.");
    }, 0);
    setTimeout(() => {
        setTres("Processando..");
    }, 100);
    setTimeout(() => {
        setTres("Processando...");
    }, 200);
  };

  return {
    aparecer,
    tres
  };
}
