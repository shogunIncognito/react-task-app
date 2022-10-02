import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export function TaskList() {
  
  const { task } = useContext(TaskContext);

  return <>
    {
      task.length === 0 ? (
        <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {
            task.map((tas) => {
              return <TaskCard key={tas.id} task={tas} />
            })
          }
        </div>
      )
    }
  </>
}
