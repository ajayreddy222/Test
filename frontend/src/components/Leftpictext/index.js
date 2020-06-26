import React from 'react';


const Leftpictext = ({pic, subtitle, contents,btnlink}) => {
    return (
      
       
    <div>        <hr className="divider"/>
    
     <div className="container">
        <div className="row align-items-lg-center">

        <img src= {pic} alt= "check" />
        <div className = "col">
             <div className="col text-left">
        <div className="subtitle_point"> {subtitle} </div>
         <div className="body1"> {contents} 
         <a href = {btnlink}>
        <button className="button1">Click to read our full statement.</button>
         </a>
          </div>
         </div>
        </div>
        </div>
         </div>
         </div>
    )
}



export default Leftpictext;