import React, { Fragment } from 'react';


import Header from '../components/Header'
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Announcement from "../components/Announcement";
import PageHeader from "../components/PageHeader";
import TWitter from "../components/Twitter";
import TextFormat from "../components/Textformat";


const Press = () => {


    return (

        <Fragment>

            <Header />

           
        <div className = "col">
        <div className="col text-center">
        <div className = "title_point">Press Room </div>
          </div>
        </div>

            {/* Screen split left and right */}
            <div className="col">

                {/* Left screenbox */}
                <div className="box1">
                    <TextFormat
                        subtitle="Media Contact"
                        contents="To upload soon ~~~~"
                    />

                </div>


                {/* Right screenbox */}
                <div className="box2">

                    <TextFormat
                        subtitle="Website contact"
                        contents='Christa Springs, Creative Media Specialis'
                        contents1='E-mail: Christa.Springs@akeep.org'
                        contents2='Phone: (334) 625-8515'
                    />

                </div>
            </div>



            <hr className="divider" />

            <TextFormat
                subtitle="Press Releases"
            />



            {/*Referenced 3 picture collum  */}
            <div className="about-area-wrapper sm-top">
                <div className="container">
                    <div className="col">
                        <div></div>

                        <div className="imgrow1" >
                            {/* Start : firstpicture */}
                            <div className="col1">
                                <div className="caption_small"> May 22, 2019 </div>
                                <div className="caption_word">A-KEEP Welcomes New AmeriCorps Members</div>
                            </div>
                            {/* End :firstpicture */}


                            <div className="col1">
                                <img src={require('../assets/img/pressroom/catch.png')} width="315" height="180" />
                                <div className="caption_small">Apr 22, 2019 </div>
                                <div className="caption_word">AKEEP Partners with Pike Road Schools for Immersive Korean-Language Summer Camp</div>                            </div>


                            <div className="col1">
                            <img src={require('../assets/img/pressroom/Cinde.jpg')} width="315" height="180"/>
                                <div className="caption_small"> Feb 1, 2019</div>
                                <div className="caption_word">Korean Musical Ensemble Makes U.S. Debut in Opelika</div>                            </div>

                        </div>
                    </div>
                    {/* End : Referenced 3 picture collum */}
{/* **********************************************************************************************
**********************************************************************************************
**********************************************************************************************
********************************************************************************************** */}

                    <hr className="divider" />
                    {/* ---------------------------------------------------------------------------- */}



                    <TextFormat
                        subtitle="Media Coverage" />

                    <div className="about-area-wrapper sm-top">
                        <div className="container">

                            <div className="col">
                                {/* Image row line */}
                                {/* Second picture line - Media line */}
                                <div className="imgrow1">
                                    {/* Read Each picture */}
                                    <div className="col1">
                                    <a href="https://www.wsfa.com/video/2020/02/26/open-auditions-held-a-keep-musical-a-tale-two-brothers/">   
                                    <img src={require('../assets/img/pressroom/news_brother.jpg')} width="315" height="180"/>
                                    </a>
                                        <div className="caption_word">Open auditions held for A-KEEP musical 'A Tale of Two Brothers'</div>
                                    </div>

                                    <div className="col1">
                                    <a href="https://static1.squarespace.com/static/5bae2d19ebfc7ffd793f1b8b/t/5cdd7001b208fc032c69d5b0/1558016004730/%23MyMGM+-+MGM+Melting+Pot.pdf">
                                    <img src={require('../assets/img/pressroom/mgn.PNG')} width="315" height="180"/>
                                    </a>
                                        <div className="caption_word">The Montgomery Business Journal: MGM Melting Pot by Minnie Lamberth</div>
                                    </div>


                                    <div className="col1">
                                    <a href="https://www.facebook.com/Akeep.org/videos/2183886188372187/">
                                    <img src={require('../assets/img/pressroom/hanbook.PNG')} width="315" height="180"/>
                                    </a>
                                        <div className="caption_word">AKEEP-PRS: Catch the K-Wave!</div>
                                    </div>


                                </div>

                                <div className="imgrow1">

                                    {/* Read Each picture */}
                                    <div className="col1">
                                    <a href="https://www.wsfa.com/video/2019/01/23/korean-cinderella-story/">
                                    <img src={require('../assets/img/pressroom/ALLive2.PNG')} width="315" height="180"/>
                                    </a>
                                        <div className="caption_word">4th Annual Korean Cultural Experience: A Korean Cinderella Story</div>
                                    </div>

                                    <div className="col1">
                                    <a href="https://www.wsfa.com/video/2019/01/15/korean-cinderella-story/">
                                    <img src={require('../assets/img/pressroom/Cinde.jpg')} width="315" height="180" />
                                    </a>

                                        <div className="caption_word">A Korean Cinderella Story</div>
                                    </div>


                                    <div className="col1">
                                    <a href="https://www.montgomeryadvertiser.com/story/news/education/2018/09/18/pressure-korean-students-montgomery-successful/1301418002/">
                                    <img src={require('../assets/img/pressroom/madison.jpg')} width="315" height="180"/>
                                    </a>
                                        <div className="caption_word">Korean students visit Madison families in A-KEEP initiative</div>




                                    </div>

                                    

                                </div>

                            </div>
                            {/* End : Referenced 3 picture collum */}


                              {/*Referenced 3 picture collum  */}


                        </div>
                    </div>
                    
                    



                 

                    </div>


                </div>

        

            <hr className="divider" />
            {/* ---------------------------------------------------------------------------- */}


            <TextFormat

                subtitle="Download Photos & Logos"
                contents="Contact us at join@akeep.org for access to A-KEEP photos and logos."
            />


            <TextFormat
                subtitle="Report"
                contents="Click to check result"
            />


            <div className="container">
                <div className="row align-items-lg-center">
                    {/* Left picture on the corona virus */}
                    <div className="col">


                        <a href={"https://static1.squarespace.com/static/5bae2d19ebfc7ffd793f1b8b/t/5cd200baeef1a130deeacfb9/1557266623952/2019+Annual+Report+%28wecompress.com%29.pdf"} formTarget="_blank">
                            <button className="btn-announce">2018 ANNUAL REPORT</button>
                        </a>



                        {/* resourcelink */}
                        <a href={"https://static1.squarespace.com/static/5bae2d19ebfc7ffd793f1b8b/t/5cd316544785d38fa149f730/1557337687750/AKEEP+Fact+Sheet.pdf"} formTarget="_blank">
                            <button className="btn-announce">Fact Sheet</button>
                        </a>


                        {/* Printer source link */}
                        <a href={"https://static1.squarespace.com/static/5bae2d19ebfc7ffd793f1b8b/t/5cdc53e8f360c30001e0d2dc/1557943276618/LET%27S+TALK+KSL%21.png"} formTarget="_blank">
                            <button className="btn-announce">KSL Programming</button>
                        </a>


                    </div>
                </div>


                {/* Container for button */}
            </div>

            <TextFormat
                subtitle="MOUS"
            />
            <div className="container">
                <div className="row align-items-lg-center">
                    {/* Left picture on the corona virus */}
                    <div className="col">


                        <a href={"https://static1.squarespace.com/static/5bae2d19ebfc7ffd793f1b8b/t/5cd200baeef1a130deeacfb9/1557266623952/2019+Annual+Report+%28wecompress.com%29.pdf"} formTarget="_blank">
                            <button className="btn-Press">ALABAMA ACT 2016 - 217</button>
                        </a>



                        {/* resourcelink */}
                        <a href={"https://static1.squarespace.com/static/5bae2d19ebfc7ffd793f1b8b/t/5cd316544785d38fa149f730/1557337687750/AKEEP+Fact+Sheet.pdf"} formTarget="_blank">
                            <button className="btn-Press">TEACHER EXCHANGE PROGRAM</button>
                        </a>


                        {/* Printer source link */}
                        <a href={"https://static1.squarespace.com/static/5bae2d19ebfc7ffd793f1b8b/t/5cdc53e8f360c30001e0d2dc/1557943276618/LET%27S+TALK+KSL%21.png"} formTarget="_blank">
                            <button className="btn-Press">INT'L STUDENT EXCHANGE</button>
                        </a>


                    </div>
                </div>

            </div>




            <hr className="divider" />

           


            <div className="container">
                <div className="col col-10 lg-10">
                    <div className="about-content about-content-1">


                        <h2 style={{ "text-align": "left" }}>"Misson"</h2>
                        <p>To provide multicultural diversity education programs to the students and professionals of both Alabama and Korea.
                            To act as a Global Partnership Facilitator by bridging the differences between institutions and corporations of Alabama and Korea for local economic prosperity.</p>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="col col-10 lg-12">
                    <div className="about-content about-content-1">


                        <h2 style={{ "text-align": "left" }}>"Vision"</h2>
                        <p>Profound learning experiences for all..
</p>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="col col-10 lg-10">
                    <div className="about-content about-content-1">


                        <h2 style={{ "text-align": "left" }}>"Founded"</h2>
                        <p>A-KEEP stands for the Alabama-Korea Education and Economic Partnership and was founded on December 8, 2011. The nonprofit is the result of an MOU between the Alabama Department of Education and the Gyeongbuk Provincial Office of Education in South Korea, which provided the exchange of students an teachers between the state of Alabama and South Korea
The nonprofit’s founding members are Dr. Thomas Bice, the Honorable Gerald Dial and Ms. Meesoon Han.</p>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="col col-10 lg-10">
                    <div className="about-content about-content-1">


                        <h2 style={{ "text-align": "left" }}>"What We Do"</h2>
                        <p>A-KEEP acts as a Global Partnership Facilitator for economic prosperity that provides education in global leadership and multicultural diversity. A-KEEP’s works provide critical knowledge and services to improve the quality of life for students, professionals, and organizations while enabling these groups to take full advantage of the opportunities of growing economic ties between Alabama and South Korea.
</p>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="col col-10 lg-10">
                    <div className="about-content about-content-1">


                        <h2 style={{ "text-align": "left" }}>"Non Profit Status"</h2>
                        <p>The Alabama-Korea Education and Economic Partnership (A-KEEP) is a nonprofit, tax-exempt, charitable organization (tax identification number 45-4297350) under Section 501(c)3 of the Internal Revenue Code. Donations are tax-deductible as allowed by law.</p>
                    </div>
                </div>
            </div>









            <CallToAction />
            <Footer />
            <MobileMenu />



        </Fragment>





    );

};


export default Press;


