import React from "react";
import Heading from "../../Components/Heading";
import Review from "../../Components/Review";
import "./style.css";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";

export default function Reviews() {
  return (
    <section className="Reviews">
      <Heading name="Reviews" description="words from our food lovers" />

      <div className="all-reviews">
        <Review
          img={user1}
          name="Alex andrina"
          review="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />
        <Review
          img={user1}
          name="Alex andrina"
          review="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />
        <Review
          img={user2}
          name="Alex andrina"
          review="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />
      </div>
    </section>
  );
}