import React, { Component } from "react";
import instagram_logo from './../../img/img--social/instagram-logo.png';
import facebook_logo from './../../img/img--social/facebook-logo.png';
import google_logo from './../../img/img--social/google-logo.png';
class Content8 extends Component {
    render() {
        return (
            <div className="news">
                <p className="news-title">Đăng ký để nhận tin mới nhất từ HALO</p>
                <form className="news-form">
                    <input type="Email" className="news-email" placeholder="Email của bạn..." required />
                    <button className="news-send-btn">Gửi</button>
                </form>
                <p className="news-text">Hoặc theo dõi chúng tôi tại</p>
                <div className="news-social">
                    <img className="news-social-icon facebbok-img" src={facebook_logo} alt="Facebook" />
                    <img className="news-social-icon insta-img" src={instagram_logo} alt="Instagram" />
                    <img className="news-social-icon google-img" src={google_logo} alt="Google" />
                </div>
            </div>
        );
    }
}
export default Content8;

