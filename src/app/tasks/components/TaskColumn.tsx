"use client"

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Home(props: any) {

    const toggleCheckbox = async () => {
        props.data.complete = !props.data.complete
        const res = await fetch('http://localhost:3000/api/task/' + props.data.id, {
            method: 'PUT',
            body: JSON.stringify({ "name": props.data.name, "description": props.data.description, "dueDate": props.data.dueDate, "userId": 1, "complete": props.data.complete }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <tr>
            <th>{props.data.id}</th>
            <td>{props.data.name}</td>
            <td>{props.data.description}</td>
            <td>{props.data.dueDate}</td>
            <td>
                <label>
                    <input type="checkbox" className="checkbox" defaultChecked={props.data.complete} onClick={toggleCheckbox} />
                </label>
            </td>
            <td>
                <button className="btn">
                    <FaEdit />
                </button>
            </td>
            <td>
                <button className="btn">
                    <MdDelete />
                </button>
            </td>
        </tr>
    )
}