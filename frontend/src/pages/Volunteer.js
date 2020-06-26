import React,{Fragment, Button} from 'react';
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Slider from '../components/Slider/index';
import JustifiedTable from "../components/Table/JustifiedTable";
import Divider from "../components/Divider/Divider";
import {Link} from "react-router-dom";

import sliderJSON from "../data/Volunteer/volunteer_slider.json";
import g0 from "../assets/img/Volunteer/g0.jpg";
import g1 from "../assets/img/Volunteer/g1.jpg";
import g2 from "../assets/img/Volunteer/g2.jpg";

const Volunteer = () => {
    return (
        <Fragment>
            <Header/>
            <Slider json={sliderJSON}/>

            <div className='container'>
                <Divider/>

                <h1 style={{color: "#131516", textAlign: "center"}}>
                    Make a Difference in Your Community!
                </h1>

                <p>
                There are a lot of reasons to join the team at A-KEEP. We thrive on providing critical knowledge and services to our community and work with sharp, hardworking, self-motivated people who are as invested in the process as the outcome. 
                </p>

                <JustifiedTable 
                    width = {3}
                    jsx = {[
                        <>
                            <img src={g0}/>
                            <p> CHALLENGE YOURSELF </p>
                        </>,
                        <>
                            <img src={g1}/>
                            <p> LEARN NEW SKILLS </p>
                        </>,
                        <>
                            <img src={g2}/>
                            <p> NETWORK </p>
                        </>
                    ]}
                />

                <Divider divClass='container-inner-md'/>

                <div style={{
                    objectPosition: 'center',
                    objectFit: 'cover'
                }}>
                    <Slider
                        json={[{
                            id: 1,
                            bg: "Volunteer/lower.jpg",
                            title: "Volunteer Roles",
                            text: ""
                        }]}
                        
                    />
                </div>
                
                <Divider divClass='container-inner-md'/>


                <ApplyButton text='APPLY TODAY'/>
                <p><strong> Public Relations Assistant </strong></p>
                <p> What we're looking for: </p>
                <p> Are you a social butterfly and fearless extrovert wanting to make deep connections in the River Region and beyond? If so, we want you! Whether you’re experienced in outreach coordination or just recent grad, you can make a difference in the breadth of A-KEEP’s impact in this role by representing A-KEEP at community events, schools & educational outlets, conducting research, and developing organizational relationships to further A-KEEP’s mission, services, and programs. Multilingual skills are not required, but are highly preferred in order to bridge the language gaps in our community.</p>


                <Divider/>

                <ApplyButton text='APPLY TODAY'/>
                <p><strong> Create Media Assistant </strong></p>
                <p> What we're looking for: </p>
                <p> A savant of the socialspere, you don’t just build profiles, you cultivate relationships. We’re looking for someone like you to engage our audiences through creative story-telling, digital community management and responsive analysis. With A-KEEP you positively influence our communities one post at a time. </p>

                <Divider/>

                <ApplyButton text='APPLY TODAY'/>
                <p><strong> Korean Language Instructor </strong></p>
                <p> What we’re looking for: </p>
                <p> We’re seeking energetic and bilingual instructors to teach Korean to students at various levels of proficiency in the Montgomery area. Our Korean as a Second Language programs connect learners of all ages to the Korean language, culture and history so that they can interact with their neighbors, get in touch with their roots or advance their professional aspirations. As an educator, you have the intrinsic ability to teach with both patience and passion and are excited for this unique opportunity to build a bridge in the community.  </p>


                <Divider/>
            </div>

            <CallToAction/>
            <Footer/>
        </Fragment>
    )
};

const ApplyButton = ({linkTo, text}) => {
    return (
        <Link to={linkTo}>
            <button className='btn-green' style={{float: 'right'}}>
                {text}
            </button>
        </Link>
    );
}

export default Volunteer;