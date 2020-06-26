import React, { Fragment } from 'react';
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Section from "../components/Section/index2";
import Twocols from "../components/Sections/twocols";
import TwoThreecols from "../components/Sections/two_threecols";
import Youtube from "../components/Sections/youtubevideo";
import Inlineform from "../components/Sections/inlineform";
import ThreeCols from '../components/Sections/threecols';
import { Redirect } from 'react-router-dom';
import Instructors from '../components/Sections/instructor';


import { Link } from "react-router-dom";





const catchpage = () => {
    return (
        <div>
            <Header />

            {/* Title for catchpage */}
            <div className="col">
                <div className="Section-content">
                    <hr className="divider1" />

                    {/* Header type */}
                    <h1 className="bigtext">Catch the K-Wave</h1>
                    <h5 className="redline">Summer KSL Program</h5>

                </div>
            </div>

            {/* About contents */}
            <div className="container" >fdfdsfafasfasfdf
                {/* redl ine */}
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '50%' }}>
                        <div>
                            <h3 style={{ textAlign: 'left' }}>About</h3>
                            <p style={{ marginBottom: '65px' }}><b>STARTALK’s mission</b> is to increase the number of U.S. citizens learning, speaking, and teaching critical need foreign languages. STARTALK offers students and teachers of these languages creative and engaging summer experiences that strive to exemplify best practices in language education and in language teacher development.  </p>
                            <div style={{ textAlign: 'center' }}>
                                <button type="button" style={{ backgroundColor: 'red', padding: '20px' }}><a href="https://www.paypal.me/akeepstartalk" style={{ color: 'white' }} >PAY FOR CATCH THE K-WAVE CAMP</a></button> <br /> <br />
                                
                                
                                <br></br>

                                <h3 style={{ textAlign: 'left' }}>More resrouces</h3>
                                <Link to={'https://startalk.umd.edu/public/about'} className="btn-announce1" style={{padding: "20px"}}><u>About STARTALK</u></Link> 
                            <Link to={'https://www.nsa.gov/resources/students-educators/'} className="btn-announce1" style={{padding: "20px"}}><u>The NSA’s work</u></Link>  <br />
                                <Link to={'https://www.actfl.org/publications/guidelines-and-manuals/ncssfl-actfl-can-do-statements'} className="btn-announce1" style={{padding: "20px"}}><u>Can-Do Statements </u></Link> 
                            <Link to={'http://www.tellproject.org/framework/'} className="btn-announce1" style={{padding: "20px"}}><u>TELL Criteria</u></Link>


                            </div>
                        </div>



                    </div>
                    <div className="col2" style={{ width: '50%' }}>
                        <div>
                            <h3 style={{ textAlign: 'left' }}>Catch the K-Wave</h3>
                            <p><b>Program fees</b> Catch the K-Wave seeks to provide an intensive language and cultural learning experience to students through a standards-based and thematically organized curriculum. The 3-week summer program, is a non-residential, non-credit program open to rising 6th - 8th grade students. Students do not need nor are expected to have any prior knowledge in Korean language or culture, but should have a willingness to learn and explore!
                                    Ms. Meesoon Han, Executive Director of Alabama-Korea Education & Economic Partnership, leads the program with a team of educators experienced in Korean language and culture. By the end of fun-packed 105 instructional hours, our students will perform at novice-mid ACTFL language levels and will be able to greet and introduce themselves to Korean-native speakers using culturally appropriate register, titles, and gestures.school.</p>

                        </div>
                    </div>
                </div>



                {/*Deadline contents */}
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '100%' }}>
                        <div>
                            <h3>Deadline:</h3>
                            <p>Class room</p>
                            <p>The summer program will be facilitated by Korean language and culture instructors. These teachers will be professional instructors with Korean language and/or culture accreditation from South Korea. Instructors will also have additional training to learn to identify learning targets and checks for learning related to how participants will acquire, process, apply and reflect to meet the TELL Criteria addressed within the curriculum. </p>
                            <p>Students will undergo 105 Instructional hours of Korean language and cultural training. They will be able to track and assess their progress through NCSSFL-ACTFL Can-Do Statements, which are self-assessment checklists used by language learners to assess what they “can do” with language in the Interpersonal, Interpretive, and Representational modes of communication. By the end of the program, students will be able to:</p>
                            <p> - Greet a Korean friend and briefly identify myself in Korean using memorized phrases in culturally appropriate ways</p>
                            <p> - introduce</p>
                            <p> - Read a Korean map, the lyrics of a Korean song </p>
                            <p> - Recite a Korean children's song</p>
                            <p> - Name animals, colors, and traditional clothing in Korean</p>
                            <p> - and more!</p>

                            <p>Lunch and snacks<br></br></p>
                            <p>Lunch and snacks are provided daily each of the 15 days of the program. During these times students will be guided by Cultural Activity Instructors to prepare traditional Korean dishes and snacks, such as kimbap and rice cakes. When registering your child for the program, please be sure to include any food allergens your child may have on the notes/additional information sections of the registration.  <br></br></p>

                        </div>


                    </div>



                </div>

                {/* FAQ contents */}
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '100%' }}>
                        <div>
                            <h3>FAQs:</h3>
                            <p><b>What are the program dates?</b></p>
                            <p>The program will run from July 8 - July 26, 2019 every Monday - Friday for a total of 15 days.</p>

                        </div>


                    </div>

                </div>



                {/* Questions */}
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '100%' }}>
                        <div>
                            <p><b>Will transportation be provided?</b></p>
                            <p>No, transportation to the summer program venue at Pike Road Historic Middle School will not be provided this year. However, transportation for field trips during class times will be provided!</p>

                            <hr style={{ borderTop: '1px solid red' }} />



                            <p><b>Who is organizing this program?</b></p>
                            <p>This program is organized by the Alabama-Korea Education & Economic Partnership (A-KEEP). </p>
                            <p>A-KEEP is a 501(c)3 IRS certified non-profit organization, whose mission is providing multicultural, diverse education to students and professionals and bridging the differences for local educational and economic prosperity. Since 2011, we have worked with Alabama schools to provide global Youth Leadership programs to South Korea for high schoolers, Cultural Education Workshops, and annual Korean cultural music & arts performances. </p>



                            {/* Button for more information */}
                            <hr style={{ borderTop: '1px solid red' }} />


                            <div className="about-content">
                                <b>A-KEEP is not responsible for any scholarship applications made by parents or students or for any scholarship cancellations, and it does not fund scholarship rewards.  </b> </div>
                            <br></br>
                            <div className="col">
                                <Link to={`${process.env.PUBLIC_URL + 'CatchTheKWave'}`} className="btn-announce" style={{ textAlign: 'center' }} >more information<i className="fa fa-angle-double-right" /></Link>
                            </div>
                            <br></br>


                            <hr style={{ borderTop: '1px solid red' }} />

                            <div className="col">

                                <div className="Section-content" >
                                    <h1 className="bigtext"><i>“My daughter, had a blast at camp. The creativity of learning the Korean language was amazing. Jasmine learned her numbers, alphabet, greetings, colors, K-Pop and tons of other exciting phrases in just 3 weeks. STARTALK has definitely inspired my daughter more to become an interpreter. We look forward to the summer 2019.”</i></h1>

                                    <p style={{ textAlign: 'center' }}> — CHANDRA RICHARDSON, STARTALK PARENT</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                {/* All contents  */}
            </div>



            <hr style={{ borderTop: '1px solid red' }} />



{/* Picture for class */}
<div className="col">
    <div className="container" >
        <h3 style={{ textAlign: 'left' }}>Class Gallery</h3>
    </div>

    <div className="container">
        <div className="Main-content">
            {/* First four line pictures */}
            <div className="row align-items-center">
                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                        <img className="staff" src={require('../assets/img/catch-wave/1.JPG')} width="150" height="200" />
                    </figure>
                </div>
                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                    <img className="staff" src={require('../assets/img/catch-wave/2.jpg')} width="150" height="200" />
                    </figure>
                </div>
                
                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                    <img className="staff" src={require('../assets/img/catch-wave/3.JPG')} width="150" height="200" />
                    </figure>
                </div>

                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                    <img className="staff" src={require('../assets/img/catch-wave/4.JPG')} width="150" height="200" />
                    </figure>
                </div >
                
                
                
            {/* second four pictures  */}
            <div className="row align-items-center">
                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                        <img className="staff" src={require('../assets/img/catch-wave/5.JPG')} width="150" height="200" />
                    </figure>
                </div>
                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                        <img className="staff" src={require('../assets/img/catch-wave/6.JPG')} width="150" height="200" />
                    </figure>
                </div>
                
                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                         <img className="staff" src={require('../assets/img/catch-wave/7.JPG')} width="150" height="200" />
                    </figure>
                </div>

                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                        <img className="staff" src={require('../assets/img/catch-wave/8.JPG')} width="150" height="200" />
                    </figure>
                </div >


            </div>



                   
            {/* thrid four pictures  */}
            <div className="row align-items-center">
                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                        <img className="staff" src={require('../assets/img/catch-wave/9.JPG')} width="150" height="200" />
                    </figure>
                </div>
                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                        <img className="staff" src={require('../assets/img/catch-wave/10.JPG')} width="150" height="200" />
                    </figure>
                </div>
                
                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                         <img className="staff" src={require('../assets/img/catch-wave/11.JPG')} width="150" height="200" />
                    </figure>
                </div>

                <div className="col col-3 lg-3">
                    <figure className="about-thumb">
                        <img className="staff" src={require('../assets/img/catch-wave/12.JPG')} width="150" height="200" />
                    </figure>
                </div >


            </div>

            

            
            </div>
        </div>
        </div>
    </div>
















            {/*Common point */}
            <CallToAction />
            <Footer />
        </div>
    );
};

export default catchpage;