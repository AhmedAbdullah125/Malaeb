import React from 'react'
import Boot from '../../assets/offer/img.png'

export default function OrdersCont() {
    return (
        <div>
            <section className="content-section single-content">
                <div className="container">
                    <div className="orders-cont">
                        <h3 className="orders-title">الطلبات السابقة</h3>
                        <div className="cart-table">
                            <table className="table-group">
                                <thead>
                                    <tr>
                                        <th colspan="5">المنتج</th>
                                        <th colspan="2">السعر</th>
                                        <th colspan="2">الكمية</th>
                                        <th colspan="2">الحالة</th>
                                        <th colspan="2">التاريخ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="5">
                                            <div className="cart-flex">
                                                <figure className="cart-figure">
                                                    <img className="img-fluid" src={Boot} alt='football' />
                                                </figure>
                                                <div className="cart-content">حذاء رياضي خاص</div>
                                            </div>
                                        </td>
                                        <td colspan="2">245 ريال</td>
                                        <td colspan="2">
                                            <div className="qty-number">5</div>
                                        </td>
                                        <td colspan="2">
                                            <span className="order-status deliverd">تم التوصيل</span>
                                        </td>
                                        <td colspan="2">3 ابريل و 2022</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5">
                                            <div className="cart-flex">
                                                <figure className="cart-figure">
                                                    <img className="img-fluid" src={Boot} alt='football' />
                                                </figure>
                                                <div className="cart-content">حذاء رياضي خاص</div>
                                            </div>
                                        </td>
                                        <td colspan="2">245 ريال</td>
                                        <td colspan="2">
                                            <div className="qty-number">5</div>
                                        </td>
                                        <td colspan="2">
                                            <span className="order-status pending">قيد الانتظار</span>
                                        </td>
                                        <td colspan="2">3 ابريل و 2022</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5">
                                            <div className="cart-flex">
                                                <figure className="cart-figure">
                                                    <img className="img-fluid" src={Boot} alt='football'/>
                                                </figure>
                                                <div className="cart-content">حذاء رياضي خاص</div>
                                            </div>
                                        </td>
                                        <td colspan="2">245 ريال</td>
                                        <td colspan="2">
                                            <div className="qty-number">5</div>
                                        </td>
                                        <td colspan="2">
                                            <span className="order-status deliverd">تم التوصيل</span>
                                        </td>
                                        <td colspan="2">3 ابريل و 2022</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5">
                                            <div className="cart-flex">
                                                <figure className="cart-figure">
                                                    <img className="img-fluid" src={Boot} alt='football' />
                                                </figure>
                                                <div className="cart-content">حذاء رياضي خاص</div>
                                            </div>
                                        </td>
                                        <td colspan="2">245 ريال</td>
                                        <td colspan="2">
                                            <div className="qty-number">5</div>
                                        </td>
                                        <td colspan="2">
                                            <span className="order-status uncompleted">لم يكتمل</span>
                                        </td>
                                        <td colspan="2">3 ابريل و 2022</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="custom-pagention">
                                <a href="#3" className="arrow" ><i className="fa-regular fa-arrow-right"></i ></a>
                                <div className="div">
                                    <a href="#3" className="active">01</a>
                                    <a href="#3">02</a>
                                    <a href="#3">03</a>
                                    <a href="#3">04</a>
                                    <a href="#3">05</a>
                                </div>
                                <a href="#3" className="arrow"
                                ><i className="fa-regular fa-arrow-left"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
