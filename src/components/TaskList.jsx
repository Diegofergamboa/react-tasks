import { TaskCard } from "./TaskCard"
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskList () {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h2 className="text-black text-center font-bold">There it´s not tasks created</h2>
    }

    return (
        <div className="flex flex-wrap justify-center gap-10 m-5">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
        
    )
}

export { TaskList }