import React, { useState } from "react";

const AddToDo = () => {
    const [toDoValue, setToDoValue] = useState('')
    const addToDo = () => {

    }
    return (
        <div>
            <input placeholder="Add ToDo" value={toDoValue} />
            <button onClick={addToDo}>Add</button>
        </div>
    )
}

export default AddToDo