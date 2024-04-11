import { useState } from "react";
import Btn from "./Btn";
import Display from "./Display";

export default function Contador() {

    const [count, setCount] = useState<number>(1);

    const increment = () => {
        setCount(c => c + 1)
    }
    const decrement = () => {
        setCount(c => c - 1)
    }

    return (
        <div className="flex flex-col w-72 h-72
        border border-zinc-600 p-1 rounded-md ">
            <Display valor={count} />
            <Btn inc={increment} dec={decrement}/>
        </div>
    );
}
