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
                name = "Toya Carter"
                desigination = "AmeriCorps VISTA Creative Media Designer"
                city = "Montgomery, Alabama"
                contact = "Connect with Toya"
                phoneNo = "334-625-8515 | Cell: 334-354-7223"
                email = "toya.carter@akeep.org"
                expertise = "Areas of Expertise"
                skill = "Media Content Creation and Adobe Creative Cloud"
                img = {require('../assets/img/ToyaCarter.jpg')}
                bio = "Biography"
                text1 = "Toya Carter is a Creative Media Designer at A-KEEP."
                text2 = "Toya graduated from Alabama State University (ASU) with a bachelor’s degree in Graphic Arts. During her time at ASU, she completed an internship with A-KEEP as a Graphic Artist. Before returning to A-KEEP, Toya gained experience in various positions working as a Veteran Affairs Secretary, Merchandise Cast Member, Art Gallery Assistant, Graphic Designer and has served as a Peace Corps Volunteer."
                text3 = "Toya has produced graphic works for Shelton State Community College, as well as, copy-edited and designed layouts for a biannual volunteer led magazine in Peace Corps Dominican Republic. In her personal time, Toya enjoys dancing, reading comic books and spending time with family and friends."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;