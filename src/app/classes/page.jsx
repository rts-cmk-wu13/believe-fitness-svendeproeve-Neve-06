import ClassCarousel from "@/app/components/ClassCarousel/ClassCarousel"
import { getAllClasses } from "@/app/lib/dal"
export default async function page() {

    const classes = await getAllClasses()
    console.log(classes);
    
    return (
        <>
        <main>
            <h1>Popular Classes</h1>
            <ClassCarousel classes={classes}/>
        </main>
        </>
    )
}