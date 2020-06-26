import React from 'react';

const BlogDetailsContentWrapper = ({post,sidebar}) => {
    return (
        <article className="blog-post-details">
            <figure className="blog-post-thumb">
                <img src={require('../../assets/img/events/' + post.thumb)} alt={post.title} />
            </figure>

            <div className="blog-post-txt-wrap">
                <div className="row">
                   

                    <div className={`m-auto order-0 ${!sidebar ? 'col-md-9 col-lg-8': 'col-12'}`}>
                        <div className="blog-post-txt">
                            <h2 className="h3">{post.title}</h2>

                            <div dangerouslySetInnerHTML={{__html: post.content}} />
                        </div>

                        
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogDetailsContentWrapper;