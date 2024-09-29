import { ReactNode } from "react";

export default function Section({ className, children }: { className: string, children: ReactNode }) {
    return (
        <section className={`${className} min-h-screen w-full mx-auto max-w-[1920px] max-h-[1080px] md:pt-16 grid grid-cols-12 `}>
            {children}
        </section>
    )

}