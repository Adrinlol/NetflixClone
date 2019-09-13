import React, { Component } from "react";
import "../../sass/App.scss";
import Header from "../../components/Header/Header";
import TabContainer from '../TabContainer/TabContainer';
import Footer from '../../components/Footer/Footer';

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
