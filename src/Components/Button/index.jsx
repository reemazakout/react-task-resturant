import React from "react";
import "./style.css";
export default function Button({ title, WidthHeigth }) {
  return (
    <button className={+WidthHeigth ? "Component w-h" : "Component "}>
      {title}
    </button>
  );
}