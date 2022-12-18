import React from "react";
import Container from "../../Components/Container";
import "./style.css";
import logo from "../../images/logo.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/Youtube.png";
import mail from "../../images/mail.png";
import location from "../../images/location.png";
import phone from "../../images/phone.png";

export default function Info() {
  return (
    <section className="Info">
      <div className="overlay">
        <Container>
          <div className="boxes">
            <div className="left">
              <div className="logo-name">
                <img className="logo" src={logo} alt="logo" />
                <h3>Golden View Dine </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin{" "}
              </p>
              <ul>
                <li>
                  <a href="#">
                    <img src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={youtube} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mid">
              <h4>Other Links</h4>
              <ul>
                <li>Privacy Policy</li>
                <li> Terms & conditions</li>
                <li>Blogs</li>
                <li>our team</li>
                <li>Our kitchen</li>
              </ul>
            </div>
            <div className="right">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <img src={mail} alt="" />{" "}
                  <p>Gogreendineservice@gmail.com</p>
                </li>
                <li>
                  <img src={location} alt="" />
                  <p>AZ complex bylane3 Mandari Rd Mumbai 1100867 </p>
                </li>
                <li>
                  <img src={phone} alt="" /> <p>+1800 287 256</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}