"use client"
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()
    if (pathname === "/") return <HomeFooter/>

    return (
        <>

        </>
    )
}
export function HomeFooter() {

    return (
        <>
        <footer>
            <h2>Believe Fitness</h2>
            <h3>Train like a pro</h3>
            <p>Rabalderstræde 48 ‧ 4000 Roskilde</p>
            <p>hello@believe-fitness.com</p>
        </footer>
        </>
    )
}