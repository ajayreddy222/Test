import React from 'react';

const Multiplebuttonlink = ({ pic, subtitle, contents, btnlink, corona19link, resourcelink, printresourcelink
  , contents1, advicelink, parentinglink, Mythbusterslink }) => {
  return (


    <div>    <hr className="divider" />

      <div className="container">
        <div className="row align-items-lg-center">
          {/* Left picture on the corona virus */}
          <img src={pic} alt="check" />
          <div className="col">
            <div className="col text-left">

              <div className="subtitle_point"> {subtitle} </div>

              <div className="body1"> {contents}
              </div>
              {/* Corona19 to link */}

              <div classNAme="row">
                <a href={corona19link}>
                  <button className="button1">- Coronavirus Disease 2019 (COVID-19)</button>
                </a>
              </div>



              {/* resourcelink */}
              <a href={resourcelink}>
                <button className="button1">- Resources for the Community</button>
              </a>


              {/* Printer source link */}
              <a href={printresourcelink}>
                <button className="button1">- Print Resources</button>
              </a>

              <div classNAme="row">
                {contents1}
              </div>


              {/* Advice link */}
              <a href={advicelink}>
                <button className="button1">- Advice for the Public</button>
              </a>


              {/* parenting link */}
              <a href={parentinglink}>
                <button className="button1">- Parenting in the time of COVID-19</button>
              </a>

              {/* {Mybather link} */}
              <a href={Mythbusterslink}>
                <button className="button1">- Coronavirus disease (COVID-19) advice for the public: Myth busters (click to link)</button>
              </a>

    

            </div>
          </div>
        </div>










        {/* Container text */}
      </div>










      {/* Divder Section */}
    </div>

  )
}



export default Multiplebuttonlink;