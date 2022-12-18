import React from "react";
import "./style.css";
import Heading from "../../Components/Heading";
import Blog from "../../Components/Blog";
import blog1 from "../../images/blog1.png"
import blog2 from "../../images/blog2.png"
import blog3 from "../../images/blog3.png"

export default function Blogs() {
  return (
    <section className="Blogs">
      <Heading name="Blogs" description="words from our food lovers" />
      <div className="all-blogs">
        <Blog
          blog="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          title="Cooking Dining Experience"
          img={blog1}
        />
        <Blog
          order
          blog="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          title="Cooking Dining Experience"
          img={blog2}
        />
        <Blog
          blog="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          title="Cooking Dining Experience"
          img={blog3}
        />
      </div>
    </section>
  );
}