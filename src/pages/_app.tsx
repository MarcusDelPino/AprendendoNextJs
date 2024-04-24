import { ContadorProvider } from "@/basics/contexts/ContadorContext";
import { ProdutosProvider } from "@/basics/contexts/ProdutoContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProdutosProvider>
      <ContadorProvider>
        <Component {...pageProps} />;
      </ContadorProvider>
    </ProdutosProvider>
  );
}
