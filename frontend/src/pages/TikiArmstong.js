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
                name = "Tiki Armstrong"
                desigination = "AmeriCorps VISTA Leader"
                city = "Montgomery, Alabama"
                contact = "Connect with Tiki"
                phoneNo = "334-625-8515 | Cell: 334-450-8046"
                email = "tiki.armstrong@akeep.org"
                expertise = "Areas of Expertise"
                skill = "Research, Technical and Grant Writing"
                img = {require('../assets/img/TikiArmstrong.jpg')}
                bio = "Biography"
                text2 = "Tiki has over two years experience as a VISTA (Volunteer In Service To America) and a reputation for being an advocate for proofreading. Tiki has an eye for great writing and that has given her a passion for writing grants. While she believes that her skills need further honing, she has used the AmeriCorps program to gain this experience.  A-KEEP is the third organization she has worked for as a grant writer and has gained experience in a variety of fundraising categories in over three different states."
                text3 = "Tiki graduated from California State Polytechnic University, Pomona with a bachelor’s degree in Liberal Arts with an emphasis in Education; attended the University of Redlands for an elementary education credential but since she started as an Engineering major as an undergrad, she was able to qualify to teach math to students through the 9th grade.  Her educational journey continues and she has received an honorary doctorate at the Sacramento School of Theology and a Human Resource Certification at University of California, Riverside."
                text4 = "Tiki is also a passionate mother of three, 2 ladies and a gentleman, and grandmother of one granddaughter who is 13 years old. And when she’s not helping bring resources to A-KEEP, she enjoys a good class of urban line dancing at the Montgomery County Library or crocheting her latest project in front of a TV series!"
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;