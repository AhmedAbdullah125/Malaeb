import React, { useRef, useState } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import boot from '../../assets/offer/img.png'
import categ1 from '../../assets/category/01.png';
import categ2 from '../../assets/category/02.png';
import categ3 from '../../assets/category/03.png';
import categ4 from '../../assets/category/04.png';
import Headphones from '../../assets/features-icon/Headphones.png'
import CreditCard from '../../assets/features-icon/CreditCard.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function ProductContent() {
    const NewsSwiperRef = useRef(null);
    let offers = [
        { p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.", img: boot },
        { p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.", img: boot },
        { p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.", img: boot },
    ]
    const [count, setCount] = useState(1);

    return (
        <section className="content-section single-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-imgs-cont">
                            <div className="swiper product-thumbs">
                                <div className="swiper-wrapper">
                                    <div className="vertivs">
                                        <Swiper
                                            direction={'vertical'}
                                            slidesPerView={3}
                                            className="mySwiper"
                                            spaceBetween={30}
                                            navigation={false}
                                            pagination={false}
                                            breakpoints={{
                                                640: { slidesPerView: 3 },
                                                768: { lidesPerView: 3 },
                                                991: { slidesPerView: 3 },
                                            }}
                                        >
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="thumb-cont">
                                                        <div className="thumb-img">
                                                            <img className="" src={boot} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="thumb-cont">
                                                        <div className="thumb-img">
                                                            <img className="" src={categ1} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="thumb-cont">
                                                        <div className="thumb-img">
                                                            <img className="" src={categ2} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="thumb-cont">
                                                        <div className="thumb-img">
                                                            <img className="" src={categ3} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-slide">
                                                    <div className="thumb-cont">
                                                        <div className="thumb-img">
                                                            <img className="" src={categ4} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper product-imgs">
                                {/* <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="single-img-container">
                                            <a
                                                data-fancybox="post"
                                                href="images/offer/img.png"
                                                className="single-img"
                                            >
                                                <img className="" src="images/offer/img.png" alt='offer' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="single-img-container">
                                            <a
                                                data-fancybox="post"
                                                href="images/offer/img.png"
                                                className="single-img"
                                            >
                                                <img className="" src="images/offer/img.png" alt='offer' />
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                <Swiper
                                    onBeforeInit={(swiper) => {
                                        NewsSwiperRef.current = swiper;
                                    }}
                                    modules={[Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={true}
                                    pagination={false}
                                    navigation={false}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                        },
                                        991: {
                                            slidesPerView: 1,
                                        },
                                    }}

                                >
                                    {offers.map(offer =>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="single-img-container">
                                                    <a
                                                        data-fancybox="post"
                                                        href="images/offer/img.png"
                                                        className="single-img"
                                                    >
                                                        <img className="" src={boot} alt='offer' />
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-info-container">
                            <h2 className="single-name">حذاء رياضي خاص من ماركة اديداس</h2>
                            <div className="single-prices">
                                <strong className="single-price"> 245 ريال</strong>
                            </div>
                            <div className="desc-cont">
                                <p className="single-pargh">
                                    حذاء رياضي للجري من ديزيرت F18 برباط للرجالحذاء رياضي للجري من
                                    ديزيرت F18 برباط للرجالحذاء رياضي للجري من ديزيرت F18 برباط
                                    للرجالحذاء رياضي للجري من ديزيرت F18 برباط للرجالحذاء رياضي
                                    للجري من ديزيرت F18 برباط للرجالحذاء رياضي للجري من ديزيرت F18
                                    برباط للرجال
                                </p>
                                <div className="radio-group">
                                    <span className="radio-head"> المقاس : </span>
                                    <div className="check-group">
                                        <div className="check-width">
                                            <label className="check-label">
                                                <span className="">
                                                    <input type="radio" name="size" />
                                                    <span className="check-text">xxl</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="check-width">
                                            <label className="check-label">
                                                <span className="">
                                                    <input type="radio" name="size" />
                                                    <span className="check-text">xl</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="check-width">
                                            <label className="check-label">
                                                <span className="">
                                                    <input type="radio" name="size" />
                                                    <span className="check-text">l</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="check-width">
                                            <label className="check-label">
                                                <span className="">
                                                    <input type="radio" name="size" />
                                                    <span className="check-text">m</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="check-width">
                                            <label className="check-label">
                                                <span className="">
                                                    <input type="radio" name="size" />
                                                    <span className="check-text">s</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="check-width">
                                            <label className="check-label">
                                                <span className="">
                                                    <input type="radio" name="size" />
                                                    <span className="check-text">xs</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="color-group">
                                    <span className="radio-head"> اللون :</span>
                                    <div className="check-group">
                                        <div className="check-width">
                                            <label className="check-label">
                                                <input type="radio" name="color" />
                                                <span className="checkmark" style={{ backgroundColor: "red" }}></span>
                                            </label>
                                        </div>
                                        <div className="check-width">
                                            <label className="check-label">
                                                <input type="radio" name="color" />
                                                <span className="checkmark" style={{ backgroundColor: "black" }}></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-options">
                                <button className="item-addToCart">
                                    اضف إلى السلة
                                </button>
                                <div className="item-qty single-item-qty">
                                    <a role="button" className="single-qty-control qty-plus" onClick={() => setCount(count + 1)} href='#l'>
                                        <i className="fa-light fa-plus"></i>
                                    </a>
                                    <a role="button" className="single-qty-control qty-minus" onClick={() => count > 1 ? setCount(count - 1) : setCount(count)} href='#h'>
                                        <i className="fa-light fa-minus" ></i>
                                    </a>
                                    <input type="number" className="single-qty-input qty-input" value={count} data-max="1" data-min="1" />
                                </div>
                            </div>
                            <div className="single-features">
                                <div className="features-box">
                                    <figure>
                                        <img src={Headphones} alt="icon" />
                                    </figure>
                                    <div className="features-text">
                                        <h5 className="features-h">دعم ٢٤ ساعة</h5>
                                        <span className="features-span">رسائل نصية ومكالمات</span>
                                    </div>
                                </div>
                                <div className="features-box">
                                    <figure>
                                        <img src={CreditCard} alt="icon" />
                                    </figure>
                                    <div className="features-text">
                                        <h5 className="features-h">وسيلة دفع امنة</h5>
                                        <span className="features-span">دفع امن</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
