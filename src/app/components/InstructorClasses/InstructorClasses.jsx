import { getAllClasses } from "@/app/lib/dal"
import Link from "next/link"

export default async function InstructorClasses({userId}) {

    const activities = await getAllClasses()
    const InstructorActivities = activities.filter(activity => activity.instructorId === userId)
    console.log("instruktørens hold", InstructorActivities);
    
    return (
        <>
        <h1>Mine hold</h1>
        <Link href={"/opret-hold"}>+</Link>
        <ul>
            {InstructorActivities.map(activity => (
                <li key={activity.id}>
                    <h2>{activity.name}</h2>
                    <p>{activity.weekday} {activity.time}</p>
                    <p>Max. deltagere: {activity.maxParticipants} Tilmeldte: {activity.users.length}</p>
                    <Link href={`/profile/hold/${activity.id}`}>Vis Deltagere</Link>
                </li>
            ))}
        </ul>
        </>
    )
}