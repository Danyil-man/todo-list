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
    console.log(toDo)
    return (
        <div>
            ToDoList
        </div>
    )
}
export default ToDoList