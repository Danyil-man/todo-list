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
        }
    ])

    return (
        <>
            <Header />
            <AddToDo />
            <ToDoList />
        </>
    )
}

export default Home;