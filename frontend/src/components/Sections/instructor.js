import React from 'react';
import parse from "html-react-parser";
import Content from "../UI/Content";
import { Link } from "react-router-dom";
import Thumbnail from "../UI/Thumbnail";


const ThreeCols = (props) => {
    props = props.json || props;


    return (<div className="about-area-wrapper sm-top">
        <div className="container " >
            <div>

                <h3 className="title" style={{textAlign: "left"}}>{props.title}</h3>
                <p className="body"><b><i>{parse(props.text)}</i></b></p>

            </div>

            <div className="imgrow1" style={{diplay: 'flex', flexFlow: 'row'}}>

                <div className="col1" id="col" style={{width: 'fit-content'}}>
                    <Thumbnail className="about-thumb1" imgSrc={require('../../assets/img' + props.thumb1)} />
                    <h3 className="description"  style={{fontSize: 'medium'}}>{props.text6}</h3>
                </div>

                <div className="col1" id="col2" style={{width: 'fit-content'}}>
                    <Thumbnail className="about-thumb3" imgSrc={require('../../assets/img' + props.thumb2)} />
                    <h3 className="description" style={{fontSize: 'medium'}}>{props.text7}</h3>
                </div>
            </div>

        </div>
        {/* </div> */}
    </div>
    );
};

export default ThreeCols;