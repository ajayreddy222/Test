import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import { Link } from "react-router-dom";
import Thumbnail from "../UI/Thumbnail";



const Section = (props) => {
    props = props.json || props;

    return (<div className="about-area-wrapper sm-top">
        <div className="container">
            <div className="col" style={{marginBottom: '30px'}}>
                <Content className="Section-content">
                    <hr style={{borderTop: '1px solid red'}}/>
                    {/* <h2>{props.json.title}</h2> */}
                    {/* <h2>{parse(aboutData.heading)}</h2> */}
                    {/* <span className="about-since">{aboutData.since}</span> */}
                    <p className="body"><b><i>{parse(props.text2)}</i></b></p>

                    <h5>{props.text3}</h5>
                    <h5>{props.text4}</h5>
                    <h5>{props.text5}</h5>
                    <Link to={`${process.env.PUBLIC_URL + props.btnLink}`} className="btn-announce" >{props.btnText}</Link>

                </Content>
            </div>
        </div>
    </div>);
};

export default Section;