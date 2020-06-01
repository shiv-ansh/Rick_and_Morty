import React from 'react'
import Home from "../components/Home";
import Episodes from "../components/Episodes";
import { Switch, Route } from "react-router-dom";

function Routes() {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/episodes"><Episodes /></Route>
            </Switch>
        </div>
    )
}

export default Routes
