import React from "react";
import "../styles/featured_section.css";
import "../styles/index.css";

function Featured_card(prop) {
  return (
    <div>
      <li>
        <button
          className="featured-inner"
          onClick={() => prop.setActive(prop.state)}
        >
          <div>
            <img
              className="featured-artist-image"
              src={prop.image}
              alt="Artist-Image"
            />
            <p>{prop.tittle}</p>
          </div>
        </button>
      </li>
    </div>
  );
}

export default Featured_card;
