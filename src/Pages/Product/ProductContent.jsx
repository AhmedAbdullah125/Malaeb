import React, { useRef, useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import boot from "../../assets/offer/img.png";
import categ1 from "../../assets/banner/01.png";
import categ2 from "../../assets/category/02.png";
import categ4 from "../../assets/category/04.png";
import Headphones from "../../assets/features-icon/Headphones.png";
import CreditCard from "../../assets/features-icon/CreditCard.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function ProductContent() {
  const NewsSwiperRef = useRef(null);
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  let offers = [
    {
      p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.",
      img: boot,
    },
    {
      p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.",
      img: categ4,
    },
    {
      p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.",
      img: categ1,
    },
    {
      p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.",
      img: categ2,
    },
    {
      p: "ملاعب منصة الرياضيين، تتيح لك حجز الملاعب، الإشتراك في  الأكاديميات، الإنضمام للتمارين.",
      img: categ2,
    },
  ];
  const [count, setCount] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let features = [
    { id: 1, name: 'دعم ٢٤ ساعة', p: "رسائل نصية ومكالمات", img: Headphones ,status:true},
    { id: 2, name: 'وسيلة دفع امنة', p: "دفع امن", img: CreditCard ,status:true},
  ]
  return (
    <section className="content-section single-content productCont">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-imgs-cont">
              <div className="thumbs-product-slider">
                <Swiper
                  onBeforeInit={(swiper) => {
                    NewsSwiperRef.current = swiper;
                  }}
                  modules={[Navigation, Thumbs]}
                  spaceBetween={"15px"}
                  slidesPerView={4}
                  autoHeight={true}
                  //   loop={true}
                  autoplay={true}
                  navigation={false}
                  slideToClickedSlide={true}
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                  direction={
                    window.innerWidth < 767 ? "horizontal" : "vertical"
                  }
                >
                  {offers.map((slid) => (
                    <SwiperSlide key={slid}>
                      <div className="thumpImg" key={slid}>
                        <div className="Thumbs-imgContainer">
                          <LazyLoadImage
                            className="product-img"
                            alt="img"
                            src={slid.img}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="product-slider">
                <Swiper
                  modules={[Pagination, Navigation, Thumbs]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={true}
                  navigation={false}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                // navigation={true}
                >
                  {offers.map((slid) => (
                    <SwiperSlide key={slid}>
                      <div className="productImg" key={slid}>
                        <div className="product-imgContainer">
                          <a href={slid.img} data-fancybox="post" className="fancyPost">
                            <LazyLoadImage
                              className="product-img"
                              alt="img"
                              src={slid.img}
                            />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
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
                          <input type="radio" name="size"  />
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
                        <span
                          className="checkmark"
                          style={{ backgroundColor: "red" }}
                        ></span>
                      </label>
                    </div>
                    <div className="check-width">
                      <label className="check-label">
                        <input type="radio" name="color" />
                        <span
                          className="checkmark"
                          style={{ backgroundColor: "black" }}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-options">
                <button className="item-addToCart">اضف إلى السلة</button>
                <div className="item-qty single-item-qty">
                  <a
                    role="button"
                    className="single-qty-control qty-plus"
                    onClick={() => setCount(count + 1)}
                    href="#l"
                  >
                    <i className="fa-light fa-plus"></i>
                  </a>
                  <a
                    role="button"
                    className="single-qty-control qty-minus"
                    onClick={() =>
                      count > 1 ? setCount(count - 1) : setCount(count)
                    }
                    href="#h"
                  >
                    <i className="fa-light fa-minus"></i>
                  </a>
                  <input
                    type="number"
                    className="single-qty-input qty-input"
                    value={count}
                    data-max="1"
                    data-min="1"
                  />
                </div>
              </div>
              <div className="single-features">
                {
                  features.map((feature) =>
                    <div className="features-box" key={feature.id}>
                      <figure>
                        <img src={feature.img} alt="icon" />
                      </figure>
                      <div className="features-text">
                        <h5 className="features-h">{feature.name}</h5>
                        <span className="features-span">{feature.p}</span>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
