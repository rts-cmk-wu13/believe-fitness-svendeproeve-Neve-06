import { cookies } from "next/headers"
import Link from "next/link"
import CreateClassForm from "../components/CreateClassForm/CreateClassForm"
import { getAllTrainers  } from "../lib/dal"

export default async function page() {
    
    const cookieStore = await cookies()
    const role = cookieStore.get("role").value
    const userId = cookieStore.get("userId").value
    const trainers = await getAllTrainers()
    
    return role !== "admin" ?(
        <>
        <main>
        <p>You dont have permissions to create classes!!</p>
        <Link href={"/classes"}>Back to classes</Link>
        </main>
        </>
    ) : (
        <>
        <main>
        <CreateClassForm userId={userId} trainers={trainers}/>
        </main>
        </>
    )
}