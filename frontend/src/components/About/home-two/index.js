import React from 'react';
import parse from "html-react-parser";
import aboutData from "../../../data/About/home-two";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="home-two-about-area"> 
        {/* style={{backgroundImage:`url(${aboutThumb})`}} */}
            <div className="container">
                <div className="row align-items-center">
                    {/* <div className="col-12 d-lg-none">
                        <figure className="about-thumb">
                            <img src={require('../../../assets/img/' + aboutData.thumb)} alt="Businex-About"/>
                        </figure>
                    </div> */}

                    <div className="col lg-none">
                        <div className="about-content about-content-2">
                            <hr></hr>
                            <h2>{aboutData.title}</h2>
                            <Link to= {`${process.env.PUBLIC_URL + aboutData.btnLink}`}>
                                <button className= "btn-about"> {aboutData.btnText} </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-2 lg-6">
                        <div className="about-content about-content-2">
                        </div>
                    </div>
                    <div className="col-8 lg-6">
                        <div className="about-content about-content-2">
                        <hr></hr>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-12 lg-12">
                        <div className="about-content about-content-2">
                            <p>{parse(aboutData.text)}</p>
                            {/* <h6>{parse(aboutData.heading)}</h6>
                            <span className="about-since">{aboutData.since}</span>
                            <p>{parse(aboutData.text)}</p> */}
                            <Link to= {`${process.env.PUBLIC_URL + aboutData.btnLink1}`}>
                                <button className= "btn1-about"> {aboutData.btnText1} </button>
                            </Link>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
