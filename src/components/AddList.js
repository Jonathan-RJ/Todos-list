import { useState } from "react"
import List from "./List"
const AddList = () => {
    const [value, setValue] = useState('')
    const [task, setTask] = useState([])


    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value){

        const newTask = {
            id: crypto.randomUUID(),
            task: value,
            completed: false
        }
        const aux = [...task]
        aux.unshift(newTask)
        setTask(aux)  
        setValue('')   
    }   
    }

    const handleUpdate = (id, val) => {
        const aux = [...task]
        const x  = aux.find(x => x.id=== id);
        x.task  = val
        setTask(aux)

    }

    const handleDelete = (id) => {
        const aux = task.filter(i => i.id !== id)
        setTask(aux)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Ingresar nueva tarea" name="task-input" value={value} onChange={handleChange} className="input"/>
        <input type="submit" onClick={handleSubmit} value="Agregar tarea" className="button"/>
        {task.map(task =><List key={task.id} task={task} updateTask={handleUpdate} onDeleteTask={handleDelete}/>)} 
  </form>
    
  )
}

export default AddList