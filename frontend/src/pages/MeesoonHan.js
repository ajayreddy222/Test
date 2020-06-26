import React, {Fragment} from 'react';
import Header from '../components/Header'
import LeadershipTeam from "../components/Leadership";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";

const Content = () => {
    return (
        <Fragment>
            <Header/>
            <LeadershipTeam
                name = "Meesoon Han"
                desigination = "Executive Director of A-KEEP"
                city = "Montgomery, Alabama"
                expertise = "Area of Expertise"
                skill = "Education, Language Access"
                img = {require('../assets/img/MeesoonProfilePhoto.jpg')}
                bio = "Biography"
                text1 = "Through diligent effort, Meesoon Han has seen AKEEP develop from an MOU between the Alabama Department of Education and the Education Department of Gyeongbuk Province of South Korea into the nonprofit it is today. This transformation would not have been possible without support from co-founders Dr. Thomas Bice and the Honorable Gerald Dial. AKEEP gained nonprofit status in 2012 with Han acting as Executive Director since its inception."
                text2 = "Born in Seoul, South Korea Han dedicated her formative years to education and attended Hanyang University, known as a leader in private engineering research, before  journeying to the United States where she finished her education at the University of Illinois Urbana-Champaign in computer sciences. Han established herself as a prominent member of communities in Illinois, Kentucky, and Alabama before calling Alabama her permanent home."
                text3 = "With 17 years of experience as an educator and 30 years’ experience as an educational program director, multicultural diversity educator, workforce trainer and translator, Han recognized a unique need for bridging communities in Alabama for educational and economic prosperity leading to the establishment of the Alabama-Korea Education and Economic Partnership. Frequently sought after for multi-cultural consultation, Han is one of the few qualified multicultural diversity educators training local Alabamians and corporate leaders in understanding and overcoming cultural differences and sensitivities."
            /> 
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
        </Fragment>
    );
};

export default Content;