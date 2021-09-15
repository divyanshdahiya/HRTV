import React, { useState } from "react";
import "../styles/navbar.css";
import Logo from "../images/navbar-logo.png";
import { FaSearch, FaRegStar, FaRegClipboard } from "react-icons/fa";
import { RiDashboardLine, RiMovie2Line, RiSettings2Line } from "react-icons/ri";
import { BiCameraMovie, BiSlideshow, BiLogOut } from "react-icons/bi";
import { FcClapperboard } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="header">
          <div className="left-header">
            <FcClapperboard className="logo" />
            <div className="header-tittle">HRtv</div>
          </div>
          <GiHamburgerMenu className="logo" id="btn" />
        </div>
        <ul className="nav-list">
          <li>
            <div className="search-bar">
              <FaSearch className="logo search-logo" />
              <input type="text" placeholder="Search..." />
            </div>
          </li>
          <li>
            <a href="#">
              <RiDashboardLine className="logo" />
              <span className="links_name">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BiCameraMovie className="logo" />
              <span className="links_name">Movies</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BiSlideshow className="logo" />
              <span className="links_name">Tv Shows</span>
            </a>
          </li>
          <li>
            <a href="#">
              <RiMovie2Line className="logo" />
              <span className="links_name">Series</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaRegStar className="logo" />
              <span className="links_name">My Favourites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaRegClipboard className="logo" />
              <span className="links_name">My Wishlist</span>
            </a>
          </li>
          <li>
            <a href="#">
              <RiSettings2Line className="logo" />
              <span className="links_name">Settings</span>
            </a>
          </li>
          <li className="profile">
            <div className="profile-details">
              <div className="profile-name">Divyansh Dahiya</div>
            </div>
            <div className="log-out">
              <a href="">
                <BiLogOut className="logo" />
                <span className="links_name">Log Out</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
