import Section from "@/components/section";
import Image from "next/image";

export default function Main() {
    return (

        <Section className="bg-black text-white pt-16 grid grid-cols-12 ">
            <main className="col-start-2 col-span-10 grid  md:grid-cols-[2fr_1fr] grid-rows-[4fr_1fr] gap-2 ">
                <aside className="flex flex-col items-center text-center md:items-start justify-center gap-2">
                    <h1 className="font-extrabold text-5xl">Gabriel Novais</h1>
                    <p className="text-sm text-gray-500">Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className="bg-green-600 flex  justify-center items-center rounded w-max">
                        <p className="px-16 py-5 font-bold">Let’s get started</p>

                    </button>
                </aside>
                <aside className="hidden md:flex justify-center items-center ">
                    <Image
                        className="rounded-full min-w-60 min-h-60 aspect-square object-cover"
                        src={"/person.jpeg"} width={350} height={350} alt="Foto do Gabriel Novais"></Image>
                </aside>
                <footer className="row-start-2 col-span-2">
                    <p>Trabalha com</p>
                </footer>
            </main>
        </Section>

    )
}