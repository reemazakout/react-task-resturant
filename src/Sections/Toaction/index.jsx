import React from 'react'
import "./style.css"
import yellow from "../../images/yellow.png"
import Button from "../../Components/Button";

export default function Toaction() {
  return (
    <section className="Toaction">
      <div className="overlay">
        <img src={yellow} alt="yellow-gift" />
        <div className="Toaction-content">
          <h3>Come join us for a lunch this weekend and enjoy</h3>
          <h2>FLAT 10% OFFF</h2>
          <Button title="Book Table" />
        </div>
        <img src={yellow} alt="yellow-gift" />
      </div>
    </section>
  );
}