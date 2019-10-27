import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FirstSection from "../../components/TabSection/FirstSection";
import SecondSection from "../../components/TabSection/SecondSection";
import ThirdSection from "../../components/TabSection/ThirdSection";
import FirstContent from "../../components/TabContent/FirstContent";
import SecondContent from "../../components/TabContent/SecondContent";
import ThirdContent from "../../components/TabContent/ThirdContent";
import "../../sass/App.scss";

class TabComponent extends Component {
  // On load active state is set to the first section
  state = {
    activeTab: 1
  };

  render() {
    return (
      <div>
        {/* On select change the active state according to the section */}
        <Tabs
          className="tab-container"
          selectedIndex={this.state.activeTab}
          onSelect={activeTab => this.setState({ activeTab })}
        >
          <TabList className="tab-navbar">
            {/* Ternery operator that checks if the state is equal to the corresponding number */}
            <Tab
              className={`${
                this.state.activeTab === 0 ? "tab-selected active" : null
              }`}
            >
              <FirstSection />
              <p className="lg-screen">
                <strong>
                  No commitments <br />
                  Cancel online at anytime
                </strong>
              </p>
              <br />
              <span className="md-screen" style={{ marginTop: "0.4rem" }}>
                Cancel
              </span>
            </Tab>
            {/* Ternery operator that checks if the state is equal to the corresponding number */}
            <Tab className={`${this.state.activeTab === 1 ? "active" : null}`}>
              <SecondSection />
              <p className="lg-screen" style={{ marginTop: "-5.3rem" }}>
                <strong>Watch anywhere</strong>
              </p>
              <span className="md-screen" style={{ marginTop: "-4.1125rem" }}>
                Devices
              </span>
            </Tab>
            {/* Ternery operator that checks if the state is equal to the corresponding number */}
            <Tab className={`${this.state.activeTab === 2 ? "active" : null}`}>
              <ThirdSection />
              <p className="lg-screen">
                <strong>Pick your price</strong>
              </p>
              <br />
              <span className="md-screen">Price</span>
            </Tab>
          </TabList>
          {/* Tabs Content */}
          <TabPanel>
            <FirstContent />
          </TabPanel>
          <TabPanel>
            <SecondContent />
          </TabPanel>
          <TabPanel>
            <ThirdContent />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
