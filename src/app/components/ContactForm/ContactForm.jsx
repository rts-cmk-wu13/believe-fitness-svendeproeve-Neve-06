export default function ContactForm() {

    return (
        <>
        <form>
                <label htmlFor="name">Navn</label>
                <input className="login__input" type="text" id="name" placeholder="Enter your name" />
                <label htmlFor="name">Email</label>
                <input className="login__input" type="email" id="email" placeholder="Enter your Email" />
                <label htmlFor="message">Besked</label>
                <textarea name="message" id="message"></textarea>
            <button className="login__button" type="submit">Send Message</button>
        </form>
        </>
    )
}