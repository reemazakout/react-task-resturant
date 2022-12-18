import React from "react";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import "./style.css";
import mail from "../../images/mail-transparent.png";

export default function Footer() {
  return (
    <footer>
      <div className="upper">
        <Container>
          <div className="subscripe">
            <img src={mail} alt="mail-icon" />
            <p>Subscribe to our Newsletter</p>
          </div>
          <form>
            <input type="email" placeholder="Your Email id" />
            <Button title="Subscribe" />
          </form>
        </Container>
      </div>
      <div className="lower">
        <h3>Copyright © 2022 Golden Dine website</h3>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}