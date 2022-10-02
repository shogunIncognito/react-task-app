import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { useEffect, useState } from 'react';
import tasks from '../public/task.json'

function App() {

  const [task, setTask] = useState(tasks)

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
    console.log('working...');
    setTask(task.filter(tas => tas.id != id));
  }

  return <>
    <TaskForm createTask={createTask}/>
    <TaskList tasks={task} deleteTask={deleteTask}/>
  </>
}

export default App
