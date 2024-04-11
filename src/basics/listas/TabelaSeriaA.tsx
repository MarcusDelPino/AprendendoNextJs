interface TabelaSeriaAProps {
    times: string[]
}

export default function TabelaSeriaA(props: TabelaSeriaAProps) {
    // console.log(props.times)
    return (
        <div className="flex p-5">
            <ol className="flex flex-col gap-5">
                {props.times.map((time, i) => <li className={`  text-xl list-decimal ${i%2===0 ? 'text-zinc-600' : 'text-zinc-400'}`} key={time}>{time}</li>)}
            </ol>
        </div>
    );
}
