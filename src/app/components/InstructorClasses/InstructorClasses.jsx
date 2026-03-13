import { getAllClasses } from "@/app/lib/dal"
import Link from "next/link"

export default async function InstructorClasses({userId}) {

    const classes = await getAllClasses()
    const InstructorClasses = classes.filter(classData => classData.trainerId === userId)
    console.log( InstructorClasses);
    
    return (
        <>
        <h1>Mine hold</h1>
        <Link href={"/create-class"}>+</Link>
        <ul>
            {InstructorClasses.map(classData => (
                <li key={classData.id}>
                    <h2>{classData.className}</h2>
                    <p>{classData.classDay} {classData.classTime}</p>
                    <p>Max. deltagere: {classData.maxParticipants} Tilmeldte: {classData.users.length}</p>
                    <Link href={`/profile/hold/${classData.id}`}>Vis Deltagere</Link>
                </li>
            ))}
        </ul>
        </>
    )
}