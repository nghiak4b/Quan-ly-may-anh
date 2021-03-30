import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './../../Info.css';
import Shop from './../shop/Shop';
import mainimg1 from './../../img/img--details/detail__main-img-1.jpg';
import detail1 from './../../img/img--details/detail__sub-img-1.jpg';
import detail2 from './../../img/img--details/detail__sub-img-2.jpg';
import detail3 from './../../img/img--details/detail__sub-img-3.jpg';
import detail4 from './../../img/img--details/detail__sub-img-4.jpg';
import detail5 from './../../img/img--details/detail__sub-img-5.jpg';
import sample1 from './../../img/img--details/sample-1.png';
import sample2 from './../../img/img--details/sample-2.png';
import sample3 from './../../img/img--details/sample-3.png';
import badgesale from './../../img/img--misc/badge--sale.png';
import badgehot from './../../img/img--misc/badge--hot.png';
import gift2 from './../../img/img--details/gift-img-2.jpg';
import intro1 from './../../img/img--details/intro-img-1.jpg';
import intro2 from './../../img/img--details/intro-img-2.png';
import intro3 from './../../img/img--details/intro-img-3.jpg';
import intro4 from './../../img/img--details/intro-img-4.jpg';
import intro6 from './../../img/img--details/intro-img-6.png';
import review from './../../img/img--details/review-img.jpg';
import avata1 from './../../img/img--details/avatar-1.jpg';
import avata2 from './../../img/img--details/avatar-2.jpg';
import avata3 from './../../img/img--details/avatar-3.jpg';
import canon1 from './../../img/img--camera-body/canon-eos-5d-mark-iv-card.jpg';
import item2 from './../../img/img--item/item-2.jpg';

class Product extends Component {
  render() {
    return (
      <Router>
      <div>
        <br /> <br /><br /><br /><br /> 
        <div className="details__wrapper container-xl">
          <h1 className="details__header w-100 text-left">Máy ảnh DSLR Canon EOS 1DX Mark&nbsp;III </h1>
          <div className="details__review-score w-100">
            <h2 className="score--user font-weight-bold text-left">Người dùng đánh&nbsp;giá: <span>x / 5</span></h2>
            <h2 className="score--shop font-weight-bold text-left">HALO đánh giá: <span>x / 5</span></h2>
          </div>
          <section className="details__img-area"><img className="details__main-img" src={mainimg1} alt="Canon 1DX Mark III" />
            <div className="details__sub-img-area"><img className="details__sub-img" src={mainimg1} alt="Canon 1DX Mark III" /><img className="details__sub-img" src={detail1} alt="Canon 1DX Mark III" /><img className="details__sub-img" src={detail2} alt="Canon 1DX Mark III" /><img className="details__sub-img" src={detail3} alt="Canon 1DX Mark III" /><img className="details__sub-img" src={detail4} alt="Canon 1DX Mark III" /><img className="details__sub-img" src={detail5} alt="Canon 1DX Mark III" /></div>
            <div className="modal fade" id="main-img--full-size">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <button className="close" type="button" data-dismiss="modal">&times;</button><img src={sample1} alt="Canon 1DX Mark III" />
                </div>
              </div>
            </div>
          </section>
          <section className="details__summary">
            <div className="summary__basic">
              <h2 className="details__sub-header">Thông tin cơ bản</h2>
              <p className="summary__text">Xuất xứ: Chính hãng, fullbox<br />Độ phân giải: 20.1 MP<br />Kích cỡ cảm biến: Full-frame<br />Ngàm: EF Mount<br />Bảo hành: Chính hãng 24 tháng <a className="text-primary">(xem chi tiết)</a></p>
              <p className="summary__text">Canon EOS 1D X Mark III mang đến chuẩn mực cao nhất cho dòng máy ảnh DSLR full-frame. Cho tới hiện tại, đây là chiếc máy ảnh hàng đầu và đẳng cấp nhất của&nbsp;Canon.</p>
              <p className="details__price">45 000 000đ</p>
              <p className="details__sale-text"><span className="details__old-price">50 000 000đ</span><span className="details__sale-badge"><img src={badgesale} alt="" /></span><span className="details__sale-amount">(Giảm 5 000 000đ)</span></p>
              <div className="summary__btn-wrapper"><a className="summary__btn btn d-flex justify-content-center align-items-center" href="/shop">Mua ngay</a>
                <a className="summary__btn btn btn--add-to-cart" href="/shop">Thêm vào giỏ hàng </a>
              </div>
              <div className="summary__box-content">
                <h2 className="details__sub-header text-left mb-3">Hộp sản phẩm bao gồm</h2>
                <ul className="box-content__list">
                  <li className="box-content__item">1x Máy ảnh Canon EOS-1D X Mark&nbsp;III</li>
                  <li className="box-content__item">1x pin Canon LP-E19</li>
                  <li className="box-content__item">1x dock sạc Canon LC-E19</li>
                  <li className="box-content__item">1x nắp ngàm EF</li>
                  <li className="box-content__item">1x dây đeo Canon L7 Wide Straps cỡ&nbsp;XL</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="details__offers">
            <div className="offers__gift">
              <h2 className="details__sub-header">Quà tặng <br /><span className="font-14  font-weight-normal">(Tổng giá trị 900.000đ)</span></h2>
              <div className="gift-wrapper"> <img className="gift-img" src={gift2} alt="quà tặng Canon 1DX Mark III" /><img className="gift-img" src={gift2} alt="quà tặng Canon 1DX Mark III" /><img className="gift-img" src={gift2} alt="quà tặng Canon 1DX Mark III" /></div>
            </div>
            <div className="offers__special">
              <h2 className="details__sub-header">Ưu đãi đặc biệt</h2>
              <ul className="special__list">
                <li className="special__item">- Miễn phí giao hàng toàn quốc trong vòng 2&nbsp;-&nbsp;5&nbsp;ngày</li>
                <li className="special__item">- Hỗ trợ dán màn hình miễn phí trọn đời sản&nbsp;phẩm.</li>
                <li className="special__item">- Miễn phí vệ sinh, khử mốc trong thời hạn bảo&nbsp;hành </li>
                <li className="special__item">- Tặng voucher giá trị 1.000.000đ cho lần mua hàng kế&nbsp;tiếp</li>
              </ul>
            </div>
            <button className="offers__btn btn">Đăng ký mua trả góp lãi suất 0%</button>
            <p className="offers__contact">Tư vấn miền Bắc: <a className="text-primary" >0397496263 </a>(Mr. Nguyễn) <br />Tư vấn miền Trung: <a className="text-primary">0397496263 </a>(Mr. Trung)    <br />Tư vấn miền Nam: <a className="text-primary" >0397496263 </a>(Mr. Đức)    </p>
          </section>
          <section className="details__main-info">
            <div className="main-info__toggler" data-toggle="collapse" data-target="#intro"><span className="details__sub-header">Giới thiệu</span><span className="main-info__toggler-indicator"><i className="fas fa-chevron-up"></i></span></div>
            <div className="main-info__content collapse show" id="intro">
              <h3 className="main-info__inner-header">Cảm biến mới, hệ thống hình ảnh mới</h3><img src={intro1} alt="Canon 1DX Mark III" />
              <p>Canon EOS 1D X Mark III sử dụng cảm biến hoàn toàn mới 20.1MP kết hợp với bộ xử lý hình ảnh DIGIC X mang lại chất lượng hình ảnh sắc nét ấn tượng với độ chi tiết cao nhất, giảm thiểu xác suất sai màu và hiệu ứng&nbsp;mới. </p><img src={intro2} alt="Canon 1DX Mark III" />
              <p>Ngoài tốc độ ấn tượng, bộ xử lý cảm biến còn có phạm vi độ nhạy của dải ISO từ 100-102400, có thể mở rộng thành ISO 50-819200 để hỗ trợ làm việc trong nhiều điều kiện ánh sáng khác&nbsp;nhau. </p>
              <h3 className="main-info__inner-header">Hệ thống lấy nét</h3><img src={intro3} alt="Canon 1DX Mark III" />
              <p>Canon EOS 1DX Mark III sử dụng cảm biến AF mới với khả năng tự động lấy nét chính xác qua kính ngắm, Live View và video. Thông qua kính ngắm, hệ thống AF gồm 191 điểm lấy nét nhanh và chính xác tuyệt đối không chỉ ở tốc độ mà còn đạt khả năng AF Tracking mới. Về cách nhận diện khuôn mặt, EOS-1D X Mark III hỗ trợ công nghệ Head Detection kết hợp Deep Learning và khả năng đọc, phân tích chủ thể thông qua hình dạng và màu&nbsp;sắc.</p>
              <h3 className="main-info__inner-header">Tốc độ đỉnh cao</h3><img src={intro4} alt="Canon 1DX Mark III" />
              <p>Tốc độ chụp nhanh của Burst Shooting mang đến cơ hội cao hơn cho các nhiếp ảnh gia chuyên nghiệp để ghi lại khoảnh khắc chính xác với bố cục hoàn hảo. Máy ảnh EOS-1D X Mark III có tốc độ chụp ấn tượng lên tới 16 khung hình / giây bằng kính ngắm, đồng bộ với hệ thống AF / AE mới được phát triển để đáp ứng nhanh về lấy nét tự động chính xác và kiểm soát phơi sáng trong mọi lần chụp quyết&nbsp;định.</p>
              <h3 className="main-info__inner-header">Thiết kế bền bỉ</h3><img src={intro6} alt="Canon 1DX Mark III" />
              <p>EOS-1D X Mark III được trang bị độ bền cơ chế màn trập khoảng 500.000 shot. Được thiết kế với thân máy bằng hợp kim magiê chắc chắn, có khả năng chống bụi và ẩm xung quanh các khu vực quan trọng, EOS-1D X Mark III sẵn sàng chống đỡ trong mọi nhiệm&nbsp;vụ.</p>
            </div>
            <div className="main-info__toggler" data-toggle="collapse" data-target="#specs"><span className="details__sub-header">Thông số kỹ thuật</span><span className="main-info__toggler-indicator"> <i className="fas fa-chevron-up"></i></span></div>
            <div className="main-info__content collapse show" id="specs">
              <div className="specs__category">
                <h3 className="main-info__inner-header">Hình ảnh</h3>
                <div className="category__row">
                  <p className="category__key">Kích cỡ cảm biến</p>
                  <p className="category__value">Full frame BSI-CMOS (35.9&nbsp;x&nbsp;23.9&nbsp;mm)</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Độ Phân Giải</p>
                  <p className="category__value">20.1 Megapixel</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Kích Thước Ảnh</p>
                  <p className="category__value">5472px x 3648px (Tỷ lệ ảnh 3:2)</p>
                </div>
              </div>
              <div className="specs__category">
                <h3 className="main-info__inner-header">Ánh sáng</h3>
                <div className="category__row">
                  <p className="category__key">ISO</p>
                  <p className="category__value">100 - 102400 (Mở rộng: 50&nbsp;-&nbsp;819200)</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Tốc Độ Chụp Liên Tục</p>
                  <p className="category__value">20 hình/giây</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Bù trừ sáng(EV)</p>
                  <p className="category__value">-5 đến +5 EV (1/3, 1/2 EV)</p>
                </div>
              </div>
              <div className="specs__category">
                <h3 className="main-info__inner-header">Video</h3>
                <div className="category__row">
                  <p className="category__key">Độ Phân Giải Video</p>
                  <p className="category__value">DCI 4K (4096 x 2160)</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Micro</p>
                  <p className="category__value">2 micro stereo (hỗ trợ micro&nbsp;ngoài)</p>
                </div>
              </div>
              <div className="specs__category">
                <h3 className="main-info__inner-header">Kính Ngắm / Màn Hình</h3>
                <div className="category__row">
                  <p className="category__key">Kích Thước Màn Hình</p>
                  <p className="category__value">3.2 inch</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Đặc Tính Màn Hình</p>
                  <p className="category__value">LCD cảm ứng</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Độ Bao Phủ Kính Ngắm</p>
                  <p className="category__value">100%</p>
                </div>
              </div>
              <div className="specs__category">
                <h3 className="main-info__inner-header">Kết Nối</h3>
                <div className="category__row">
                  <p className="category__key">Số Khe Cắm Thẻ Nhớ</p>
                  <p className="category__value">2 khe (hoạt động đồng thời)</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Jack Cắm</p>
                  <p className="category__value">USB Type-C (USB 3.1), HDMI C (Mini), Canon N3, 3.5mm Headphone, 3.5mm Microphone, PC Sync&nbsp;Socket,&nbsp;RJ45</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Kết Nối Không Dây</p>
                  <p className="category__value">Wi-Fi/ Bluetooth</p>
                </div>
                <div className="category__row">
                  <p className="category__key">GPS</p>
                  <p className="category__value">Có</p>
                </div>
              </div>
              <div className="specs__category">
                <h3 className="main-info__inner-header">Pin / Kích Thước / Trọng Lượng</h3>
                <div className="category__row">
                  <p className="category__key">Pin</p>
                  <p className="category__value">1 x LP-E19 Lithium-Ion, 2750 mAh (Trung bình 285&nbsp;Shots)</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Kích Thước</p>
                  <p className="category__value">158 x 167.6 x 82.6 mm (cao x ngang x dày)</p>
                </div>
                <div className="category__row">
                  <p className="category__key">Trọng lượng</p>
                  <p className="category__value">1400 g (bao gồm pin, thẻ nhớ)</p>
                </div>
              </div>
            </div>
            <div className="main-info__toggler" data-toggle="collapse" data-target="#review"><span className="details__sub-header">Đánh giá của HALO</span><span className="main-info__toggler-indicator"> <i className="fas fa-chevron-up"></i></span></div>
            <div className="main-info__content collapse show" id="review"><img className="review__img d-block" src={review} alt="đánh giá Canon 1DX Mark III" />
              <div className="review__content">
                <h1 className="review__header text-left">Canon 1DX Mark III: Vua của các vị vua</h1>
                <div className="review__sub-header"> <span className="author ">Trung Đức</span><span className="time "> <i className="far fa-clock"></i>01/01/2021</span></div>
                <p className="review__sub-preview">1DX mark III không chỉ mang lại sự phấn khích với thiết bị công nghệ cao, mà còn là niềm cảm hứng bất tận khi tác nghiệp. Đây là camera có độ ổn định cao nhất thế giới: dù là ra chiến trường, leo đỉnh Everest hay đơn thuần là chụp người thương, bạn sẽ luôn thấy an tâm là sẽ có những tấm ảnh chất lượng và tối ưu&nbsp;nhất.</p>
                <button className="review__btn btn--dark btn">Xem chi tiết</button>
              </div>
            </div>
            <div className="main-info__toggler" data-toggle="collapse" data-target="#sample"><span className="details__sub-header">Ảnh chụp mẫu </span><span className="main-info__toggler-indicator"> <i className="fas fa-chevron-up"></i></span></div>
            <div className="main-info__content collapse show" id="sample">
              <div className="card-columns">
                <div className="card"><img className="card-img-bot" src={sample1} alt="chụp mẫu Canon 1DX Mark III" data-toggle="modal" data-target="#sample--full-size" /></div>
                <div className="card"><img className="card-img-bot" src={sample2} alt="chụp mẫu Canon 1DX Mark III" data-toggle="modal" data-target="#sample--full-size" /></div>
                <div className="card"><img className="card-img-bot" src={sample3} alt="chụp mẫu Canon 1DX Mark III" data-toggle="modal" data-target="#sample--full-size" /></div>
                <div className="card"><img className="card-img-bot" src={sample1} alt="chụp mẫu Canon 1DX Mark III" data-toggle="modal" data-target="#sample--full-size" /></div>
                <div className="card"><img className="card-img-bot" src={sample2} alt="chụp mẫu Canon 1DX Mark III" data-toggle="modal" data-target="#sample--full-size" /></div>
                <div className="card"><img className="card-img-bot" src={sample3} alt="chụp mẫu Canon 1DX Mark III" data-toggle="modal" data-target="#sample--full-size" /></div>
              </div>
              <div className="modal fade" id="sample--full-size">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <button className="close" type="button" data-dismiss="modal">&times;</button><img src={sample1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-info__toggler" data-toggle="collapse" data-target="#comment"><span className="details__sub-header">Bình luận</span><span className="main-info__toggler-indicator"> <i className="fas fa-chevron-up"></i></span></div>
            <div className="main-info__content collapse show" id="comment">
              <form className="comment__form" action="">
                <input className="comment__input" type="text" placeholder="Nhập bình luận (cần đăng nhập)" disabled />
                <button className="comment__btn btn   btn-primary" type="submit" disabled>Gửi</button>
              </form>
              <div className="comment__old-comment media"><img className="avatar rounded-circle" src={avata1} alt="" />
                <div className="old-comment__content media-body">
                  <h3 className="details__sub-header">Đánh giá: <span className="mr-auto ml-2">4 / 5</span><small className=""><i className="far fa-clock"></i> 01/01/2021</small></h3>
                  <h3 className="username details__sub-header">John Doe</h3>
                  <p className="comment-text">Chất lượng tương xứng với giá tiền</p>
                  <p className="reply-report"> <a className="replyToggler disabled" > <i className="fas fa-reply mr-3"></i>Trả lời</a><a className="reportToggler" ><i className="fas fa-flag mr-3"></i>Báo cáo</a></p>
                </div>
              </div>
              <div className="comment__old-comment reply media"><img className="avatar rounded-circle" src={avata2} alt="" />
                <div className="old-comment__content media-body">
                  <h3 className="details__sub-header">Đánh giá: <span className="mr-auto ml-2">4 / 5</span><small className=""><i className="far fa-clock"></i> 01/01/2021</small></h3>
                  <h3 className="username details__sub-header">John Also Doe</h3>
                  <p className="comment-text">Đồng ý</p>
                  <p className="reply-report"> <a className="replyToggler" > <i className="fas fa-reply mr-3"></i>Trả lời</a><a className="reportToggler" ><i className="fas fa-flag mr-3"></i>Báo cáo</a></p>
                </div>
              </div>
              <div className="comment__old-comment media"><img className="avatar rounded-circle" src={avata3} alt="" />
                <div className="old-comment__content media-body">
                  <h3 className="details__sub-header">Đánh giá: <span className="mr-auto ml-2">4 / 5</span><small className=""><i className="far fa-clock"></i> 01/01/2021</small></h3>
                  <h3 className="username details__sub-header">John Still Doe</h3>
                  <p className="comment-text">Hơi nặng và khó dùng.</p>
                  <p className="reply-report"> <a className="replyToggler" > <i className="fas fa-reply mr-3"></i>Trả lời</a><a className="reportToggler" ><i className="fas fa-flag mr-3"></i>Báo cáo</a></p>
                </div>
              </div>
            </div>
          </section>
          <section className="details__recommend">
            <h2 className="details__sub-header">Sản phẩm đi kèm khuyên dùng</h2>
            <div className="recommend__wrapper">
              <div className="card item item--hot item--sale"><img className="card-img-top" src={canon1} alt="canon-eos-5d-mark-iv" /><img className="item__badge item__badge--hot" src={badgehot} alt="" />
                <div className="card-body text-center">
                  <div className="item__header">
                    <p className="item__name font-weight-bold font-18">Canon EOS 5D Mark&nbsp;IV</p>
                    <p className="item__subtext  font-weight-light">(Mới 100% fullbox)</p>
                  </div>
                  <p className="item__price font-weight-bold">50.090.000đ</p>
                  <div className="item__sale-module font-weight-bold"><span className="sale-module__old-price">58.090.000đ</span><img className="item__badge item__badge--sale" src={badgesale} alt="" /><span className="sale-module__sale-amount ">(Giảm 8.000.000đ)</span></div><button className="btn btn--dark seemore-btn" >Xem chi tiết </button>
                </div>
              </div>
              <div className="card item item--hot item--sale"><img className="card-img-top" src={item2} alt="Fujifilm X-E3 Silver" /><img className="item__badge item__badge--hot" src={badgehot} alt="" />
                <div className="card-body text-center">
                  <div className="item__header">
                    <p className="item__name font-weight-bold">Fujifilm X-E3 Silver</p>
                    <p className="item__subtext  font-weight-light">(Mới 100% fullbox)</p>
                  </div>
                  <p className="item__price font-weight-bold">10.290.000đ</p>
                  <div className="item__sale-module font-weight-bold"><span className="sale-module__old-price">17.490.000đ</span><img className="item__badge item__badge--sale" src={badgesale} alt="" /><span className="sale-module__sale-amount ">(Giảm 7.200.000đ)</span></div><button className="btn btn--dark seemore-btn" >Xem chi tiết </button>
                </div>
              </div>
            </div>
          </section>
          
        </div>
        <Route path="/shop" component={Shop} />
      </div>
      </Router>
    );
  }
}

export default Product;
