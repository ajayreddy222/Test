import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";




const ApproachSect2 = (props) => {
    props = props.json || props;

    return (<div className="about-area-wrapper sm-top">
    <div className="container">

        {/* <div className="row align-items-lg-center"> */}
            {/* <div className="col-md-6 col-lg-5">
                <Thpumbnail classes="about-thumb" imgSrc={require('../../../assets/img' + aboutData.thumb)}/>
            </div> */}

            <div className="col">
                <Content className="Section-content">
                   
                    
                        <div>
                        <p className="Approachpara1">{parse(props.text1)}</p>
                        <p className="Approachpara2">{parse(props.text2)}</p>
                        </div>
                        <div>
                            <h3 className="Approachheader">{props.title}</h3>

                            <ol className="ApproList">
                                {props.list.map(item => (
                                    <li>
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        </div>                   
                </Content>
            </div>
       
    </div>
</div>);

}

export default ApproachSect2