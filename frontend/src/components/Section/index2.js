import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import {Link} from "react-router-dom";





const Section = (props) => {
    props = props.json || props;
    
    return (<div className="about-area-wrapper sm-top">
        <div className="container">

            {/* <div className="row align-items-lg-center"> */}
                {/* <div className="col-md-6 col-lg-5">
                    <Thpumbnail classes="about-thumb" imgSrc={require('../../../assets/img' + aboutData.thumb)}/>
                </div> */}

                <div className="col">
                    <Content className="Section-content">
                        <hr className="divider1"/>
                        {/* <h2>{props.json.title}</h2> */}
                        {/* <h2>{parse(aboutData.heading)}</h2> */}
                        {/* <span className="about-since">{aboutData.since}</span> */}
                        <p className="body"><b><i>{parse(props.text1)}</i></b></p>
                        
                        <h1 className="bigtext">{props.text2}</h1>
                        <h5 className="redline">{props.text3}</h5>
                        <h5 className="index2h5">{props.text4}</h5>
                        
                    </Content>
                </div>
            {/* </div> */}
        </div>
    </div>);
};

export default Section;