import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import {Link} from "react-router-dom";
import announcementData from '../../data/Announcement/announcement';

const Announcement = () => (
    <div className="about-area-wrapper sm-top">
        <div className="container">
            <hr className="divider"/>
                <div className="row align-items-lg-center">       
                    <div className="col">
                        <Content className="announcement-content">
                            <h1 style = {{color :"black", "fontSize":"44px"}}>{announcementData.title}</h1>
                            <p>{parse(announcementData.text)}</p>
                        {/*  //Link for more details// */}
                            <Link to={`${process.env.PUBLIC_URL + announcementData.btnLink}`} className="btn-announce">{announcementData.btnText}</Link>
                        </Content>
                    </div>
                </div>
        </div>
    </div>
);

export default Announcement;