import React from 'react'
import Boot from '../../assets/offer/img.png'
import product2 from '../../assets/product/01.png'
import product3 from '../../assets/product/02.png'
import product4 from '../../assets/product/02.png'
import { Link, NavLink } from 'react-router-dom'

export default function OrdersCont() {
    let orders = [
        { id: 1, img: Boot, name: "حذاء رياضي خاص", price: 245, quantity: 5, status: "delevered", date: "3 ابريل و 2022" },
        { id: 2, img: product2, name: "حذاء رياضي خاص", price: 245, quantity: 5, status: "pending", date: "3 ابريل و 2022" },
        { id: 2, img: product3, name: "حذاء رياضي خاص", price: 245, quantity: 5, status: "delevered", date: "3 ابريل و 2022" },
        { id: 4, img: product4, name: "حذاء رياضي خاص", price: 245, quantity: 5, status: "failed", date: "3 ابريل و 2022" },

    ]
    return (
        <div className='order-cont'>
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
                                        <th colspan="2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order) =>
                                            <tr key={order.id}>
                                                <td colspan="5">
                                                    <div className="cart-flex">
                                                        <figure className="cart-figure">
                                                            <img className="img-fluid" src={order.img} alt='football' />
                                                        </figure>
                                                        <div className="cart-content">{order.name}</div>
                                                    </div>
                                                </td>
                                                <td colspan="2">{order.price} ريال</td>
                                                <td colspan="2">
                                                    <div className="qty-number">{order.quantity}</div>
                                                </td>
                                                <td colspan="2">
                                                    <span className={order.status === "delevered" ? "order-status deliverd" : order.status === "pending" ? "order-status pending" : order.status === "failed" ? "order-status uncompleted" : ""}>{order.status = "delevered" ? "تم التوصيل" : order.status === "pending" ? "قيد الانتظار" : order.status === "failed" ? "لم يكتمل" : ""}</span>
                                                </td>
                                                <td colspan="2">{order.date}</td>
                                                <td colspan="2">
                                                    <Link to ="/details"  className="nav-link add-select-address" type="button" >
                                                        
                                                        تفاصيل الطلب
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                            <div className="custom-pagention">
                                <a href="#3" className="arrow" ><i className="fa-regular fa-arrow-right"></i ></a>
                                <div className="div">
                                    <NavLink to="01">01</NavLink>
                                    <NavLink to="02">02</NavLink>
                                    <NavLink to="03">03</NavLink>
                                    <NavLink to="04">04</NavLink>
                                    <NavLink to="05">05</NavLink>
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
