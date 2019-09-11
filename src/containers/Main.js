import React, { Component } from 'react';
import '../sass/App.scss';
import Header from '../components/Header/Header';
import TabComponent from '../components/TabComponent/TabComponent';

class Pages extends Component {
    render() {
        return (
            <div>
            <Header />  
            <TabComponent />
            </div>
        )
    }
}

export default Pages;