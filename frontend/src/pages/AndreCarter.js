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
                name = "Andre Carter"
                desigination = "AmeriCorps VISTA Grant Writer"
                city = "Montgomery, Alabama"
                contact = "Connect with Andre"
                phoneNo = "334-625-8515"
                email = "andre.carter@akeep.org"
                expertise = "Areas of Expertise"
                skill = "Community Develop, Quantitative Research, and Grant Writing"
                img = {require('../assets/img/AndreCarter.jpg')}
                bio = "Biography"
                text1 = "Andre Carter is the Grant Writer at A-KEEP."
                text2 = "Andre Carter is a veteran of the U.S. Navy, and after his Honorable discharge, graduated from Faulkner University in 2017, with a bachelor's in Political Science. While in undergrad, he interned for the city of Montgomery and gained a passion for community and economic development."
                text3 = "The passion for social, human, and economic capital building caused him to pursue and acquire a master's degree in Agricultural and Resource Economics from Tuskegee University. He sharpened his skills in community, rural, and economic development and is now honing his skills at AKEEP."
                text4 = "Andre enjoys many physical activities like paint balling, running, and swimming. He also enjoys learning about Korean culture and understanding its uniqueness."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;