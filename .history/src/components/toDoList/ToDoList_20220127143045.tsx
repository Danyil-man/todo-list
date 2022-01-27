import React, { FC } from "react";

type ToDoListType = {
    toDo: []
    setToDo: () => void
}

const ToDoList: FC<ToDoListType> = ({ }) => {
    return (
        <div>
            ToDoList
        </div>
    )
}
export default ToDoList