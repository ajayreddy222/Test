import React, { Fragment } from 'react';
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Section from '../components/Section';
import Slider from '../components/Slider/index';

import Divider from "../components/Divider/Divider";
import JustifiedTable from '../components/Table/JustifiedTable';

import ALSDE_img from '../assets/img/Teach/alsde.jpg';
import img1 from "../assets/img/Teach/1.jpg";
import img2 from "../assets/img/Teach/2.jpg";
import img3 from "../assets/img/Teach/3.jpg";

import "../assets/scss/components/_teach.scss"

const Teach = () => {
    return (
        <Fragment>
            <Header />
            <Slider json={[{
                id: 1,
                bg: "Teach/IMG_1231.JPG",
                title: "Teach With Us",
                text: "",
            }]}/>

            <div className='container'>

                <Divider />

                <h3>
                    “...I came to realize that, to make a better future for all, we must begin with educating the children who will take our places in society.”
                </h3>
                <p style={{textAlign: "center"}}>
                    — FORMER VICE CHANCELLOR OF TROY UNIVERSITY MONTGOMERY, RAY WHITE
                </p>

                <Divider/>

                <JustifiedTable 
                    width = {2}
                    jsx={[
                        {
                            jsx: <img src={ALSDE_img}/>,
                            flex: 0.75,
                        },
                        <>
                            <p> The Alabama-Korea Education and Economic Partnership (A-KEEP) is an approved sponsor of the J-1 Visa (and J-2 Visa for family members) valid for three (3) years to participate in the Foreign Educator Exchange Project (FEEP). A-KEEP designed FEEP to recruit, specifically, certified math and foreign teachers to teach this critical subject matter to students in middle and high schools in Montgomery, Alabama. A-KEEP currently has memorandums of understanding (MOUs) with the Alabama State Department of Education (ALSDE) and Pike Road School District. </p>
                            <button className='btn' style={{ float: "left" }}>
                                ALSDE MOU
                            </button>
                        </>
                ]}/>

                <p>
                    About the Foreign Educator Exchange Project (FEEP):
                </p>

                <h3 className='red-header'>
                    By partnering with local schools we provide foreign teachers with training, professional development and cultural immersion.
                </h3>

                <p> FEEP was developed to promote the interchange of U.S. and foreign educators and enhance mutual understanding between the people of the United States and other countries. Exchange educators sharpen their professional skills and participate in cross-cultural activities in schools and communities, and they return home after the exchange to share their experiences and increased knowledge of the United States and the U.S. educational system. Alabama offers a range of opportunities, especially if you enjoy HISTORY! This state is the heart of the Civil War and Civil Rights Movement. Alabama schools are greatly in need of qualified teachers credentialed in the critical subjects, especially math and the sciences.  </p>

                <h4> The Challenge </h4>

                <p> Despite the efforts of the state and its educators, there are not enough qualified STEM teachers in Alabama to meet the demands of schools in the state. Without a strong background in these subjects, we do our students an injustice by limiting their access to employment upon graduating due to low scores which in turn, restrains their contribution to their local economic prosperity and quality of life. </p>

                <h4> The Opportunity </h4>

                <p> Recruitment of qualified foreign educators with a focus on STEM education and foreign language grants these teachers a paid opportunity to share aspects of their culture and customs with their U.S. students and colleagues while increasing their understanding of American culture and society for an overall enriching and immersive experience. Furthermore, by implementing FEEP, A-KEEP gives domestic educators the opportunity to learn effective pedagogy used in other countries to ensure Alabama’s students’ educational needs are met and the students are better prepared for academic achievement, gainful employment and entrepreneurship. </p>

                <Divider/>

                <h1 style={{color: "black", textAlign: "center"}}>
                    Make Meaningful Impact
                </h1>

                <JustifiedTable 
                    jsx = {[
                        [
                            <> 
                                <img src={img1}/>
                            </>,
                            <>
                                <img src={img3}/>
                                
                            </>
                        ]
                    ]}
                />

                <Divider/>

                <h1 style={{color: "black", textAlign: 'center'}}>
                    Learn More
                </h1>

                <p> Send us a message to learn about available teaching positions and how to get started with A-KEEP’s FEEP initiative. </p>

                {/* TODO: PUT FORM HERE */}
                <h3 className='red-header' style={{fontSize: "60px"}}> PUT A FORM HERE </h3>

                <Divider />

            </div>

            <CallToAction />
            <Footer />
        </Fragment>
    )
};

export default Teach;