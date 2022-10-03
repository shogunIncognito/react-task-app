import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {

    const [title, setTitle] = useState('');
    const [descrip, setDescrip] = useState('');

    const { createTask } = useContext(TaskContext);

    const getValue = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (title.trim().length === 0 || descrip.trim().length === 0) {
            return alert('No puede haber campos vacios')
        }

        createTask(title, descrip);
        setTitle('');
        setDescrip('');
    }

    return <div className="max-w-md mx-auto">
        <form className="bg-slate-900 p-10 mb-4">
            <h1 className="text-2xl font-bold text-white mb-3">Crear tarea</h1>

            <label>Titulo</label>
            <input className="bg-slate-300 p-3 w-full mb-2" onChange={(e) => getValue(e)} placeholder="Ingresa la tarea" type="text" value={title} autoFocus />

            <textarea placeholder="Ingrese la descripcion de la tarea" className="bg-slate-300 p-3 w-full mb-2" onChange={(e) => setDescrip(e.target.value)} value={descrip}></textarea>

            <button className="bg-indigo-500 px-3 py-1 text-white" onClick={(e) => handleSubmit(e)}>Guardar</button>
        </form>
    </div>
}