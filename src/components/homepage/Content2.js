import React, { Component } from "react";
import './../../App.css';
import img from './../../img/item details/imgct2.png';
class Content2 extends Component {
  render() {
    return (
        <section className="intro intro--camera">
        <div className="container-xl px-sm-5 px-xl-0">
          <div className="row">
            <div className="intro__text d-flex flex-column justify-content-center col-md aos-init aos-animate" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
              <h1>Máy ảnh DSLR/Mirrorless</h1>
              <h3 className="camera-description font-italic" >
                 Phá bỏ giới hạn từ chiếc máy ảnh du lịch giá rẻ<br/>và cả smartphone đắt tiền của bạn</h3>
                 <a className="btn btn--dark seemore-btn" href="/infomation">Xem chi tiết</a>
            </div>
            <div className="intro__img col-md aos-init aos-animate" data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <img className="animate__fadeInRight" src={img} alt="Máy ảnh tốt nhất"/>
            </div>
          </div>
        </div>
      </section>
    ); 
  }
}
export default Content2;
