import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components/Staff";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const Content = () => {
    return (
        <Fragment>
            <Header/>
            <LeadershipTeam
                name = "Luv Junious"
                desigination = "AmeriCorps VISTA Creative Media Designer"
                city = "Montgomery, Alabama"
                contact = "Connect with Luv"
                phoneNo = "334-625-8515"
                email = "luv.junious@akeep.org"
                expertise = "Areas of Expertise"
                skill = "Media Content Creation and Adobe Creative Cloud"
                img = {require('../assets/img/LuvJunious.jpg')}
                bio = "Biography"
                text1 = "Toya Carter is a Creative Media Designer at A-KEEP."
                text2 = ""
                text3 = ""
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;