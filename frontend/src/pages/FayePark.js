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
                name = "Hyunok “Faye” Park"
                desigination = "Curriculum Development Volunteer"
                city = "Montgomery, Alabama"
                contact = "Connect with Faye"
                phoneNo = "334-625-8515"
                email = "hyunok.park@akeep.org"
                expertise = "Areas of Expertise"
                skill = "Curriculum Development, Korean Language Instruction, International Relations"
                img = {require('../assets/img/FayePark.jpg')}
                bio = "Biography"
                text1 = "Hyunok “Faye” Park is the Curriculum Development Assistant at A-KEEP."
                text2 = "Before settling down at A-KEEP, Faye worked for the Korean government in the social welfare. Additionally, Faye built various experiences as working at the LG Science Hall and Doosan Heavy Industries and Construction in South Korea. She also volunteered at orphanages in Korea because she loved children and was fascinated by the social welfare field."
                text3 = "Faye graduated from Changwon National University with a degree in International Relations and gained her social work certification. She has a great experience about going abroad. She’s been to China, the Philippines, Japan, Vietnam and Germany. Faye usually spends her free time walking with her lovely puppy or going on trips with her husband."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;