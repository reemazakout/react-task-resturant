import React from "react";
import Container from "../../Components/Container";
import "./style.css";
import ingredients from "../../images/ingredients.png";
import Button from "../../Components/Button";

export default function Ingredients() {
  return (
    <section className="Ingredients">
      <Container>
        <div className="boxes">
          <div className="Ingredients-content">
            <h3>Cooking ingredients</h3>
            <h4>What goes in</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
              mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
              orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
              purus nunc tellus pellentesque nibh mattis. Malesuada integer
              nulla orci convallis sit. At libero lacus, eget fermentum sed
              turpis curabitur donec consectetur. Imperdiet aliquam quam mauris
              semper suscipit.
            </p>
            <Button WidthHeigth title="Read More" />
          </div>
          <img src={ingredients} alt="ingredients" />
        </div>
      </Container>
    </section>
  );
}