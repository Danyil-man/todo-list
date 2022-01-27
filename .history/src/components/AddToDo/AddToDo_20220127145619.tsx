import React, { FC, useState } from "react";

type ToDoType = {
    id: number,
    title: string,
    status: boolean
}

type ToDoListType = {
    setToDo: (toDo: Array<ToDoType>) => void
}



const AddToDo: FC<ToDoListType> = ({ setToDo }) => {
    const [toDoValue, setToDoValue] = useState('')
    const addToDo = () => {

    }
    return (
        <div>
            <input placeholder="Add ToDo" onChange={(e) => setToDoValue(e.target.value)} value={toDoValue} />
            <button onClick={addToDo}>Add</button>
        </div>
    )
}

export default AddToDo