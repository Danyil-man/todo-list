import React from "react";
import AddToDo from "../addToDo/AddToDo";
import Header from "../header/Header";
import ToDoList from "../toDoList/ToDoList";


const Home = () => {
    return (
        <>
            <Header />
            <AddToDo />
            <ToDoList />
        </>
    )
}

export default Home;