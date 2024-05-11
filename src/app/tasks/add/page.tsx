import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="grid gap-y-3">
        <label className="input input-bordered flex items-center gap-2">
          <MdDriveFileRenameOutline />
          <input type="text" className="grow" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <MdDescription />
          <input type="text" className="grow" placeholder="Description" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <MdDateRange />
          <input type="text" className="grow" placeholder="Date" />
        </label>
      </div>
      <div className="p-10">
        <button className="btn btn-primary">Add</button>
      </div>
    </main>
  )
};