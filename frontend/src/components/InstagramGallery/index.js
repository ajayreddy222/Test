


  import React from 'react';
  /* Instargram immport from react-instagram-embed */
  import InstagramEmbed from 'react-instagram-embed';
   
  
  function instagramG() {
      return (
  
  
  <div className="Insta">
  
  {/* Instargram feed */}
  <InstagramEmbed
  
  
          url='https://www.instagram.com/p/CAZMdmuHMi1/'
          maxWidth={500}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
          /><InstagramEmbed/>
  </div>
  
      )
  }
  
  export default instagramG;