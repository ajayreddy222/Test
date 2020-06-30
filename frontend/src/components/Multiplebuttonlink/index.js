import React from 'react';

const Multiplebuttonlink = ({ pic, subtitle, contents, btnlink, corona19link, resourcelink, printresourcelink
  , contents1, advicelink, parentinglink, Mythbusterslink }) => {
  return (

    <div className="Main" style={{"padding": "0px 100px"}}>
      <div className="Main-content">
        <div className="row align-items-center">
          <div className="col col-12 lg-12">
            <div className="about-content about-content-1">
              <hr></hr>
            </div>
          </div>

          <div className="col col-3 lg-3">
            <div className="about-content about-content-1">
              <img src={pic} alt="check" />
            </div>
          </div>
          <div className="col col-9 lg-9">
            <h2 style={{"textAlign":"Left"}}>{subtitle}</h2>
            <h3><a className="link link2" href="https://www.cdc.gov/"><strong>{contents}</strong></a></h3>
            <ul>
              <li><p><a className="link" href={corona19link}>Coronavirus Disease 2019 (COVID-19)</a></p></li>
              <li><p><a className="link" href={resourcelink}>Resources for the Community</a></p></li>
              <li><p><a className="link" href={printresourcelink}>Print Resources</a></p></li>
            </ul>
            <h3><a className="link link2" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"><strong>{contents1}</strong></a></h3>
            <ul>
              <li><p><a className="link" href={advicelink}>Advice for the Public</a></p></li>
              <li><p><a className="link" href={parentinglink}>Parenting in the time of COVID-19</a></p></li>
              <li><p><a className="link" href={Mythbusterslink}>Coronavirus disease (COVID-19) advice for the public: Myth busters (Pictured below)</a></p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Multiplebuttonlink;