import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile-1.png'
export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="top-header">
                    <div className="nav-header">
                        <Link to="/" className="logo">
                            <h2>ملاعب</h2>
                        </Link>
                        <div className="search-cont">
                            <div className="search-section">
                                <form className="search-form">
                                    <input className="search-input" type="text" name="" value="" placeholder="ابحث عن ما تريدة" />
                                    <button className="search-button">
                                        <i className="iconsax" icon-name="search-normal-2"></i>
                                    </button>
                                </form>
                            </div>
                            <Link to='/filter' className="filter-btn">
                                <i className="iconsax" icon-name="filter-search"></i>
                                تصفية
                            </Link>
                        </div>

                        <div className="navgition">
                            <div className="nav-head">
                                <button className="close-menu">
                                    <i className="iconsax" icon-name="x"></i>
                                </button>
                            </div>
                            <ul className="big-menu list-unstyled">
                                <li className="active">
                                    <Link to="/" className="logo"> الرئيسية </Link>
                                </li>
                                <li>
                                    <a href='/#stadium' spy={true} smooth={true} offset={0} duration={100}>ملاعب</a>
                                </li>
                                <li>
                                    <a href='/#academy'> اكادميات</a>
                                </li>
                                <li>
                                    <a href="/#championship"> بطولات</a>
                                </li>
                                <li>
                                    <a href="/store"> المتجر</a>
                                </li>
                                <li>
                                    <a href="#1"> مقاطع</a>
                                </li>
                                <div className="header-btn">
                                    <a href="cart" className="cart-ancor">
                                        <i className="iconsax" icon-name="shopping-cart"></i>
                                        <span className="counter">0</span>
                                    </a>
                                    <div className="user-profile dropdown">
                                        <div
                                            className="user-cont dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            role="button"
                                            aria-expanded="false"
                                        >
                                            <div className="user-info">
                                                <img src={profile} className="profile-img" alt='profile'></img>
                                                <span>عمر اشرف</span>
                                                <i className="iconsax" icon-name="chevron-down"></i>
                                            </div>
                                        </div>
                                        <ul className="profile-menu dropdown-menu">
                                            <li>
                                                <Link to="/account">
                                                    <i className="iconsax" icon-name="user-1"></i>
                                                    <span>حسابي</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/cart">
                                                    <i className="iconsax" icon-name="basket-tick-1"></i>
                                                    <span>طلباتي السابقة</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="#contact">
                                                    <i className="iconsax" icon-name="message-dash-2"></i>
                                                    <span>تواصل معنا</span>
                                                </a>
                                            </li>
                                            <li>
                                            <Link to="/Login" className="logout">
                                                    <i className="iconsax" icon-name="logout-2"></i>
                                                    <span>الخروج</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="menu-bars" id="menu-id">
                                        <i className="iconsax" icon-name="hamburger-menu"></i>
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
