import React, { Component } from "react";

import Sildebody from "../Components/Sildebody";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Sildebody />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default Home;
