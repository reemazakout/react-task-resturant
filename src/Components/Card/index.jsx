import React from "react";
import "./style.css";

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.img} alt="icon" />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}