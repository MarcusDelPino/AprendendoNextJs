import { createContext, useState } from "react";

const ContadorContext = createContext({} as any);

export default ContadorContext;

export function ContadorProvider(props: any) {
  const [count, setCount] = useState(1234);

  const inc = () => setCount((c) => c + 1);
  const dec = () => setCount((c) => c - 1);

  return (
    <ContadorContext.Provider value={{ count, inc, dec }}>
      {props.children}
    </ContadorContext.Provider>
  );
}
