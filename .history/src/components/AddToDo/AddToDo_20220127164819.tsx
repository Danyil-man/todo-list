import axios from "axios";
import React, { FC, useState } from "react";

export type ToDoType = {
    id: number,
    title: string,
    status: boolean
}

type ToDoListType = {
    item: ToDoType
    //toDo: Array<ToDoType>
    setToDo: (toDo: Array<ToDoType>) => void
}



const AddToDo: FC<ToDoListType> = ({ setToDo, item }) => {
    const [toDoValue, setToDoValue] = useState('')
    const toDoObj = { id: item.id, title: toDoValue, status: item.status }
    const addToDo = async () => {

        const response = await axios.post('https://61f29e642219930017f50783.mockapi.io/todos', toDoObj)
        setToDo(response.data) //{ id: 3, title: toDoValue, status: true }
        setToDoValue('')
    }
    return (
        <div>
            <input placeholder="Add ToDo" onChange={(e) => setToDoValue(e.target.value)} value={toDoValue} />
            <button onClick={addToDo}>Add</button>
        </div>
    )
}

export default AddToDo