import React from 'react';

const Youtube = ({title, contents }) => {
  return (
    <div className="Main" style={{"padding": "0px 100px"}}> 
         <div className="Main-content">
         <div className="row align-items-center">
                <div className="col col-12 lg-12">
                  <div className="about-content about-content-1">
                    <hr></hr>
                    <h2 style={{"textAlign":"Left"}}>{title}</h2>
                    <p>{contents}</p>
                    <iframe width="1350" height="690" src="https://www.youtube.com/embed/3AodW4fWukc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
         </div>
    </div>
   )
};

export default Youtube;