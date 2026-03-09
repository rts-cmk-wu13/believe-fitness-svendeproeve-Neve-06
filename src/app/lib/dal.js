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

export async function newsletter(){
    const response = await fetch(`http://localhost:4000/api/v1/newsletter/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
     if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
}

export async function getTestimonials(){
        const response = await fetch(`http://localhost:4000/api/v1/testimonials/`)
    
    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
}