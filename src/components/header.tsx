import Link from "next/link";

export default function Navebar() {
    return (
        <header className="hidden md:flex text-lg w-full h-16  justify-center items-center fixed">
            <nav className="flex justify-start gap-20 items-center h-full rounded-b  w-11/12 backdrop-blur-md bg-white/10 text-zinc-600">
                <Link href={"/"} className="hover:text-white transition-all px-10 ">Home</Link>
            </nav>
        </header>
    )
}