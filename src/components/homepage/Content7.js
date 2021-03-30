import React, { Component } from "react";
import './../../App.css';
import img1 from './../../img/item details/ct71.png';
import img2 from './../../img/item details/ct72.png';

class Content7 extends Component {
  render() {
    return (
      <section className="review dark-side">
        <div className="container-xl px-sm-5">
          <h1 className="white-text review-title">HALO review</h1>
          <a className="review-item d-flex aos-init aos-animate" href="review" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <img className="review-item__img" src={img1} alt="Top DSLR đáng mua năm 2021"/>
            <div className="review-item__content d-flex flex-column justify-content-between">
              <div className="review-header d-flex flex-wrap align-items-start align-content-start">
                <h2 className="white-text w-100 font-weight-bold">Top 5 DSLR đáng mua năm 2021</h2>
                <p className="subtext font-italic white-text font-weight-light">Trung Đức</p>
                <p className="white-text subtext font-italic font-weight-light"><i className="far fa-clock mx-2" aria-hidden="true"></i>01/01/2021</p>
              </div>
              <p className="white-text review-preview">Trên thị trường có rất nhiều máy ảnh DSLR đến từ các hãng lớn như Nikon, Canon, Sony,... lựa chọn một chiếc máy ảnh phù hợp là điều không đơn giản.</p>
            </div></a><a className="review-item d-flex aos-init aos-animate" href="review" data-aos="fade-left" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="1000"><img className="review-item__img" src={ img2} alt="Top DSLR đáng mua năm 2021"/>
            <div className="review-item__content d-flex flex-column justify-content-between">
              <div className="review-header d-flex flex-wrap align-items-start align-content-start">
                <h2 className="white-text w-100 font-weight-bold">Top 5 DSLR đáng mua năm 2021</h2>
                <p className="subtext font-italic white-text font-weight-light">Trung Đức</p>
                <p className="white-text subtext font-italic font-weight-light"><i className="far fa-clock mx-2" aria-hidden="true"></i>01/01/2021</p>
              </div>
              <p className="white-text review-preview">Trên thị trường có rất nhiều máy ảnh DSLR đến từ các hãng lớn như Nikon, Canon, Sony,... lựa chọn một chiếc máy ảnh phù hợp là điều không đơn giản.</p>
            </div></a><a className="btn btn--light seemore-btn mx-auto review-btn" href="review">Xem thêm        </a>
        </div>
      </section>
    ); 
  }
}
export default Content7;

