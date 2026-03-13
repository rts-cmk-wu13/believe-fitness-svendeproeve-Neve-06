import { getNews } from "@/app/lib/dal"
import NewsCard from "../NewsCard/NewsCard"

export default async function News() {

    const news = await getNews()
    return (
        <>
        <section className="columns" >
            <h2>News</h2>
            {news.map(news =>(
                <NewsCard news={news} key={news.id}/>
            ))}
        </section>
        </>
    )
}