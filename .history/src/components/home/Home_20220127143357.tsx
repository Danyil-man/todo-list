import React, { useState } from "react";
import AddToDo from "../addToDo/AddToDo";
import Header from "../header/Header";
import ToDoList from "../toDoList/ToDoList";


const Home = () => {
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
            <AddToDo />
            <ToDoList toDo={toDo} setToDo={setToDo} />
        </>
    )
}

export default Home;