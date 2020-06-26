import React from 'react';

const CritSch = ({title, pic, subtitle, contents, btnlink, NSLIfY, CLSP, AFS, KFS}) => {
    return (
      
          
        
    <div>    
    
     <div className="container">
        <div className="row align-items-lg-center">

      
        <div className = "col">
             <div className="col text-left">

               
           

       
          <a href = {NSLIfY}>
              <button className="button1">National Security Language Initiative for Youth </button>
                 </a>
        


         
            <a href = {CLSP}>
         
              <button className="button1">Critical Language Scholarship Program</button>
                 </a>
               

           
         <a href =  {AFS}>
              <button className="button1">AFS-USA Scholarship</button>
                 </a> 

       
        <a href = {KFS}>
              <button className="button1">Korea Foundation Scholarship</button>
                 </a> 

              
        
      

     

            

                 

             
           
                 
            
            </div>
          </div>
            </div>
          
          
            






        
        </div>



        


    
    
    

    </div>

    )
}



export default CritSch;