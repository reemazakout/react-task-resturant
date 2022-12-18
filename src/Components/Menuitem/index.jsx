import React from "react";
import "./style.css";

export default function Menuitem(props) {
  return (
    <div className="Menuitem">
      <img width="64px" height="64px" src={props.img} alt="itempic" />
      <div className="name-description">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </div>
      <span className="line"></span>
          <span className="price">Rs {props.price}</span>
    </div>
  );
}