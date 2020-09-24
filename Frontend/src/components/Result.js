import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Positive from "./Positive";
import Negative from "./Negative";

class ResultPage extends Component {
  state = {};

  componentDidMount = () => {
    this.setState({
      prediction: this.props.location.prediction,
    });
  };
  render() {
    if (this.props.location.prediction === undefined) {
      return <Redirect to="/form"></Redirect>;
    }
    return (
      <div className="Home">
        <section className="page-section">{this.state.prediction}</section>
        {this.state.prediction > 0.5 ? (
          <Positive></Positive>
        ) : (
          <Negative></Negative>
        )}
      </div>
    );
  }
}

export default ResultPage;
