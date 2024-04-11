import { use, useState } from "react"

export default function ImagensAleatorias() {

    // const [ trocar, setTrocar ] = useState<string>(`https://source.unsplash.com/featured/300x300?`)
    const [ pesquisa, setPesquisa ] = useState<string>("universe")
    const [tamanho, setTamanho] = useState(300);

    const URL = `https://source.unsplash.com/featured/`

    const handleChange = (e: any) => {
        setTamanho(+e.target.value)
    }

    const rederizarBtn = (valor: string) => {
        return(
            <div>
                
                <button onClick={() => {
                    setPesquisa(valor)
                }} className={`
                    bg-blue-600 px-7 py-2 rounded-md shadow-md
                    `}>
                    {valor}
                </button>
            </div>
        )
    }
    

    return (
        <div className={` flex justify-between flex-col gap-3 border border-red-700 p-7 rounded-lg`} >
            <p className="flex justify-center" >{pesquisa}: {tamanho}X{tamanho}</p>
            <img src={`${URL}${tamanho}x${tamanho}?${pesquisa}`} alt="" />
            <div className="flex gap-5">
                {rederizarBtn('Car')}
                {rederizarBtn('Abstract')}
                {rederizarBtn('City')}
            </div>
            <input 
            type="number" 
            value={tamanho}
            onChange={handleChange}
            className=" bg-zinc-700 text-white p-2 rounded-md outline-none"
            /> 
        </div>
    );
}
