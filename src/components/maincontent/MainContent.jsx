import React from "react";

import Menu from "../menu/Menu";
import Presentation from "../presentation/Presentation";
import Banner from "../banners/Banner";
import Gallery from "../gallery/Gallery";
import AboutUs from "../aboutus/AboutUs";
function MainContent() {
  return (
    <div>
      <Presentation />
      <Banner number={1} />
      <Menu />
      <Banner number={2} />
      <Gallery />
      <a href="https://www.youtube.com/watch?v=HxfbeIgVgsQ" target="_blank">
        <Banner number={3} />
      </a>
      <AboutUs />
    </div>
  );
}

export default MainContent;
