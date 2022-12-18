import React from "react";
import Container from "../../Components/Container";
import Heading from "../../Components/Heading";
import Menuitem from "../../Components/Menuitem";
import "./style.css";
import one from "../../images/1.png";
import two from "../../images/2.png";
import three from "../../images/3.png";
import four from "../../images/4.png";
import five from "../../images/5.png";
import six from "../../images/6.png";
import seven from "../../images/7.png";
import eight from "../../images/8.png";
import nine from "../../images/9.png";
import ten from "../../images/10.png";
import eleven from "../../images/11.png";
import twelve from "../../images/12.png";

export default function Kitchen() {
  return (
    <section className="Kitchen">
      <Container>
        <Heading name="Straight From Kitchen" description="Our Menu" />
        <div className="items">
          <Menuitem
            img={one}
            description="Lorem ipsum dolor sit amet"
            name="Lorem ipsum dolor sit amet"
            price="222"
          />
          <Menuitem
            img={two}
            description="Vivamus sodales augue vita"
            name="Lorem ipsum dolor sit amet"
            price="590"
          />
          <Menuitem
            img={three}
            description="Pellentesque semper semper"
            name="Lorem ipsum dolor sit amet"
            price="130"
          />
          <Menuitem
            img={four}
            description="Vestibulum est turpis"
            name="Lorem ipsum dolor sit amet"
            price="135"
          />
          <Menuitem
            img={five}
            description="Phasellus convallis maximus"
            name="Lorem ipsum dolor sit amet"
            price="148"
          />
          <Menuitem
            img={six}
            description="Nullam elementum magna"
            name="Lorem ipsum dolor sit amet"
            price="200"
          />

          <Menuitem
            img={seven}
            description="Phasellus convallis maximus"
            name="Lorem ipsum dolor sit amet"
            price="148"
          />
          <Menuitem
            img={eight}
            description="Vestibulum est turpis"
            name="Lorem ipsum dolor sit amet"
            price="135"
          />
          <Menuitem
            img={nine}
            description="Vivamus sodales augue vita"
            name="Lorem ipsum dolor sit amet"
            price="590"
          />
          <Menuitem
            img={ten}
            description="Lorem ipsum dolor sit amet"
            name="Lorem ipsum dolor sit amet"
            price="222"
          />
          <Menuitem
            img={eleven}
            description="Nullam elementum magna"
            name="Lorem ipsum dolor sit amet"
            price="200"
          />
          <Menuitem
            img={twelve}
            description="Pellentesque semper semper"
            name="Lorem ipsum dolor sit amet"
            price="130"
          />
        </div>
      </Container>
    </section>
  );
}