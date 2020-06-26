import React from 'react';

const LanResource = ({contents, Talktome
, Mango, Duolingo, NineKorean, Howto, Keyto, KoreanKpop, Coursera
, Koreanone, LearnKorean, Wiseinit, Topik}) => {
    return (
      
          
        
    <div>    
    
     <div className="title">
        <div className="row align-items-lg-center">
           
       
      
        <div className = "body">
             <div className="legend">
            
                

     
            
           

       
          <a href = {Talktome}>
              <button className="button1">Talk To Me In Korean</button>
                 </a>
        


        
            <a href = {Mango}>
         
              <button className="button1">Mango Language</button>
                 </a>
               

         
         <a href = {Duolingo}>
              <button className="button1">Duolingo</button>
                 </a> 

      

      
        <a href = {NineKorean}>
              <button className="button1">90 Day Korean</button>
                 </a> 

              
       
        <a href = {Howto}>
              <button className="button1">How to study Korean</button>
                 </a>    


        <a href = {Keyto}>
              <button className="button1">Key to Korean</button>
                 </a>

     

                 <a href = {KoreanKpop}>
              <button className="button1">Korean through K-pop</button>
                 </a>

                 <a href = {Coursera}>
              <button className="button1">Coursera - First Step Korean</button>
                 </a>

                 <a href = {Koreanone}>
              <button className="button1">Korean Class 101</button>
                 </a>

                 <a href = {LearnKorean}>
              <button className="button1">LearnKorean.com</button>
                 </a>

                
                 <a href = {Wiseinit}>
              <button className="button1">WiseInit Korean</button>
                 </a>

                 <a href = {Topik}>
              <button className="button1">Online TOPIK Practice Tests</button>
                 </a>
                 
                  
                 <div classNAme = "row">
            {contents}
            </div>

                 The above links are a list of resources on learning the Korean language accessible through the web, however, A-KEEP is not responsible for any content or information accessed outside of the A-KEEP website and only includes the information as possible avenues of further language studies.
            
            </div>
          </div>
            </div>
          
          
            






        
       {/* Container text */}
        </div>



        


    
    
    
    
    {/* Divder Section */}
    </div>

    )
}



export default LanResource;