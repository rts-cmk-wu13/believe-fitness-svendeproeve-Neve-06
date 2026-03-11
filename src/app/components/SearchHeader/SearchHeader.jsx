"use client"
import { useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { IoIosSearch } from "react-icons/io";

export default function SearchHeader() {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()
    const query = searchParams.get("query")
    console.log(query);
    

    const handleChange = (e) => {
        router.push(`${pathName}?query=${e.target.value}`)
    }

    return (
        <form className="columns searchbar">
            <input className="searchbar__input" onChange={handleChange} type="search" name="query"/>
            <button className="searchbar__button" type="submit"><IoIosSearch/></button>
        </form>
    )
}