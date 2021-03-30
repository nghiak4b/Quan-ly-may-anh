import React, { Component } from "react";
import './../../App.css';
import prev from './../../img/img--misc/prev-arrow-xs-v3.png';
import next from './../../img/img--misc/next-arrow-xs-v3.png';
import a9logo from './../../img/img--carousel/a9-logo.png';
import lotrlogo from './../../img/img--carousel/lotr-logo.png';
import carouselextra1 from './../../img/img--carousel/carousel-1-extra-1.png';
import carouselextra2 from './../../img/img--carousel/carousel-1-extra-2.png';
import carouselextra3 from './../../img/img--carousel/carousel-1-extra-3.png';
import carouselextra21 from './../../img/img--carousel/carousel-2-extra-1.png';
import carouselextra22 from './../../img/img--carousel/carousel-2-extra-2.png';
import carouselextra23 from './../../img/img--carousel/carousel-2-extra-3.png';

class Content1 extends Component {
  render() {
    return (
      <div className="carousel slide" id="main-carousel" data-ride="carousel" data-interval="false" data-touch="true">
        <ul className="carousel-indicators">
          <li className="active" data-target="#main-carousel" data-slide-to="0"></li>
          <li data-target="#main-carousel" data-slide-to="1"></li>
          <li data-target="#main-carousel" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item banner-1 container-fluid p-0 active">
            <div className="carousel-caption container-xl pb-0 px-0 px-md-5 px-xl-0">
              <h1 className="carousel-title font-weight-bold">Tiêu điểm tháng 1</h1>
              <div className="carousel-caption__text">
                <div className="logo-wrapper-1">
                  <p className="logo-canon">Canon</p>
                  <p className="eos-r">EOS R</p>
                  <div className="progress" >
                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" ></div>
                  </div>
                </div>
                <p className="main-carousel__text">ĐỊNH NGHĨA LẠI </p>
                <p className="main-carousel__text">CHUẨN MỰC HÌNH ẢNH HIỆN ĐẠI</p><a className="btn btn--light seemore-btn" href="infomation">Xem chi tiết</a>
              </div>
              <div className="carousel-caption__img"></div>
              <div className="carousel-caption__extra hidden-till-md">
                <div className="extra"><img className="extra-img" src={carouselextra1} alt="Canon EOS R" />
                  <p className="extra-text">LẤY NÉT TỰ ĐỘNG DUAL PIXEL CMOS </p>
                </div>
                <div className="extra"><img className="extra-img" src={carouselextra2} alt="Canon EOS R" />
                  <p className="extra-text">TỐI ƯU HÓA ĐIỀU KHIỂN </p>
                </div>
                <div className="extra"><img className="extra-img" src={carouselextra3} alt="Canon EOS R" />
                  <p className="extra-text">QUAY VIDEO ĐA CHẾ ĐỘ ĐỘ PHÂN GIẢI 4K</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item banner-2 container-fluid p-0">
            <div className="carousel-caption container-xl pb-0 px-0 px-md-5 px-xl-0">
              <h1 className="carousel-title font-weight-bold">Tiêu điểm tháng 1</h1>
              <div className="carousel-caption__text">
                <div className="logo-wrapper-2">
                  <div className="progress hidden-till-md">
                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" ></div>
                  </div>
                  <div className="logo-sony-a9-wrapper">
                    <p className="logo-sony">SONY</p><img className="a9-logo" src={a9logo} alt="SONY a9 mark 2" />
                  </div>
                  <div className="progress display-till-md">
                    <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="carousel-caption__extra hidden-till-md">
                  <div className="extra"><img className="extra-img" src={carouselextra21} alt="SONY a9 mark 2" /></div>
                  <div className="extra"><img className="extra-img" src={carouselextra22} alt="SONY a9 mark 2" /></div>
                  <div className="extra"><img className="extra-img" src={carouselextra23} alt="SONY a9 mark 2" /></div>
                </div>
                <p className="main-carousel__text display-till-md">SỰ HOÀN HẢO</p>
                <p className="main-carousel__text hidden-till-md">Sự hoàn hảo chưa bao giờ đơn giản đến vậy</p>
                <p className="main-carousel__text display-till-md">CHƯA BAO GIỜ ĐƠN GIẢN  ĐẾN VẬY</p><a className="btn btn--light seemore-btn" >Xem chi tiết</a>
              </div>
              <div className="carousel-caption__img"></div>
            </div>
          </div>
          <div className="carousel-item banner-3 container-fluid p-0"><img className="outer-ring hidden-till-md" src="img/img--carousel/outer-ring-min.png" alt=""/><img className="inner-ring" src="img/img--carousel/ring-v5.png" alt=""/>
            <div className="carousel-caption container-xl pb-0 px-0 px-md-5 px-xl-0">
              <h1 className="carousel-title font-weight-bold">Tiêu điểm tháng 1</h1>
              <div className="carousel-caption__text">
                <div className="logo-wrapper-3">
                  <p className="logo-sony">SONY</p><span className="collab"><i className="fas fa-times" aria-hidden="true"></i></span><img className="lotr-logo" src={lotrlogo} alt="lord of the rings"/>
                </div>
                <div className="carousel-caption__img--triple hidden-till-md">
                  <div className="carousel-caption__img"></div>
                  <div className="carousel-caption__img"></div>
                  <div className="carousel-caption__img"></div>
                </div>
                <p className="main-carousel__text font-italic font-weight-normal">"Một ngàm cho tất cả"</p>
                <p className="main-carousel__text">Kết nối mọi thứ với ngàm E-mount của <span className="logo-sony-inline">SONY</span></p><a className="btn btn--light seemore-btn" href="infomation">Xem chi tiết</a>
              </div>
              <div className="carousel-caption__img display-till-md"></div>
            </div>
          </div>          
        </div><a className="carousel-control-prev" href="#main-carousel" data-slide="prev"><img src={prev} alt="next" /></a><a className="carousel-control-next" href="#main-carousel" data-slide="next"><img src={next} alt="prev" /></a>
      </div>
    );
  }
}
export default Content1;
