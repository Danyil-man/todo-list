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
    const deleteToDo = (id: number) => {
        const delToDo = [...toDo].filter(item => item.id !== id)
        setToDo(delToDo)
    }
    const statusToDo = (id: number) => {
        const newStatus = [...toDo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
        })
        setToDo(newStatus)
    }

    return (
        <div>
            {
                toDo.map(item =>
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <button onClick={() => deleteToDo(item.id)}>Delete</button>
                        <button onClick={() => statusToDo(item.id)}>Close</button>
                    </div>
                )
            }
        </div>
    )
}
export default ToDoList