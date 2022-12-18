import React from 'react'
import "./style.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";

export default function Nav(props) {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo" />
      <ul>
        <li className={props.mypage === "Home" ? "active" : ""}>Home</li>
        <li className={props.mypage === "About" ? "active" : ""}>About Us</li>
        <li className={props.mypage === "Special" ? "active" : ""}>Special</li>
        <li className={props.mypage === "Menu" ? "active" : ""}>Menu</li>
        <li className={props.mypage === "Blogs" ? "active" : ""}>Blogs</li>
        <li>
          <img src={search} alt="search-icon" />
        </li>
      </ul>
      <button className="BookBtn">Book Now</button>
    </nav>
  );
}