import { useState } from "react";

interface QuadradoProps{
    name: string
    quase?: boolean
}

export default function Primeiro( props: QuadradoProps ) {
    
    const [ jorge, setJorge ] = useState(props.quase)

    const handleClick = () => {
        setJorge(!jorge)
    }

    return (
        <div onClick={() => handleClick()} className={`
        flex justify-center items-center
        bg-purple-700 rounded-full p-2 w-[100px] h-[100px] text-xl 
        text-white font-black
        ${jorge ? 'rounded-sm' : 'rounded-full'}
        `}>
                {props.name}
        </div>
    );
}
