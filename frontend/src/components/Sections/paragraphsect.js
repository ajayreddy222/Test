import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";



const paragraph = (props) => {
        props = props.json || props;


        return (<div className="about-area-wrapper sm-top">
        <div className="container">

            {/* <div className="row align-items-lg-center"> */}
                {/* <div className="col-md-6 col-lg-5">
                    <Thpumbnail classes="about-thumb" imgSrc={require('../../../assets/img' + aboutData.thumb)}/>
                </div> */}

                <div className="col">

                        <hr className="divider"/>
                        <p className="body">{parse(props.text1)}</p>
                        <p className="body2">{parse(props.text2)}</p>
                        <p className="body3">{parse(props.text3)}</p>
                    
                </div>
            {/* </div> */}
        </div>
    </div>);
};

export default paragraph