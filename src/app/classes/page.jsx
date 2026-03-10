import ClassCarousel from "../components/ClassCarousel/ClassCarousel"
import { getAllClasses } from "../lib/dal"
export default async function page() {

    const classes = await getAllClasses()
    return (
        <>
        <main>
            <h1>Popular Classes</h1>
            <ClassCarousel classes={classes}/>
        </main>
        </>
    )
}