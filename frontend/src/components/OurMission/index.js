import React from 'react';
import aboutData from "../../data/OurMission/OurMission";

const Content = () => {
    return (
        <div className="Main"> 
            <div className="Main-content">
                <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr></hr>
                            <h1>{aboutData.title}</h1>
                            <p>{aboutData.text}</p>
                            <hr></hr>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-2 lg-2">
                        <div className="about-content about-content-2">
                            <h1>{aboutData.title1}</h1>
                        </div>
                    </div>
                    <div className="col col-10 lg-10">
                        <div className="about-content about-content-2">
                            <h2><strong style={{"font-weight": "bold"}}>{aboutData.text1}</strong></h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr></hr>
                            <h1 style={{"text-align": "center"}}>{aboutData.title2}</h1>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <figure className="about-thumb">
                            <img src={require('../../assets/img/' + aboutData.img)} alt="CKC students"/>
                        </figure>
                    </div>

                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-3">
                            <h2 style={{"text-align": "left"}}>{aboutData.title3}</h2>
                            <h3><strong style={{"font-weight": "bold"}}>{aboutData.heading1}</strong></h3>
                            <p>{aboutData.text2}</p>
                            <h3><strong style={{"font-weight": "bold"}}>{aboutData.heading2}</strong></h3>
                            <p>{aboutData.text3}</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-2">&nbsp;</div>
                    </div>

                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-1">
                            <hr style={{"border-top": "1.5px solid #d61c29"}}></hr>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-3">
                        <h2 style={{"text-align": "left"}}>{aboutData.title4}</h2>
                            <h3><strong style={{"font-weight": "bold"}}>{aboutData.heading1}</strong></h3>
                            <p>{aboutData.text4}</p>
                            <h3><strong style={{"font-weight": "bold"}}>{aboutData.heading2}</strong></h3>
                            <p>{aboutData.text5}</p>
                        </div>
                    </div>

                    <div className="col col-6 lg-6">
                        <figure className="about-thumb">
                            <img src={require('../../assets/img/' + aboutData.img1)} alt="Collaboration"/>
                        </figure>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-1">
                            <hr style={{"border-top": "1.5px solid #d61c29"}}></hr>
                        </div>
                    </div>

                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-2">&nbsp;</div>
                    </div>

                </div><div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <figure className="about-thumb">
                            <img src={require('../../assets/img/' + aboutData.img2)} alt="CKC students"/>
                        </figure>
                    </div>

                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-3">
                            <h2 style={{"text-align": "left"}}>{aboutData.title5}</h2>
                            <h3><strong style={{"font-weight": "bold"}}>{aboutData.heading1}</strong></h3>
                            <p>{aboutData.text6}</p>
                            <h3><strong style={{"font-weight": "bold"}}>{aboutData.heading2}</strong></h3>
                            <p>{aboutData.text7}</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-2">&nbsp;</div>
                    </div>

                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-1">
                            <hr style={{"border-top": "1.5px solid #d61c29"}}></hr>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-3">
                        <h2 style={{"text-align": "left"}}>{aboutData.title6}</h2>
                            <h3><strong style={{"font-weight": "bold"}}>{aboutData.heading1}</strong></h3>
                            <p>{aboutData.text8}</p>
                            <h3><strong style={{"font-weight": "bold"}}>{aboutData.heading2}</strong></h3>
                            <p>{aboutData.text9}</p>
                        </div>
                    </div>

                    <div className="col col-6 lg-6">
                        <figure className="about-thumb">
                            <img src={require('../../assets/img/' + aboutData.img3)} alt="Collaboration"/>
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
                    <div className="col-12 lg-12">
                        <div className="about-content about-content-2">
                            <figure className="about-thumb">
                                <img src={require('../../assets/img/' + aboutData.img4)} alt="Green-Background"/>
                                <figcaption class="image-card-wrapper" data-width-ratio="">
                                    <div class="image-card sqs-dynamic-text-container">
                                        <div class="image-button-wrapper">
                                            <div class="image-button sqs-dynamic-text" data-width-percentage="59.2" style={{"font-size": "59.2%"}}>
                                                <div class="image-button-inner">
                                                    <a href={aboutData.btnLink}>{aboutData.btnText}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
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
