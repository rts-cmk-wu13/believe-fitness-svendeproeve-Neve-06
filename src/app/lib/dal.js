"use server"
import { cookies } from "next/headers"

export async function getNews() {
    const response = await fetch(`http://localhost:4000/api/v1/news`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
}

export async function newsletter() {
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

export async function getTestimonials() {
    const response = await fetch(`http://localhost:4000/api/v1/testimonials/`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
}

export async function getUsersById() {

    const cookieStore = await cookies()
    const authToken = cookieStore.get("authToken")
    const userId = cookieStore.get("userId").value
    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken.value}`
            },
            cache: "no-store"
        }
    )
    console.log(response);

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
}

export async function getAllClasses() {
    const response = await fetch(`http://localhost:4000/api/v1/classes/`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()


}
export async function getClassById(id) {
    const response = await fetch(`http://localhost:4000/api/v1/classes/${id}`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()

}

export async function getAllTrainers() {
    const response = await fetch(`http://localhost:4000/api/v1/trainers/`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()

}

export async function getTrainersById(id) {
    const response = await fetch(`http://localhost:4000/api/v1/trainers/${id}`)

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()

}

export async function createClass(prevState, formData) {
    const cookieStore = await cookies()
    const authToken = cookieStore.get("authToken").value

    console.log(Object.fromEntries(formData));
    
    const assetResponse = await fetch(`http://localhost:4000/api/v1/assets`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,            
        },
        body: formData
    })
    console.log(assetResponse);
    const assetData = await assetResponse.json()
    formData.append("assetId", assetData.id)
    

    const response = await fetch(`http://localhost:4000/api/v1/classes`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`
        },
        body: formData
    })
    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()


}