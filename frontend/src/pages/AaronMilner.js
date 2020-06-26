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
                name = "Dr. Aaron Milner"
                desigination = "Executive Board"
                subDesigination = "Saraland City Schools Superintendent"
                city = "Saraland, Alabama"
                expertise = "Areas of Expertise"
                skill = "Education"
                img = {require('../assets/img/AaronMilner.jpg')}
                bio = "Publications"
                link1 = "https://www.al.com/live/2013/06/saraland_city_schools_hires_aa.html"
                lText1 = "Saraland City Schools hires Aaron Milner as superintendent"
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;