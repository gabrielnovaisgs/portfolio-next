import Section from "@/components/section";
import Slider from "@/components/slider/slider";
import Image from "next/image";

export default function Main() {
    return (

        <Section className="bg-black text-white ">
            <main className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 grid  md:grid-cols-[3fr_1fr_2fr] grid-rows-[4fr_1fr] gap-2 ">
                <aside className="
                col-span-2 md:col-span-1
                flex flex-col gap-16 items-center text-center md:text-left md:items-start justify-center">
                    <h1 className="font-extrabold text-5xl">Gabriel Novais</h1>

                    <p className="text-white uppercase">Seu negócio: na era digital <span></span></p>

                    <button className="bg-green-600 transition-all hover:scale-105 hover:bg-green-500 flex  justify-center items-center rounded w-max">
                        <p className="px-16 py-5 font-bold">Let’s get started</p>

                    </button>
                </aside>
                <aside className="hidden md:flex col-start-3 justify-center items-center ">
                    <Image
                        className="rounded-full w-full min-w-60 aspect-square object-cover"
                        src={"/person.jpeg"} width={350} height={350} alt="Foto do Gabriel Novais"></Image>
                </aside>
                <footer className="row-start-2 col-span-2 overflow-hidden">
                    <p className="py-4">Trabalha com</p>
                    <Slider></Slider>
                </footer>
            </main>
        </Section>

    )
}