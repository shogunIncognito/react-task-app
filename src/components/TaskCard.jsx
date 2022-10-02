import React from 'react'

export default function TaskCard({task, deleteTask}) {
    return (<>
            <tr>
                <td>{task.id + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td><button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button></td>
            </tr>
        </>
    )
}
