"use client"
import { useActionState } from "react"
import { createClass  } from "../../lib/dal"

const initialState = {
    className: null,
    classDescription: null,
    classDay: null,
    classTime: null,
    trainer: {
        id: null,
        trainerName: null
    },
    maxParticipants: null,
    asset: null
}
export default function CreateClassForm({userId, trainers}) {
    const [state, formAction, isPending] = useActionState(createClass, initialState)

    return (
        <>
        <h1>
            Create a Class
        </h1>
        <form action={formAction} enctype="multipart/form-data">
                <label htmlFor="name"></label>
                <input className="login__input" type="text" id="className" name="className" placeholder="Class Name" />
                <label htmlFor="description"></label>
                <textarea className="login__input" id="classDescription" name="classDescription" placeholder="Class Description" />
            <div>
                <label htmlFor="classDay"></label>
                <select selected className="login__input"  name="classDay" id="classDay">
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
                    <select name="trainerId" id="trainer" className="login__input" >
                        <option value="">Select trainer</option>
                        {trainers.map((trainer) => (
                            <option key={trainer.id} value={trainer.id}>
                                {trainer.trainerName}
                            </option>
                        ))}
                    </select>
                <label htmlFor="maxParticpants"></label>
                <input className="login__input" type="text" name="maxParticipants" id="maxParticpants" placeholder="Max Participants In Class" />
            <div>
                <label htmlFor="file">Choose an image</label>
                <input type="file" id="file" name="file" accept="image/png, image/jpeg" />
            </div>
            <input type="hidden" name="instructorId" value={userId}/>


            <button className="login__button" type="submit">Create Class</button>
        </form>
        </>
    )
}