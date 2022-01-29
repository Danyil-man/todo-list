import axios from "axios";
import React, { useEffect, useState } from "react";
import AddToDo, { ToDoType } from "../addToDo/AddToDo";
import Header from "../header/Header";
import ToDoList from "../toDoList/ToDoList";
import style from './Home.module.css'


const Home = () => {
    const [toDo, setToDo] = useState<Array<ToDoType>>([])

    useEffect(() => {
        async function Data() {
            const response = await axios.get('https://61f29e642219930017f50783.mockapi.io/todos')
            setToDo(response.data)
        }
        Data()
    }, [setToDo])
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <header className={style.header}>
                    <Header />
                </header>
                <div className={style.content}>
                    <AddToDo toDo={toDo} setToDo={setToDo} />
                    <ToDoList toDo={toDo} setToDo={setToDo} />
                </div>
            </div>


        </div>
    )
}

export default Home;