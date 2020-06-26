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
                name = "Junhyup “Joon” Lee"
                desigination = "R&D Associate"
                city = "Montgomery, Alabama"
                contact = "Connect with Joon"
                phoneNo = "334-625-8515"
                email = "joon.lee@akeep.org"
                expertise = "Areas of Expertise"
                skill = "Quantitative Research, Korean Language Instruction"
                img = {require('../assets/img/Junhyup.jpg')}
                bio = "Biography"
                text1 = "Junhyup Lee is a R&D Associate and Assistant Instructor at A-KEEP."
                text2 = "Junhyup, who also goes by Joon, graduated from the University of Kansas with a Bachelor of Science in Chemical Engineering. Before A-KEEP, Joon worked in the automotive industry. While he was working at his previous job, Joon came to be associated with AKEEP as a volunteer online instructor for AKEEP's KSL class. Thereafter, he decided to dedicate himself to AKEEP's mission as he believes in the importance of bridging the gap. When Joon isn't on his mission, you can find him volunteering at the Community KSL class, watching movies, and swimming."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;