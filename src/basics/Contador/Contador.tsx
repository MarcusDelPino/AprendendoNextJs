import { useContext, useState } from "react";
import ContadorContext from "../contexts/ContadorContext";

export default function Contador() {
  const { count, inc, dec } = useContext(ContadorContext);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <span className="text-7xl">{count}</span>
      <div className="flex justify-center items-center gap-5">
        <button className="botao text-2xl" onClick={dec}>
          Decrement
        </button>
        <button className="botao text-2xl" onClick={inc}>
          Increment
        </button>
      </div>
    </div>
  );
}
