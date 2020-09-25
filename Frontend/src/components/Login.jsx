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
          <h1>
            <i className="fa fa-users" />
            Login
          </h1>
          <form
            className="form-style-4"
            id="detailsForm"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              onChange={this.ChangeHandler}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={this.ChangeHandler}
              required
            />
            <button
              className="btn btn-outline-primary btn-xl text-uppercase js-scroll-trigger active"
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
