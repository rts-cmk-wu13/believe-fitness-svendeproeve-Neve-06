"use server"

import Link from "next/link"
import logoutAction from "./action"
import { cookies } from "next/headers"

export default async function LogoutButton() {
    const cookieStore = await cookies()
    const isUserLoggedIn = cookieStore.has("authToken")

    return (
        <form className="no-columns logo" action={logoutAction}>
            {
                isUserLoggedIn
                ? <button className="login__button" type="submit">Log ud</button>
                : <Link href="/login">Log ind</Link>
            }
        </form>
    )

}