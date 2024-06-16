import React from 'react'

export default function FilterCont() {
    return (
        <div className="filter-cont">
            <span className="filters-mobile-btn">
                <i className="fa-solid fa-filter"></i>
            </span>
            <div className="filter-panel">
                <div className="filter-cat">
                    <h2 className="acc-title">الاقسام</h2>
                    <div className="form-group">
                        <div className="check-group">
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="cat" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">الكل</span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="cat" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">التيشرتات</span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="cat" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">ادوات رياضية</span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="cat" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">اطقم رياضية</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-cat">
                    <h2 className="acc-title">ماركة</h2>
                    <div className="form-group">
                        <div className="check-group">
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="brand" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">الكل</span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="brand" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">بوما</span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="brand" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">كارفا</span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="brand" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">نايك</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-cat">
                    <h2 className="acc-title">ترتيب علي حسب</h2>
                    <div className="form-group">
                        <div className="check-group">
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="sort" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">الكل</span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="sort" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">الاقل سعرا</span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="sort" />
                                    <span className="checkmark"></span>
                                    <span className="span-text">الاعلي سعر</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-cat">
                    <h2 className="acc-title">السعر</h2>
                    <div className="filter-input">
                        <input
                            type="text"
                            className="item-input"
                            placeholder="الاقل سعر"
                        />
                        <input
                            type="text"
                            className="item-input"
                            placeholder="الاعلي سعر"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
