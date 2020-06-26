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





const community = () => {
    return (
        <div>
            <Header />

            {/* Title for catchpage */}
            <div className="col">
                <div className="Section-content">
                    <hr className="divider1" />

                    {/* Header type */}
                    <h1 className="bigtext">Community KSL Class</h1>

                </div>
            </div>

            {/* About contents and program*/}
            <div className="container" >
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' , marginTop : '10'}}>
                    <div className="col1" style={{ width: '50%' }}>
                        <div>
                            <h3 style={{ textAlign: 'left' }}>About</h3>
                            <p style={{ marginBottom: '65px' }}>A-KEEP’s Community KSL (Korean as a Second Language) Class is the perfect course for non-Korean speakers and beginner Korean speakers to build a solid foundation of the Korean language in order to continue your learning journey after class. Our course is led by native-Korean Teaching Assistants and advanced-Korean learners to help ensure that you receive authentic education. </p>
                            {/* <div style={{ textAlign: 'center' }}>
                                <button type="button" style={{ backgroundColor: 'Red', padding: '20px', color: 'white' }}><a href="https://www.paypal.me/akeepstartalk">PAY FOR CATCH THE K-WAVE CAMP</a></button> <br /> <br />
                            </div> */}
                            <p>A-KEEP’s Community KSL courses are designed to focus on building fundamental skills to help you:</p>
                            <p>Identify and differentiate the Korean language from other East Asian languages</p>
                            <p>- Read, write, and pronounce the Korean alphabet</p>
                            <p>- Practice customary greetings and introductory phrases<p />                          </p>
                            <p>- Use “formulaic” Korean grammar structures to build vocabulary and grammar skills <p />                          </p>
                            <p>- The class will introduce teens and adults to Korean language and culture once a week for 12 weeks (10 weeks of instruction) including an orientation and graduation ceremony.</p>
                        </div>
                    </div>
                    <div className="col2" style={{ width: '50%' }}>
                        <div>
                            <br></br>
                            <h3 style={{ textAlign: 'left' }}>Program Info & Fee</h3>
                            <p><b>6:00 - 7:30 pm | Tuesday</b></p>
                            <p>Session IV (2020): 12 weeks, 10 Instructional Days </p>
                            <p><b>March 10 - May 26,2020</b></p>
                            <p>Fee: $200 for the full 12 weeks</p>


                        </div>
                    </div>



                </div>



                {/*Class Levels Information contents */}
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '100%' }}>
                        <div>
                            <h3>Deadline:</h3>
                            <p>A-KEEP’s Community KSL has three language/class levels: Introductory, Beginner I and Beginner II.</p>
                            <p>The Introductory Level Class has no requirements for entry. This class is best suited for those with no to very little knowledge or skills speaking Korean.</p>
                            <p>In order to apply for the Beginner I Class, please read and make sure you meet each of the Beginner I Level Class Requirements:</p>
                            <p> - Have a firm grasp on the Korean alphabet

</p>
                            <p> - Be able to read Korean out loud (we are not asking for perfect pronunciation, but the ability to sound out a sentence as written)

</p>
                            <p> - Familiar with Korean number systems (sino and native/pure numbers)

</p>
                            <p> - Familiar with basic introductions in Korean.

</p>
                            <p> In order to apply for the Beginner II Class, please read and make sure you meet each of the Beginner II Level Class Requirements:

</p>
                            <p> - Meet Beginner I Class Requirements

</p>
                            <p> - Ability to comprehend greetings and common Korean phrases spoken



</p>
                            <p>- Ability to answer questions presented in Korean (we are not asking for a perfect sentence in Korean but an understanding of the question and ability to answer it in a word or phrase)</p>

                        </div>

                    </div>



                </div>

                {/* Payment information */}
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '100%' }}>
                        <div>
                            <h3>Payment Breakdown:</h3>
                            <p><b>The Community KSL Course is $200 per student. This price includes a $20 non-refundable administration fee, a portion of the cost of class materials, online tutoring and materials, an exciting Korean immersion activity, and graduation materials.</b></p>
                            <p>Class payments are due March 17, 2020 the week after class orientation. There is no cost to attend orientation.</p>
                            <p>First Quarter Payment <br></br>
                                March 17, 2019..........................................................................$100.00</p>
                            <p>Second Quarter Payment  <br></br>
April 21, 2020..........................................................................$100.00</p>
                            <p>*Students may opt to pay in full on the first class day.

</p>
                        </div>


                    </div>

                </div>



                {/* Refund contents */}
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '100%' }}>
                        <div>
                            <h3>Refund Policy:</h3>
                            <p>Class payments can be refunded <b>2 - 6 weeks</b> after formally withdrawing from the course via a written notice at $15 per remaining unattended class (es).
                            <br></br>The $20 administrative/overhead fee included in the class costs in non-refundable. Please contact accounting@akeep.org for refund instructions.</p>

                            {/* Sign up your class */}
                            <div style={{ textAlign: 'center' }}>
                                <button type="button" style={{ backgroundColor: 'Red', padding: '20px', color: 'white' }}><a href="https://form.jotform.com/200375687226156" target="_blank" />Sign Up Class</button>
                            </div>
                            <br></br>


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
                                                    <img className="staff" src={require('../assets/img/classpicture/1.JPG')} width="150" height="200" />
                                                </figure>
                                            </div>
                                            <div className="col col-3 lg-3">
                                                <figure className="about-thumb">
                                                    <img className="staff" src={require('../assets/img/classpicture/2.JPG')} width="150" height="200" />
                                                </figure>
                                            </div>
                                            
                                            <div className="col col-3 lg-3">
                                                <figure className="about-thumb">
                                                     <img className="staff" src={require('../assets/img/classpicture/3.JPG')} width="150" height="200" />
                                                </figure>
                                            </div>

                                            <div className="col col-3 lg-3">
                                                <figure className="about-thumb">
                                                    <img className="staff" src={require('../assets/img/classpicture/4.JPG')} width="150" height="200" />
                                                </figure>
                                            </div >
                                            
                                            
                                            
                                        {/* second four pictures  */}
                                        <div className="row align-items-center">
                                            <div className="col col-3 lg-3">
                                                <figure className="about-thumb">
                                                    <img className="staff" src={require('../assets/img/classpicture/5.jpg')} width="150" height="200" />
                                                </figure>
                                            </div>
                                            <div className="col col-3 lg-3">
                                                <figure className="about-thumb">
                                                    <img className="staff" src={require('../assets/img/classpicture/6.jpg')} width="150" height="200" />
                                                </figure>
                                            </div>
                                            
                                            <div className="col col-3 lg-3">
                                                <figure className="about-thumb">
                                                     <img className="staff" src={require('../assets/img/classpicture/7.jpg')} width="150" height="200" />
                                                </figure>
                                            </div>

                                            <div className="col col-3 lg-3">
                                                <figure className="about-thumb">
                                                    <img className="staff" src={require('../assets/img/classpicture/8.jpg')} width="150" height="200" />
                                                </figure>
                                            </div >


                                        </div>

                                        
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                </div>

                                <hr style={{ borderTop: '1px solid red' }} />

                                <div className="col">

                                    <div className="Section-content" >
                                        <h1 className="bigtext"><i>“I have never thought I can speak Korean. The instructors of A-KEEP KSL class have helped me to develop my knowledge and understanding in Korean language and culture and motivate me to advance my learning. I really enjoyed the program and surely love my instructors and learning peers..”</i></h1>

                                        <p style={{ textAlign: 'center' }}> — SPRING 2018 COMMUNITY KSL GRADUATE</p>
                                    </div>

                                </div>



                            </div>


                        </div>

                        {/* Program Details contents and program*/}
                        <div className="container" >
                            <hr style={{ borderTop: '1px solid red' }} />
                            <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                                <div className="col1" style={{ width: '50%' }}>
                                    <div>
                                        <h3 style={{ textAlign: 'left' }}>Program Details</h3>

                                        <p>Contact</p>
                                        <p>Brittany Payne</p>
                                        <p>Phone: 334-625-8515</p>
                                        <p>Email: brittany.payne@akeep.org</p>
                                    </div>
                                </div>
                                <div className="col2" style={{ width: '50%' }}>
                                    <div>
                                        <br></br>
                                        <h3 style={{ textAlign: 'left' }}>Location</h3>
                                        <p><b>South University</b></p>
                                        <p>5355 Vaughn Road, Montgomery AL 36116 </p>
                                        <p><b> Eligibility : Teens and adults</b></p>

                                    </div>
                                </div>

                            </div>

                        </div>
                        {/* All contents  */}
                    </div>





                    {/* Instructors Picture */}
                    <div className="col">
                        <div className="container" >
                            <h3 style={{ textAlign: 'left' }}>Meet the Instructors</h3>
                        </div>

                        <div className="container">
                            <div className="Main-content">
                                <div className="row align-items-center">
                                    <div className="col col-3 lg-3">
                                        <figure className="about-thumb">
                                            <br></br>
                                            <img className="staff" src={require('../assets/img/community/britiny.png')} width="150" height="200" />
                                            <p className="title staff-title">Brittany Payne, Program Coordinator</p>
                                        </figure>
                                    </div>
                                    <div className="col col-3 lg-3">
                                        <figure className="about-thumb">
                                            <img className="staff" src={require('../assets/img/community/kim.jpg')} width="150" height="200" />
                                            <p className="title staff-title">Mr. Kim, Class Instructor</p>
                                        </figure>
                                    </div>
                                    <div className="col col-3 lg-3">
                                        <figure className="about-thumb">
                                            <img className="staff" src={require('../assets/img/community/son.JPG')} width="150" height="200" />
                                            <p className="title staff-title">Mrs. Son, Class Instructor</p>
                                        </figure>
                                    </div>
                                    <div className="col col-3 lg-3">
                                        <figure className="about-thumb">
                                            <img className="staff" src={require('../assets/img/community/lee.JPG')} width="150" height="200" />
                                            <p className="title staff-title">Mr. Lee, Online Instructort</p>
                                        </figure>
                                    </div >
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

export default community;