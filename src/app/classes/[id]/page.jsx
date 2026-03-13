import { getClassById, getTrainersById } from "../../lib/dal";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import ClassCard from "@/app/components/ClassCard/ClassCard";
export default async function ActivityDetailPage({ params }) {

    const { id } = await params;
    const classData = await getClassById(id);
    const cookieStore = await cookies()
    console.log(classData);
    const userId = cookieStore.get('userId').value
    const token = cookieStore.get('authToken').value

    const isUserEnrolled = classData.users.some(user => user.id === Number(userId))

    console.log(isUserEnrolled);
    
    
    if (!classData) return notFound();
    
    return (
        <main>
          
        <ClassCard classData={classData} isUserEnrolled={isUserEnrolled} userId={userId} token={token}/>

        </main>
    )
}
