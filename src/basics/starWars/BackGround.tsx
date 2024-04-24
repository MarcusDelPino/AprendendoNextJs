import Image from "next/image";

export default function BackGround() {
  return (
    <Image
      src="https://www.hqzona.com.br/wp-content/uploads/2020/05/star-wars-feature-image.jpg"
      alt="background"
      className="-z-50 opacity-30 object-cover"
      placeholder="empty"
      fill
    />
  );
}
