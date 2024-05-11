import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function TaskTable() {
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
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Task name</td>
                        <td>Quality Control Specialist</td>
                        <td>11/05/24</td>
                        <td>
                            <label>
                                <input type="checkbox" className="checkbox" />
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
                </tbody>
            </table>
        </div>
    )
}