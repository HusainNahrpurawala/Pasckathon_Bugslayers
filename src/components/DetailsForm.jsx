import React, { Component } from "react";

class DetailsForm extends Component {
  state = { abc: "" };

  ChangeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // AXIOS CALL COMES HERE
  };

  render() {
    return (
      <div className="Home">
        <section className="page-section">
          <h1>DetailsForm</h1>

          <div className="flex-sm-row">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  className="form-control-sm"
                  placeholder="abc"
                  name="abc"
                  value={this.state.abc}
                  onChange={(e) => this.ChangeHandler(e)}
                  required
                />
              </div>
              <div className="form-row">
                <button type="submit" className="btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default DetailsForm;
