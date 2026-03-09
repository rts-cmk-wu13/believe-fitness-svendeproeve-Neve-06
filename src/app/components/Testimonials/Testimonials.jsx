"use client"
import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Testimonials({ testimonials = [] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 6000 })
    ])


    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <>
            <div className="embla">
                <h2 className="embla__container-title">A word from other believers</h2>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">

                        {testimonials.map((testimonial) => (
                            <article className="embla__slide" key={testimonial.id}>
                                <p>{testimonial.text}</p>
                                <p>{testimonial.name}</p>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="embla__button-container">
                    <button className="embla__button">
                        <IoIosArrowBack style={{ color: "#ffffff" }} onClick={scrollPrev} />
                    </button>
                    <button className="embla__button">
                        <IoIosArrowForward style={{ color: "#ffffff" }} onClick={scrollNext} />
                    </button>
                </div>
            </div>
        </>
    )
}