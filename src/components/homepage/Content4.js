import React, { Component } from "react";
import './../../App.css';
import img from './../../img/item details/ct4.jpg';
class Content4 extends Component {
  render() {
    return (
      <section className="intro intro--equip">
        <div className="container-xl px-sm-5 px-xl-0">
          <div className="intro__text d-flex flex-column aos-init aos-animate" data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <h1>Phụ kiện máy ảnh</h1>
            <h3 className="camera-description font-italic">Dù “pro” đến mấy cũng cần các trợ thủ đắc lực</h3>
            <a className="btn btn--dark seemore-btn mx-auto aos-init aos-animate" href="infomation" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">Xem chi tiết</a>
          </div>
          <div className="accesories-img intro__img aos-init aos-animate" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <img className="" src={img}/>
          </div>
        </div>
      </section>
    ); 
  }
}
export default Content4;
