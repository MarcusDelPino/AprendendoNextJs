import ImagensAleatorias from "@/basics/primeiro/ImagensAleatorias";


export default function Imagens() {
    return (
        <div>
            <div className={`
            flex justify-center items-center h-screen gap-5
            `}>
                <ImagensAleatorias />
                <ImagensAleatorias />
                <ImagensAleatorias />

            </div>
        </div>
    );
}
