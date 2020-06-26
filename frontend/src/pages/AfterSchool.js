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
import Instructors from  '../components/Sections/instructor';



import data from "../data/Section/index2.json";
import data2 from '../data/Section/twocols.json';
import data3 from '../data/Section/twothreecols.json';
import data4 from '../data/AfterSchool/Instructors.json';

import style from '../assets/scss/components/_afterschool.scss';




const PageBlog = () => {
    return (
        <div>
            <Header />
            <Section json={data} />
            <div className="container" >
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '50%' }}>
                        <div>
                            <h3 style={{ textAlign: 'left' }}>About</h3>
                            <p style={{ marginBottom: '65px' }}>A-KEEP is now offering dynamic after-school programs at select schools during the regular school year. Classes introduce elementary to high school students to the Korean language, history, and culture. <br /> <br /> Each class is one hour, exact times vary per school. </p>
                            <div style={{ textAlign: 'center' }}>
                                <button type="button" style={{ backgroundColor: 'Red', padding: '20px', color: 'white' }}><a href="https://www.jotform.com/form/92584487059169" style={{ color: 'white'}}>APPLY ONLINE</a></button> <br /> <br />
                                <button type="button" style={{ backgroundColor: 'Red', padding: '20px', color: 'white' }}><a href="https://www.jotform.com/form/92584487059169" target="_blank" />AFTER SCHOOL APPLICATION (PDF)</button>
                            </div>
                        </div>
                    </div>
                    <div className="col2" style={{ width: '50%' }}>
                        <div>
                            <h3 style={{ textAlign: 'left' }}>Program Information</h3>
                            <p><b>Program fees</b> vary per school. Please contact A-KEEP for further information on program fees for your school.</p>
                            <h3 style={{ textAlign: 'left' }}>Class Schedules:</h3>
                            <p>Valiant Academy Middle School - Mondays<br />LEAD Academy - Tuesdays<br />Valiant Academy High School = Tuesdays<br />Pike Road Elementary - Wednesdays</p>
                            <h3 style={{ textAlign: 'left' }}>Session Information</h3>
                            <p>Session 1: September 9- November 13<br />Session 2: January 13th – April 15th</p>
                        </div>
                    </div>
                </div>
            </div>


            <TwoThreecols className={style} json={data3} />
            <Twocols json={data2} />
            <Youtube />
            <Inlineform />
            <Instructors json={data4} />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default PageBlog;