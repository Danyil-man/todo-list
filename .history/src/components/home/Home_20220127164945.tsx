import axios from "axios";
import React, { useEffect, useState } from "react";
import AddToDo, { ToDoType } from "../addToDo/AddToDo";
import Header from "../header/Header";
import ToDoList from "../toDoList/ToDoList";


const Home = () => {
    const [toDo, setToDo] = useState<Array<ToDoType>>([])

    useEffect(() => {
        async function Data() {
            const response = await axios.get('https://61f29e642219930017f50783.mockapi.io/todos')
            setToDo(response.data)
        }
        Data()
    }, [])
    return (
        <>
            <Header />
            <AddToDo toDo={toDo} setToDo={setToDo} />

            <ToDoList toDo={toDo} setToDo={setToDo} />
        </>
    )
}

export default Home;