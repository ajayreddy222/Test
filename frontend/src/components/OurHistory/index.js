import React from 'react';
import aboutData from "../../data/OurHistory/OurHistory";

const Content = () => {
    return (
        <div className="Main"> 
            <div className="Main-content">
                <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr style={{"border-top": "1.5px solid #d61c29"}}></hr>
                        </div>
                    </div>
                    <div className="col col-1 lg-1">
                        <div className="about-content about-content-1"></div>
                    </div>
                    <div className="col col-10 lg-10">
                        <div className="about-content about-content-1">
                            <h1>{aboutData.title}</h1>
                            <p style={{"text-align": "left"}}>{aboutData.text}</p>
                            <hr style={{"width":"70%", "marginLeft":"15%","marginRight":"15%"}}></hr>
                        </div>
                    </div>
                    <div className="col col-1 lg-1">
                        <div className="about-content about-content-1"></div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                        <figure >
                            <q>{aboutData.text1}</q>
                            <figcaption class="source">&mdash; {aboutData.caption}</figcaption>
                        </figure>
                    </div>
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-2">
                            <hr style={{"border-top": "1.5px solid #d61c29","width":"70%", "marginLeft":"15%","marginRight":"15%"}}></hr>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <figure className="about-thumb">
                            <img src={require('../../assets/img/' + aboutData.img)} alt="2011-2012.jpg"/>
                        </figure>
                    </div>

                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-3">
                            <h3 style={{"text-align": "left"}}>{aboutData.title3}</h3>
                            <p>{aboutData.text2}</p>
                            <p>{aboutData.text3}</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr></hr>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-3">
                        <h3 style={{"text-align": "left"}}>{aboutData.title4}</h3>
                            <p>{aboutData.text4}</p>
                            <p>{aboutData.text5}</p>
                            <p>{aboutData.text6}</p>
                        </div>
                    </div>

                    <div className="col col-6 lg-6">
                        <figure className="about-thumb">
                            <img src={require('../../assets/img/' + aboutData.img1)} alt="Two-Lines.jpg"/>
                        </figure>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr></hr>
                        </div>
                    </div>
                </div>
                
                <div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <figure className="about-thumb">
                            <img src={require('../../assets/img/' + aboutData.img2)} alt="2016-Present.jpg"/>
                        </figure>
                    </div>

                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-3">
                            <h3 style={{"text-align": "left"}}>{aboutData.title5}</h3>
                            <p>{aboutData.text7}</p>
                            <p>{aboutData.text8}</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr style={{"border-top": "1.5px solid #d61c29"}}></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
