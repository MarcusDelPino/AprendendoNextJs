interface AvoProps {
    nome: string
    sobrenome: string
}

export default function Neto(props:any) {


    
    return (
        <div className={`flex justify-center items-center 
        bg-green-600 rounded-md p-5 border border-white`}>
            <div className="flex justify-center gap-2 text-1xl">
                <span className="font-black">Neto:</span>
                <span>{props.nome}</span>
                <span> {props.sobrenome}</span>
            </div>
            
        </div>
    );
}
