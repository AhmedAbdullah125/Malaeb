import React from 'react'
import img1 from '../../assets//banner/02.png'
import img2 from '../../assets/product/02.png'

export default function Explore() {
    return (
        <div class="banner-section">
            <div class="container">
                <div class="banner-container">
                    <div class="banner-item first">
                        <div class="small-banner-img">
                            <div class="price-round">63 ريال</div>
                            <figure>
                                <img class="img-fluid" src={img2} alt="product" />
                            </figure>
                        </div>
                        <div class="small-banner-content dark">
                            <div class="hint">اصدار حديث</div>
                            <h4 class="small-banner-head">حذاء رياضي</h4>
                            <p class="small-banner-pargh">طقم رياضي خاص بكرة القدم</p>
                            <a href="#d" class="banner-ancor">تصفح الان</a>
                        </div>
                    </div>
                    <div class="banner-item second">
                        <div class="small-banner-img">
                            <figure>
                                <img class="img-fluid" src={img1} alt="product" />
                            </figure>
                        </div>
                        <div class="small-banner-content">
                            <h3>اصدارات جديدة الحق بسرعة</h3>
                            <p class="small-banner-pargh">طقم رياضي خاص بكرة القدم</p>
                            <a href="#d" class="banner-ancor">اشتري الان</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
