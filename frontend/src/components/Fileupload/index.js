import React, {Component} from 'react';
import axios, {post} from 'axios'; 

class Fileupload extends Component { 
 

    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }

      onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }

      


      onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, { 
           // receive two    parameter endpoint url ,form data
       })
    }

    render() {
        return (
            <div>
                <div className="container">
            <input type="file" name="cibal" onChange={this.onChangeHandler}/>,
            <br></br>,
            <br></br>,

            <br></br>,

            <br></br>,

            <br></br>

            <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 
            </div>
            </div>
        );
    }
    
}
export default Fileupload

