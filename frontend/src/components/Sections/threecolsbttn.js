import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import {Link} from "react-router-dom";
import Thumbnail from "../UI/Thumbnail";

const ThreeColsbttn = (props) => {
        props = props.json || props;


    return (<div className="about-area-wrapper sm-top">
        <div className="container">


                <div className="col">
                    <Content className="Section-content1">
                        <div>
                        <hr style={{borderTop: '1px solid red'}}/>
                        <h2>{props.title}</h2>
                        <p className="body"><b><i>{parse(props.text)}</i></b></p>
                        </div>
                        <div className="imgrow1">
                            <div className="col1">
                                <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.thumb1)}/>
                                <h3>{props.text6}</h3>                                
                            </div>
                            <div className="col1">
                                <Thumbnail className="about-thumb3" imgSrc={require('../../assets/img' + props.thumb2)}/>
                                <h3>{props.text7}</h3>
                            </div>
                            <div className="col1">
                                <Thumbnail className="about-thumb2" imgSrc={require('../../assets/img' + props.thumb3)}/>
                                <h3>{props.text8}</h3>
                            </div>  
                            
                        </div>
                        <div class="row">
                            <div className="col">
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink1}`} className="btn-announce1"><u>{props.btnText2}</u></Link> <br/>
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink2}`} className="btn-announce1"><u>{props.btnText3}</u></Link> <br/>
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink3}`} className="btn-announce1"><u>{props.btnText4}</u></Link> <br/>
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink4}`} className="btn-announce1"><u>{props.btnText5}</u></Link> <br/>
                            </div>
                            <div className="col">
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink5}`} className="btn-announce1"><u>{props.btnText6}</u></Link> <br/>
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink6}`} className="btn-announce1"><u>{props.btnText7}</u></Link>
                            </div>
                            <div className="col">
                                <Link to={`${process.env.PUBLIC_URL + props.btnLink7}`} className="btn-announce1"><u>{props.btnText8}</u></Link>
                            </div>
                        </div>
                    </Content>
                </div>
        </div>
    </div>);
};

export default ThreeColsbttn;