import React from 'react';

const LeadershipTeam = ({name,desigination,subDesigination,city,expertise,skill,img,bio,subHeading1,subHeading2,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11}) => {
    return (
        <div style={{"paddingTop":"0px"}} className="Main">
            <div className="container">
                <div className="row align-items-center">
                    <div style={{"marginTop":"-175px"}} className="col col-6 lg-6">
                        <div className="about-content about-content-1">
                            <h1 style={{"textAlign":"Left"}}>{name}</h1>
                            <p className="text"><strong>{desigination}</strong></p>
                            <p className="text">{subDesigination}</p>
                            <p className="text">{city}</p>
                            <hr></hr>
                            <h3 style={{"textAlign":"Left"}}><strong>{expertise}</strong></h3>
                            <p className="text">{skill}</p>
                        </div>
                    </div>
                    <div className="col col-1 lg-1">
                        <div className="about-content about-content-1"></div>
                    </div>
                    <div className="col col-5 lg-5">
                        <div className="about-content about-content-1">
                            <img src={img} style={{"width":"470px"}}/>
                        </div>
                    </div>
                </div>
                
                <div className="row align-items-center"> 
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr style={{"borderTop": "1.5px solid #d61c29"}}></hr>
                            <h3 style={{"textAlign":"Left"}}><strong>{bio}</strong></h3>
                            <p className="text">{text1}</p>
                            <h3><strong>{subHeading1}</strong></h3>
                            <ul>
                            <li><p>{text2}</p></li>
                            <li><p>{text3}</p></li>
                            <li><p>{text4}</p></li>
                            <li><p>{text5}</p></li>
                            </ul>
                            <h3><strong>{subHeading2}</strong></h3>
                            <ul>
                            <li><p>{text6}</p></li>
                            <li><p>{text7}</p></li>
                            <li><p>{text8}</p></li>
                            <li><p>{text9}</p></li>
                            <li><p>{text10}</p></li>
                            <li><p>{text11}</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadershipTeam;