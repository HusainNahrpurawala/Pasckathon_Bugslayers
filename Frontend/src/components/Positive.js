import React, { Component } from "react";
import stats from "./stats.jpg";
class Positive extends Component{
    render(){
        return(
           <div className="pos">
               <h1 style={{position: "absolute",
  left: "450px",
  top: "-5px"}}>SEPSIS POSITIVE</h1>
              
           
               <h3 style={{color:"black",position: "absolute",
  left: "100px",
  top: "30px"}}>TREATMENT</h3>
           <p style={{positon: "absolute", marginTop:"5%"}}>    Early, aggressive treatment boosts your chances of surviving sepsis. People who have sepsis require close monitoring and treatment in a hospital intensive care unit. If you have sepsis 
  or septic shock, lifesaving measures may be needed to stabilize breathing and heart function.
Medications

A number of medications are used in treating sepsis and septic shock. They include:

    Antibiotics. Treatment with antibiotics should begin immediately. Initially you'll receive broad-spectrum antibiotics, which are effective against a variety of bacteria. The antibiotics are administered intravenously (IV).

    After learning the results of blood tests, your doctor may switch to a different antibiotic that's targeted to fight the particular bacteria causing the infection.
    Intravenous fluids. People who have sepsis often receive intravenous fluids right away, usually within three hours.
    Vasopressors. If your blood pressure remains too low even after receiving intravenous fluids, you may be given a vasopressor medication, which constricts blood vessels and helps to increase blood pressure.

Other medications you may receive include low doses of corticosteroids, insulin to help maintain stable blood sugar levels, drugs that modify the immune system responses, and painkillers or sedatives.
Supportive care

People who have sepsis often receive supportive care that includes oxygen. Depending on your condition, you may need to have a machine help you breathe. If your kidneys have been affected, you may need to have dialysis.
Surgery

Surgery may be needed to remove sources of infection, such as collections of pus (abscesses), infected tissues or gangrene.</p>

           <div className="img3">
              <img src={stats} alt="Sepsis statistics"  style={{ width: "100%", 
                height: "100%", 
                objectfit: "contain" }}/>
            </div>       
           </div>
        

           
        );

        
    }
}
export default Positive;

