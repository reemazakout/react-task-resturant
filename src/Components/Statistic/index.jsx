import React from "react";
import "./style.css";

export default function Statistic(props) {
  return (
    <div className="Statistic">
      <img src={props.img} alt="dish" />
      <div className="numbers">
        <h3>{ props.number}</h3>
        <p>{props.name}</p>
      </div>
    </div>
  );
}