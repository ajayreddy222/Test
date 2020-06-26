import React, { Fragment } from 'react';
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";


const OnlineKSL = () => {
    return (
        <div>
            <Header />

            {/* Title for catchpage */}
            <div className="col">
                <div className="Section-content">
                    <hr className="divider1" />

                    {/* Header type */}
                    <h1 className="bigtext">Alabama Access Course</h1>
                    <h5 className="redline">Working in Multicultural Environments: Korean</h5>

                </div>
            </div>

            <div className="container" >
       
                {/* About contents */}
                <hr style={{ borderTop: '1px solid red' }} />
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '100%' }}>
                        <div>
                            <h3>About</h3>
                            <p>This is an ACCESS Virtual Learning Course that will encourage appreciation of the similarities and differences between South Korea, Alabama, and the United States through an exploration of their geography, demography, culture, history, language, and workplace expectations. Students will identify the benefits and potential difficulties of working in diverse multicultural environments, develop interpersonal skills for multilingual Korean workplaces, and apply inferred knowledge to workplace scenarios.  </p>
                            </div>

                    </div>

                </div>

                            {/* Picture for future */}
                            {/* ************************************************************
                            ************************************************************
                            ************************************************************
                            ************************************************************
                            ************************************************************ */}

     


                        <div className="col">

                        <div style={{ textAlign: 'center' }}>
                                <button type="button" style={{ backgroundColor: 'Green', padding: '20px', color: 'white' }}><a href="https://accessdl.state.al.us/" style={{ color: 'white' }}>Learn More</a></button> <br /> <br />
                            </div>
                      
                        </div>


                        <hr style={{ borderTop: '1px solid red' }} />


                {/*Program Details context */}

                        <div className="container" >
                <div className="row" style={{ display: 'flex', flexFlow: 'row' }}>
                    <div className="col1" style={{ width: '50%' }}>
                        <div>
                            <h3 style={{ textAlign: 'left' }}>Program Details</h3>
                       
                            <p>Eligibility</p>
                            <p>ACCESS students must be enrolled in an Alabama public school in Grades 9-12 at the time of their ACCESS enrollment.</p>
                            <p>Students do not need nor are expected to have any prior knowledge in Korean language or culture, but should have a willingness to learn and explore!  </p>
                        </div>
                    </div>
                    <div className="col2" style={{ width: '50%' }}>
                        <div>
                           <br></br>
                            <h3 style={{ textAlign: 'left' }}>Location</h3>
                            <p>This is a virtual learning course that requires access to a computer with a reliable Internet connection.</p>
                            <p><b>Contact</b></p>                     
                            <p>Contact your school counselor to become enrolled in the ACCESS course.</p>

                        </div>
                    </div>
                           
                                   </div>
                               </div>
                     

        <hr style={{ borderTop: '1px solid red' }} />


                    <div className = "container">

                             <p>Meet the instructor </p>
                    </div>
                  
             </div>
         
            

            {/* Picture  */}
             <div className = "container">
             <img src={require('../assets/img/Han.jpg')} width="315" height="180" ma/>
             <figcaption>Meesoon Han, ACCESS Course Instructor</figcaption>
            </div>


            





            {/*Common point */}
            <CallToAction />
            <Footer />
        </div>
    );
};

export default OnlineKSL;






































