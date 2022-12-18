import React from "react";
import "./style.css";
import Heading from "../../Components/Heading";
import Card from "../../Components/Card";
import orange from "../../images/orange-juice.png";
import chef from "../../images/chef.png";
import restaurant from "../../images/restaurant.png";

export default function Special() {
  return (
    <section className="Special">
      <div className="overlay">
        <Heading name="Special" description="What makes us special" />
        <div className="Cards">
          <Card
            img={orange}
            title="Fresh food"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          />
          <Card
            img={chef}
            title="skilled Chef "
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          />
          <Card
            img={restaurant}
            title="Exotic dishes"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          />
        </div>
      </div>
    </section>
  );
}