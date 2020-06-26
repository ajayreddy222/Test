import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import AboutSection from "../components/AboutSection";
import About from "../components/About/home-two";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const OurStory = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/page-header3.jpg')}
                title="OUR STORY"
                content1= "A-KEEP is a nonprofit organization established in 2011 by three forward-thinking leaders. Our founders envisioned profound learning experiences for students, professionals and families in Alabama."
                content2= "Today, we focus on creating programs that support  education, economic prosperity and diverse cultural experiences."
            />
            <About/>
            <AboutSection
                bgImg={require('../assets/img/our-team1.jpg')}
                btnText2= "OUR PEOPLE"
                btnLink2="our-people"
            />
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default OurStory;