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
                name = "Giryong “Keith” Park"
                desigination = "R&D Associate"
                city = "Montgomery, Alabama"
                contact = "Connect with Giryong"
                phoneNo = "334-625-8515 | Cell: 334-322-1661"
                email = "giryong.park@akeep.org"
                expertise = "Areas of Expertise"
                skill = ""
                img = {require('../assets/img/Giryong.jpg')}
                bio = "Biography"
                text1 = "Giryong Park is the R & D Associate at A-KEEP."
                text2 = "Giryong “Keith” Park is a R & D Associate of AKEEP. He served in South Korean military as a military car teaching assistant. He studied in Konkuk University as an interdisciplinary study major and served as a member of student council for two years and transferred to Troy University as a psychology major."
                text3 = "He participated in Alabama-Koreans’ Language Access needs in K-12 education especially for people with Developmental Disabilities and their families."
                text4 = "He has assisted and researched the development and the content of Korean Social Studies Course for the Alabama State Department of Education, an Online Course via ACCESS (Alabama Connecting Classrooms and Educators Statewide System)"
                text5 = "He has an interest in helping Korean people immerse in US culture and vice versa."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;