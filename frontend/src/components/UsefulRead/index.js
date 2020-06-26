import React from 'react';

const UsefulRead = ({title, pic, subtitle, contents, btnlink, TwoFR
, KorTimes, LearnForeign, KorExpose}) => {
    return (
      
          
        
    <div>    
    
     <div className="container">
        <div className="row align-items-lg-center">
       
      
        <div className = "col">
             <div className="col text-left">

     
            
           

       
          <a href = {TwoFR}>
              <button className="button1">Talk To Me In Korean</button>
                 </a>
        


        
           
            <a href = {KorTimes}>
         
              <button className="button1">Mango Language</button>
                 </a>
               

          
         <a href = {LearnForeign}>
              <button className="button1">Duolingo</button>
                 </a> 

    
        <a href = {KorExpose}>
              <button className="button1">90 Day Korean</button>
                 </a> 

         <div classNAme = "row">
            {contents}
            </div>

         A-KEEP is not responsible for any scholarship applications made by parents or students or for any scholarship cancellations, and it does not fund scholarship rewards.
                 
            
            </div>
          </div>
            </div>
          
          
            






        
       {/* Container text */}
        </div>



        


    
    
    
    
    {/* Divder Section */}
    </div>

    )
}



export default UsefulRead;