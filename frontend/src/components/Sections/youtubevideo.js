import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import {Link} from "react-router-dom";

const Announcement = () => (
    <div className="about-area-wrapper sm-top">
        <div className="container">
        <hr className="divider"/>
        <iframe id="vid1" src="https://www.youtube-nocookie.com/embed/WYXzqjY7M4g?modestbranding=1&showinfo=0&rel=0&fs=0" width="756" height="425" frameborder="0"></iframe>
        </div>
    </div>
);

export default Announcement;