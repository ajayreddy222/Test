import React from 'react';
import {Link} from "react-router-dom";

const AboutSection = ({bgImg,btnLink2,btnText2}) => {
    return (
        <div className="page-header-area bg-img" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="page-header-content-inner">
                            <div className="page-header-content">
                                <Link to= {`${process.env.PUBLIC_URL + btnLink2}`}>
                                    <button className= "btn-about"> {btnText2} </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;