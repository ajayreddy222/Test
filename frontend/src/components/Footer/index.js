import React from 'react';
import Text from "../UI/Text";
// import Widget from "../UI/Widget";
// import List from "../UI/List";
// import LI from "../UI/List/Item";
// import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2 lg-6">
                        <div className="about-content about-content-2"></div>
                    </div>
                        <div style = {{"color":"#000"}} className="Footer-business-info-item Footer-business-info-item-name">A-KEEP</div>
                        <div className="Footer-business"> RSA Union Building, Suite 732,</div>
                        <div className="Footer-business">100 North Union Street, Montgomery, AL 36104,</div>
                        <div className="Footer-business Footer-business-info-item--country">United States</div>
                        <a href="tel:334-625-8515" rel="tel" className="Footer-business Footer-business-info-item--phone" id="yui_3_17_2_1_1592227297452_45162">334-625-8515</a>
                        <a href="mailto:join@akeep.org" title="join@akeep.org" target="_blank" className="Footer-business Footer-business-info-item--email">join@akeep.org</a>
                    <div className="col-lg-12 order-12 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                {/* <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                                    <img src={Logo} alt="Logo"/>
                                </Link>
                                <Text>A-KEEP RSA Union Building, Suite 732, 100 North Union Street, Montgomery, AL 36104, United States 334-625-8515 join@akeep.org
                                </Text>
                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} Businex Ltd. All Rights Reserved.
                                </Text> */}
                            </div>

                            <div className="social-icons">   
                                <a a href="https://www.facebook.com/Akeep.org/" target="_blank" className="sqs-svg-icon--wrapper facebook-unauth" aria-label="Amoree Brackins">
                                {/* class="btn btn-social-icon btn-twitter" */}
                                    <span className="fa fa-facebook"></span>
                                </a>
                                <a href="https://www.linkedin.com/company/akeep/" target="_blank" className="sqs-svg-icon--wrapper linkedin-unauth" aria-label="Amoree Brackins">
                                {/* class ="btn btn-social-icon btn-linkedin"> */}
                                    <span className="fa fa-linkedin"></span>
                                </a>
                                <a href="mailto:join@akeep.org" target="_blank" className="sqs-svg-icon--wrapper email" aria-label="join@akeep.org">
                                    <span className="fa fa-envelope-o"></span>
                                </a>
                                <a href="https://twitter.com/Join_AKEEP" target="_blank" className="sqs-svg-icon--wrapper twitter" aria-label="AKEEP">
                                {/* class="btn btn-social-icon btn-twitter"> */}
                                    <span className="fa fa-twitter"></span>
                                </a>
                            </div>

                            <div className="Footer-nav">
                                <a href="https://secure.squarespace.com/checkout/donate?donatePageId=5beef19f1ae6cfbc3ccd99e0" target="_blank" className="Footer-nav-item">Donate</a>
                                <a href="/" className="Footer-nav-item">Home</a>
                                <a href="/contact" className="Footer-nav-item">Contact</a>
                            </div>                      
                        </div>
                    </div>


                    {/* <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Information">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>Our company</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>Contact us</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Our services</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/"}`}>Careers</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Social Links">
                            <List classes="widget-list">
                                <LI><Link to="https://facebook.com/hasthemes/" target={'_blank'}>Facebook</Link></LI>
                                <LI><Link to="https://twitter.com/hasthemes/" target={'_blank'}>Twitter</Link></LI>
                                <LI><Link to="https://dribbble.com/hastech/" target={'_blank'}>Dribbble</Link></LI>
                                <LI><Link to="https://www.instagram.com/" target={'_blank'}>Instagram</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Contact Us">
                            <address>
                                2005 Stokes Isle Apartment. 896, Washington 10010, USA <br/>
                                https://example.com <br/>
                                (+68) 120034509
                            </address>
                        </Widget>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;