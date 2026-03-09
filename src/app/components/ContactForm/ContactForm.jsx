export default function ContactForm() {

    return (
        <>
        <form className="columns">
            <div>
                <label htmlFor="name">Navn</label>
                <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div>
                <label htmlFor="name">Email</label>
                <input type="email" id="email" placeholder="Enter your Email" />
            </div>
            <div>
                <label htmlFor="message">Besked</label>
                <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit"></button>
        </form>
        </>
    )
}