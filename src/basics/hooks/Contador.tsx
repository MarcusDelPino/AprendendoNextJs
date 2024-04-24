import { useState, useEffect } from "react";

export default function Contador() {
  
    console.log("nova renderização")
    const [valor, setValor] = useState(0);



  const multi10 = valor * 10;

    useEffect(() => {
        console.log("EXECUTOU UseEffect")
        return () => {
            
        };
    }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <span className="text-5xl">{valor}</span>
      <span className="text-1xl text-zinc-500">{multi10}</span>
      <div className="flex gap-5">
        <button
          className="botao text-5xl"
          onClick={() => setValor((v) => v - 1)}
        >
          -1
        </button>
        <button
          className="botao text-5xl"
          onClick={() => setValor((v) => v + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}
