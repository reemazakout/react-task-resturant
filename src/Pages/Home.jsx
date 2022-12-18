import React from 'react'
import Welcome from "../Sections/Welcome"
import Aboutus from "../Sections/AboutUs"
import Special from "../Sections/Special";
import Kitchen from "../Sections/Kitchen";
import Toaction from "../Sections/Toaction";
import Ingredients from "../Sections/Ingredients";
import Statistics from "../Sections/Statistics";
import Reviews from "../Sections/Reviews";
import Blogs from "../Sections/Blogs";
import Info from "../Sections/Info";
import Footer from "../Sections/Footer";

export default function Home() {
  return (
    <div>
      <Welcome/>
      <Aboutus />
      <Special />
      <Kitchen />
      <Toaction />
      <Ingredients />
      <Statistics />
      <Reviews />
      <Special />
      <Blogs />
      <Info />
      <Footer />
    </div>
  );
}