interface propsBtn{
    inc: () => void
    dec: () => void
}

export default function Btn(props: propsBtn) {
    return (
        <div className="flex justify-around py-2 gap-2 ">
            <button onClick={props.inc} className="botao flex-1"> Inc</button>
            <button onClick={props.dec} className="botao flex-1"> Dec</button>
        </div>
    );
}
