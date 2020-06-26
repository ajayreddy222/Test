import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";



const twocol = (props) => {
    props = props.json || props;


    return (<div className="about-area-wrapper sm-top">
        <div className="container">
        <hr className="divider" style={{marginBottom: '40px'}}/>
            <Content className="Section-content1" >
                <div className="imgrow1" style={{display: 'flex', flexFlow: 'row'}}>
                    <div id="col1"  style={{width: '75%'}}>
                        <h3 className="twocols">{props.text1}</h3>
                        <p className="twocolspara">{props.text2}</p>
                        <p className="twocolspara">{props.text3}</p>
                    </div>
                    <div id="col2"  style={{width: '25%'}}>
                        <h3 className="twocols">{props.text4}</h3><br />
                        <button className="buttontwocols"><a href="https://matadornetwork.com/abroad/whats-a-critical-language-and-why-study-one/"></a><u>{props.btnText1}</u></button><br /><br />
                        <button className="buttontwocols"><a href="https://clscholarship.org/"></a><u>{props.btnText2}</u></button><br /><br />
                        <button className="buttontwocols"><a href="https://www.nsep.gov/"></a><u>{props.btnText3}</u></button><br /><br />
                        <button className="buttontwocols"><a href="https://www.cia.gov/news-information/featured-story-archive/2010-featured-story-archive/cia-values-language-capabilities.html"></a><u>{props.text4}</u></button>
                    </div>
                </div>
            </Content>
            {/* </div> */}
        </div>
    </div>);
};

export default twocol