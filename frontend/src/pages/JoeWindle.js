import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components/Leadership";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const Content = () => {
    return (
        <Fragment>
            <Header/>
            <LeadershipTeam
                name = "Col. Joe Windle"
                desigination = "Executive Board"
                subDesigination = "Tallapoosa County Schools Superintendent"
                city = "Tallapoosa, Alabama"
                expertise = "Areas of Expertise"
                skill = "Education"
                img = {require('../assets/img/JoeWindle.jpg')}
                bio = "Publications"
                link1 = "https://www.alexcityoutlook.com/2012/09/21/home-again/"
                lText1 = "The Outlook, Natalie Nettles"
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;