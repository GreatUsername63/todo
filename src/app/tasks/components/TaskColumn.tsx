"use client"

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Home(props: any) {


    return (
        <tr>
            <th>{props.data.id}</th>
            <td>{props.data.name}</td>
            <td>{props.data.description}</td>
            <td>{props.data.dueDate}</td>
            <td>
                <label>
                    <input type="checkbox" className="checkbox" defaultChecked={props.data.complete} />
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