import React, { Component} from 'react';
//import {BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
//import { NavLink } from 'react-router-dom';
import second from './2.JPG';
import first from './1.JPG';
class Home extends Component {
    render(){
        return(
            <div className="Home" >
                  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in" >SEPSIS PREDICTION SYSTEM</div>
      
            </div>
            </div>
            
    
  </header>

  <section className="page-section" id="services">
  <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">What is sepsis?</h2>
                    <div className="timeline-body" ><p className="text-muted" style={{fontWeight:"normal" }}> According to the Sepsis-3 guidelines, Sepsis is defined as a “as life-threatening organ dysfunction caused by a dysregulated host response to infection”.
               Sepsis has a higher mortality rate than heart attacks, stroke, trauma and certain cancers. Every year sepsis kills around 6 million people worldwide, affects around 30 million people worldwide including  4.2 million newborns and children. Sepsis costs US hospitals more than any other disease ($24 billion) and a majority of these costs are because of sepsis patients who were not diagnosed on admission. 
  
            </p>
            </div>
     <img src={first} alt="Sepsis statistics"/>
            </div>
            </div>
              
        
      </section>
      <section className="page-section" id="services">
      <div className="container">
      <div className="text-center">
      <h2 className="section-heading text-uppercase">Why complete eradication of sepsis is a challenge</h2>
      <div className="timeline-body" ><p className="text-muted" style={{fontWeight:"normal" }}> Early detection is critical for improving sepsis outcomes and each hour of delayed treatment has been associated with roughly a 4-8% increase in mortality.
      The method currently deployed to detect Sepsis is the Sequential Organ Failure Assessment (SOFA) score which takes into account 6 factors. A person is said to be affected by Sepsis if the change in his/her SOFA score is ≥ 2.
      This method can only predict Sepsis during its onset, which provides medical authorities very little time to treat the patient.
      The method proposed monitors the test results of a patient and can predict Sepsis in a patient about 6 hours before the prevalent methods. This provides doctors with sufficient time to work with and provide proper medication.

            </p>
            <div>
            <img src={second} alt="challenge"/>
            </div>
            </div>
       </div>
          
          </div>
</section>


  <div class="center">
  <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#">Get Prediction</a>
  </div>
  </div>
   );
}
}
export default Home;