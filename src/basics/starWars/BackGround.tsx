import Image from "next/image";

export default function BackGround() {
    return (
        <Image 
        src='https://images4.alphacoders.com/131/1313954.jpeg'
        alt="background"
        layout="fill"
        objectFit="cover"
        className="-z-50 opacity-30 object-cover"
        placeholder="empty"
        />
    );
}
