
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskCard = ({ task }) => {
    const { deleteTask } = useContext(TaskContext)

    return (
        <article className='bg-zinc-500 p-2 text-yellow-50 border-r-2 shadow-cyan-900 rounded-md'>
            <h3 className='text-xl capitalize text-gray-900 '>{task.title}</h3>
            <p>{task.description}</p>
            <button className='bg-green-200 rounded-sm w-max text-cyan-700 text-cyan-950 w-60' onClick={() => deleteTask(task.id)}>Delete</button>
        </article>
    )
}

export { TaskCard }
