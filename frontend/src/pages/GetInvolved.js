import React, { Fragment } from 'react';
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Section from '../components/Section';
import Slider from '../components/Slider/index';
import Divider from "../components/Divider/Divider";
import { Link } from "react-router-dom";
import JustifiedTable from "../components/Table/JustifiedTable";

import sliderJSON from "../data/GetInvolved/slider.json";
import img1 from "../assets/img/GetInvolved/partner.png";
import img2 from "../assets/img/GetInvolved/inclusion.png";
import img3 from "../assets/img/GetInvolved/build_capacity.png";
import img4 from "../assets/img/GetInvolved/teach.png";

import img5 from "../assets/img/GetInvolved/mm.jpg";

import portraitAndrew from "../assets/img/GetInvolved/portraitAndrew.JPG"
import portraitMinyoung from "../assets/img/GetInvolved/portraitMinyoung.JPG"
import portraitTiki from "../assets/img/GetInvolved/portraitTiki.jpg"

const GetInvolved = () => {
    return (
        <Fragment>
            <Header />
            <Slider json={sliderJSON} />

            <div className='container'>
                <div className='container-inner-md'>
                    <Divider />
                </div>

                <h3>
                    4 Ways to Get Involved
                </h3>

                <JustifiedTable
                    jsx={ways_to_get_involved}
                />

                <div className='container-inner-md'>
                    <Divider />
                </div>


                <h3> Why Should You Get Involved With A-KEEP?
                </h3>

                <p><b> Make your mark on the world.
                </b></p>

                <p> We are committed to building a community that celebrates cultural diversity, educating the public and policymakers and creating global partnership and workforce opportunities.
                </p>

                <p><b> Develop your potential.
                </b></p>

                <p> As a change maker, problem-solver and global citizen, you endeavor to leave the world a better place than you found it.  By employing your time, talents and unique perspective, you have the power to help us reach our goals and generate sustainable change.
                </p>

                <p><b> Be exceptional.
                </b></p>

                <p> We recognize that a single person or entity can make significant progress alone and we are committed to building an exceptional team by recruiting those who embody our core values. We have high standards for all team members to ensure we are able to provide long-standing progress globally, locally and in ourselves.
                </p>

                <img src={img5} style={{
                    width: '100%',
                    height: '450px',
                    objectFit: 'cover',
                }} />

                <div className='container-inner:size(50)'>
                    <Divider />
                </div>


                <h3>
                    What it takes to bolster progress
                </h3>

                <p>In addition to aligning with our <a href="https://www.akeep.org/mission-vision-and-values"><strong>core values</strong></a>, you can make the most of your experience with A-KEEP by demonstrating these characteristics:  </p><ol data-rte-list="default"><li><p><strong>Boundless perseverance</strong>  </p><p>The word “excuse” is not in your vocabulary. You follow through with your promises, remain committed to the cause and stay adapt to sudden change. When you say you’ll do something, you give your best effort and persist against challenges to unveil a solution. Your drive to improve professionally, personally and impact change are made evident through your work ethic and willingness to learn.  </p></li><li><p><strong>Selfless leadership </strong></p><p>Rarely, do you await instruction from other team members before embarking on a task. From the mundane to the exciting, your choice to be proactive in your participation allows you to push beyond your comfort zone and inspire your team. As a well-rounded leader, you listen attentively, share willingly and manage your responsibilities effectively.  </p></li><li><p><strong>Respect for diverse experiences</strong>  </p><p>You love meeting people with different perspectives and treat everyone you encounter with kindness. As an open-minded individual, you seek opportunities to broaden your worldview, support a diverse and inclusive environment and demonstrate maturity when your ideas are challenged. Our team members come from all backgrounds but are united by the common goal of making significant contributions to the community and world at large.</p></li><li><p ><strong>Professionalism and poise</strong></p><p >From engagements with policymakers to afternoons with elementary students, you are able to conduct yourself professionally and appropriately in all situations. You are an articulate and confident communicator As a team member you understand that you are a direct representation of A-KEEP, its stakeholders and supporters. Your legacy is important to you and you leave a pleasant impression on all with your positive attitude, appropriate dress and aversion to conflicts of interest.  </p></li><li><p><strong>Awareness</strong>  </p><p>You have familiarized yourself with the organization, identified what needs to be done and started working towards the greater good. You are also attuned to the needs of your teammates and look for ways to support their success as it relates to the advancement of the organization.  </p></li><li><p><strong>Belief in the potential of others</strong>  </p><p>As a member of our team, you respond to the opinions of others thoughtfully and respectfully with the belief that, like yourself, people bring their best effort to each task they pursue. You encourage your colleagues to reach their highest potential by honing in on their unique gifts and taking action that drives the organization forward. You recognize that our team is made better by treating each member as an invaluable asset with ideas and a set of skills that contribute to overall success.  </p></li></ol>

                <div className='container-inner-md'>
                    <Divider />
                </div>

                <div className='row'>
                    <div className='col'>
                        <img src={portraitTiki} />
                    </div>
                    <div className='col'>
                        <img src={portraitAndrew} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <img src={portraitMinyoung} />
                    </div>

                    <div className='col'>
                        <h3><em>
                            “An inclusive environment and mission give each day an international feel that is challenging, educational and fun. I’m learning new things often.”
                        </em></h3>
                        <p style={{ textAlign: 'center' }}>
                            - Tiki Armstrong, Americorps Vista
                        </p>
                    </div>
                </div>

                <div className='container-inner-md'>
                    <Divider />
                </div>

                <h3>
                    Diversity, Equity and Inclusion
                </h3>
                <p>
                    A-KEEP realizes that reaching our ambitious goals takes the unification of diverse and inclusive minds centered on a common goal and shared values. We are committed to inclusiveness and diversity in our staff, board members and volunteers. To actualize sustainable and effective change our efforts must be shaped by those most directly impacted by educational, economic and cultural inequity. A-KEEP takes meaningful steps to promote inclusiveness in its hiring, retention, promotion, board recruitment and engaging our constituencies. A-KEEP complies with federal and state equal employment opportunity laws and maintains a policy of promoting diversity.

                </p>

                <div className='container-inner-md'>
                    <Divider />
                </div>

            </div>

            <CallToAction />
            <Footer />


        </Fragment>
    )
};

const ways_to_get_involved = [
    [
        <Link to='/partner-with-us'>
            <img src={img1} />
        </Link>,

        <Link to='/our-services'>
            <img src={img2} />
        </Link>
    ],
    [
        <Link to='/volunteer'>
            <img src={img3} />
        </Link>,

        <Link to='/teach-with-us'>
            <img src={img4} />
        </Link>
    ]
]

export default GetInvolved;