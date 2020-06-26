import React from 'react';
import Video from '../../assets/img/Website-Intro.mp4'

const HomePageHeader = () => {
    return (
        <div className="container2" >
            <video autoplay="true" loop>
                <source src={Video} type="video/mp4"/>
            </video>

            <div className= "Content">
                <div className= "SubContent">
                    <h2>The Alabama-Korea Education and Economic Partnership</h2>
                </div>
            </div>
        </div>
    );
};

export default HomePageHeader;