import Filho from "./Filho";

interface AvoProps {
    nome: string
    sobrenome: string
}

export default function Avo(props:any) {
    return (
        <div className="flex flex-col gap-5 p-5 bg-purple-400 text-white border border-white rounded-md">

            <div className="flex justify-center gap-2 text-1xl">
                <span className="font-black">Avô:</span>
                <span>{props.nome}</span>
                <span> {props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
                <Filho nome="Paulo" sobrenome="Afonso"/>
                <Filho nome="Caetano" sobrenome="Afonso"/>
                <Filho nome="Jorge" sobrenome="Afonso"/>
            </div>
        </div>
    );
}
