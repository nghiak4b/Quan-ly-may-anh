import React, { Component } from 'react';
import logo_img from '../img/logohalo.png';

class Footer extends Component {
    render() {
        return (
            <footer className="">
                <div className="about">
                    <img className="logo-img-footer" src={logo_img} alt="Halo" />
                    <div className="content">
                        <ul>
                            <li className="content-list">Giới thiệu</li>
                            <li className="content-list">Hỗ trợ</li>
                            <li className="content-list">Chính sách</li>
                            <li className="content-list">Liên hệ</li>
                        </ul>
                        <div className="aboutus-info">
                        Địa chỉ: Tầng 12A, tòa nhà Viwaseen Tower, số 48, Tố Hữu, Hà Nội <br />
                        Tổng đài tư vấn mua hàng: 099.999.9999 <br/>
                        Email: info@halo.vn / ducnt444@gmail.com <br/>
                        ĐKKD số 0123456789 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 01/01/2021
                        </div>
                        <div className="aboutus-copyright">
                            <i>Bản quyền thuộc Công ty TNHH HALO Việt Nam</i>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
