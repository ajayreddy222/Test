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
                name = "Christa Springs"
                desigination = "AmeriCorps VISTA Creative Media Specialist"
                city = "Montgomery, Alabama"
                contact = "Connect with Christa"
                phoneNo = "334-625-8515 | Cell: 334-413-3401"
                email = "christa.springs@akeep.org"
                expertise = "Areas of Expertise"
                skill = "Social Media Management, Cultural Journal Writing, Video producing & editing, Photography Community Program Coordination, Media Content Creation, Adobe Creative Cloud Apps"
                img = {require('../assets/img/ChristaSprings.jpg')}
                bio = "Biography"
                text1 = "Christa Springs is the Creative Media Specialist at A-KEEP."
                text2 = "In 2018, Christa participated as a Sports Presentation Volunteer for the 2018 Winter Olympics in Pyeongchang, South Korea. It was an awesome experience which let her visit South Korea for the first time and meet great people from almost every country in the world, while also getting a taste of producing media content on, literally, a world stage. She was honored to film the volunteer appreciation video for the Gangneung sport hockey center and celebrate the hard work of the Olympic Volunteers."
                text3 = "After returning to Alabama, Christa began her work as an AmeriCorps VISTA (Volunteers in Service to America) member. She still performs her service as a VISTA with A-KEEP, but has undertaken new roles in Online Media, coordinating the Community KSL class, Program Assessment, and, currently, Creative Media management."
                text4 = "A-KEEP had never had a creative media division before I came on board, so there was a lot of groundwork to be made in terms of putting this department together. I believe in order to make this division effective, you have to interact and continue learning about your community so you can offer relevant, and quality materials."
                text5 = "Christa is a passionate creativist, using art, photography, and film to create public resources promoting multicultural education to our diverse communities. If she is not in the office, you can usually find Christa out with friends at local community events or eating Jae-yook-bo-kkeum “재육볶음” in the nearest restaurant."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;