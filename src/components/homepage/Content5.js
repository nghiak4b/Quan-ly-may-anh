import React, { Component } from "react";
import './../../App.css';
import img1 from './../../img/item details/logosony.png';
import img2 from './../../img/item details/logocanon.png';
import img3 from './../../img/item details/logonikon.png';
import img4 from './../../img/item details/logosigma.png';
class Content5 extends Component {
  render() {
    return (
      <section className="specials dark-side ">
        <div className="partner container-xl px-sm-5 px-xl-0 d-flex flex-column align-items-center">
          <h1 class="white-text">Đối tác chiến lược</h1>
          <div className="brands__img row">
                <img className="brands-item col-6 col-md-3" src={img1} alt="Sony chính hãng"/>
                <img className="brands-item col-6 col-md-3" src={img2} alt="Canon chính hãng"/>
                <img className="brands-item col-6 col-md-3" src={img3} alt="Nikon chính hãng"/>
                <img className="brands-item col-6 col-md-3" src={img4} alt="Sigma chính hãng"/></div>
          <div className="brands__text">
            <h3 className="white-text font-italic text-center mw-900">Là đối tác chiến lược của Sony, Canon, Nikon và Sigma, HALO sẽ miễn phí nâng thời hạn bảo hành sản phẩm chính hãng của các thương hiệu này: <span className="font-weight-bold">từ 12 tháng lên 24 tháng</span></h3>
          </div>
          <h1 className="white-text policy-title">Chính sách độc quyền</h1>
          <div className="policy d-flex justify-content-between">
            <div className="policy__item border border-white d-flex flex-column justify-content-between">
              <p className="policy__text white-text text-center"><span className="font-weight-bold">Miễn phí </span>vận chuyển nội thành Hà Nội<br/>(riêng phụ kiện: chỉ áp dụng với đơn hàng tổng giá trị trên 200,000 đ)</p>
              <div className="policy__icon d-flex justify-content-center align-items-center"><i className="fas fa-truck" aria-hidden="true"></i>
                <p className="white-text font-weight-bold">FREE</p>
              </div>
            </div>
            <div className="policy__item border border-white d-flex flex-column justify-content-between">
              <p className="policy__text white-text text-center">Đổi mới sản phẩm hoặc<span className="font-weight-bold"> hoàn tiền 100% </span>giá trị sản phẩm trong 14 ngày nếu có lỗi từ nhà sản xuất</p>
              <div className="policy__icon d-flex justify-content-center align-items-center"><i className="fas fa-history" aria-hidden="true"></i>
                <p className="white-text font-weight-bold">100%</p>
              </div>
            </div>
            <div className="policy__item border border-white d-flex flex-column justify-content-between">
              <p className="policy__text white-text text-center">Hỗ trợ trả góp mọi sản phẩm với <span className="font-weight-bold">0% lãi suất </span><br/>Hỗ trợ thanh toán trực tuyến, thẻ tín dụng, ví điện tử</p>
              <div className="policy__icon d-flex justify-content-center align-items-center"><i className="far fa-credit-card" aria-hidden="true"></i>
                <p className="white-text font-weight-bold">0%  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ); 
  }
}
export default Content5;
