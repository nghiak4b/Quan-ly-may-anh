import React, { Component } from "react";
import './../../App.css';
import img from './../../img/item details/ct3.png';
class Content3 extends Component {
  render() {
    return (
      <section className="intro intro--lens dark-side">
      <div className="container-xl px-sm-5 px-xl-0">
        <div className="row">
          <div className="intro__text d-flex flex-column justify-content-center col-md aos-init aos-animate" data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <h1>Ống kính máy ảnh</h1>
            <h3 className="camera-description font-italic">Góc nhìn mới, cảm nhận mới, thế giới mới</h3>
            <a className="btn btn--light seemore-btn" href="infomation">Xem chi tiết</a>
          </div>
          <div className="intro__img col-md aos-init aos-animate" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <img src={img}/>
            </div>
        </div>
      </div>
    </section>
    ); 
  }
}
export default Content3;
