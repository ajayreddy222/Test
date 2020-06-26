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
                name = "Nethra Param"
                desigination = "AmeriCorps VISTA Event Coordinator"
                city = "Montgomery, Alabama"
                contact = "Connect with Nethra"
                phoneNo = "334-625-8515"
                email = "nethra.param@akeep.org"
                expertise = "Areas of Expertise"
                skill = "Event Coordination"
                img = {require('../assets/img/Nethra.jpg')}
                bio = "Biography"
                text1 = "Nethra Param is the Event Coordinator at A-KEEP."
                text2 = "Nethra completed her Master's in Communication and Journalism from Bangalore University, India. Before Joining A-KEEP, she was Sr. Technical Resource Specialist at Swell Soft, LLC. Nethra grew up in Bangalore, a southern part of India with a strong background of southern [Indian] culture while cultivating 6 different languages to speak. After marrying, she migrated to the United States with her husband in 2005."
                text3 = "Nethra’s role at A-KEEP is to head the public relations and marketing team, where she is responsible to promote events of the organization through media. Outside of the office, she is committed to volunteering in the Hindu Society of Alabama as a Cultural Committee to organize the Society Events. In her free time, Nethra enjoys cooking and gardening."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;