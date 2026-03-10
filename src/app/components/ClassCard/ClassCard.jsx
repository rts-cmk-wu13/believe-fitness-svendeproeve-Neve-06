
"use client"
import { useRouter } from "next/navigation"
export default function ClassCard({ classData, isUserEnrolled, userId, token}) {

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
                <figure className="activity__image-figure full-width activity__figure-wrap">
                <img src={classData.asset.url} alt={classData.name} />
                </figure>
                 <h1>
                    {classData.className}
                </h1>
                {isUserEnrolled ? (
                    <button className="activity__button activity__overlay-btn" onClick={handleLeave}>
                        Forlad
                    </button>
                ) : (
                    <button className="activity__button activity__overlay-btn" onClick={handleJoin}>
                        Tilmeld
                    </button>
                )}
                {/*
                <p>{activity.minAge}+ år</p>
                <div dangerouslySetInnerHTML={{ __html: activity.description }}></div> */}
            </article>
    )
}
