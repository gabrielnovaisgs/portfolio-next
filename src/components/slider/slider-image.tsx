import Image from "next/image"

interface SliderImageProps {
    src: string
    alt?: string
}
export default function SliderImage({ src, alt = "" }: SliderImageProps) {
    return (
        <li className="">
            <Image src={src} alt={alt} width={64} height={64}
                className="grayscale-[100%] w-16 min-w-16 aspect-auto md:w-24"
            ></Image>
        </li>
    )
}