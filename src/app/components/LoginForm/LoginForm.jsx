"use client"
import { useActionState } from "react"
import { loginUser } from "./action"

const initialState = {
    values: {
        username: "",
        password: ""
    },
    errors: undefined
}
export default function LoginForm() {


    const [state, formAction, isPending] = useActionState(loginUser, initialState)
    console.log(state)
    return (

        <form action={formAction} noValidate>
            <div className="columns">
                <input className="login__input" type="text" name="username" placeholder="Enter your username" defaultValue={state.values.username} />
                {state.errors?.text && <p>{state.errors.text}</p>}
            </div>
            <div className="columns">
                <input className="login__input" type="password" name="password" placeholder="Enter your password" defaultValue={state.values.password} />
                {state.errors?.password && <p>{state.errors.password}</p>}
            </div>
            {state.errors?.form && <p>{state.errors.form}</p>}
            <button className="login__button" type="submit" disabled={isPending}>{isPending ? "Logging in..." : "Log in"}</button>
        </form>
    )
}