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
        <section class="content-section single-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="product-imgs-cont">
                            <div class="swiper product-thumbs">
                                <div class="swiper-wrapper">
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
                                                <div class="swiper-slide">
                                                    <div class="thumb-cont">
                                                        <div class="thumb-img">
                                                            <img class="" src={boot} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="swiper-slide">
                                                    <div class="thumb-cont">
                                                        <div class="thumb-img">
                                                            <img class="" src={categ1} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="swiper-slide">
                                                    <div class="thumb-cont">
                                                        <div class="thumb-img">
                                                            <img class="" src={categ2} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="swiper-slide">
                                                    <div class="thumb-cont">
                                                        <div class="thumb-img">
                                                            <img class="" src={categ3} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div class="swiper-slide">
                                                    <div class="thumb-cont">
                                                        <div class="thumb-img">
                                                            <img class="" src={categ4} alt='offer' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>

                            </div>
                            <div class="swiper product-imgs">
                                {/* <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="single-img-container">
                                            <a
                                                data-fancybox="post"
                                                href="images/offer/img.png"
                                                class="single-img"
                                            >
                                                <img class="" src="images/offer/img.png" alt='offer' />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="single-img-container">
                                            <a
                                                data-fancybox="post"
                                                href="images/offer/img.png"
                                                class="single-img"
                                            >
                                                <img class="" src="images/offer/img.png" alt='offer' />
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
                                            <div class="swiper-slide">
                                                <div class="single-img-container">
                                                    <a
                                                        data-fancybox="post"
                                                        href="images/offer/img.png"
                                                        class="single-img"
                                                    >
                                                        <img class="" src={boot} alt='offer' />
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="single-info-container">
                            <h2 class="single-name">حذاء رياضي خاص من ماركة اديداس</h2>
                            <div class="single-prices">
                                <strong class="single-price"> 245 ريال</strong>
                            </div>
                            <div class="desc-cont">
                                <p class="single-pargh">
                                    حذاء رياضي للجري من ديزيرت F18 برباط للرجالحذاء رياضي للجري من
                                    ديزيرت F18 برباط للرجالحذاء رياضي للجري من ديزيرت F18 برباط
                                    للرجالحذاء رياضي للجري من ديزيرت F18 برباط للرجالحذاء رياضي
                                    للجري من ديزيرت F18 برباط للرجالحذاء رياضي للجري من ديزيرت F18
                                    برباط للرجال
                                </p>
                                <div class="radio-group">
                                    <span class="radio-head"> المقاس : </span>
                                    <div class="check-group">
                                        <div class="check-width">
                                            <label class="check-label">
                                                <span class="">
                                                    <input type="radio" name="size" />
                                                    <span class="check-text">xxl</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="check-width">
                                            <label class="check-label">
                                                <span class="">
                                                    <input type="radio" name="size" />
                                                    <span class="check-text">xl</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="check-width">
                                            <label class="check-label">
                                                <span class="">
                                                    <input type="radio" name="size" />
                                                    <span class="check-text">l</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="check-width">
                                            <label class="check-label">
                                                <span class="">
                                                    <input type="radio" name="size" />
                                                    <span class="check-text">m</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="check-width">
                                            <label class="check-label">
                                                <span class="">
                                                    <input type="radio" name="size" />
                                                    <span class="check-text">s</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="check-width">
                                            <label class="check-label">
                                                <span class="">
                                                    <input type="radio" name="size" />
                                                    <span class="check-text">xs</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="color-group">
                                    <span class="radio-head"> اللون :</span>
                                    <div class="check-group">
                                        <div class="check-width">
                                            <label class="check-label">
                                                <input type="radio" name="color" />
                                                <span class="checkmark" style={{ backgroundColor: "red" }}></span>
                                            </label>
                                        </div>
                                        <div class="check-width">
                                            <label class="check-label">
                                                <input type="radio" name="color" />
                                                <span class="checkmark" style={{ backgroundColor: "black" }}></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-options">
                                <button class="item-addToCart">
                                    اضف إلى السلة
                                </button>
                                <div class="item-qty single-item-qty">
                                    <a role="button" class="single-qty-control qty-plus" onClick={() => setCount(count + 1)}>
                                        <i class="fa-light fa-plus"></i>
                                    </a>
                                    <a role="button" class="single-qty-control qty-minus" onClick={() => count > 1 ? setCount(count - 1) : setCount(count)}>
                                        <i class="fa-light fa-minus" ></i>
                                    </a>
                                    <input type="number" class="single-qty-input qty-input" value={count} data-max="1" data-min="1" />
                                </div>
                            </div>
                            <div class="single-features">
                                <div class="features-box">
                                    <figure>
                                        <img src={Headphones} alt="icon" />
                                    </figure>
                                    <div class="features-text">
                                        <h5 class="features-h">دعم ٢٤ ساعة</h5>
                                        <span class="features-span">رسائل نصية ومكالمات</span>
                                    </div>
                                </div>
                                <div class="features-box">
                                    <figure>
                                        <img src={CreditCard} alt="icon" />
                                    </figure>
                                    <div class="features-text">
                                        <h5 class="features-h">وسيلة دفع امنة</h5>
                                        <span class="features-span">دفع امن</span>
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
