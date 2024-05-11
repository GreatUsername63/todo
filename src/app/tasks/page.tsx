import TaskTable from "./components/taskTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="p-10">
        <button className="btn btn-primary">+ New task</button>
      </div>
      <TaskTable />
    </main>
  );
}