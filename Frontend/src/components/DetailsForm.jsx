import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class DetailsForm extends Component {
  state = {
    hr: "",
    o2sat: "",
    temp: "",
    sbp: "",
    map: "",
    dbp: "",
    resp: "",
    etco2: "",
    baseexcess: "",
    hco3: "",
    fio2: "",
    ph: "",
    paco2: "",
    sao2: "",
    ast: "",
    bun: "",
    alkalinephos: "",
    calcium: "",
    chloride: "",
    creatinine: "",
    bilirubin_direct: "",
    glucose: "",
    lactate: "",
    magnesium: "",
    phosphate: "",
    potassium: "",
    bilirubin_total: "",
    troponini: "",
    hct: "",
    hgb: "",
    ptt: "",
    wbc: "",
    fibrinogen: "",
    platelets: "",
    age: "",
    gender: "",
    hospadmtime: "",
    iculos: "",
    detailedName: [
      "Heart rate (beats per minute)",
      "Pulse oximetry (%)",
      "Temperature (Deg C)",
      "Systolic BP (mm Hg)",
      "Mean arterial pressure (mm Hg)",
      "Diastolic BP (mm Hg)",
      "Respiration rate (breaths per minute)",
      "End tidal carbon dioxide (mm Hg)",
      "Measure of excess bicarbonate (mmol/L)",
      "Bicarbonate (mmol/L)",
      "Fraction of inspired oxygen (%)",
      "pH",
      "Partial pressure of carbon dioxide from arterial blood (mm Hg)",
      "Oxygen saturation from arterial blood (%)",
      "Aspartate transaminase (IU/L)",
      "Blood urea nitrogen (mg/dL)",
      "Alkaline phosphatase (IU/L)",
      "Calcium",
      "Chloride",
      "Creatinine",
      "Bilirubin direct (mg/dL)",
      "Serum glucose (mg/dL)",
      "Lactic acid (mg/dL)",
      "Magnesium",
      "Phosphate",
      "Potassium",
      "Total bilirubin (mg/dL)",
      "Troponin I (ng/mL)",
      "Hematocrit (%)",
      "Hemoglobin (g/dL)",
      "partial thromboplastin time (seconds)",
      "Leukocyte count (count*10^3/µL)",
      "Fibrinogen",
      "Platelets Count",
      "Age",
      "Gender(M/F)",
      "Hours between hospital admit and ICU admit",
      "ICU length-of-stay (hours since ICU admit)",
    ],
    token: "token",
  };
  componentDidMount = () => {
    this.setState({ token: localStorage.getItem("token") });
  };

  ChangeHandler = (e) => {
    // console.log(this.state);
    if (e.target.name === "gender") {
      this.setState({
        [e.target.name]: e.target.value === "M" ? "1" : "0",
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    var toApi = this.state;
    var predict;
    delete toApi.detailedName;
    var t = `Token ` + this.state.token;
    // console.log(t);
    axios
      .put(
        "http://localhost:8000/sepsis/",
        {
          ...toApi,
        },
        {
          headers: {
            Authorization: t,
          },
        },
        {}
      )
      .then((res) => {
        predict = res.data.output;
        // console.log(res.data);
        this.setState({ prediction: predict });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    if (!this.state.token) {
      return <Redirect to="/login" />;
    }
    if (this.state.prediction !== undefined) {
      return (
        <Redirect
          to={{ pathname: "/result", prediction: this.state.prediction }}
        />
      );
    }
    return (
      <div className="Home">
        <section className="page-section">
          <div className="mt-5 text-center">
            <div className="container" align="center">
              <h1>
                <i className="fa fa-hospital-o" />
                Test for Sepsis
              </h1>
              <form
                className="form"
                id="detailsForm"
                onSubmit={this.handleSubmit}
              >
                <h2>Vital signs</h2>
                {Object.keys(this.state).map((key, index) => {
                  if (index < 8) {
                    return (
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name={key}
                          placeholder={this.state.detailedName[index]}
                          // value={this.state[key]}
                          onChange={this.ChangeHandler}
                          required
                        />
                        <br />
                        <br />
                      </div>
                    );
                  }
                })}
                <h2>Laboratory Values</h2>
                {Object.keys(this.state).map((key, index) => {
                  if (index >= 8 && index < 34) {
                    return (
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name={key}
                          placeholder={this.state.detailedName[index]}
                          // value={this.state[key]}
                          onChange={this.ChangeHandler}
                          required
                        />
                        <br />
                        <br />
                      </div>
                    );
                  }
                })}
                <h2>Demographics</h2>
                {Object.keys(this.state).map((key, index) => {
                  if (index > 33 && index < 38) {
                    return (
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name={key}
                          placeholder={this.state.detailedName[index]}
                          // value={this.state[key]}
                          onChange={this.ChangeHandler}
                          required
                        />
                        <br />
                        <br />
                      </div>
                    );
                  }
                })}
                <h2>Details Related To The Patient</h2>
                <input
                  type="text"
                  className="form-control"
                  name="patientid"
                  placeholder="Patient ID"
                  onChange={this.ChangeHandler}
                  required
                />
                <br />
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  placeholder=""
                  onChange={this.ChangeHandler}
                  required
                />
                <br />
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  placeholder="Time Of Admitting Patient"
                  onChange={this.ChangeHandler}
                  required
                />
                <br />
                <br />
                <div class="center4">
                  <button class="glow-on-hover" type="submit">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DetailsForm;
