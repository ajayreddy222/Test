import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import {Link} from "react-router-dom";
import Thumbnail from "../UI/Thumbnail";


const Two_ThreeCols = (props) => {
        props = props.json || props;


    return (<div className="about-area-wrapper sm-top">
        <div className="container">

                <div className="col">
                    <Content className="Section-content1">                        
                        <hr style={{borderTop: '1px solid red'}}/>
                        <div className="imgrow2">
                            <div className="threecol" id="threecol1">
                                <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.thumb3)}/>
                            </div>  
                            <div className="threecol" id="threecol2">
                                <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.thumb1)}/>                           
                            </div>
                            <div className="threecol" id="threecol3">
                                <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.thumb2)}/>
                            </div>
                            
                        </div>
                        <div className="imgrow2">
                            <div className="threecol" id="threecol4">
                                <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.thumb4)}/>                              
                            </div>
                            <div className="threecol" id="threecol5">
                                <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.thumb5)}/>
                            </div>
                            <div className="threecol" id="threecol6">
                                <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.thumb6)}/>
                            </div>  
                        </div>
                        <div>
                            <blockquote id="blockqoute1"><i>My daughter was so happy in the program and had a blast. Means a lot to a parent.</i></blockquote>
                            <footer>-TERA DUVERNAY, KSL PARENT</footer>
                        </div>
                    </Content>
                </div>
        </div>
    </div>);
};

export default Two_ThreeCols; 