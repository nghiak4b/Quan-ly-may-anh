import React, { Component } from 'react'; 
import './../../Review.css';
import article1 from './../../img/img--review/article-img-1.jpg';
import article2 from './../../img/img--review/article-img-2.jpg';
import article3 from './../../img/img--review/article-img-3.jpg';
import article4 from './../../img/img--review/article-img-4.jpg';
import article5 from './../../img/img--review/article-img-5.jpg';
import article7 from './../../img/img--review/article-img-7.jpg';
import article8 from './../../img/img--review/article-img-8.png';
import aside1 from './../../img/img--review/aside-img-1.png';
import aside2 from './../../img/img--review/aside-img-2.jpg';
import aside3 from './../../img/img--review/aside-img-3.png';
import bannertext from'./../../img/img--review/review-banner.png';

class Review extends Component {
  render() {
    return (
    <div>
      <div className="review__main-banner"><img className="main-banner__text" src={bannertext} alt="đánh giá máy ảnh"/></div>
        <section className="main-area container-xl">
        <div className="review__post-area review-article">
          <h1 className="review-article__header text-left">Canon 1DX Mark III: Vua của các vị&nbsp;vua</h1>
          <h3 className="review-article__subtext post__subtext font-italic"> <span className="post__author">Trung Đức</span><span className="post__time-icon mx-2 mx-md-3 mx-xl-4"> <i className="far fa-clock" aria-hidden="true"></i></span><span className="post__time-dates">01/01/2021</span></h3>
          <h2 className="review-article__preview text-left"> <span>Cầm 1DX mark III không chỉ mang lại sự phấn khích với thiết bị công nghệ cao mà còn là niềm cảm hứng bất tận khi tác&nbsp;nghiệp.</span></h2>
          <div className="review-article__content">
            <div className="article__section article__section--design">
              <h2 className="article__header">THIẾT KẾ</h2>
              <figure className="figure--full"> <img src={article1} alt="1DX mark III"/>
                <figcaption>Một trong những chiếc máy to nhất trong mọi máy full-frame, trọng lượng khoảng&nbsp;1.5kg.</figcaption>
              </figure>
              <figure className="figure--full"> <img src={article2} alt="1DX mark III"/>
                <figcaption>Nikon D850 (trái) đặt cạnh 1DX mark III (bên&nbsp;phải)</figcaption>
              </figure>
              <p className="article__text">Đây là một trong những chiếc máy ảnh full-frame đắt nhất của Canon có giá bán là 189 triệu đồng (tính đến 2020). Không chỉ vậy, các phụ kiện của chiếc máy này cũng rất nhiều tiền, ví dụ cục pin đi kèm cũng tầm 4,5 triệu ~ 5 triệu đồng một cục. Cả thẻ nhớ cũng có giá 12 triệu đồng, còn có cả hai khe cắm&nbsp;thẻ. </p>
              <figure className="figure--half">  <img src={article3} alt="1DX mark III"/>
                <figcaption>1DX Mark III có hai khe cắm thẻ CFexpress</figcaption>
              </figure>
              <figure className="figure--half">  <img src={article4} alt="1DX mark III"/>
                <figcaption>Các cổng kết nối trên Canon 1DX mark III</figcaption>
              </figure>
              <figure className="figure--half"> <img src={article5} alt="1DX mark III"/>
                <figcaption>Ở mặt trước bên phải, ta có phần tay cầm dọc da khổng lồ. Cạnh lens là rất nhiều nút&nbsp;bấm.</figcaption>
              </figure>
              <figure className="figure--half"> <img src={article7} alt="1DX mark III"/>
                <figcaption>Khi quay dọc máy ra, ta sẽ thấy đây chính là báng tay cầm thứ hai. 1DX mark III còn có màn hình phụ và các nút điều&nbsp;khiển.</figcaption>
              </figure>
            </div>
            <div className="article__section article__section--features"> 
              <h2 className="article__header">TÍNH NĂNG</h2>
              <p className="article__text">Dù chụp ở môi trường gần như tối hoàn toàn. Canon 1DX Mark III vẫn bắt nét được ngay lập tức, rất nhanh và đáng tin&nbsp;cậy</p>
              <figure> <img src={article8} alt="1DX mark III"/>
                <figcaption>F-stop: f/2.8 | Exposure Time: 1/30 sec | ISO Speed: 100&nbsp;|&nbsp;Lens:&nbsp;EF85mm&nbsp;f/1.4L&nbsp;IS&nbsp;USM       </figcaption>
              </figure>
            </div>
          </div>
          <div className="review-article__links">
            <ul> 
              <li> <a className="text-primary" >Top 5 DSLR đáng mua năm 2021</a></li>
              <li> <a className="text-primary" >Nikon Z7 Review: Canh bạc cho tương lai của&nbsp;Nikon</a></li>
            </ul>
          </div>
        </div>
        <aside className="review__aside-area hidden-till-md">
          <h3 className="aside__header">Đọc nhiều nhất</h3><a className="aside__post d-block" ><img className="aside__post--img" src={aside1} alt="nikon D500"/>
            <p className="aside__post--header">D500 Review: Canh bạc của Nikon</p></a><a className="aside__post d-block"><img className="aside__post--img" src={aside2} alt="canon nikon"/>
            <p className="aside__post--header">Vị thế hiện tại của 2 ông lớn Ca-Ni</p></a><a className="aside__post d-block" ><img className="aside__post--img" src={aside3} alt="nikon D5600"/>
            <p className="aside__post--header">D5600 Review: Máy ảnh cho mọi nhà</p></a>
        </aside>
      </section>
    </div>
    );
  }
}

export default Review;