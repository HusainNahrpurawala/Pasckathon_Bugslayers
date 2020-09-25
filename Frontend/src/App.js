import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./Home";
import DetailsForm from "./components/DetailsForm";
import Result from "./components/Result";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Signup";
import Positive from "./components/Positive";
import Negative from "./components/Negative";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />{" "}
            <Route exact path="/form" component={DetailsForm}></Route>{" "}
            <Route exact path="/result" component={Result}></Route>{" "}
            <Route exact path="/login" component={Login}></Route>{" "}
            <Route exact path="/signup" component={SignUp}></Route>{" "}
            <Route exact path="/positive" component={Positive}></Route>{" "}
            <Route exact path="/negative" component={Negative}></Route>{" "}
          </Switch>{" "}
        </div>{" "}
      </BrowserRouter>
    );
  }
}

export default App;
