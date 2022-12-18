import React from "react";
import "./style.css";
import Container from "../../Components/Container";
import Nav from "../../Components/Nav";
import Button from "../../Components/Button";

export default function Welcome() {
  return (
    <section className="Welcome">
      <Container>
        <Nav mypage="Home" />
        <div className="content">
          <h1>Welcome To Golden View Dine </h1>
          <p>Explore the authentic vegan dishes with your friends and family</p>
          <Button title="Read More" />
        </div>
      </Container>
    </section>
  );
}