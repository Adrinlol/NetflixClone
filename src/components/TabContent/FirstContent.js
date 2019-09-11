import React from 'react';
import Img from '../../images/tab-1-pic.png';
import '../../sass/Button.scss';
import '../../sass/TabContent.scss';


function FirstContent() {
    return (
        <div className="main">
        <div className="container">
            <div className="tab-content">
            <div>
                <span>If you decide Netflix isn't for you - no problem. No commitmentm. Cancel anytime.</span> <br/>
                <button className="btn btn-cancel">Try it now</button>
                </div>
                <img src={Img} alt="" />
            </div>
        </div>
        </div>
    )
}

export default FirstContent;
