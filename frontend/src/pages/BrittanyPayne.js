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
                name = "Brittany Payne"
                desigination = "AmeriCorps VISTA Outreach Coordinator and Achivist"
                city = "Montgomery, Alabama"
                contact = "Connect with Brittany"
                phoneNo = "334-625-8515"
                email = "brittany.payne@akeep.org"
                expertise = "Areas of Expertise"
                skill = ""
                img = {require('../assets/img/BrittanyPayne.jpg')}
                bio = "Biography"
                text1 = "Brittany Payne is the Community Outreach Coordinator and Archivist at A-KEEP."
                text2 = "She graduated from Faulkner University with a Bachelor of Science in History and from Tel Aviv University with a Masters in Archaeology and Ancient Near Eastern Culture. Before A-KEEP, Brittany was following her dreams of traveling and enjoyed her time in Israel while receiving her degree. Many years of experience in customer service, administrative positions, and tutoring have prepared her for this position."
                text3 = "When Brittany isn't out and about reaching people for our mission, you can find her spending too much money on her 13 year old niece, making coffee at Starbucks, learning Korean at the Community KSL class, or hanging out with friends."
                text4 = "Brittany is passionate about history and culture and is looking forward to using her background to help bridge the gap."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;