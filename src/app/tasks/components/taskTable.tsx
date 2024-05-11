import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

async function getTasks() {
    const res = await fetch(process.env.URL + '/api/task', {
        method: 'GET',
        next: {
            revalidate: 0
        }
    })
    return res.json();
}

export default async function TaskTable() {
    const tasks = await getTasks()

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Completed?</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task: any) => {
                        return (
                            <tr>
                                <th>{task.id}</th>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>{task.dueDate}</td>
                                <td>
                                    <label>
                                        <input type="checkbox" className="checkbox" defaultChecked={task.complete} />
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
                    })}
                </tbody>
            </table>
        </div>
    )
}