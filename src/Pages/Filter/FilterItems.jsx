import React from 'react'
import product1 from '../../assets/product/01.png'
import product2 from '../../assets/product/02.png'
import product3 from '../../assets/product/03.png'
import { Link } from 'react-router-dom';

export default function FilterItems() {
    let products = [
        { id: 1, img: product1, discount: 40, name: "حذاء رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 2, img: product2, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 240, newPrice: 210 },
        { id: 3, img: product3, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 340, newPrice: 310 },
        { id: 4, img: product2, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 7, img: product3, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 5, img: product1, discount: 40, name: "حذاء رياضى اصلى ", oldPrice: 140, newPrice: 110 },
        { id: 6, img: product2, discount: 40, name: "قميص رياضى اصلى ", oldPrice: 140, newPrice: 110 },
    ]
    return (
        <div class="items-filter">
            <div class="items-header">
                <div class="items-flex">
                    <h3 class="items-title">التصفيات المطبقة</h3>
                    <div class="item-result">
                        <span>اجهزة الكترونية</span>
                        <button><i class="fa-regular fa-xmark"></i></button>
                    </div>
                </div>
                <div class="result-number">
                    <span>Results found.</span>
                    <span class="result-num">65,867</span>
                </div>
            </div>
            <div class="items-grid">
                {
                    products.map(product =>
                        <div class="item">
                            <div class="item-img-container">
                                <Link to='/product' class="item-img">
                                    <img class="img-fluid" src={product.img} alt='Product' />
                                </Link>
                            </div>
                            <h5 class="item-name-container">
                                <Link to='/product' class="item-name">
                                    {product.name}
                                </Link>
                            </h5>
                            <div class="prices">
                                <del class="old-price"> {product.oldPrice} ر.س </del>
                                <strong class="price"> {product.newPrice} ر.س </strong>
                            </div>
                            <span class="sale">{`-${product.discount}%`} </span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
