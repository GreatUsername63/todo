"use client"

import { useRouter } from "next/navigation"

export default function Home(props: any) {
    const router = useRouter()

    const deleteTask = async () => {
        props.data.complete = !props.data.complete
        const res = await fetch('http://localhost:3000/api/task/' + props.data.id, {
            method: 'DELETE'
        })
        const data = await res.json()
        console.log(data)
        router.refresh()
    }

    return (
        <dialog id={"delete_modal_" + props.data.id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Delete</h3>
                <p className="py-4">Are you sure you want to delete this task?</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Go back</button>
                        <button className="btn" onClick={deleteTask}>Delete task</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}