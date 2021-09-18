import React, { useState } from "react";
import "../styles/featured_section.css";
import "../styles/index.css";
import Featured_card from "./Featured_card";
import VideoPlayer from "react-video-js-player";
import Logo from "../images/logo1.jpg";

function Featured_section() {
  const [active, setActive] = useState("1");

  const videoSrc =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
  const poster =
    "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg";
  return (
    <>
      <div className="featured-section">
        <div>
          <ul className="featured-container">
            <Featured_card
              tittle="first"
              image={Logo}
              state="1"
              setActive={setActive}
            />
            <Featured_card
              tittle="second"
              image={Logo}
              state="2"
              setActive={setActive}
            />
            <Featured_card
              tittle="third"
              image={Logo}
              state="3"
              setActive={setActive}
            />
            <Featured_card
              tittle="fourth"
              image={Logo}
              state="4"
              setActive={setActive}
            />
            <Featured_card
              tittle="fifth"
              image={Logo}
              state="5"
              setActive={setActive}
            />
          </ul>
        </div>
        {active === "1" && (
          <div>
            <VideoPlayer
              src={videoSrc}
              poster={poster}
              width="1200px"
              height="660px"
            />
          </div>
        )}
        {active === "2" && (
          <div>
            <VideoPlayer
              src={videoSrc}
              poster={poster}
              width="1200px"
              height="660px"
            />
          </div>
        )}
        {active === "3" && (
          <div>
            <VideoPlayer
              src={videoSrc}
              poster={poster}
              width="1200px"
              height="660px"
            />
          </div>
        )}
        {active === "4" && (
          <div>
            <VideoPlayer
              src={videoSrc}
              poster={poster}
              width="1200px"
              height="660px"
            />
          </div>
        )}
        {active === "5" && (
          <div>
            <VideoPlayer
              src={videoSrc}
              poster={poster}
              width="1200px"
              height="660px"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Featured_section;
