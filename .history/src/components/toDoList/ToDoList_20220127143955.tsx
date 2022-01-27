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
        const newToDo = [...toDo].filter(item => item.id)
    }

    return (
        <div>
            {
                toDo.map(item =>
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <button onClick={deleteToDo}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}
export default ToDoList