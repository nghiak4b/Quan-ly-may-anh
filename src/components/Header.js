import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Shop from './shop/Shop';
import Homepage from './homepage/Homepage';
import Review from './review/Review';
import Infomation from './infomation/Infomation';
import logo_img from '../img/logohalo.png';
class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
                            <li>
                                <div className="logo-wrapper waves-light waves-effect waves-light">
                                    <a>
                                        <img src={logo_img} alt="" className="img-fluid flex-center logo-sidebar" />
                                    </a>
                                </div>
                            </li>
                            <li>
                                <form className="search-form" role="search">
                                    <div className="form-group waves-light waves-effect waves-light">
                                        <input type="text" className="form-control" placeholder="Tìm kiếm" />
                                    </div>
                                </form>
                            </li>
                            <li>

                                <ul className="collapsible collapsible-accordion">
                                    <li>
                                        <a className="collapsible-header waves-effect arrow-r">
                                            <i className="sidebar-list-icon fa fa-shopping-bag"></i> Giỏ hàng
                                <i className="sidebar-list-icon fa fa-angle-down rotate-icon"></i>
                                        </a>
                                        <div className="collapsible-body">
                                            <ul>
                                                <li>
                                                    <Link to="/shop" className="waves-effect sidebar-sublist">Giỏ hàng</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="active">
                                        <a className="collapsible-header waves-effect arrow-r">
                                            <i className="sidebar-list-icon fa fa-shopping-cart"></i> Thông tin sản phẩm
                                <i className="sidebar-list-icon fa fa-angle-down rotate-icon"></i>
                                        </a>
                                        <div className="collapsible-body">
                                            <ul>
                                                <li>
                                                    <Link to="/infomation" className="waves-effect sidebar-sublist">Máy ảnh DSLR Canon EOS 1DX Mark III</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="collapsible-header waves-effect arrow-r">
                                            <i className="sidebar-list-icon fa fa-dashboard"></i> Đánh giá
                                <i className="sidebar-list-icon fa fa-angle-down rotate-icon"></i>
                                        </a>
                                        <div className="collapsible-body">
                                            <ul>
                                                <li>
                                                    <Link to="/review" className="waves-effect sidebar-sublist">Canon 1DX Mark III</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                            </li>

                            <div className="sidenav-bg mask-strong sidenav-dark-bg"></div>

                            <div className="ps__scrollbar-x-rail">
                                <div className="ps__scrollbar-x" tabIndex="0"></div>
                            </div>
                            <div className="ps__scrollbar-y-rail">
                                <div className="ps__scrollbar-y" tabIndex="0"></div>
                            </div>
                        </ul>

                        <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

                            <div className="float-left">
                                <a data-activates="slide-out" className="button-collapse">
                                    <i className="fa fa-bars"></i>
                                </a>
                            </div>

                            <div className="breadcrumb-dn mr-auto">
                                <ol className="breadcrumb header-breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/" className="active">
                                        <img className="logo-img-header" src={logo_img} alt="Halo" />
                                        </Link>
                                    </li>
                                </ol>
                            </div>

                            <ul className="nav navbar-nav nav-flex-icons ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <i className="fa fa-user"></i> Tài Khoản</a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                        <a className="dropdown-item waves-effect waves-light">Đăng Ký</a>
                                        <a className="dropdown-item waves-effect waves-light">Đăng Nhập</a>
                                        <a className="dropdown-item waves-effect waves-light">Đăng Xuất</a>
                                    </div>
                                </li>
                            </ul>

                        </nav>
                    </header>
                    <Route path="/" exact component={ Homepage} />
                    <Route path="/shop"  component={Shop} />
                    <Route path="/review"  component={Review} />
                    <Route path="/infomation"  component={Infomation} />
                </div>
            </Router>
        );
    }
}

export default Header;
