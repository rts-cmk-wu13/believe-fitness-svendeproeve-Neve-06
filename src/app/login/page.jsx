import LoginForm from "../components/LoginForm/LoginForm"

export default function page() {

    return (
        <>
        <main>
        <section className="columns">
        <div>
            <h1>Believe Fitness</h1>
            <p>Train like a pro</p>
        </div>
        <LoginForm/>
        </section>
        </main>
        </>
    )
}