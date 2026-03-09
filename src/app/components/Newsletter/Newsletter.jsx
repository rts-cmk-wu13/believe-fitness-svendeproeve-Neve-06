"use client"
import subscribeToNewsletter from "./action"
import { useActionState } from "react"
export default function Newsletter() {

    const initialState = {
        values: {
            email: "",
        },
        errors: undefined
    }
    const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState)
    return (
        <>
            <h2>Sign up for our newsletter</h2>
            <p className="no-columns">Sign up to receive the latest news and announcements from Believe Fitness</p>
            <form action={formAction} noValidate>
                <input className="login__input" type="email" name="email" placeholder="Email" defaultValue={state.values.email} />
                {state.errors?.email && <p>{state.errors.email}</p>}
                {state.success && <p>{state.success}</p>}
                <button className="login__button" type="submit" disabled={isPending}>{isPending ? "Sending..." : "Enter your email..."}</button>
            </form>
        </>
    )
}