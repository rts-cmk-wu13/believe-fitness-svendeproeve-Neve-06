
"use client"
import { useRouter } from "next/navigation"
export default function ClassCard({ classData, isUserEnrolled, userId, token }) {

    const router = useRouter()

    const handleLeave = async () => {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/classes/${classData.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        router.refresh()
    }
    const handleJoin = async () => {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/classes/${classData.id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        router.refresh()
    }

    return (
        <article>
            <figure className="classCard__image-figure full-width classCard__figure-wrap">
                <img src={classData.asset.url} alt={classData.name} />
            <h1 className="classCard__overlay-title">
                {classData.className}
            </h1>
            </figure>
            <p>{classData.classDay} {classData.classTime}</p>
            <p>{classData.classDescription}</p>
            <h3>Trainer Name</h3>
            <h3>
                {classData.trainer.trainerName}
            </h3>
            {isUserEnrolled ? (
                <button className="activity__button " onClick={handleLeave}>
                    Leave
                </button>
            ) : (
                <button className="activity__button " onClick={handleJoin}>
                    Sign up
                </button>
            )}
        </article>
    )
}
