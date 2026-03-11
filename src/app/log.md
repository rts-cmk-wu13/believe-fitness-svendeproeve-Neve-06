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

I dag har jeg indtil videre arbejdet på login/logud formularer, profil siden og liste/detalje visning. 


```
export default function Footer() {
    const pathname = usePathname()
    if (pathname === "/") return <HomeFooter/>

    return (
        <>

        </>
    )
}
```
Footeren viser også kun komponentet "HomeFooter" hvis den er på landingpagen, ellers viser den ikke noget. 

Man kan tilmelde/framelde sig selv fra et hold og det vil være forskelligt for hver bruger. 

## Login/Logud form

Når man klikker på login linket på landing pagen, så bliver man sendt til login siden, hvor man indtaster sit brugernavn og så kodeord. Den er valideret og når man logger ud bliver cookien slettet.

*I figma filen står der man skal bruge email, men api'et siger brugernavn*

## Tilmeld/Frameld

```
    const handleLeave = async () => {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/classes/${classData.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        router.refresh()
    }
    const handleJoin = async () => {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/classes/${classData.id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        router.refresh()
    }
            {isUserEnrolled ? (
                <button className="activity__button " onClick={handleLeave}>
                    Leave
                </button>
            ) : (
                <button className="activity__button " onClick={handleJoin}>
                    Sign up
                </button>
            )}
```

handleLeave/handleJoin functionerne fetcher brugerne og deres classes. Den ene er en post method og den anden er en delete. De skal bruge auth token til at få adgang til dem. 

isUserEnrolled functionen gøre at hvis man er tilmeldt, vil der stå "leave" ellers står der sign up

Jeg tilføjede også en carousel til listevisningen `der er lidt problemer med den, men det fikser jeg nok i morgen`


## Dag 3

Jeg har tilføjet et stort billede på listevisningen, som skal vise en tilfældig class.  

Jeg har også lige lavet et "header" komponent, som fungere som en dialog. Når man klikker på knappen, kommer dialog knappen frem, som er din navigation. 

```
 <button command="show-modal" commandfor="my-dialog">+</button>

            <div  >

            <dialog className="dialog__container" id="my-dialog">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/classes">Classes</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><LogoutButton/></li>
                    </ul>
                </nav>
                <button commandfor="my-dialog" command="close">Close</button>
            </dialog>
            </div>
```

Jeg fandt ud af det ved at kigge på [MDN ](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)

## ClassCarousel 

Der bliver brugt 3 forskellige carouseler i app'en. Det her er den anden jeg har lavet, som er på listevisningen. Den bruger også embla carousel. 


Jeg har også lavet meget styling i dag, så siderne ser lidt bedre ud. 

## Instructor opstart

Jeg har lavet et komponent der viser ting kun instructøren kan se, hvis man er logget ind som dem. 
Jeg vil arbejde på den hele dagen i morgen. 

## Dag 4

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)

## Dag 5

Morgen - (tidspunkt)  
Eftermiddag - (tidspunkt)
