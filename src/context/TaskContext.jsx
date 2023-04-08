import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            description: task.description,
            id: `${tasks.length}`,
        }]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect((taskId) => {
        setTasks(data)
    }, [])

    return (
        <>
            <TaskContext.Provider value={{
                tasks,
                deleteTask,
                createTask
            }}>{props.children}</TaskContext.Provider>
        </>
    )
}

export default TaskContext
