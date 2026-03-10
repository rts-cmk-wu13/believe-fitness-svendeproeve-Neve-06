"use client"
import React from "react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function ClassCarousel({ classes = [] }) {
    const [emblaRef] = useEmblaCarousel()


    // const scrollPrev = () => emblaApi?.scrollPrev()
    // const scrollNext = () => emblaApi?.scrollNext()

    return (
        <>
            <div className="embla">
                <h2 className="embla__container-title">Classes for you</h2>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">

                        {classes.map((classData) => (
                            <Link className="embla__slide" href={`/classes/${classData.id}`}>
                            <article key={classData.id} >
                                <p>{classData.className}</p>
                                <figure>
                                    <img loading="lazy" src={classData.asset.url} alt={classData.className}></img>
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