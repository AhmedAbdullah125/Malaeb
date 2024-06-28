
import React from 'react'
import successImg from '../../assets/success.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

export default function SuccessCont() {
    return (
        <div className='SuccessCont'>
            <div className="congats-cont">
                <div className="congats">
                    <div className="img-cont">
                        <LazyLoadImage src={successImg} alt='Success'></LazyLoadImage>
                    </div>
                    <div className="congats-text">
                        <p className='congats-p'>مبروووك تم الطلب بنجاح</p>
                        <p className='order-number-p'>رقم الطلب الخاص بك هو <span>4255</span> يمكنك الاطلاع علية في اي وقت</p>
                        <Link to={'/orders/01'} className='congats-btn submit-btn'>طلباتي</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
