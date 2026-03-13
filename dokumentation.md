# Svendeprøve, WU13
Alexander Neve, WU13

Valgfri opgave C

## Tech Stack

Next.Js - Next.js er et framework som har server-side rendering og statisk rendering. 
Sass - Sass er et styling syntax
Embla Carousel - Embla Carousel er et carousel library,  som er designet til moderne web applikationer. 


## Code Eksempel

Det her er function til at melde og framelde fra classes some en user. 

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
                <button className="login__button " onClick={handleLeave}>
                    Leave
                </button>
            ) : (
                <button className="login__button " onClick={handleJoin}>
                    Sign up
                </button>
            )}
```


## Perspektivering

Jeg synes at opgaven til at starte med, var nemere end terminsprøven, indtil Torsdags hvor jeg brugte hele dagen på at få Opret classes til at virke. Jeg ved stadig ikke helt hvordan det virker, eller mere, hvordan jeg fik den til bare at virke. 

Jeg synes at siden ikke er mit bedste arbejde, men jeg synes heller ikke projektet gik dårligt heller. 