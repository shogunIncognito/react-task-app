import { useState } from "react";

export function TaskForm({ createTask }) {

    const [title, setTitle] = useState('');
    const [descrip, setDescrip] = useState('');

    const getValue = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        createTask(title, descrip);
        setTitle('');
        setDescrip('');

    }

    return <div>
        <form>
            <label>Titulo</label>
            <input onChange={(e) => getValue(e)} placeholder="Ingresa la tarea" type="text" value={title} autoFocus />
            
            <textarea onChange={(e) => setDescrip(e.target.value)} value={descrip}></textarea>

            <input type="submit" onClick={(e) => handleSubmit(e)} value="Enviar" />
        </form>
    </div>
}