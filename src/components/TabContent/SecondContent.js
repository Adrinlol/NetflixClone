import React from "react";
import "../../sass/Button.scss";
import "../../sass/TabContent.scss";
import Img1 from "../../images/tab-tv.png";
import Img2 from "../../images/tab-tablet.png";
import Img3 from "../../images/tab-macbook.png";

function SecondContent() {
  return (
    <div className="main-second">
      <div className="second-container">
        <div className="second-tab-content">
          <span>
            Watch TV shows and movies anytime, anywhere - personalized just for
            you.
          </span>
          <button className="btn btn-cancel gbrid">Try it now</button>
        </div>
        {/* Tab Bottom */}
        <div className="tab-bottom-content">
          <div>
            <img src={Img1} alt="" style={{ width: "18.75rem" }} />
            <h3>Watch on your TV</h3>
            <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV and more.</p>
          </div>
          <div>
            <img src={Img2} alt="" style={{ width: "18.75rem", padding:'0.625rem' }} />
            <h3>Watch on your TV</h3>
            <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV and more.</p>
          </div>{" "}
          <div>
          {/* Using inline since creating custom style will take more time */}
            <img
              src={Img3}
              alt=""
              style={{
                width: "18.75rem",
                paddingTop: "0.625rem",
                paddingBottom: "0.625rem"
              }}
            />
            <h3>Watch on your TV</h3>
            <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondContent;
