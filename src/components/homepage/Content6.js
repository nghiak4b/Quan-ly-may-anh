import React, { Component } from "react";
import './../../App.css';
import img1 from './../../img/item details/ct6.jpg';
import img2 from './../../img/item details/ct62.jpg';
import img3 from './../../img/item details/ct63.jpg';

class Content6 extends Component {
  render() {
    return (
      <section className="promo">
        <div className="container-xl px-sm-5 px-xl-0">
          <h1>Tin khuyến mại</h1>
          <div className="promo__collection row"><a className="promo-item col-sm-4" >
            <img src={ img1 } alt="khuyến mại máy ảnh"/></a><a className="promo-item col-sm-4" >  
            <img src={ img2 } alt="khuyến mại máy ảnh"/></a><a className="promo-item col-sm-4" >
            <img src={ img3 } alt="khuyến mại máy ảnh"/></a>
          </div><a className="btn btn--dark seemore-btn mx-auto promo-btn" >Xem thêm</a>
        </div>
      </section>
    ); 
  }
}
export default Content6;

