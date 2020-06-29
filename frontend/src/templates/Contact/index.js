import React from 'react';
import Form from "./Form";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
    return (
        <div className={'contact-page-area-wrapper sp-y'}>
            <div className="container">
                    <div className="row">
                        <div className="col-8 lg-8">
                            <div className="contact-form-area contact-method">
                                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d842.3698509871836!2d-86.29998927079708!3d32.37950839881838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888e81770aa746df%3A0xc837d2455b14edc3!2sRSA%20Union%20Building%2C%20100%20N%20Union%20St%20%23732%2C%20Montgomery%2C%20AL%2036130!5e0!3m2!1sen!2sus!4v1593017819530!5m2!1sen!2sus" 
                                 width="100%" height="550" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                                 </iframe>
                            </div>
                        </div>

                        <div className="col-4 lg-4">
                            <div className="contact-information contact-method">
                                <div className="contact-info-con">
                                    <h1>Address</h1>
                                    <h3>Physical Address</h3>
                                    <ContactInfo
                                        address="RSA Union Building, Suite 732 <br/>100 North Union Street <br/>Montgomery, AL 36104."
                                    />
                                    <h3>Mailing Address</h3>
                                    <ContactInfo
                                        address="C/O Alabama Commission on Higher Education <br/>P.O. Box 302000<br/>Montgomery, AL 36130-2000."
                                    />
                                </div>
                            </div>

                            <div className="about-content">
                            <a href="https://goo.gl/maps/6Tg1ewyPUgn">
                                <button className= "btn-about" style={{"fontFamily":"acumin-pro-condensed"}}>Directions</button>
                            </a>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 lg-12">
                            <div className="contact-form-area contact-method">
                                <hr></hr>
                                <h1 style = {{"textAlign":"center"}}>Get In Touch</h1>
                            </div>
                        </div>

                        <div className="col-5 lg-5">
                            <div className="contact-form-area contact-method">
                                <h3>Media Inquiries</h3>
                                <p>Christa.Springs@akeep.org</p>
                                <h3>Partnerships</h3>
                                <p>join@akeep.org</p>
                            </div>
                        </div>

                        <div className="col-2 lg-2">
                            <div className="contact-form-area contact-method">
                            </div>
                        </div> 

                        <div className="col-5 lg-5">
                            <div className="contact-form-area contact-method">
                                <h3>Join the Team</h3>
                                <p>join@akeep.org</p>
                                <h3>General Inquiries</h3>
                                <p>join@akeep.org</p>
                            </div>
                        </div>
                        <div className="col-12 lg-12">
                            <div className="contact-form-area contact-method">
                                <hr></hr>
                            </div>
                        </div>

                        <div className="col-12 lg-12">
                            <div className="contact-form-area contact-method">
                                <h3>Send us a Message</h3>
                                <form
                                    id="contact-us-form"
                                    action="mailto:join@akeep.org"
                                    method="POST"
                                    encType="text/plain"
                                    name="contactUsForm"
                                >
                                    <label>Interest<span class="required" aria-hidden="true">*</span> </label>
                                    <br/>
                                        <select name="interest" form="contact-us-form">
                                            <option value="Partnerships">Partnerships</option>
                                            <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                                            <option selected value="Press and Media">Press and Media</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    <Form/>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ContactPage;