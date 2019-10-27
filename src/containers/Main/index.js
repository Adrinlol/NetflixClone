import React, { Component } from "react";
import Header from "../../components/Header";
import TabContainer from "../TabContainer";
import Footer from "../../components/Footer";
import "../../sass/App.scss";

class Pages extends Component {
  render() {
    return (
      <div>
        <Header />
        <TabContainer />
        <Footer />
      </div>
    );
  }
}

export default Pages;
