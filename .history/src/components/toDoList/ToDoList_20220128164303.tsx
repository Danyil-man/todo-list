
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { FC, useState } from "react";
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


    const deleteToDo = async (id: number) => {
        const delToDo = [...toDo].filter(item => item.id !== id)
        setToDo(delToDo)
        axios.delete(`https://61f29e642219930017f50783.mockapi.io/todos/${id}`)
        setIsDelete(0)
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
    const saveToDo = async (item: ToDoType) => {
        // const newTextToDo = [...toDo].map(item => {
        //     if (item.id === id) {
        //         item.title = value
        //     }
        //     return item
        // })

        const respone = await axios.put(`https://61f29e642219930017f50783.mockapi.io/todos`, newTextToDo)
        setToDo(respone.data)

        setIsEdit(0)
    }

    console.log(toDo)
    return (
        <div>
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
                                        <button className={style.saveBtn} onClick={() => saveToDo(item)}>Save</button>
                                        <button className={style.cancelBtn} onClick={() => setIsEdit(0)}>Cancel</button>
                                    </div>

                                </div>
                            </div>

                        ) : (
                            <div className={style.container}>
                                <div className={style.checkedBlock}>
                                    {
                                        item.status ? <FontAwesomeIcon className={style.checkedIcons} onClick={() => statusToDo(item.id)} icon={faSquare} />
                                            : <FontAwesomeIcon className={style.checkedIcons} onClick={() => statusToDo(item.id)} icon={faCheckSquare} />
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
            }
        </div >
    )
}
export default ToDoList