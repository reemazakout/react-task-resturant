import React from "react";
import Container from "../../Components/Container";
import "./style.css";
import dish from "../../images/dish.png";
import Button from "../../Components/Button";

export default function Aboutus() {
  return (
    <section className="Aboutus">
      <Container>
        <div className="boxes">
          <div className="about-content">
            <h3>About Us</h3>
            <h4>
              Discover the taste of worldclass vegan dishes from the kitchen of
              Go Green Dine
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
              mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar
              orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor
              purus nunc tellus pellentesque nibh mattis. Malesuada integer
              consectetur. Imperdiet aliquam quam mauris semper suscipit.
              Molestie maecenas interdum pharetra id velit sed nec.tetur sit
              sagittis pretium eget vitae semper pellentesque pellentesque.
                      </p>
                      <Button WidthHeigth title="Read More" />
          </div>
          <img src={dish} alt="dish" />
        </div>
      </Container>
    </section>
  );
}