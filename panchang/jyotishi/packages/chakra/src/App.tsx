import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from "./logo.svg";
// import "~normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "./App.scss";
import Header from "./Header";
import DataForm from "./DataForm";
import Dashboard from "./Dashboard";
import Represent from './Represent/Represent';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header></Header>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Dashboard/>
                    </Route>
                    <Route path="/create-new">
                        <DataForm/>
                    </Route>
                    <Route path="/represent">
                        <Represent/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
