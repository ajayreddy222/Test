import React from 'react';

const PageHeader = ({bgImg,title,content1,content2}) => {
    return (
        <div className="page-header-area bg-img" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="page-header-content-inner">
                            <div className="page-header-content">
                                <h1>{title}</h1>
                                <h2><strong>{content1}</strong></h2>
                                <h2><strong>{content2}</strong></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;