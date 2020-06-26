import React from 'react';

const StaffTeam = ({name,desigination,city,contact,phoneNo,email,expertise,skill,img,bio,text1,text2,text3,text4,text5}) => {
    return (
        <div style={{"paddingTop":"0px"}} className="Main">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-5 lg-5">
                        <div className="about-content about-content-1">
                            <h1 style={{"textAlign":"Left"}}>{name}</h1>
                            <p className="text"><em>{desigination}</em></p>
                            <p className="text">{city}</p>
                            <hr></hr>
                            <h3 style={{"textAlign":"Left"}}><strong>{contact}</strong></h3>
                            <p className="text">Office: <i>{phoneNo}</i></p>
                            <p className="text">Email: <a className="link" href={email} target="_blank">{email}</a></p>
                            <hr></hr>
                            <h3 style={{"textAlign":"Left"}}><strong>{expertise}</strong></h3>
                            <p className="text">{skill}</p>
                        </div>
                    </div>
                    <div className="col col-1 lg-1">
                        <div className="about-content about-content-1"></div>
                    </div>
                    <div className="col col-6 lg-6">
                        <div className="about-content about-content-1">
                            <img src={img}/>
                        </div>
                    </div>
                </div>
                
                <div className="row align-items-center"> 
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr style={{"borderTop": "1.5px solid #d61c29"}}></hr>
                            <h3 style={{"textAlign":"Left"}}><strong>{bio}</strong></h3>
                            <p className="text"><strong>{text1}</strong></p>
                            <p className="text">{text2}</p>
                            <p className="text">{text3}</p>
                            <p className="text">{text4}</p>
                            <p className="text">{text5}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffTeam;