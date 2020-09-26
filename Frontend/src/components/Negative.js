import React, { Component } from "react";

class Negative extends Component{
    render(){
        return(
           <div className="neg">
               <h1 style={{position: "absolute",
  marginLeft: "500px",
  top: "-5px", textDecoration:"underline", color:" #F5F5DC"}}>SEPSIS NEGATIVE </h1>
              
         
                <p style={{positon: "absolute", marginTop:"3%", marginLeft:"20px", marginRight:"20px", backgroundColor:"#FFF8DC", paddingLeft:"20px",paddingRight:"15px",fontFamily:"Bookman, URW ", fontSize:"18px" }}>
           1.  Get vaccinated<br></br>
           Thirty-five percent of sepsis cases in the CDC study stemmed from pneumonia. Yet the CDC says that only 20 percent of high-risk adults under age 65 and 60 percent of those 65 and older have been vaccinated against that disease. Annual flu shots can also prevent respiratory infections that can sometimes turn septic. But only about a third of sepsis patients in the CDC study had a record of being vaccinated against the flu. “Thousands of more deaths could be prevented with better coverage,” wrote the authors of the CDC report.
   <br></br>
    2.Treat urinary tract infections promptly<br></br>
     A quarter of sepsis cases resulted from urinary tract infections. So it’s important to see a healthcare provider if you have warning signs of those infections—usually a painful, burning feeling when you urinate and a strong urge to “go” often—and, when appropriate, be treated with antibiotics. UTIs are also common among hospital patients, especially those who have been catheterized, so it’s extra important to watch for those infections while in the hospital.
    <br></br>3.Clean skin wounds properly<br></br>
     About one in 10 sepsis cases follows a skin infection. So it’s essential to care for wounds and scrapes properly. That means washing with soap and water, cleaning out any dirt or debris, and covering wounds. And people with diabetes should make sure that they follow good foot care practices, since wounds there can often develop dangerous infections.
    4.Avoid infections in hospitals<br></br>
     Since many infections that turn septic originate in hospitals and other healthcare facilities, it’s essential that you—and your healthcare providers—take steps to avoid those infections. That means, for example, insisting that everyone who comes into your hospital room—including doctors and nurses—wash their hands every time they touch you. 
         <a  href="https://www.who.int/infection-prevention/campaigns/clean-hands/Sepsis_infographic_A3.pdf?ua=1" style={{color:"#2F4F4F" }}> For more details click here</a>
           </p>

                   
           </div>
           

           
        );

        
    }
}
export default Negative;

