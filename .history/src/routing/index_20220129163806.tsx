import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";

const PageRouting = () => {
    return (
        <BrowserRouter basename="/todo-list">
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
export default PageRouting;