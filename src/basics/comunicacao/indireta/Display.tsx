interface DisplayProps{
    valor: number
}

export default function Display(props: DisplayProps) {
    return (
        <div className="flex flex-1 justify-center items-center bg-zinc-500 text-5xl font-black rounded-sm p-4">
            {props.valor}
        </div>
    );
}
