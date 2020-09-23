import React, { Component } from "react";

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
    creatine: "",
    bilirubin_direct: "",
    glucose: "",
    lactate: "",
    magnesium: "",
    phosphate: "",
    potassium: "",
    Bilirubin_total: "",
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
  };

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
          <div className="mt-5 text-center">
            <div className="container">
              <h1>
                <i className="fa fa-hospital-o" />
                Test for Sepsis
              </h1>
              <form
                className="form-style-4"
                id="detailsForm"
                onSubmit={this.handleSubmit}
              >
                <input
                  type="text"
                  className="form-control"
                  name="abc"
                  placeholder="abc"
                  value={this.state.abc}
                  onChange={this.ChangeHandler}
                  required
                />

                <button type="submit" className="btn btn-primary btn-bg mt-3">
                  Predict
                </button>
              </form>
            </div>
          </div>
          {/* <form onSubmit={this.handleSubmit}>
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
            </form> */}
        </section>
      </div>
    );
  }
}

export default DetailsForm;
