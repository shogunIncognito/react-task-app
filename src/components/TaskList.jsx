import TaskCard from "./TaskCard"

export function TaskList({ tasks, deleteTask }) {

  return (
    <>
      {tasks.length === 0 ? (
        <h1>No hay tareas</h1>
      ) : (
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {
                tasks.map((tas) => {
                  return <TaskCard key={tas.id} task={tas} deleteTask={deleteTask} />
                })
              }
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
