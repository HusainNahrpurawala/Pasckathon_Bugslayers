import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./Home";
import DetailsForm from "./components/DetailsForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />{" "}
            <Route exact path="/form" component={DetailsForm}></Route>
          </Switch>{" "}
        </div>{" "}
      </BrowserRouter>
    );
  }
}

export default App;
