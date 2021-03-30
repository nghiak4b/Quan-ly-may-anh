import React, { Component } from 'react'; 
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Content7 from './Content7';
import Content8 from './Content8';
import './../../App.css';
class Homepage extends Component {
  render() {
    return (
    <div>
        <div className="content1">
            <Content1/>
          </div>
          <div>
            <Content2/>
          </div>
          <div className="content3">
            <Content3/>
          </div>
          <div>
            <Content4/>
          </div>
          <div className="content5">
            <Content5/>
          </div>
          <div>
            <Content6/>
          </div>
          <div className="content7">
            <Content7/>
          </div>
          <div>
            <Content8/>
          </div>
    </div>
    );
  }
}

export default Homepage;
