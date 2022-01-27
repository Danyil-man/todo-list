import axios from "axios";
import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './AddToDo.module.css'
import { faPaperPlane, faPlane, faSeedling, faSubscript } from "@fortawesome/free-solid-svg-icons";

export type ToDoType = {
    id: number,
    title: string,
    status: boolean
}

type ToDoListType = {
    //item: ToDoType
    toDo: Array<ToDoType>
    setToDo: (toDo: Array<ToDoType>) => void
}



const AddToDo: FC<ToDoListType> = ({ setToDo, toDo }) => {
    const [toDoValue, setToDoValue] = useState('')
    //const toDoObj = { id: item.id, title: toDoValue, status: item.status }
    const addToDo = async () => {

        //const response = await axios.post('https://61f29e642219930017f50783.mockapi.io/todos')
        setToDo([...toDo, { id: 3, title: toDoValue, status: true }]) //{ id: 3, title: toDoValue, status: true }
        setToDoValue('')
    }
    return (
        <div className={style.content}>
            <input className={style.input} placeholder="Add ToDo" onChange={(e) => setToDoValue(e.target.value)} value={toDoValue} />
            <button className={style.button} onClick={addToDo}>Add</button>
        </div>
    )
}

export default AddToDo