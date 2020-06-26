import React, {Fragment} from 'react';
import Header from '../components/Header'
import About from '../components/About/home-one'
import HomePageHeader from "../components/PageHeader/Home";
// import Features from '../components/Features'
// import Services from '../components/Services'
// import Team from "../components/Team/home-one";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
// import Testimonials from "../components/Testimonials/home-one";
import Newsletter from "../components/Newsletter";
import Announcement from "../components/Announcement";
// import InstagramG from '../components/InstagramGallery';
import Twitter from '../components/Twitter';


const HomeOne = () => {
    return (
        <Fragment>
            <Header/>
            <HomePageHeader/>
            <About/>
            <Announcement/>
            <Newsletter/> 
            <Twitter/>        
            <CallToAction/>
            <Footer/>
        </Fragment>
    );
};

export default HomeOne;