"use client"
import React from "react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react"

export default function ClassCarousel({ classes = [] }) {
    const [emblaRef] = useEmblaCarousel()

    const [randomClass, setRandomClass] = useState(null)

    useEffect(() => {
        if (classes.length > 0) {
            const random = Math.floor(Math.random() * classes.length)
            setRandomClass(classes[random])
        }
    }, [classes])

    if (!randomClass) {
        return <p>Loading...</p>
    }
    return (
        <>
            <section className="BigImage">
                <Link href={`/classes/${randomClass.id}`}>
                    <figure className="embla__image-container">
                        <img loading="lazy" src={randomClass.asset.url} alt={randomClass.className}></img>
                        <div className="embla__image-description">
                            <h2 id={"classes" + randomClass.id}>{randomClass.className}</h2>
                        </div>
                    </figure>               
                 </Link>

            </section>
            <div className="embla">
                <h2 className="embla__container-title">Classes for you</h2>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">

                        {classes.map((classData) => (
                            <Link key={classData.id} className="embla__slide" href={`/classes/${classData.id}`}>
                                <article  >
                                    <figure className="embla__image-container">
                                        <img loading="lazy" src={classData.asset.url} alt={classData.className}></img>
                                        <div className="embla__image-description">
                                            <h2 id={"classes" + classData.id}>{classData.className}</h2>
                                        </div>
                                    </figure>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* <div className="embla__button-container">
                    <button className="embla__button">
                        <IoIosArrowBack style={{ color: "#ffffff" }} onClick={scrollPrev} />
                    </button>
                    <button className="embla__button">
                        <IoIosArrowForward style={{ color: "#ffffff" }} onClick={scrollNext} />
                    </button>
                </div> */}
            </div>
        </>
    )
}