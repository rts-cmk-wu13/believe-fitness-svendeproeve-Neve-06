
export default function NewsCard({news}) {

    
    return (
        <>
        <article className="columns">
            <figure className="news__figure">
                <img src={news.asset.url} alt={news.title}/>
            </figure>
            <h3>
                {news.title}
            </h3>
            <p>
                {news.text}
            </p>
        </article>
        </>
    )
}