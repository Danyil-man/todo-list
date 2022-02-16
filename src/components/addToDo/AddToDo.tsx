import axios from "axios";
import React, { FC, useState } from "react";
import style from './AddToDo.module.css'

export type ToDoType = {
    id: number,
    title: string,
    status: boolean
}

type ToDoListType = {
    toDo: Array<ToDoType>
    setToDo: (toDo: Array<ToDoType>) => void
}



const AddToDo: FC<ToDoListType> = ({ setToDo, toDo }) => {
    const [toDoValue, setToDoValue] = useState('')
    const toDoObj = { title: toDoValue, status: true }
    const addToDo = async () => {
        if (toDoObj.title === '') {
            alert("Input can't be blank")
            return
        }

        const response = await axios.post('https://61f29e642219930017f50783.mockapi.io/todos', toDoObj)
        setToDo([...toDo, response.data])
        setToDoValue('')
    }
    return (
        <div className={style.content}>
            <input className={style.input} placeholder="Add Todo" onChange={(e) => setToDoValue(e.target.value)} value={toDoValue} />
            <button className={style.button} onClick={addToDo}>Add</button>
        </div>
    )
}

export default AddToDo