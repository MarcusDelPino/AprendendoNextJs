import { ContadorProvider } from "@/basics/contexts/ContadorContext";
import Contador from "@/basics/Contador/Contador";
export default function PaginaContador() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Contador />
    </div>
  );
}
