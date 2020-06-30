import React from 'react';


const Leftpictext = ({pic, subtitle, contents,btnlink}) => {
    return (
     <div className="Main" style={{"padding": "0px 100px"}}> 
          <div className="Main-content">
               <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                         <div className="about-content about-content-1">
                              <hr></hr>
                         </div>
                    </div>
                    <div className="col col-3 lg-3">
                         <div className="about-content about-content-1">
                              <img src={pic}/>
                         </div>
                    </div>
                    <div className="col col-9 lg-9">
                         <div className="about-content about-content-1">
                              <h2 style={{"textAlign":"Left"}}>{subtitle}</h2>
                              <p>{contents}</p>
                              <p><a className="link" href={btnlink}><strong>Click to read our full statement.</strong></a></p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
    )
};
export default Leftpictext;