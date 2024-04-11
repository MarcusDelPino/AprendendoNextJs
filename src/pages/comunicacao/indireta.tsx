import Contador from "@/basics/comunicacao/indireta/Contador";

export default function PaginaIndireta() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className={`text-xl mb-10`}>Comunicação indireta!</h1>
            <div className="flex gap-5">
                <Contador />
                <Contador />
                <Contador />
            </div>
        </div>
    );
}
