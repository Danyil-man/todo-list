import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "../components/home/Home";

const PageRouting = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
export default PageRouting;