import ClassCarousel from "../components/ClassCarousel/ClassCarousel";
import { getAllClasses } from "../lib/dal"

    const classes = await getAllClasses()

export default function page() {

    return (
        <>
        <main>
            <ClassCarousel classes={classes}/>
        </main>
        </>
    )
}