import React from "react";
import "./style.css";

export default function Blog(props) {

  if (props.order) {
    return (
      <div className="Blog">
        <div className="blog-content">
          <h3>{props.title}</h3>
          <p>{props.blog}</p>
          <a href="#">Read more</a>
        </div>
        <img src={props.img} alt="food" />
      </div>
    );
  } else {
       return (
         <div className="Blog">
           <img src={props.img} alt="food" />
           <div className="blog-content">
             <h3>{props.title}</h3>
             <p>{props.blog}</p>
             <a href="#">Read more</a>
           </div>
         </div>
       );
  }
}