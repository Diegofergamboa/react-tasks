import { useState , useContext } from "react";
import { TaskContext } from '../context/TaskContext'

function FormTask() {

    const { createTask } = useContext(TaskContext)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        })
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} className="bg-orange-200 w-screen flex flex-col gap-3 justify-center text-center items-center shadow-xl">
            <label>Title</label>
            <input className="w-6/12 rounded-md p-2" 
                placeholder="Task Title Here"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Description</label>
            <textarea className="w-6/12 rounded-lg p-4"
                placeholder="Task Description Here"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button className="bg-orange-300 w-6/12 m-4 rounded-sm p-3 text-slate-800 font-bold" type="submit">Save</button>
        </form>
    )
}

export { FormTask };