import React, { Component } from 'react';
import Homepage from './components/homepage/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Homepage /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
