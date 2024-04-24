import Pokemon from "@/basics/poke/Pokemon";
import { useState } from "react";

export default function PagePokemon() {

    const [nameOfPoke, setNameOfPoke] = useState<string>('');

  const nameHandler = (e:any) => {
    setNameOfPoke(e.target.value)
    console.log(nameOfPoke)
  };

  return (
    <div>
      <input type="text" onChange={nameHandler}/>
      <Pokemon pokeName={nameOfPoke}/>
    </div>
  );
}
