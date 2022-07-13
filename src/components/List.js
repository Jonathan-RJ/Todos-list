import { useState } from "react"

const List = ({task, updateTask, onDeleteTask}) => {
    const [edit, setEdit] = useState(false)
    
    function EditAction () {
        const [newValue, setNewValue] = useState(task.task)
            
        const handleSubmit = (e) => {
            e.preventDafault()
        }

        const handleChangeNew = (e) => {
            const val = e.target.value
            setNewValue(val)
            
        }

        const handleClickUpdate = () => {
            updateTask(task.id, newValue)
            setEdit(false)

        }

        return(
            <form onSubmit={handleSubmit}>
                <input className="input inp-ed" type="text" value={newValue} onChange={handleChangeNew}/>
                <button className="button button-edit" onClick={handleClickUpdate}>Update</button>
            </form>
        )
        }

        const ListMain = () => {
            return(
            <ol className="list-ol">
            {task.task} 
            <div className="cont-buttons">
            <button className="buttons button-edit" onClick={() => setEdit(true)}>Editar</button>
            <button className="buttons button-delete" onClick={(e) =>onDeleteTask(task.id)}>Eliminar</button>
            </div>
            </ol>
            )
    }

  return (
    <div className="list">{edit ? <EditAction/> : <ListMain/>}</div>
  )
}

export default List