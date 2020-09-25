import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {};

  componentDidMount = () => {
    this.setState({
      token: localStorage.getItem("token")
        ? localStorage.getItem("token")
        : undefined,
    });
  };

  ChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        var token = res.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        this.setState({ token });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    if (this.state.token !== undefined) {
      return <Redirect to="/form" />;
    }
    return (
      <div className="Home">

        <section className="page-section">
        <div className="login">
         
          <h1 style={{color:"white"  , position: "absolute",
  left: "100px",
  top: "40px",
  fontFamily:"Helvetica"}}>
            
            Login
          </h1>
          <form
            className="loginform"
            id="detailsForm"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="        Username"
              onChange={this.ChangeHandler}
              required
              style={{left:"50%"}}
              
            />
            <input
              type="password"
              className="form-control"
              placeholder="        Password"
              name="password"
              onChange={this.ChangeHandler}
              required
            />
             <div class="center2">
        <button class="glow-on-hover" type="button" ><a href="/form">SUBMIT</a></button>

        </div>
          </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
