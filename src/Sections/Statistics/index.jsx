import React from "react";
import "./style.css";
import Container from "../../Components/Container";
import Statistic from "../../Components/Statistic";
import st1 from "../../images/st1.png";
import st2 from "../../images/st2.png";
import st3 from "../../images/st3.png";

export default function Statistics() {
  return (
    <section className="Statistics">
      <div className="overlay">
        <Container>
          <Statistic img={st1} number="250+" name="Delicacy" />
          <Statistic img={st2} number="10+" name="renowed chefs" />
          <Statistic img={st3} number="30+" name="Members" />
        </Container>
      </div>
    </section>
  );
}