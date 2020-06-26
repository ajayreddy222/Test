import React from 'react';

const TextFormat = ({title, subtitle, contents, contents1, contents2 }) => {
    
    return (
      
      <div>
        
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

        <div className = "context_point">
             {contents}
        <br></br>
        {contents1}
        <br></br>
        {contents2}
        </div>

        </div>


        </div>

    );
};

export default TextFormat;