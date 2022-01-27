import axios from "axios";
import React, { useState } from "react";
import AddToDo from "../addToDo/AddToDo";
import Header from "../header/Header";
import ToDoList from "../toDoList/ToDoList";


const Home = () => {
    async function Data() {
        const response = await axios.get('https://google.apimetrics.xyz/get')
        console.log(response.data)
    }

    const [toDo, setToDo] = useState([
        {
            id: 1,
            title: 'first do',
            status: true
        },
        {
            id: 2,
            title: 'second do',
            status: false
        }
    ])

    return (
        <>
            <Header />
            <AddToDo toDo={toDo} setToDo={setToDo} />
            <ToDoList toDo={toDo} setToDo={setToDo} />
        </>
    )
}

export default Home;