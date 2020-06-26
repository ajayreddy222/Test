import React from 'react';


let i = 1;
// Prev button is clicked
    const Prevbutton =() => {

    alert("Button clicked");
        
        i++;   
      }

// Next button is clicked
   const NextButton = () =>{
    
    i++;   
}

const Slidershow = () => {
       

    
        return (
            

        <div className="container">

            <div className="col text-center">
                <div className = "marginForLine">
                
            <button  onclick = {Prevbutton} id = "subscribe_Button"  > Prev</button>            
            <img src= {require('../../assets/img/co'+ i + '.png')} alt= "check" />
            <button  onclick = {NextButton} id = "subscribe_Button" > Next</button>            

            </div>         
         </div> 


        </div>);
    }
;

export default Slidershow;