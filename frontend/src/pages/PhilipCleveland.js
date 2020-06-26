import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components//Leadership/Emeritus";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const Content = () => {
    return (
        <Fragment>
            <Header/>
            <LeadershipTeam
                name = "Dr. Philip Cleveland"
                desigination = "Executive Board"
                subDesigination = "The Chairman of the Executive Board of Directors of AKEEP  "
                city = "Montgomery, Alabama"
                expertise = "Term"
                skill = "2016"
                img = {require('../assets/img/philip-cleveland.jpg')}
                bio = "Publications"
                link1 = "https://www.advertisergleam.com/news/former-interim-state-superintendent-hired-by-county-school-board/article_e2d229ac-3ec8-5336-ac6b-8965235ec0bf.html"
                lText1 = "Former interim state superintendent hired by County School Board"
                text3 = "The Advertiser-Gleam, Cindy Mcgregor"
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;