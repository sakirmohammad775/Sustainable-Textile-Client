import React from 'react';

const Cover = ({ img, title }) => {
    return (
        <>
                <div className="bg-base-200 h-[600px]" style={{backgroundImage:`url("${img}")`}}>
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">{title}</button>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default Cover;