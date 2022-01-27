import React, { useState } from "react";
import AddToDo from "../addToDo/AddToDo";
import Header from "../header/Header";
import ToDoList from "../toDoList/ToDoList";


const Home = () => {
    const [toDo, setToDo] = useState()

    return (
        <>
            <Header />
            <AddToDo />
            <ToDoList />
        </>
    )
}

export default Home;