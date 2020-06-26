import React from 'react';

const Youtube = ({title, subtitle, contents }) => {
    return (
      
      <div>
        
        <hr className="divider"/>
              
        <div className="container">
            <div className="row align-items-lg-center">
        
          <div className = "col">
             <div className="col text-center">
        
             <div className = "title_point">
           {title}
              </div>
              </div>
              </div>


        </div>
        <div className = "subtitle_point" > {subtitle} </div>   

        <div className = "body1">
            <div className = "marginForLine">
        {contents}
   
        </div>
        </div>

        <div className="col text-center">
            <div className = "marginForLine">
        <iframe width="800" height="400" src="https://www.youtube.com/embed/3AodW4fWukc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
        </div>


        </div>
        </div>


    );
};

export default Youtube;