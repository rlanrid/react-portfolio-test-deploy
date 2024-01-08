import React from 'react';

const Loading = () => {
    return (
        <>
            <div className="loading__wrap">
                <div className="loading">
                    <svg className="loading" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        x="0px" y="0px" width="574.558px" height="190px" viewBox="0 0 574.558 120"
                        xmlSpace="preserve">
                        <defs>
                            <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
                                <path fill="#fff" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z" />
                            </pattern>
                            <text id="text" transform="matrix(1 0 0 1 -8.0684 116.7852)" fontSize="161.047">LOADING</text>
                            <mask id="text_mask">
                                <use x="0" y="0" href="#text" opacity="1" fill="#E6E6E6" />
                            </mask>
                        </defs>
                        <use x="0" y="0" href="#text" fill="#707070" />
                        <rect className="water-fill" mask="url(#text_mask)" fill="url(#water)" x="-400" y="0" width="1600" height="120" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Loading;
