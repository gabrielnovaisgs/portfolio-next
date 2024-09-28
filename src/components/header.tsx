import Link from "next/link";

export default function Navebar() {
    return (
        <header className="text-lg w-full h-16 flex justify-center items-center fixed">
            <nav className="flex justify-center items-center h-full rounded-b  w-11/12 bg-zinc-700 text-white">
                <Link href={"/"}>Home</Link>
            </nav>
        </header>
    )
}