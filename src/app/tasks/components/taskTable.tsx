import TaskColumn from "./TaskColumn";

async function getTasks() {
    const res = await fetch(process.env.URL + '/api/task', {
        method: 'GET',
        next: {
            revalidate: 0
        }
    })
    console.log(res.json)
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
                            <TaskColumn data={task} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}