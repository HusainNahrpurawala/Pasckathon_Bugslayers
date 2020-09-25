/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-md-6">
          <Card
              title="What is Sepsis?"
              
              
              content={
                  <div id="chartActivity" className="ct-chart">
                      <p>According to the Sepsis - 3 guidelines, Sepsis is defined as
                  a“ as life - threatening organ dysfunction caused by a
                  dysregulated host response to infection”.Sepsis has a higher
                  mortality rate than heart attacks, stroke, trauma and certain
                  cancers.Every year sepsis kills around 6 million people
                  worldwide, affects around 30 million people worldwide
                  including 4.2 million newborns and children.Sepsis costs US
                  hospitals more than any other disease($24 billion) and a
                  majority of these costs are because of sepsis patients who
                  were not diagnosed on admission.</p>
                  </div>
              }
              
          />
      </div>
  </div>
    );
  }
}

export default Card;
