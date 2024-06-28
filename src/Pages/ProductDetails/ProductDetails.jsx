import React from 'react'
import Header from './../Home/Header';
import ProdDetails from './ProdDetails';
import Related from './../Product/Related';
import Footer from './../Home/Footer';

export default function ProductDetails() {
    return (
        <div className='product-details'>
            <Header></Header>
            <section className="breadcrumb-sec">
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-li">
                            <a href="/" className="breadcrumb-a"> الرئيسية /</a>
                        </li>
                        <li className="breadcrumb-li">
                            <a href="/store" className="breadcrumb-a"> المتجر /</a>
                        </li>
                        <li className="breadcrumb-li">
                            <span> الاحذية </span>
                        </li>
                    </ul>
                </div>
            </section>

            <ProdDetails></ProdDetails>
            <Related></Related>
            <Footer></Footer>
        </div>
    )
}
