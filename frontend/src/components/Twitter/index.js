import React, {Fragment} from 'react';


class Twitter extends React.Component {
    render() {
      return (
        <div> 


        <a class="twitter-timeline" data-width="800" data-height="500"  href="https://twitter.com/join_akeep">Tweets by AKEEP</a> 
        {/* Every async file should be in Index html */}
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"> </script>
        
        </div>
      );
    }
  }
  export default Twitter;
 