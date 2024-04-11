import Neto from "./Neto";

interface FilhoProps {
    nome: string
    sobrenome: string
}

export default function Filho(props:any) {
    return (
        <div className={`
            flex flex-col gap-5 
            bg-blue-500 text-white border border-white
            rounded p-5
        `}>
            <div className="flex justify-center gap-2 text-1xl">
                <span className="font-black">Filho:</span>
                <span>{props.nome}</span>
                <span> {props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
                <Neto nome="Milo" sobrenome="Wesley"/>
                <Neto nome="Carly" sobrenome="Wesley"/>
            </div>
            
        </div>
    );
}
