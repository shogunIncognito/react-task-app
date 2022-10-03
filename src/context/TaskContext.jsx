import { createContext, useState, useEffect } from 'react'
import { db } from '../config/db'
import { addDoc, deleteDoc, collection, query, onSnapshot, doc } from 'firebase/firestore'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [task, setTask] = useState([])

  useEffect(() => {
    const q = query(collection(db, "tareas"));
    onSnapshot(q, (querySnapshot) => {
      const taskdb = [];
      querySnapshot.forEach((doc) => {
        taskdb.push({ ...doc.data(), id: doc.id });
      });
      setTask(taskdb)
    });
  }, []);

  const createTask = async (nTask, nDescrip) => {
    try {
      await addDoc(collection(db, 'tareas'), {
        title: nTask,
        description: nDescrip
      })
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTask = (id) => {
    const docRef = doc(db, "tareas", id);
    deleteDoc(docRef)
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
