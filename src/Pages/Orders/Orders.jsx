import React from 'react'
import Header from './../Home/Header';
import Footer from './../Home/Footer';
import OrdersCont from './OrdersCont';

export default function Orders() {
    return (
        <div className='orders'>
            <Header></Header>
            <OrdersCont></OrdersCont>
            <Footer></Footer>
        </div>
    )
}
