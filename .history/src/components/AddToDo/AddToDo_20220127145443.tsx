import React, { useState } from "react";

const AddToDo = () => {
    const [toDoValue, setToDoValue] = useState('')
    const addToDo = () => {

    }
    console.log(toDoValue)
    return (
        <div>
            <input placeholder="Add ToDo" onChange={(e) => setToDoValue(e.target.value)} value={toDoValue} />
            <button onClick={addToDo}>Add</button>
        </div>
    )
}

export default AddToDo