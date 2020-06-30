import React from 'react';

const TextFormat = ({title,subcontent,subtitle1,content1,subtitle2,content2,title1,subcontent1,subtitle3,content3,subtitle4,
  content4,link,lText}) => {
    return (
          <div className="Main" style={{"paddingBottom":"0px"}}> 
            <div className="Main-content">
              <div className="row align-items-center" style={{"padding":"0px"}}>
                <div className="col col-12 lg-12">
                  <div className="about-content about-content-1">
                    <h1 style={{"textAlign":"Left"}}>{title}</h1>
                    <p>{subcontent}</p>
                    <ul>
                      <li><h3><strong>{subtitle1}</strong></h3>
                        <p>{content1}</p>
                      </li>
                      <li><h3><strong>{subtitle2}</strong></h3>
                        <p>{content2}</p>
                      </li>
                    </ul>
                    <h2 style={{"textAlign":"Left"}}>{title1}</h2>
                    <p>{subcontent1}</p>
                    <ul>
                      <li><h3><strong>{subtitle3}</strong></h3>
                        <p>{content3}</p>
                        <p>See videos online by visiting our <a className="link" href={link} target="_blank">{lText}</a></p>
                      </li>
                      <li><h3><strong>{subtitle4}</strong></h3>
                        <p>{content4}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default TextFormat;