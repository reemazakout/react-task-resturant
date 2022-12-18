import React from "react";
import "./style.css";

export default function Heading(props) {
  return (
    <div className="Heading">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}