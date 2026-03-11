"use server"
import LogoutButton from "../LogoutForm/LogoutButton";


export default async function Header() {

    return (
        <header>

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
        </header>
    )
}