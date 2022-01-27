import axios from "axios";
import React, { FC, useState } from "react";

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
    const [isEdit, setIsEdit] = useState(Number)
    const [value, setValue] = useState('')
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
        //axios.put(`https://61f29e642219930017f50783.mockapi.io/todos`, newStatus)
    }

    const editToDo = (id: number, title: string) => {
        setIsEdit(id)
        setValue(title)
    }
    const saveToDo = (id: number) => {
        const newTextToDo = [...toDo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setToDo(newTextToDo)
        setIsEdit(0)
    }

    console.log(toDo)
    return (
        <div>
            {
                toDo.map(item =>
                    <div key={item.id}>
                        {isEdit === item.id ? (
                            <div>
                                <input onChange={(e) => setValue(e.target.value)} value={value} />
                                <button onClick={() => saveToDo(item.id)}>Save</button>
                            </div>
                        ) : (
                            <>
                                <h1>{item.title}</h1>
                                <div>
                                    <button onClick={() => deleteToDo(item.id)}>Delete</button>
                                    <button onClick={() => editToDo(item.id, item.title)}>Edit</button>
                                    {
                                        item.status ? <button onClick={() => statusToDo(item.id)}> Close</button>
                                            : <button onClick={() => statusToDo(item.id)}>Open </button>
                                    }

                                </div>
                            </>

                        )}

                    </div>
                )
            }
        </div >
    )
}
export default ToDoList