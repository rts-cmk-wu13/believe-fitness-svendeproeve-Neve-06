"use server"
import LogoutButton from "../LogoutForm/LogoutButton";
import { HiMenuAlt3 } from "react-icons/hi";


export default async function Header() {

    return (
        <header className="nav__button">
            <div >

            <button command="show-modal" commandfor="my-dialog"><HiMenuAlt3 /></button>
            </div>

            <div  >

            <dialog className="dialog__container full-width" id="my-dialog">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/classes">Classes</a></li>
                        <li><a href="/search">Search</a></li>
                        <li><a href="/profile">My Profile</a></li>
                        <li><LogoutButton/></li>
                    </ul>
                </nav>
                <button commandfor="my-dialog" command="close">Close</button>
            </dialog>
            </div>
        </header>
    )
}