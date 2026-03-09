# LOGBOG

Brug denne logbog til at holde styr på dine commits.

Udfyld hver dag. Det er vigtigt at du overholder denne logbog - du kan risikere at dumpe, hvis du ikke bruger den.  
Skriv tidspunkt for dit commit ud for hver dag, både morgen og aften.  
Husk, at du ikke må arbejde på din opgave mellem kl. 16:00 og kl. 8:00.

## Dag 1

I dag har jeg brugt det meste af dagen på at installere de forskellige tech-stacks og frameworks jeg vil arbejde med. 
Jeg bruger Next Js, fordi det er det vi brugt meget på det sidste og jeg kan godt lide at arbejde med det. Til styling bruger jeg Sass, fordi jeg kan lide det mere end tailwind ( jeg kan bedre lide at have min styling i en ekster fil i stedet for direkte i jsx filerne. )

Jeg har for det meste arbejdet på min landing page, ved at lave components til at bygge op på den. 

Et komponent jeg gerne vil kigge på er min Testimonials komponent, da det er min carousel. 

```
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
```

Det er et komponent der er styret af dens eget api, med dens egne funktioner, og det jeg skulle gøre var at få Testimonials fetchet imported ( det fik jeg imported inde på page.js )

Den looper også automatisk, man kan også manuelt trykke på knapperne i carouselen. 

Her er linket til [embla carousel ](https://www.embla-carousel.com/)

Der er også lavet validering på mit newsletter med zod

```
import { z } from "zod";

export const newsletterSchema = z.object({
    email: z.email("Write a valid email address"),
})

```

Så hvis man ikke skriver de ting som en email kræver, "@" eller gmail.com, så kommer der en fejl besked

## Dag 2

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 3

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 4

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 5

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)
