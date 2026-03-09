import Image from "next/image"


export default function Hero() {

    return (
        <>
        <section className="hero full-width">
        <Image 
        src="/welcome.jpg" 
        fill
        sizes="100vw"
        priority
        alt="hero">
        </Image>
        </section>
        </>
    )
}