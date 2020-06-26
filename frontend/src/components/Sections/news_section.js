import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import {Link} from "react-router-dom";

const NewsView = (props) => {
        props = props.json || props;


    return (<div className="about-area-wrapper sm-top">
        <div className="container">

            {/* <div className="row align-items-lg-center"> */}
                {/* <div className="col-md-6 col-lg-5">
                    <Thpumbnail classes="about-thumb" imgSrc={require('../../../assets/img' + aboutData.thumb)}/>
                </div> */}
                <h3 className="stories">Related Stories</h3>
                <div className="col">
                    <Content className="Section-content1">
                        <div className="imgrow1">
                            <div className="col1">
                                <h3 className="NewsHeader">{props.text1}</h3>                                
                            </div>
                            <div className="col1">
                                <h3 className="NewsHeader">{props.text2}</h3>
                            </div>
                            <div className="col1">
                                <h3 className="NewsHeader">{props.text3}</h3>
                            </div>  
                            
                        </div>
                        <div className="NewsRow">
                            <div className="colnews">
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink1}`} className="btn-announce2">{props.btnText1}</Link> <br/>
                            </div>
                            <div className="colnews">
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink5}`} className="btn-announce2">{props.btnText2}</Link> <br/>
                            </div>
                            <div className="colnews">
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink7}`} className="btn-announce2">{props.btnText3}</Link>
                            </div>
                        </div>
                    </Content>
                </div>
            {/* </div> */}
        </div>
    </div>);
};

export default NewsView;