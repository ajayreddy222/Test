import React from 'react';
import parse from 'html-react-parser'
import CLogo from './CLogo'
import VistaLogo from "./LogoVista"
import CallToActionData from '../../data/CallToAction/call-to-action';

function CallToAction() {
    return (
        <div className="call-top-action-wrap sp-y">
            <div className="container">
                <div className="footer-top-content">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-12">
                            <h2 style={{"textAlign": "left"}}>{CallToActionData.title}</h2>
                            <p>{parse(CallToActionData.text)} <a href="https://www.nationalservice.gov/programs/americorps" id="AmcorLink"><b><u>AmeriCorps</u></b> </a>{parse(CallToActionData.text2)} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="LogoRow">
                <div className="col col-4 span-4"></div>
                <div className="col col-2 span-2"><CLogo/></div>
                <div className="col col-2 span-2"><VistaLogo/></div>
                <div className="col col-4 span-4"></div>
            </div>
        </div>
        
    );
}

export default CallToAction;