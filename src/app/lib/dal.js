"use server"
import { cookies } from "next/headers"

export async function getNews(){
    const response = await fetch(`http://localhost:4000/api/v1/news`)

        if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
}

export async function getAssets(){
    const response = await fetch(`http://localhost:4000/api/v1/assets`)
    
            if (!response.ok) {
            throw new Error({ message: "something went wrong" })
        }
        return await response.json()
}