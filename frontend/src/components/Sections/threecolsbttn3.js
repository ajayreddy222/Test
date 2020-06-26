import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import {Link} from "react-router-dom";
import Thumbnail from "../UI/Thumbnail";

const ThreeColsbttn3 = (props) => {
        props = props.json || props;


    return (<div className="about-area-wrapper sm-top">
        <div className="container">

            {/* <div className="row align-items-lg-center"> */}
                {/* <div className="col-md-6 col-lg-5">
                    <Thpumbnail classes="about-thumb" imgSrc={require('../../../assets/img' + aboutData.thumb)}/>
                </div> */}

                <div className="col">
                    <Content className="Section-content1">
                        <div>
                        <hr style={{borderTop: '1px solid red'}}/>
                        <h2>{props.title}</h2>
                        {/* <span className="about-since">{aboutData.since}</span> */}
                        <p className="body"><b><i>{parse(props.text1)}</i></b></p>
                        {/* <Link to={`${process.env.PUBLIC_URL + announcementData.btnLink}`} className="btn-announce">{announcementData.btnText} <i className="fa fa-angle-double-right"/></Link> */}
                        </div>
                        <div className="imgrow1">
                            <div className="col1">
                                <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.thumb1)}/>
                                <h3 className="threebtn">{props.text2}</h3>                                
                            </div>
                            <div className="col1">
                                <Thumbnail className="about-thumb4" imgSrc={require('../../assets/img' + props.thumb3)}/>
                                <h3 className="threebtn">{props.text3}</h3>
                            </div>
                            <div className="col1">
                                <Thumbnail className="about-thumb2" imgSrc={require('../../assets/img' + props.thumb2)}/>
                                <h3 className="threebtn">{props.text4}</h3>
                            </div>  
                            
                        </div>
                        <div class="row">
                            <div className="col">
                            <Link to={`${process.env.PUBLIC_URL + props.btnLink1}`} className="btn-announce">{props.btnText1}</Link> <br/>
                            </div>
                            <div className="col">
                            <Link to={`${process.env.PUBLIC_URL + props.btnLink1}`} className="btn-announce">{props.btnText2}</Link> <br/>                                 
                            </div>
                            <div className="col">
                            <Link to={`${process.env.PUBLIC_URL + props.btnLink1}`} className="btn-announce">{props.btnText3}</Link> <br/>
                            </div>
                        </div>
                    </Content>
                </div>
            {/* </div> */}
        </div>
    </div>);
};

export default ThreeColsbttn3;