import LoginForm from "../components/LoginForm/LoginForm"
import { getUsersById } from "../lib/dal"
import { cookies } from "next/headers"
import Link from "next/link"
import LogoutButton from "../components/LogoutForm/LogoutButton"

export default async function page() {
    const cookieStore = await cookies()
    const userId = cookieStore.get("userId")
    const user = await getUsersById(userId.value)
    console.log(user);


    return (
        <>
            <main>
                <section className="profile__info full-width">
                    <figure className="logo no-columns">
                        {/* <Image src="/profile.svg" width={100} height={100} alt="profile__image"></Image> */}
                    </figure>
                    <h1 className="no-columns logo">Velkommen</h1>
                    <p className="no-columns logo">{user.userFirstName} {user.userLastName}</p>
                    <p className="no-columns logo">{user.role === "admin" ? "instructor" : "member"}</p>
                    <LogoutButton />
                </section>
                <section className="profile__activities columns">
                    <h2>Tilmeldte hold</h2>
                    {user.classes.map(clas => (
                        <article className="profile__activities-container" key={clas.id}>
                            <h3>{clas.className}</h3>
                            <p>{clas.classDay} {clas.classTime}</p>
                            <Link className="profile__activities-link" href={`/classes/${clas.id}`}>Show Class</Link>
                        </article>
                    ))}
                </section>
            </main>
        </>
    )
}