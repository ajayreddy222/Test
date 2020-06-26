import React from 'react';

const LeadershipTeam = ({name,desigination,subDesigination,city,expertise,skill,img,bio,bio1,link1,lText1,text1,text2,text3}) => {
    return (
        <div className="Main">
            <div className="container">
                <div className="row align-items-center">
                    <div style={{"marginTop":"-140px"}} className="col col-6 lg-6">
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
                            <img src={img} style={{"width":"470px", "height":"400px"}}/>
                        </div>
                    </div>
                </div>
                
                <div className="row align-items-center"> 
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr style={{"borderTop": "1.5px solid #d61c29"}}></hr>
                            <h3 style={{"textAlign":"Left"}}><strong>{bio}</strong></h3>
                            <p className="text">{text1}</p>
                            <h3 style={{"textAlign":"Left"}}><strong>{bio1}</strong></h3>
                            <p><a className="link" href={link1} target="_blank">{lText1}</a>{text2}</p>
                            <h3 style={{"textAlign":"Left"}}><strong>{text3}</strong></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadershipTeam;