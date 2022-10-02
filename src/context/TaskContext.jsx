import { createContext, useState, useEffect } from 'react'
import tasks from '../data/task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [task, setTask] = useState([])

  useEffect(() => {
    setTask(tasks)
  }, [])
  
  const createTask = (nTask, nDescrip) => {
    setTask([...task, {
      id: task.length + 1,
      title: nTask,
      description: nDescrip
    }])
  }

  const deleteTask = (id) => {
    setTask(task.filter(tas => tas.id != id));
  }

  return (
    <TaskContext.Provider value={{
      task,
      createTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}
