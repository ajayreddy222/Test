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
                name = "Ray White"
                desigination = "Executive Board of Directors"
                subDesigination = "Vice Chancellor, Troy University, and Troy University Montgomery"
                city = "Montgomery and Troy, Alabama"
                expertise = "Term"
                skill = "2012-2015"
                img = {require('../assets/img/ray-white.jpg')}
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;