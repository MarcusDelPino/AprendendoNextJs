import TabelaSeriaA from "@/basics/listas/TabelaSeriaA";
import { IconBallFootball } from "@tabler/icons-react";

export default function PaginaListaBasico() {

    	
const listaBrasileirao = [  'Athletico-PR',
                            'Atlético-GO',
                            'Atlético-MG',
                            'Bahia',
                            'Botafogo',
                            'Bragantino',
                            'Corinthians',
                            'Criciúma',
                            'Cruzeiro',
                            'Palmeiras']

    return (
        <div className={`
        flex justify-center items-center h-screen flex-col
        `}>
            <h1 className=" flex items-center gap-2 text-5xl font-black">
                <IconBallFootball size={50} stroke={1}/>
                Tabela Serie A 
            </h1>
            <TabelaSeriaA times={listaBrasileirao}/>
        </div>
    );
}
