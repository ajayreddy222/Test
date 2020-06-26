import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import {Link} from "react-router-dom";

const ThreeColsBttn2 = (props) => {
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
                        <p className="body"><b><i>{parse(props.text)}</i></b></p>
                        {/* <Link to={`${process.env.PUBLIC_URL + announcementData.btnLink}`} className="btn-announce">{announcementData.btnText} <i className="fa fa-angle-double-right"/></Link> */}
                        </div>
                        <div className="imgrow1">
                            <div className="col1">
                                <hr className="divider"/>
                                <h3 className="ThreeCB2">{props.text2}</h3>
                                <p>{props.text5}</p>                                
                            </div>
                            <div className="col1">
                                <hr className="divider"/>
                                <h3 className="ThreeCB2">{props.text3}</h3>
                                <p>{props.text6}</p>
                            </div>
                            <div className="col1">
                                <hr className="divider"/>
                                <h3 className="ThreeCB2">{props.text4}</h3>
                                <p>{props.text7}</p>
                            </div>  
                            
                        </div>
                    </Content>
                </div>
            {/* </div> */}
        </div>
    </div>);
};

export default ThreeColsBttn2;