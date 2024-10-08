import Navebar from "@/components/header";

import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <section className="">
            <Navebar></Navebar>
            {children}
        </section >
    )
}