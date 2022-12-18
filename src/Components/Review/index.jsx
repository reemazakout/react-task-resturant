import React from "react";
import "./style.css";
import star from "../../images/star.png";

export default function Review(props) {
  return (
    <div className="Review-box">
      <div className="pic-name">
        <img src={props.img} alt="user" />
        <div className="name">
          <h4>{props.name}</h4>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </div>
      <p className="review">
       {props.review}
      </p>
    </div>
  );
}