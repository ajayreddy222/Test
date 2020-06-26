import React from 'react';
import aboutData1 from "../../data/OurPeople/OurPeople";

const Content = () => {
    return (
        <div style={{"paddingTop":"0px"}} className="Main"> 
            <div className="Main-content">
                <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                            <h3 style={{"textAlign":"Left","marginLeft": "15px"}}>Leadership</h3>
                    </div>
                    <div className="col col-4 lg-4">
                        <figure className="about-thumb">
                            <a href = "/meesoon-han">
                            <img className="leadership" src={require('../../assets/img/' + aboutData1.thumb1)}/>
                            </a>
                            <p className="title">Meesoon Han, Executive Director</p>
                        </figure>
                    </div>  
                    <div className="col col-4 lg-4">
                        <figure className="about-thumb">
                            <a href = "/eric-mackey">
                            <img className="leadership" src={require('../../assets/img/' + aboutData1.thumb2)}/>
                            </a>
                            <p className="title">Dr. Eric Mackey, Chairman of the Board</p>                          
                        </figure>  
                    </div>
                    <div className="col col-4 lg-4">
                        <figure className="about-thumb">
                            <a href = "/charles-ledbetter">
                            <img className="leadership" src={require('../../assets/img/' + aboutData1.thumb3)}/>
                            </a>
                            <p className="title">Dr. Charles Ledbetter, Vice Chairman of the Board</p>
                        </figure>
                    </div>      

                    <div className="col col-4 lg-4">
                        <figure className="about-thumb">
                            <a>
                            <img className="leadership" src={require('../../assets/img/' + aboutData1.thumb4)}style={{"top": "-15px"}}/>
                            </a>
                            <p style={{"marginTop": "0px"}} className="title">Senator Gerald Dial, Co-Founder of A-KEEP</p>
                        </figure>
                    </div>

                {/* Staff line */}
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <h3 style={{"textAlign":"Left"}}>Staff</h3>
                        </div>
                    </div>

                    {/* first line for picture col */}
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/andre-carter">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb5)}/>
                            </a>
                            <p className="title staff-title">Andre Carter, Grant Writer</p>
                        </figure>
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/brittany-payne">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb6)}/>
                            </a>
                            <p className="title staff-title">Brittany Payne, Outreach Coordinator</p>                          
                        </figure>  
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/christa-springs">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb7)}/>
                            </a>
                            <p className="title staff-title">Christa Springs, Online Media Coordinator</p>
                        </figure>
                    </div>      
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/diane-kreiner">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb8)}/>
                            </a>
                            <p className="title staff-title">Diane Kreiner, Program Evaluator &amp; IT Consultant</p>
                        </figure>
                    </div>

                    {/* Second line for pictures*/}
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/giryong-park">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb9)}/>
                            </a>
                            <p className="title staff-title">Giryong "Keith" Park, R&amp;D Associate</p>
                        </figure>
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a>
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb10)}/>
                            </a>
                            <p className="title staff-title">Jieun "Jemma" Lee, Korean Education Specialist</p>                          
                        </figure>  
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a>
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb11)}/>
                            </a>
                            <p className="title staff-title">Jihwa Restad, Event Coordinator</p>
                        </figure>
                    </div>      
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/junhyup-lee">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb12)}/>
                            </a>
                            <p className="title staff-title">Junhyup "Joon" Lee, R&amp;D Associate</p>
                        </figure>
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/nethra-param">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb13)}/>
                            </a>
                            <p className="title staff-title">Nethra Param, Event Coordinator</p>
                        </figure>
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/tiki-armstong">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb14)}/>
                            </a>
                            <p className="title staff-title">Tiki Armstrong, AmeriCorps Vista Leader</p>                          
                        </figure>  
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/toya-carter">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb15)}/>
                            </a>
                            <p className="title staff-title">Toya Carter,  Creative Media Designer</p>
                        </figure>
                    </div>      
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/luv-junious">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb16)}/>
                            </a>
                            <p className="title staff-title">Luv Junious, Creative Media Designer</p>
                        </figure>
                    </div>

                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <h3 style={{"textAlign":"Left"}}>Volunteers</h3>
                        </div>
                    </div>

                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a>
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb17)}/>
                            </a>
                            <p className="title staff-title">Mrs. Son, Community KSL Instructor</p>
                        </figure>
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/faye-park">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb18)}/>
                            </a>
                            <p className="title staff-title">Mrs. Park, KSL Teacher</p>                          
                        </figure>  
                    </div>


                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <h3 style={{"textAlign":"Left"}}>Board of Executive Directors</h3>
                        </div>
                    </div>


                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/aaron-milner">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb19)}/>
                            </a>
                            <p className="title staff-title">Dr. Aaron Milner</p>
                        </figure>
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/brett-stanton">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb20)}/>
                            </a>
                            <p className="title staff-title">Brett Stanton</p>                          
                        </figure>  
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/chresal-threadgill">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb21)}/>
                            </a>
                            <p className="title staff-title">Dr. Chresal Threadgill</p>
                        </figure>
                    </div>      
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/christen-stewart">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb22)}/>
                            </a>
                            <p className="title staff-title">Dr. Cristen Herring</p>
                        </figure>
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/james-purcell">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb23)}/>
                            </a>
                            <p className="title staff-title">Dr. James Purcell</p>
                        </figure>
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href="/joe-windle">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb24)}/>
                            </a>
                            <p className="title staff-title">Col. Joe Windle</p>                          
                        </figure>  
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href="/jennie-cochren">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb25)}/>
                            </a>
                            <p className="title staff-title">Jennie Sim Cochren</p>
                        </figure>
                    </div>      
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/lance-hunter">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb26)}/>
                            </a>
                            <p className="title staff-title">Lance Hunter</p>
                        </figure>
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/mark-davis">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb27)}/>
                            </a>
                            <p className="title staff-title">Dr. Mark Davis</p>
                        </figure>
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/nichelle-nix">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb28)}/>
                            </a>
                            <p className="title staff-title">Nichelle Nix, JD</p>                          
                        </figure>  
                    </div>


                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <h3 style={{"textAlign":"Left"}}>Emeritus Board</h3>
                        </div>
                    </div>


                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/deborah-e-barnhart">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb29)}/>
                            </a>
                            <p className="title staff-title">Dr. Deborah E. Barnhart</p>
                        </figure>
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/gerald-dial">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb30)}/>
                            </a>
                            <p className="title staff-title">Hon. Gerald Dial</p>                          
                        </figure>  
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/john-g-veres">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb31)}/>
                            </a>
                            <p className="title staff-title">Dr. John G. Veres, III</p>
                        </figure>
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/larry-craven">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb32)}/>
                            </a>
                            <p className="title staff-title">Larry Craven, JD</p>
                        </figure>
                    </div>  
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href="/michael-sentance">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb33)}/>
                            </a>
                            <p className="title staff-title">Michael Sentance</p>                          
                        </figure>  
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href="/philip-cleveland">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb34)}/>
                            </a>
                            <p className="title staff-title">Dr. Philip Cleveland</p>
                        </figure>
                    </div>      
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/ray-white">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb35)}/>
                            </a>
                            <p className="title staff-title">Ray White</p>
                        </figure>
                    </div>
                    <div className="col col-3 lg-3">
                        <figure className="about-thumb">
                            <a href = "/thomas-bice">
                            <img className="staff" src={require('../../assets/img/' + aboutData1.thumb36)}/>
                            </a>
                            <p className="title staff-title">Dr. Thomas Bice</p>
                        </figure>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col col-12 lg-12">
                        <div className="about-content about-content-1">
                            <hr style={{"borderTop": "1.5px solid #d61c29"}}></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;