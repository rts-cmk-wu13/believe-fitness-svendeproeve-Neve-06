"use client"
import { useActionState } from "react"
import { createClass } from "../../lib/dal"

const initialState = {
    name: null,
    description: null,
    classDay: null,
    classTime: null,
    trainer: null,
    maxParticipants: null,
}
export default function CreateClassForm({userId, userFirstName, userLastName}) {
    const [state, formAction, isPending] = useActionState(createClass, initialState)

    return (
        <>
        <h1>
            Create a Class
        </h1>
        <form action={formAction} encType="multipart/form-data">
                <label htmlFor="name"></label>
                <input className="login__input" type="text" id="className" name="classNname" placeholder="Class Name" />
                <label htmlFor="description"></label>
                <textarea className="login__input" id="classDescription" name="classDescription" placeholder="Class Description" />
            <div>
                <label htmlFor="classDay"></label>
                <select selected className="login__input"  name="classday" id="">
                    <option defaultValue="" disabled={false}>Class Day</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                </select>
                <label htmlFor="classTime"></label>
                <input className="login__input" type="text" name="classTime" id="classTime" placeholder="Class Time" />
            </div>
                <label htmlFor="trainer"></label>
                <input className="login__input" type="text" name="admin" id="admin" readOnly value={`${userFirstName} ${userLastName}`} placeholder="Class Trainer" />
                <label htmlFor="maxParticpants"></label>
                <input className="login__input" type="text" name="maxParticipants" id="maxParticpants" placeholder="Max Participants In Class" />
            <div>
                <label htmlFor="asset">Choose an image</label>
                <input type="file" id="file" accept="image/png, image/jpeg, image/jpg" />
            </div>
            <input type="hidden" name="instructorId" value={userId}/>


            <button className="login__button" type="submit">Create Class</button>
        </form>
        </>
    )
}