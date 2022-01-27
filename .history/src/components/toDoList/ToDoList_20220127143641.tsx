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
    return (
        <div>
            {
                toDo.map(item =>
                    <div key={item.id}>
                        {item.title}
                    </div>
                )
            }
        </div>
    )
}
export default ToDoList