import React from 'react'

export default function FilterCont() {
    return (
        <div class="filter-cont">
            <span class="filters-mobile-btn">
                <i class="fa-solid fa-filter"></i>
            </span>
            <div class="filter-panel">
                <div class="filter-cat">
                    <h2 class="acc-title">الاقسام</h2>
                    <div class="form-group">
                        <div class="check-group">
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="cat" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">الكل</span>
                                </label>
                            </div>
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="cat" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">التيشرتات</span>
                                </label>
                            </div>
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="cat" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">ادوات رياضية</span>
                                </label>
                            </div>
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="cat" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">اطقم رياضية</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-cat">
                    <h2 class="acc-title">ماركة</h2>
                    <div class="form-group">
                        <div class="check-group">
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="brand" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">الكل</span>
                                </label>
                            </div>
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="brand" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">بوما</span>
                                </label>
                            </div>
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="brand" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">كارفا</span>
                                </label>
                            </div>
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="brand" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">نايك</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-cat">
                    <h2 class="acc-title">ترتيب علي حسب</h2>
                    <div class="form-group">
                        <div class="check-group">
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="sort" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">الكل</span>
                                </label>
                            </div>
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="sort" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">الاقل سعرا</span>
                                </label>
                            </div>
                            <div class="check-width">
                                <label class="check-label">
                                    <input type="radio" name="sort" />
                                    <span class="checkmark"></span>
                                    <span class="span-text">الاعلي سعر</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-cat">
                    <h2 class="acc-title">السعر</h2>
                    <div class="filter-input">
                        <input
                            type="text"
                            class="item-input"
                            placeholder="الاقل سعر"
                        />
                        <input
                            type="text"
                            class="item-input"
                            placeholder="الاعلي سعر"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
