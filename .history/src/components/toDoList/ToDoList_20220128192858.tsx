
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare, faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import style from "./ToDoList.module.css"

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
    const [isDelete, setIsDelete] = useState(Number)
    const [value, setValue] = useState('')
    const [status, setStatus] = useState(true)

    const deleteToDo = async (id: number) => {
        const delToDo = [...toDo].filter(item => item.id !== id)
        setToDo(delToDo)
        await axios.delete(`https://61f29e642219930017f50783.mockapi.io/todos/${id}`)
        setIsDelete(0)
    }
    const statusToDo = async (id: number, item: ToDoType) => {
        if (item.id === id) {
            item.status = !item.status
        }
        await axios.put(`https://61f29e642219930017f50783.mockapi.io/todos/${id}`, item)
        axios.get('https://61f29e642219930017f50783.mockapi.io/todos')
    }

    const editToDo = (id: number, title: string) => {
        setIsEdit(id)
        setValue(title)
    }
    const saveToDo = async (id: number, item: ToDoType) => {
        if (item.id === id) {
            item.title = value
        }
        await axios.put(`https://61f29e642219930017f50783.mockapi.io/todos/${id}`, item)
        setIsEdit(0)
    }

    useEffect(() => {

    }, [status])

    return (
        <div>
            {toDo.length > 0 ? (
                <>
                    {
                        toDo.map(item =>
                            <div key={item.id}>
                                {
                                    isDelete === item.id && (
                                        <div className={style.editBlock}>
                                            <div className={style.editModal}>
                                                <h6 className={style.deleteQuestion}>Delete '{item.title}' Todo? </h6>
                                                <div className={style.btnEditBlock}>
                                                    <button className={style.saveBtn} onClick={() => deleteToDo(item.id)}>Delete</button>
                                                    <button className={style.cancelBtn} onClick={() => setIsDelete(0)}>Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                {isEdit === item.id ? (
                                    <div className={style.editBlock}>
                                        <div className={style.editModal}>
                                            <input className={style.editInput} onChange={(e) => setValue(e.target.value)} value={value} />
                                            <div className={style.btnEditBlock}>
                                                <button className={style.saveBtn} onClick={() => saveToDo(item.id, item)}>Save</button>
                                                <button className={style.cancelBtn} onClick={() => setIsEdit(0)}>Cancel</button>
                                            </div>

                                        </div>
                                    </div>

                                ) : (
                                    <div className={style.container}>
                                        <div className={style.checkedBlock}>
                                            {
                                                status === item.status ? <FontAwesomeIcon className={style.checkedIcons} onClick={() => statusToDo(item.id, item)} icon={faSquare} />
                                                    : <FontAwesomeIcon className={style.checkedIcons} onClick={() => statusToDo(item.id, item)} icon={faCheckSquare} />
                                            }
                                            <p className={`${item.status ? '' : style.done} ${style.doText} `}>{item.title}</p>
                                        </div>
                                        <div className={style.navigationBlock}>
                                            <FontAwesomeIcon className={style.deleteIcon} onClick={() => setIsDelete(item.id)} icon={faTrash} />
                                            <FontAwesomeIcon className={style.editIcon} onClick={() => editToDo(item.id, item.title)} icon={faEdit} />

                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    }</>
            ) : (
                <>
                    <h1>No Todo-s here</h1>
                </>
            )}

        </div >
    )
}
export default ToDoList