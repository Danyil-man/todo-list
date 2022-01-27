import axios from "axios";
import React, { FC } from "react";

type ToDoType = {
    id: number,
    title: string,
    status: boolean
}

type ToDoListType = {
    toDo: Array<ToDoType>
    setToDo: (toDo: Array<ToDoType>) => void
}

const ToDoList: FC<ToDoListType> = ({ toDo, setToDo }) => {

    const deleteToDo = async (id: number) => {
        const delToDo = [...toDo].filter(item => item.id !== id)
        setToDo(delToDo)
        axios.delete(`https://61f29e642219930017f50783.mockapi.io/todos/${id}`)
    }
    const statusToDo = (id: number) => {
        const newStatus = [...toDo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setToDo(newStatus)
        axios.put(`https://61f29e642219930017f50783.mockapi.io/todos`, newStatus)
    }

    console.log(toDo)
    return (
        <div>
            {
                toDo.map(item =>
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <button onClick={() => deleteToDo(item.id)}>Delete</button>
                        <button onClick={() => statusToDo(item.id)}>Close / Open</button>
                    </div>
                )
            }
        </div>
    )
}
export default ToDoList