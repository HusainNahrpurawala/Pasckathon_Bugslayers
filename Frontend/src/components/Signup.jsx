import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
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

    console.log(this.state);

    axios
      .post("http://localhost:8000/sepsis/signup/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        if (res.data.authenticate) {
          var token = res.data.token;
          localStorage.setItem("token", token);
          this.setState({ token }, () => {
            window.location.reload();
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // var token = 5;
    // console.log(token);
    // localStorage.setItem("token", JSON.stringify(token));
    // this.setState({ token }, () => {
    //   window.location.reload();
    // });
  };

  render() {
    if (this.state.token !== undefined) {
      return <Redirect to="/form" />;
    }
    return (
      <div className="Home">
        <section className="page-section">
          <div className="signup">
            <h1
              style={{
                color: "white",
                position: "absolute",
                left: "107px",
                top: "30px",
                fontFamily: "Helvetica",
              }}
            >
              Sign Up
            </h1>
            <form className="" id="detailsForm" onSubmit={this.handleSubmit}>
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
              <div class="center3">
                <button class="glow-on-hover" type="submit">
                  SUBMIT
                </button>
              </div>{" "}
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default SignUp;
