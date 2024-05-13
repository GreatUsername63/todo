"use client"

import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  const searchParams = useSearchParams()
  const id = searchParams.get("id")

  const submitTask = async () => {
    const res = await fetch('http://localhost:3000/api/task/' + id, {
      method: 'PUT',
      body: JSON.stringify({ "name": name, "description": description, "dueDate": dueDate, "userId": 1, "complete": true }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log(data)
    router.back()
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="grid gap-y-3">
        <label className="input input-bordered flex items-center gap-2">
          <MdDriveFileRenameOutline />
          <input type="text" className="grow" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <MdDescription />
          <input type="text" className="grow" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <MdDateRange />
          <input type="text" className="grow" placeholder="Date" onChange={(e) => setDueDate(e.target.value)} />
        </label>
      </div>
      <div className="p-10">
        <button className="btn btn-primary" onClick={submitTask}>Add</button>
      </div>
    </main>
  )
};